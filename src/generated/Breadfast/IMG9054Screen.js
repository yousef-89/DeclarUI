import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function IMG9054Screen() {
  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoSymbol}>ℰ</Text>
          <Text style={styles.logoText}>Pay</Text>
          <Text style={styles.trademark}>®</Text>
        </View>
        <View style={styles.chatButton}>
          <View style={styles.chatBubble}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>
      </View>

      {/* Wallet Balance Section */}
      <View style={styles.walletSection}>
        <View>
          <Text style={styles.walletLabel}>Wallet balance</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.currency}>EGP</Text>
            <Text style={styles.balanceAmount}>0</Text>
            <Text style={styles.balanceDecimals}>.00</Text>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <View style={styles.actionItem}>
            <View style={styles.actionCirclePurple}>
              <Text style={styles.plusIcon}>+</Text>
            </View>
            <Text style={styles.actionText}>Add to{'\n'}balance</Text>
          </View>

          <View style={styles.actionItem}>
            <View style={styles.actionCirclePink}>
              <View style={styles.cardIconBox}>
                <View style={styles.cardIconLine} />
              </View>
            </View>
            <Text style={styles.actionText}>Saved{'\n'}cards</Text>
          </View>
        </View>
      </View>

      {/* Card Banner */}
      <View style={styles.banner}>
        <View style={styles.bannerTopRow}>
          <Text style={styles.bannerLogoSymbol}>ℰ</Text>
          <View style={styles.cardRepresentation}>
            <View style={styles.chip}>
              <View style={styles.chipLineHorizontal} />
              <View style={styles.chipLineVertical} />
            </View>
            <View style={styles.contactlessWaves}>
              <View style={styles.wave1} />
              <View style={styles.wave2} />
              <View style={styles.wave3} />
            </View>
          </View>
        </View>

        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>Save on purchases with{'\n'}the Breadfast Card</Text>
          <Text style={styles.bannerSubtitle}>Get cashback and discounts whenever you{'\n'}shop with the card.</Text>
          
          <View style={styles.getStartedButton}>
            <Text style={styles.getStartedText}>Get started</Text>
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomNav}>
          <View style={styles.navItem}>
            <View style={styles.navIconHome} />
            <Text style={styles.navText}>Home</Text>
          </View>

          <View style={styles.navItem}>
            <View style={styles.navIconCart} />
            <Text style={styles.navTextActive}>Cart</Text>
          </View>

          <View style={[styles.navItem, styles.navItemActive]}>
            <View style={styles.navIconPay} />
            <Text style={styles.navTextActive}>Pay</Text>
          </View>

          <View style={styles.navItem}>
            <View style={styles.navIconMore} />
            <Text style={styles.navText}>More</Text>
          </View>
        </View>

        <View style={styles.searchFab}>
          <View style={styles.searchMagnifier} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoSymbol: {
    fontSize: 32,
    color: '#8B005D',
    fontWeight: 'bold',
    marginRight: 2,
  },
  logoText: {
    fontSize: 28,
    color: '#1A1A1A',
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },
  trademark: {
    fontSize: 10,
    color: '#1A1A1A',
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  chatButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFF0F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatBubble: {
    width: 22,
    height: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#FF2D85',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dot: {
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: '#FF2D85',
    marginHorizontal: 1,
  },
  walletSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },
  walletLabel: {
    fontSize: 15,
    color: '#717171',
    marginBottom: 4,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'flex-baseline',
  },
  currency: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
    marginRight: 4,
    alignSelf: 'center',
  },
  balanceAmount: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#1A1A1A',
    lineHeight: 46,
  },
  balanceDecimals: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1A1A',
    lineHeight: 46,
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  actionItem: {
    alignItems: 'center',
    marginLeft: 16,
  },
  actionCirclePurple: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#9C0A73',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  actionCirclePink: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF0F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  plusIcon: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '300',
  },
  cardIconBox: {
    width: 22,
    height: 16,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#9C0A73',
    justifyContent: 'center',
  },
  cardIconLine: {
    height: 3,
    backgroundColor: '#9C0A73',
    width: '100%',
  },
  actionText: {
    fontSize: 12,
    color: '#1A1A1A',
    textAlign: 'center',
    lineHeight: 14,
  },
  banner: {
    flex: 1,
    backgroundColor: '#4A1535',
    borderRadius: 24,
    padding: 24,
    justifyContent: 'space-between',
    marginBottom: 90,
  },
  bannerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  bannerLogoSymbol: {
    fontSize: 48,
    color: '#FFFFFF',
    fontWeight: 'bold',
    opacity: 0.9,
  },
  cardRepresentation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chip: {
    width: 36,
    height: 28,
    borderRadius: 4,
    backgroundColor: '#D1D1D1',
    borderWidth: 1,
    borderColor: '#A0A0A0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    position: 'relative',
  },
  chipLineHorizontal: {
    position: 'absolute',
    width: '100%',
    height: 1,
    backgroundColor: '#A0A0A0',
  },
  chipLineVertical: {
    position: 'absolute',
    height: '100%',
    width: 1,
    backgroundColor: '#A0A0A0',
  },
  contactlessWaves: {
    width: 16,
    height: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  wave1: {
    width: 4,
    height: 18,
    borderRightWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 10,
  },
  wave2: {
    width: 8,
    height: 13,
    borderRightWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    position: 'absolute',
    right: 3,
    top: 2,
  },
  wave3: {
    width: 12,
    height: 8,
    borderRightWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    position: 'absolute',
    right: 6,
    top: 5,
  },
  bannerContent: {
    alignItems: 'center',
    marginBottom: 10,
  },
  bannerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 28,
  },
  bannerSubtitle: {
    fontSize: 13,
    color: '#E0E0E0',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 18,
  },
  getStartedButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
  },
  getStartedText: {
    color: '#8B005D',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 24,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  bottomNav: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F7F7F7',
    borderRadius: 36,
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 12,
    height: 64,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  navItemActive: {
    backgroundColor: '#EAEAEA',
    borderRadius: 24,
  },
  navIconHome: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: '#888888',
    borderRadius: 4,
    marginBottom: 2,
  },
  navIconCart: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: '#888888',
    borderRadius: 4,
    marginBottom: 2,
  },
  navIconPay: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: '#9C0A73',
    borderRadius: 4,
    marginBottom: 2,
  },
  navIconMore: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: '#888888',
    borderRadius: 4,
    marginBottom: 2,
  },
  navText: {
    fontSize: 11,
    color: '#888888',
  },
  navTextActive: {
    fontSize: 11,
    color: '#1A1A1A',
    fontWeight: '600',
  },
  searchFab: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EAEAEA',
  },
  searchMagnifier: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#555555',
  },
});
