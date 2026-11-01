import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from '../generated-icon';

export default function IMG9057Screen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.backButton}>
          <Icon name="chevron-left" size={20} color="#242424" />
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
              <Icon name="cart" size={20} color="#272727" />
            </View>
            <Text style={styles.cardTitle}>Complete{'\n'}5 orders</Text>
            
            <View style={styles.progressContainer}>
              <View style={styles.progressBarBackground}>
                <View style={[styles.progressBarFill, { width: '0%' }]} />
              </View>
            </View>
            <Text style={styles.cardFooter}>5 orders left</Text>
          </View>

          {/* Card 2 */}
          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <Icon name="receipt" size={20} color="#272727" />
            </View>
            <Text style={styles.cardTitle}>Spend EGP 1,000{'\n'}in purchases</Text>
            
            <View style={styles.progressContainer}>
              <View style={styles.progressBarBackground}>
                <View style={[styles.progressBarFill, { width: '0%' }]} />
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
    paddingHorizontal: 15,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
    color: '#242424',
    marginRight: 32,
    letterSpacing: -0.2,
  },
  banner: {
    height: 167,
    backgroundColor: '#f5d9c4',
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
    paddingHorizontal: 15,
    paddingTop: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#212121',
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: -0.2,
  },
  subtitle: {
    fontSize: 14,
    color: '#3e3e3e',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 14,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#818481',
    padding: 16,
    alignItems: 'center',
    height: 182,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ebebeb',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#323232',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 16,
  },
  progressContainer: {
    width: '100%',
    marginBottom: 12,
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: '#ebebeb',
    borderRadius: 5,
    overflow: 'hidden',
    width: '100%',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#272727',
    borderRadius: 5,
  },
  cardFooter: {
    fontSize: 11,
    color: '#919191',
    textAlign: 'center',
    fontWeight: '400',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  termsText: {
    fontSize: 14,
    color: '#3e3e3e',
  },
  termsLink: {
    color: '#a36a9a',
    fontWeight: '400',
  },
});
