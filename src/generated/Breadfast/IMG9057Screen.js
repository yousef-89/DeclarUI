import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function IMG9057Screen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.backButton}>
          <Text style={styles.backArrow}>‹</Text>
        </View>
        <Text style={styles.headerTitle}>Refer and earn</Text>
      </View>

      {/* Illustration Banner */}
      <View style={styles.banner}>
        <View style={styles.illustrationPlaceholder}>
          <View style={styles.circleAvatar1} />
          <View style={styles.circleAvatar2} />
          <View style={styles.circleAvatar3} />
          <View style={styles.mainFigure} />
        </View>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.title}>Unlock your referral program</Text>
        <Text style={styles.subtitle}>
          Get free credit in your Breadfast wallet when you...
        </Text>

        {/* Cards Row */}
        <View style={styles.cardsRow}>
          {/* Card 1 */}
          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <Text style={styles.iconSymbol}>🛒</Text>
            </View>
            <Text style={styles.cardTitle}>Complete{'\n'}5 orders</Text>
            
            <View style={styles.progressContainer}>
              <View style={styles.progressBarBackground}>
                <View style={[styles.progressBarFill, { width: '8%' }]} />
              </View>
            </View>
            <Text style={styles.cardFooter}>5 orders left</Text>
          </View>

          {/* Card 2 */}
          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <Text style={styles.iconSymbol}>📄</Text>
            </View>
            <Text style={styles.cardTitle}>Spend EGP 1,000{'\n'}in purchases</Text>
            
            <View style={styles.progressContainer}>
              <View style={styles.progressBarBackground}>
                <View style={[styles.progressBarFill, { width: '8%' }]} />
              </View>
            </View>
            <Text style={styles.cardFooter}>EGP 1,000.00 left</Text>
          </View>
        </View>
      </View>

      {/* Footer / Terms */}
      <View style={styles.footerContainer}>
        <Text style={styles.termsText}>
          <Text style={styles.termsLink}>Terms and Conditions</Text> apply.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 24,
    color: '#1C1C1E',
    marginTop: -2,
    fontWeight: '300',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600',
    color: '#111111',
    marginRight: 38,
    letterSpacing: -0.2,
  },
  banner: {
    height: 180,
    backgroundColor: '#FDECE1',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  illustrationPlaceholder: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  circleAvatar1: {
    position: 'absolute',
    top: 18,
    left: '38%',
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#D18BC0',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  circleAvatar2: {
    position: 'absolute',
    top: 18,
    right: '32%',
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#A3D2C2',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  circleAvatar3: {
    position: 'absolute',
    bottom: 12,
    left: '28%',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#8698C4',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  mainFigure: {
    position: 'absolute',
    bottom: 0,
    right: '27%',
    width: 84,
    height: 100,
    backgroundColor: '#8E3870',
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111111',
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: -0.4,
  },
  subtitle: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 12,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E2E6',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 184,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F5F5F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconSymbol: {
    fontSize: 18,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1C1C1E',
    textAlign: 'center',
    lineHeight: 19,
    marginBottom: 12,
  },
  progressContainer: {
    width: '100%',
    marginBottom: 8,
  },
  progressBarBackground: {
    height: 5,
    backgroundColor: '#E5E5EA',
    borderRadius: 2.5,
    overflow: 'hidden',
    width: '100%',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#00A86B',
    borderRadius: 2.5,
  },
  cardFooter: {
    fontSize: 12,
    color: '#8E8E93',
    textAlign: 'center',
    fontWeight: '500',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 28,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  termsText: {
    fontSize: 13,
    color: '#7C7C82',
  },
  termsLink: {
    color: '#8E2860',
    fontWeight: '600',
  },
});
