const fs = require('fs');
const parser = require('@babel/parser');

const filePath = process.argv[2];

if (!filePath) {
  console.error('Usage: node check_syntax.js <file-path>');
  process.exitCode = 1;
} else {
  try {
    const source = fs.readFileSync(filePath, 'utf8');
    parser.parse(source, {
      sourceType: 'module',
      plugins: ['jsx'],
    });
    console.log('SYNTAX_VALID');
  } catch (error) {
    console.log(`SYNTAX_INVALID: ${error.message}`);
    process.exitCode = 1;
  }
}
