const fs = require('fs');
const path = require('path');
const { captureComponentScreenshot } = require('./render_runner');

function getOptions(args) {
  const [appName = 'default', iteration = 'baseline', port = '3000', component] = args;
  const parsedPort = Number.parseInt(port, 10);

  if (!appName.trim()) {
    throw new Error('App name must not be empty.');
  }
  if (!Number.isInteger(parsedPort) || parsedPort < 1 || parsedPort > 65535) {
    throw new Error(`Invalid port "${port}". Expected a number between 1 and 65535.`);
  }

  return {
    appName,
    component,
    generatedDir: path.join(__dirname, 'src', 'generated', appName),
    outputDir: path.join(__dirname, 'output', appName, iteration),
    port: parsedPort
  };
}

async function runBatchRender({
  appName = 'default',
  generatedDir = path.join(__dirname, 'src', 'generated', appName),
  outputDir = path.join(__dirname, 'output', appName, 'baseline'),
  component = null,
  port = 3000
} = {}) {
  if (!fs.existsSync(generatedDir)) {
    throw new Error(`Generated component directory does not exist: ${generatedDir}`);
  }

  fs.mkdirSync(outputDir, { recursive: true });

  const files = fs.readdirSync(generatedDir)
    .filter((file) => /\.(js|jsx)$/.test(file))
    .filter((file) => !component || path.basename(file, path.extname(file)) === component)
    .sort((left, right) => left.localeCompare(right));

  if (component && files.length === 0) {
    throw new Error(`Generated component does not exist: ${component}`);
  }

  console.log(`[Batch Renderer] Found ${files.length} components to render...`);

  const results = [];

  for (const file of files) {
    const componentName = path.basename(file, path.extname(file));
    const outputPath = path.join(outputDir, `${componentName}.png`);

    console.log(`[Batch Renderer] Rendering ${componentName}...`);

    let success = false;
    let error = null;

    try {
      success = await captureComponentScreenshot(componentName, outputPath, port, appName);
    } catch (renderError) {
      error = renderError instanceof Error ? renderError.message : String(renderError);
    }

    results.push({
      component: componentName,
      source: path.join(generatedDir, file),
      screenshot: success ? outputPath : null,
      success,
      error: success ? null : error || 'Renderer returned a failure'
    });
  }

  const summary = {
    generatedDirectory: generatedDir,
    outputDirectory: outputDir,
    appName,
    port,
    total: results.length,
    succeeded: results.filter((result) => result.success).length,
    failed: results.filter((result) => !result.success).length,
    results
  };

  const summaryPath = path.join(outputDir, 'summary.json');
  fs.writeFileSync(summaryPath, `${JSON.stringify(summary, null, 2)}\n`);

  console.log('\n========================================');
  console.log(
    `[Batch Render Summary] Total: ${summary.total} | ` +
    `Success: ${summary.succeeded} | Failed: ${summary.failed}`
  );
  console.log(`Outputs saved to: ${outputDir}`);
  console.log(`Summary saved to: ${summaryPath}`);
  console.log('========================================\n');

  return summary;
}

if (require.main === module) {
  try {
    const options = getOptions(process.argv.slice(2));
    runBatchRender(options)
      .then((summary) => {
        process.exitCode = summary.failed > 0 ? 1 : 0;
      })
      .catch((error) => {
        console.error(`[Batch Renderer Error] ${error.message}`);
        process.exitCode = 1;
      });
  } catch (error) {
    console.error(`[Batch Renderer Error] ${error.message}`);
    process.exitCode = 1;
  }
}

module.exports = { runBatchRender };
