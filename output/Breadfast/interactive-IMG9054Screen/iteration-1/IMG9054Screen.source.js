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
              <View style={styles.chipInner} />
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
            <View style={styles.navIconHomeContainer}>
              <View style={styles.homeRoof} />
              <View style={styles.homeBase} />
            </View>
            <Text style={styles.navText}>Home</Text>
          </View>

          <View style={styles.navItem}>
            <View style={styles.navIconCartContainer}>
              <View style={styles.cartBasket} />
              <View style={styles.cartHandle} />
              <View style={styles.cartWheelLeft} />
              <View style={styles.cartWheelRight} />
            </View>
            <Text style={styles.navText}>Cart</Text>
          </View>

          <View style={[styles.navItem, styles.navItemActive]}>
            <View style={styles.navIconPayContainer}>
              <View style={styles.walletBody} />
              <View style={styles.walletClasp} />
            </View>
            <Text style={styles.navTextActive}>Pay</Text>
          </View>

          <View style={styles.navItem}>
            <View style={styles.navIconMoreContainer}>
              <View style={styles.moreLine} />
              <View style={styles.moreLine} />
              <View style={styles.moreLine} />
            </View>
            <Text style={styles.navText}>More</Text>
          </View>
        </View>

        <View style={styles.searchFab}>
          <View style={styles.searchMagnifier}>
            <View style={styles.searchCircle} />
            <View style={styles.searchHandle} />
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
    marginBottom: 24,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoSymbol: {
    fontSize: 32,
    color: '#B80075',
    fontWeight: 'bold',
    marginRight: 2,
    fontFamily: 'serif',
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
    width: 3,
    height: 3,
    borderRadius: 1.5,
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
    alignItems: 'flex-end',
  },
  currency: {
    fontSize: 18,
    fontWeight: '600',
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
    lineHeight: 42,
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  actionItem: {
    alignItems: 'center',
    marginLeft: 16,
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
    fontSize: 28,
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
    alignItems: 'center',
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
    lineHeight: 15,
  },
  banner: {
    flex: 1,
    backgroundColor: '#4A1535',
    borderRadius: 28,
    padding: 24,
    justifyContent: 'space-between',
    marginBottom: 100,
  },
  bannerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  bannerLogoSymbol: {
    fontSize: 52,
    color: '#FFFFFF',
    fontWeight: 'bold',
    opacity: 0.9,
    fontFamily: 'serif',
  },
  cardRepresentation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  chip: {
    width: 42,
    height: 32,
    borderRadius: 6,
    backgroundColor: '#E2E2E2',
    borderWidth: 1,
    borderColor: '#C0C0C0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
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
  chipInner: {
    width: 14,
    height: 10,
    borderWidth: 1,
    borderColor: '#A0A0A0',
    borderRadius: 2,
  },
  contactlessWaves: {
    width: 18,
    height: 24,
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'relative',
  },
  wave1: {
    width: 4,
    height: 24,
    borderRightWidth: 2.5,
    borderColor: '#FFFFFF',
    borderRadius: 12,
  },
  wave2: {
    width: 8,
    height: 16,
    borderRightWidth: 2.5,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    position: 'absolute',
    right: 4,
    top: 4,
  },
  wave3: {
    width: 12,
    height: 8,
    borderRightWidth: 2.5,
    borderColor: '#FFFFFF',
    borderRadius: 8,
    position: 'absolute',
    right: 8,
    top: 8,
  },
  bannerContent: {
    alignItems: 'center',
    marginBottom: 10,
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
    color: '#D8C5D2',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 18,
  },
  getStartedButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 36,
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
    backgroundColor: '#F5F5F7',
    borderRadius: 36,
    paddingVertical: 8,
    paddingHorizontal: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 12,
    height: 68,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  navItemActive: {
    backgroundColor: '#E5E5EA',
    borderRadius: 24,
  },
  navIconHomeContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3,
  },
  homeRoof: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#717171',
    marginBottom: 1,
  },
  homeBase: {
    width: 12,
    height: 10,
    backgroundColor: '#717171',
    borderRadius: 1,
  },
  navIconCartContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 3,
  },
  cartBasket: {
    width: 14,
    height: 10,
    borderWidth: 2,
    borderColor: '#717171',
    borderTopWidth: 0,
    borderRadius: 2,
    marginTop: 6,
  },
  cartHandle: {
    position: 'absolute',
    top: 4,
    left: 4,
    width: 8,
    height: 4,
    borderWidth: 2,
    borderColor: '#717171',
    borderBottomWidth: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  cartWheelLeft: {
    position: 'absolute',
    bottom: 2,
    left: 5,
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: '#717171',
  },
  cartWheelRight: {
    position: 'absolute',
    bottom: 2,
    right: 5,
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: '#717171',
  },
  navIconPayContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 3,
  },
  walletBody: {
    width: 16,
    height: 12,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#9C0A73',
  },
  walletClasp: {
    position: 'absolute',
    top: 8,
    right: 5,
    width: 3,
    height: 2,
    backgroundColor: '#9C0A73',
    borderRadius: 1,
  },
  navIconMoreContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3,
  },
  moreLine: {
    width: 14,
    height: 2,
    backgroundColor: '#717171',
    borderRadius: 1,
    marginVertical: 2,
  },
  navText: {
    fontSize: 11,
    color: '#717171',
  },
  navTextActive: {
    fontSize: 11,
    color: '#1A1A1A',
    fontWeight: '600',
  },
  searchFab: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#F5F5F7',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  searchMagnifier: {
    width: 24,
    height: 24,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#717171',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  searchHandle: {
    position: 'absolute',
    bottom: 1,
    right: 1,
    width: 8,
    height: 2.5,
    backgroundColor: '#717171',
    transform: [{ rotate: '45deg' }],
    borderRadius: 1,
  },
});
