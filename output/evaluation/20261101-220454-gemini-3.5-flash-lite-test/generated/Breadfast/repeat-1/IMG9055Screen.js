import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '../generated-icon';

export default function IMG9055Screen() {
  const [activeTab, setActiveTab] = useState('More');

  return (
    <View style={styles.container}>
      {/* Header: Title & QR Button */}
      <View style={styles.header}>
        <Text style={styles.title}>yousef Samy</Text>
        <TouchableOpacity style={styles.qrButton} activeOpacity={0.8}>
          <Icon name="qr-code" size={22} color="#97227d" />
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <TouchableOpacity style={styles.banner} activeOpacity={0.9}>
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerTitle}>Get Free Delivery</Text>
          <Text style={styles.bannerTitle}>on orders above EGP 200</Text>
          <Text style={styles.bannerSubtitle}>Tap to apply for your Breadfast Card</Text>
        </View>
        <View style={styles.bannerIllustration}>
          <Text style={styles.bannerEmoji}>💳</Text>
        </View>
      </TouchableOpacity>

      {/* Top Cards Grid */}
      <View style={styles.topCardsRow}>
        <TouchableOpacity style={styles.smallCard} activeOpacity={0.8}>
          <View style={styles.cardIconContainer}>
            <Text style={{ fontSize: 24 }}>📄</Text>
          </View>
          <Text style={styles.cardTitle}>Order history</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.smallCard} activeOpacity={0.8}>
          <View style={[styles.cardIconContainer, { backgroundColor: '#fce4ec' }]}>
            <Icon name="gift" size={20} color="#c95188" />
          </View>
          <Text style={styles.cardTitle}>Breadfast Rewards</Text>
          <Text style={styles.cardSubtitle}>Shop to earn points</Text>
        </TouchableOpacity>
      </View>

      {/* EXPLORE Section */}
      <Text style={styles.sectionHeader}>EXPLORE</Text>
      <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.listItem} activeOpacity={0.7}>
          <View style={styles.listItemLeft}>
            <Icon name="heart" size={20} color="#232323" />
            <Text style={styles.listItemText}>Favorites</Text>
          </View>
          <Icon name="chevron-right" size={16} color="#737373" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem} activeOpacity={0.7}>
          <View style={styles.listItemLeft}>
            <Icon name="gift" size={20} color="#212121" />
            <Text style={styles.listItemText}>Invite a friend</Text>
          </View>
          <Icon name="chevron-right" size={16} color="#7b7b7b" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.listItem, { borderBottomWidth: 0 }]} activeOpacity={0.7}>
          <View style={styles.listItemLeft}>
            <Icon name="layers" size={20} color="#050505" />
            <Text style={styles.listItemText}>BundleUp</Text>
          </View>
          <Icon name="chevron-right" size={16} color="#767676" />
        </TouchableOpacity>
      </View>

      {/* ACCOUNT Section */}
      <Text style={styles.sectionHeader}>ACCOUNT</Text>
      <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.listItem} activeOpacity={0.7}>
          <View style={styles.listItemLeft}>
            <Icon name="settings" size={20} color="#242424" />
            <Text style={styles.listItemText}>Settings</Text>
          </View>
          <Icon name="chevron-right" size={16} color="#737373" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem} activeOpacity={0.7}>
          <View style={styles.listItemLeft}>
            <Icon name="chat" size={20} color="#222222" />
            <Text style={styles.listItemText}>Chat with us</Text>
          </View>
          <Icon name="chevron-right" size={16} color="#777777" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.listItem, { borderBottomWidth: 0 }]} activeOpacity={0.7}>
          <View style={styles.listItemLeft}>
            <Icon name="help" size={20} color="#262626" />
            <Text style={styles.listItemText}>Help</Text>
          </View>
          <Icon name="chevron-right" size={16} color="#7d7d7d" />
        </TouchableOpacity>
      </View>

      {/* Floating Bottom Tab Bar & Search Button */}
      <View style={styles.bottomBarContainer}>
        <View style={styles.tabBar}>
          <TouchableOpacity 
            style={styles.tabItem} 
            onPress={() => setActiveTab('Home')}
            activeOpacity={0.7}
          >
            <Icon name="home" size={20} color="#717173" />
            <Text style={styles.tabLabel}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.tabItem} 
            onPress={() => setActiveTab('Cart')}
            activeOpacity={0.7}
          >
            <Icon name="cart" size={20} color="#747474" />
            <Text style={styles.tabLabel}>Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.tabItem} 
            onPress={() => setActiveTab('Pay')}
            activeOpacity={0.7}
          >
            <Icon name="wallet" size={20} color="#737373" />
            <Text style={styles.tabLabel}>Pay</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.selectedTabItem} 
            onPress={() => setActiveTab('More')}
            activeOpacity={0.7}
          >
            <Icon name="menu" size={20} color="#717172" />
            <Text style={styles.selectedTabLabel}>More</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.searchButton} activeOpacity={0.8}>
          <Icon name="search" size={22} color="#717172" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 800,
    backgroundColor: '#ffffff',
    paddingTop: 37,
    paddingHorizontal: 16,
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#212121',
    lineHeight: 33,
    letterSpacing: -0.5,
  },
  qrButton: {
    width: 38,
    height: 38,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  banner: {
    width: 358,
    height: 72,
    backgroundColor: '#7c336a',
    borderRadius: 12,
    marginTop: 15,
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerTextContainer: {
    justifyContent: 'center',
  },
  bannerTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 18,
  },
  bannerSubtitle: {
    color: '#f3e5f5',
    fontSize: 10,
    fontWeight: '400',
    marginTop: 3,
  },
  bannerIllustration: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerEmoji: {
    fontSize: 36,
  },
  topCardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  smallCard: {
    width: 173,
    height: 107,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 14,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f5f5f5',
  },
  cardIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2a2a2a',
  },
  cardSubtitle: {
    fontSize: 11,
    color: '#9e9e9e',
    marginTop: 2,
  },
  sectionHeader: {
    fontSize: 10,
    fontWeight: '700',
    color: '#7e7e7f',
    marginTop: 22,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  sectionContainer: {
    width: 358,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#f2f2f2',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  listItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#252525',
    marginLeft: 14,
  },
  bottomBarContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabBar: {
    width: 275,
    height: 55,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 8,
  },
  tabLabel: {
    fontSize: 9,
    color: '#717173',
    fontWeight: '500',
    marginTop: 2,
  },
  selectedTabItem: {
    backgroundColor: '#e1e1e3',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    height: 40,
  },
  selectedTabLabel: {
    fontSize: 10,
    color: '#292929',
    fontWeight: '600',
    marginLeft: 4,
  },
  searchButton: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
});
