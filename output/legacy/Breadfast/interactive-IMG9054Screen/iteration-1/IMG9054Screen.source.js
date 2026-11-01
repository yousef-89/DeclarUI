import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../generated-icon';

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
        <TouchableOpacity style={styles.chatButton}>
          <Icon name="chat" size={18} color="#FF2D85" />
        </TouchableOpacity>
      </View>

      {/* Wallet Balance Section */}
      <View style={styles.walletSection}>
        <View>
          <Text style={styles.walletLabel}>Wallet balance</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.currency}>EGP</Text>
            <Text style={styles.balanceAmount}>0.00</Text>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionItem}>
            <View style={styles.actionCirclePurple}>
              <Icon name="plus" size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.actionText}>Add to{'\n'}balance</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <View style={styles.actionCirclePink}>
              <Icon name="credit-card" size={22} color="#9C0A73" />
            </View>
            <Text style={styles.actionText}>Saved{'\n'}cards</Text>
          </TouchableOpacity>
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
              <View style={styles.chipInnerBox} />
            </View>
            <View style={styles.contactlessWaves}>
              <View style={styles.wave1} />
              <View style={styles.wave2} />
              <View style={styles.wave3} />
            </View>
          </View>
        </View>

        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>Save on purchases with the Breadfast Card</Text>
          <Text style={styles.bannerSubtitle}>Get cashback and discounts whenever you shop with the card.</Text>
          
          <TouchableOpacity style={styles.getStartedButton}>
            <Text style={styles.getStartedText}>Get started</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="home" size={22} color="#666666" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Icon name="cart" size={22} color="#666666" />
            <Text style={styles.navText}>Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
            <Icon name="wallet" size={20} color="#FFFFFF" />
            <Text style={styles.navTextActive}>Pay</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Icon name="menu" size={22} color="#666666" />
            <Text style={styles.navText}>More</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.searchFab}>
          <Icon name="search" size={22} color="#666666" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 26,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    height: 32,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoSymbol: {
    fontSize: 28,
    color: '#9C0A73',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginRight: 2,
  },
  logoText: {
    fontSize: 26,
    color: '#1A1A1A',
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },
  trademark: {
    fontSize: 9,
    color: '#1A1A1A',
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  chatButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFF0F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  walletSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  walletLabel: {
    fontSize: 13,
    color: '#717171',
    marginBottom: 4,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  currency: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
    marginRight: 4,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1A1A',
    letterSpacing: -0.5,
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  actionItem: {
    alignItems: 'center',
    marginLeft: 12,
  },
  actionCirclePurple: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#9C0A73',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  actionCirclePink: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FCE4EC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  actionText: {
    fontSize: 11,
    color: '#1A1A1A',
    textAlign: 'center',
    lineHeight: 14,
    fontWeight: '500',
  },
  banner: {
    height: 582,
    backgroundColor: '#5A2551',
    borderRadius: 28,
    padding: 24,
    justifyContent: 'space-between',
    backgroundImage: 'linear-gradient(135deg, #7A1054 0%, #3D0D2B 100%)',
  },
  bannerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  bannerLogoSymbol: {
    fontSize: 72,
    color: '#FFFFFF',
    fontStyle: 'italic',
    fontWeight: 'bold',
    opacity: 0.85,
    marginTop: -12,
  },
  cardRepresentation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  chip: {
    width: 44,
    height: 34,
    borderRadius: 5,
    backgroundColor: '#DCDCDC',
    borderWidth: 1,
    borderColor: '#C0C0C0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
    position: 'relative',
    overflow: 'hidden',
  },
  chipLineHorizontal: {
    position: 'absolute',
    width: '100%',
    height: 1.5,
    backgroundColor: '#A0A0A0',
  },
  chipLineVertical: {
    position: 'absolute',
    height: '100%',
    width: 1.5,
    backgroundColor: '#A0A0A0',
  },
  chipInnerBox: {
    width: 18,
    height: 14,
    borderWidth: 1,
    borderColor: '#A0A0A0',
    backgroundColor: '#E8E8E8',
    borderRadius: 2,
  },
  contactlessWaves: {
    width: 16,
    height: 22,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'relative',
  },
  wave1: {
    width: 4,
    height: 22,
    borderRightWidth: 2,
    borderColor: '#FFFFFF',
    borderTopRightRadius: 11,
    borderBottomRightRadius: 11,
  },
  wave2: {
    width: 8,
    height: 14,
    borderRightWidth: 2,
    borderColor: '#FFFFFF',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    position: 'absolute',
    right: 4,
    top: 4,
  },
  wave3: {
    width: 12,
    height: 6,
    borderRightWidth: 2,
    borderColor: '#FFFFFF',
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    position: 'absolute',
    right: 8,
    top: 8,
  },
  bannerContent: {
    alignItems: 'center',
    marginBottom: 20,
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
    paddingHorizontal: 10,
  },
  getStartedButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 24,
  },
  getStartedText: {
    color: '#7A1054',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    right: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomNav: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5F5F7',
    borderRadius: 36,
    paddingVertical: 6,
    paddingHorizontal: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 8,
    height: 64,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  navItemActive: {
    backgroundColor: '#9C0A73',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  navText: {
    fontSize: 10,
    color: '#666666',
    marginTop: 2,
  },
  navTextActive: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '600',
    marginLeft: 4,
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
});
