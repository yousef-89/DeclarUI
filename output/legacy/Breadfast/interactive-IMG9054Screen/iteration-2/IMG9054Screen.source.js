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
          <Icon name="chat" size={16} color="#B73D86" />
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
              <Icon name="credit-card" size={20} color="#B73D86" />
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
            <Icon name="home" size={20} color="#757575" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Icon name="cart" size={20} color="#757575" />
            <Text style={styles.navText}>Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
            <Icon name="wallet" size={18} color="#FFFFFF" />
            <Text style={styles.navTextActive}>Pay</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.navItem}>
            <Icon name="menu" size={20} color="#757575" />
            <Text style={styles.navText}>More</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.searchFab}>
          <Icon name="search" size={20} color="#757575" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 26,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    height: 32,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoSymbol: {
    fontSize: 26,
    color: '#9B1D7E',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginRight: 2,
  },
  logoText: {
    fontSize: 24,
    color: '#212121',
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },
  trademark: {
    fontSize: 8,
    color: '#212121',
    alignSelf: 'flex-start',
    marginTop: 4,
    marginLeft: 1,
  },
  chatButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FCE4EC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  walletSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 26,
  },
  walletLabel: {
    fontSize: 12,
    color: '#7C7C7C',
    marginBottom: 4,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  currency: {
    fontSize: 15,
    fontWeight: '700',
    color: '#212121',
    marginRight: 4,
  },
  balanceAmount: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#212121',
    letterSpacing: -0.5,
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  actionItem: {
    alignItems: 'center',
    marginLeft: 16,
  },
  actionCirclePurple: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#9B1D7E',
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
    color: '#212121',
    textAlign: 'center',
    lineHeight: 14,
    fontWeight: '500',
  },
  banner: {
    height: 582,
    backgroundColor: '#5A2551',
    borderRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 32,
    justifyContent: 'space-between',
    backgroundImage: 'linear-gradient(180deg, #7A1054 0%, #3D0D2B 100%)',
  },
  bannerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  bannerLogoSymbol: {
    fontSize: 86,
    color: '#FFFFFF',
    fontStyle: 'italic',
    fontWeight: 'bold',
    opacity: 0.25,
    marginTop: -16,
    marginLeft: -8,
  },
  cardRepresentation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  chip: {
    width: 44,
    height: 34,
    borderRadius: 6,
    backgroundColor: '#DCDCDC',
    borderWidth: 1,
    borderColor: '#C0C0C0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
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
    opacity: 0.9,
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
    opacity: 0.9,
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
    opacity: 0.9,
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
    paddingHorizontal: 12,
  },
  bannerSubtitle: {
    fontSize: 12.5,
    color: '#E0CCD7',
    textAlign: 'center',
    marginBottom: 28,
    lineHeight: 18,
    paddingHorizontal: 20,
  },
  getStartedButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 24,
  },
  getStartedText: {
    color: '#5A2551',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 20,
    left: 24,
    right: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomNav: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 36,
    paddingVertical: 6,
    paddingHorizontal: 6,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 10,
    height: 64,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  navItemActive: {
    backgroundColor: '#9B1D7E',
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  navText: {
    fontSize: 10,
    color: '#757575',
    marginTop: 2,
    fontWeight: '500',
  },
  navTextActive: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '600',
    marginLeft: 6,
  },
  searchFab: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EFEFEF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
});
