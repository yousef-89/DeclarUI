import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from '../generated-icon';

export default function IMG9054Screen() {
  const [activeTab, setActiveTab] = useState('Pay');

  return (
    <View style={styles.container}>
      {/* Top Header / Logo */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Icon name="tag" size={24} color="#4c3a4c" />
          <Text style={styles.logoText}>Pay</Text>
        </View>
        <TouchableOpacity style={styles.chatButton} activeOpacity={0.8}>
          <Icon name="chat" size={18} color="#b73d86" />
        </TouchableOpacity>
      </View>

      {/* Wallet Balance Section */}
      <View style={styles.balanceSection}>
        <View>
          <Text style={styles.walletLabel}>Wallet balance</Text>
          <Text style={styles.walletAmount}>
            EGP <Text style={{ fontWeight: '900' }}>0</Text>.00
          </Text>
        </View>

        <View style={styles.actionButtonsContainer}>
          <View style={styles.actionButtonWrapper}>
            <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
              <Icon name="plus" size={20} color="#ffffff" />
            </TouchableOpacity>
            <Text style={styles.actionText}>Add to{'\n'}balance</Text>
          </View>

          <View style={styles.actionButtonWrapper}>
            <TouchableOpacity style={styles.cardButton} activeOpacity={0.8}>
              <Icon name="credit-card" size={18} color="#b2307d" />
            </TouchableOpacity>
            <Text style={styles.actionText}>Saved{'\n'}cards</Text>
          </View>
        </View>
      </View>

      {/* Breadfast Card Promo Container */}
      <View style={styles.promoCard}>
        {/* Background gradient approximation */}
        <View style={styles.promoGradientBg} />

        <View style={styles.promoTopRow}>
          <View style={styles.promoLogoWatermark}>
            <Icon name="tag" size={28} color="rgba(255, 255, 255, 0.3)" />
          </View>
        </View>

        <View style={styles.promoMiddleContent}>
          <View style={styles.cardChipContainer}>
            <View style={styles.cardChip}>
              <View style={styles.chipLineHorizontal} />
              <View style={styles.chipLineVertical} />
            </View>
            <View style={styles.contactlessContainer}>
              <View style={[styles.contactlessArc, { width: 6, height: 12, borderRadius: 6, borderWidth: 1.5, borderColor: 'rgba(255, 255, 255, 0.4)', borderLeftColor: 'transparent', borderTopColor: 'transparent', borderBottomColor: 'transparent' }]} />
              <View style={[styles.contactlessArc, { width: 10, height: 18, borderRadius: 10, borderWidth: 1.5, borderColor: 'rgba(255, 255, 255, 0.6)', borderLeftColor: 'transparent', borderTopColor: 'transparent', borderBottomColor: 'transparent', marginLeft: 2 }]} />
              <View style={[styles.contactlessArc, { width: 14, height: 24, borderRadius: 14, borderWidth: 1.5, borderColor: 'rgba(255, 255, 255, 0.8)', borderLeftColor: 'transparent', borderTopColor: 'transparent', borderBottomColor: 'transparent', marginLeft: 2 }]} />
            </View>
          </View>

          <Text style={styles.promoTitle}>
            Save on purchases with the Breadfast Card
          </Text>
          <Text style={styles.promoSubtitle}>
            Get cashback and discounts whenever you shop with the card.
          </Text>
        </View>

        <View style={styles.promoBottomRow}>
          <TouchableOpacity style={styles.getStartedButton} activeOpacity={0.9}>
            <Text style={styles.getStartedButtonText}>Get started</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Floating Bottom Navigation & Search */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.tabBar}>
          <TouchableOpacity 
            style={styles.tabItem} 
            activeOpacity={0.8}
            onPress={() => setActiveTab('Home')}
          >
            <Icon name="home" size={20} color="#292929" />
            <Text style={styles.tabLabel}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.tabItem} 
            activeOpacity={0.8}
            onPress={() => setActiveTab('Cart')}
          >
            <Icon name="cart" size={20} color="#363636" />
            <Text style={styles.tabLabel}>Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tabItem, styles.selectedTab]} 
            activeOpacity={0.8}
            onPress={() => setActiveTab('Pay')}
          >
            <Icon name="wallet" size={20} color="#972d7f" />
            <Text style={[styles.tabLabel, { color: '#972d7f', fontWeight: '600' }]}>Pay</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.tabItem} 
            activeOpacity={0.8}
            onPress={() => setActiveTab('More')}
          >
            <Icon name="menu" size={20} color="#2e2e2e" />
            <Text style={styles.tabLabel}>More</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.searchButton} activeOpacity={0.8}>
          <Icon name="search" size={22} color="#717171" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 797,
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 26,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4c3a4c',
    marginLeft: 4,
  },
  chatButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#fae6f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 24,
    marginTop: 34,
  },
  walletLabel: {
    fontSize: 14,
    color: '#7c7c7c',
    marginBottom: 4,
  },
  walletAmount: {
    fontSize: 32,
    fontWeight: '700',
    color: '#212121',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  actionButtonWrapper: {
    alignItems: 'center',
  },
  addButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#9b1d7e',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  cardButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f7e3ef',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  actionText: {
    fontSize: 12,
    color: '#9f3e8a',
    textAlign: 'center',
    lineHeight: 15,
  },
  promoCard: {
    position: 'absolute',
    top: 190,
    left: 24,
    width: 342,
    height: 525,
    borderRadius: 24,
    overflow: 'hidden',
    paddingHorizontal: 32,
    paddingTop: 36,
    paddingBottom: 36,
    justifyContent: 'space-between',
  },
  promoGradientBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#381635',
    // Simulating gradient fade top to bottom
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    borderRadius: 24,
  },
  promoTopRow: {
    flexDirection: 'row',
  },
  promoLogoWatermark: {
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promoMiddleContent: {
    alignItems: 'center',
    marginTop: -20,
  },
  cardChipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 44,
    gap: 16,
  },
  cardChip: {
    width: 48,
    height: 36,
    backgroundColor: '#e0e0e0',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#c0c0c0',
  },
  chipLineHorizontal: {
    position: 'absolute',
    width: '100%',
    height: 1,
    backgroundColor: '#a0a0a0',
  },
  chipLineVertical: {
    position: 'absolute',
    width: 1,
    height: '100%',
    backgroundColor: '#a0a0a0',
  },
  contactlessContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactlessArc: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  promoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 30,
  },
  promoSubtitle: {
    fontSize: 14,
    color: '#dcdcdc',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 12,
  },
  promoBottomRow: {
    alignItems: 'center',
  },
  getStartedButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  getStartedButtonText: {
    color: '#752d7f',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabBar: {
    flex: 1,
    height: 61,
    backgroundColor: '#ffffff',
    borderRadius: 32,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  selectedTab: {
    backgroundColor: '#dadada',
    flexDirection: 'row',
    gap: 4,
    paddingHorizontal: 14,
  },
  tabLabel: {
    fontSize: 12,
    color: '#292929',
    marginTop: 2,
  },
  searchButton: {
    width: 61,
    height: 61,
    borderRadius: 30.5,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
});
