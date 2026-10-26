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
                <View style={[styles.progressBarFill, { width: '5%' }]} />
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
                <View style={[styles.progressBarFill, { width: '5%' }]} />
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
    paddingVertical: 14,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 26,
    color: '#1C1C1E',
    marginTop: -2,
    fontWeight: '300',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginRight: 40, // Offset back button width to center accurately
  },
  banner: {
    height: 220,
    backgroundColor: '#FCEBDD',
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
    top: 25,
    left: '38%',
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#D18BC0',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  circleAvatar2: {
    position: 'absolute',
    top: 25,
    right: '32%',
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#A3D2C2',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  circleAvatar3: {
    position: 'absolute',
    bottom: 30,
    left: '28%',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#8698C4',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  mainFigure: {
    position: 'absolute',
    bottom: 0,
    right: '25%',
    width: 90,
    height: 110,
    backgroundColor: '#8E3870',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1C1C1E',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B6B70',
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
    borderColor: '#E5E5EA',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 190,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconSymbol: {
    fontSize: 18,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1C1C1E',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 16,
  },
  progressContainer: {
    width: '100%',
    marginBottom: 8,
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: '#E5E5EA',
    borderRadius: 3,
    overflow: 'hidden',
    width: '100%',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#00A86B',
    borderRadius: 3,
  },
  cardFooter: {
    fontSize: 12,
    color: '#8E8E93',
    textAlign: 'center',
    fontWeight: '500',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  termsText: {
    fontSize: 13,
    color: '#8E8E93',
  },
  termsLink: {
    color: '#8E2860',
    fontWeight: '600',
  },
});
