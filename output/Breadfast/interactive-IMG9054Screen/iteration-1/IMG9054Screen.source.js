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
            <View style={styles.homeHouseRoof} />
            <View style={styles.homeHouseBase} />
            <Text style={styles.navText}>Home</Text>
          </View>

          <View style={styles.navItem}>
            <View style={styles.cartContainer}>
              <View style={styles.cartWheel1} />
              <View style={styles.cartWheel2} />
              <View style={styles.cartBody} />
            </View>
            <Text style={styles.navText}>Cart</Text>
          </View>

          <View style={[styles.navItem, styles.navItemActive]}>
            <View style={styles.payWallet}>
              <View style={styles.payWalletClasp} />
            </View>
            <Text style={styles.navTextActive}>Pay</Text>
          </View>

          <View style={styles.navItem}>
            <View style={styles.moreLine} />
            <View style={styles.moreLine} />
            <View style={styles.moreLine} />
            <Text style={styles.navText}>More</Text>
          </View>
        </View>

        <View style={styles.searchFab}>
          <View style={styles.searchMagnifier}>
            <View style={styles.magnifierCircle} />
            <View style={styles.magnifierHandle} />
          </View>
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
    marginBottom: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoSymbol: {
    fontSize: 32,
    color: '#9C0A73',
    fontStyle: 'italic',
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
    backgroundColor: '#FFF5F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatBubble: {
    width: 20,
    height: 14,
    borderRadius: 3,
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
    marginBottom: 20,
  },
  walletLabel: {
    fontSize: 14,
    color: '#717171',
    marginBottom: 4,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  currency: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    marginRight: 4,
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#1A1A1A',
    lineHeight: 48,
  },
  balanceDecimals: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1A1A',
    lineHeight: 44,
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  actionItem: {
    alignItems: 'center',
    marginLeft: 12,
  },
  actionCirclePurple: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#9C0A73',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  actionCirclePink: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#FFF0F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  plusIcon: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: '300',
    marginTop: -2,
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
    fontSize: 11,
    color: '#1A1A1A',
    textAlign: 'center',
    lineHeight: 14,
    fontWeight: '500',
  },
  banner: {
    height: 440,
    backgroundColor: '#4A1535',
    borderRadius: 28,
    padding: 24,
    justifyContent: 'space-between',
    marginBottom: 90,
    backgroundImage: 'linear-gradient(135deg, #7A1054 0%, #3D0D2B 100%)',
  },
  bannerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  bannerLogoSymbol: {
    fontSize: 56,
    color: '#FFFFFF',
    fontStyle: 'italic',
    fontWeight: 'bold',
    opacity: 0.9,
    marginTop: -8,
  },
  cardRepresentation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  chip: {
    width: 44,
    height: 34,
    borderRadius: 6,
    backgroundColor: '#D1D1D1',
    borderWidth: 1,
    borderColor: '#B0B0B0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    position: 'relative',
    overflow: 'hidden',
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
    width: 14,
    height: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'relative',
  },
  wave1: {
    width: 4,
    height: 20,
    borderRightWidth: 2.5,
    borderColor: '#FFFFFF',
    borderRadius: 10,
  },
  wave2: {
    width: 8,
    height: 14,
    borderRightWidth: 2.5,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    position: 'absolute',
    right: 3,
    top: 3,
  },
  wave3: {
    width: 12,
    height: 8,
    borderRightWidth: 2.5,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    position: 'absolute',
    right: 6,
    top: 6,
  },
  bannerContent: {
    alignItems: 'center',
    marginBottom: 12,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 30,
  },
  bannerSubtitle: {
    fontSize: 13,
    color: '#E0CCD7',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 18,
  },
  getStartedButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 30,
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
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  bottomNav: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5F5F7',
    borderRadius: 36,
    paddingVertical: 6,
    paddingHorizontal: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 12,
    height: 64,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 10,
    width: 64,
  },
  navItemActive: {
    backgroundColor: '#E5D6E1',
    borderRadius: 24,
  },
  homeHouseRoof: {
    width: 0,
    height: 0,
    borderLeftWidth: 9,
    borderRightWidth: 9,
    borderBottomWidth: 7,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#666666',
    marginBottom: 1,
  },
  homeHouseBase: {
    width: 12,
    height: 9,
    backgroundColor: '#666666',
    marginBottom: 3,
  },
  cartContainer: {
    width: 20,
    height: 16,
    position: 'relative',
    marginBottom: 4,
  },
  cartBody: {
    width: 16,
    height: 11,
    borderWidth: 2,
    borderColor: '#666666',
    borderTopWidth: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  cartWheel1: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: '#666666',
    position: 'absolute',
    bottom: 0,
    left: 3,
  },
  cartWheel2: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: '#666666',
    position: 'absolute',
    bottom: 0,
    right: 3,
  },
  payWallet: {
    width: 18,
    height: 13,
    backgroundColor: '#9C0A73',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 3,
    paddingRight: 2,
  },
  payWalletClasp: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#FFFFFF',
  },
  moreLine: {
    width: 14,
    height: 2,
    backgroundColor: '#666666',
    borderRadius: 1,
    marginVertical: 1.5,
  },
  navText: {
    fontSize: 10,
    color: '#666666',
    marginTop: 1,
  },
  navTextActive: {
    fontSize: 10,
    color: '#1A1A1A',
    fontWeight: '600',
    marginTop: 1,
  },
  searchFab: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F5F5F7',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  searchMagnifier: {
    width: 20,
    height: 20,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  magnifierCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#555555',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  magnifierHandle: {
    width: 7,
    height: 2,
    backgroundColor: '#555555',
    position: 'absolute',
    bottom: 0,
    right: 0,
    transform: [{ rotate: '45deg' }],
  },
});
