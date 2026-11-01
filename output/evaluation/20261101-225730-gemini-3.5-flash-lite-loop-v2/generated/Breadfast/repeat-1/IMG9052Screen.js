import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from '../generated-icon';

export default function IMG9052Screen() {
  const [selectedTab, setSelectedTab] = useState('Home');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.deliverToText}>Deliver to</Text>
            <TouchableOpacity style={styles.addressRow} activeOpacity={0.7}>
              <Text style={styles.addressText}>Hyde Park Damac Compound</Text>
              <View style={styles.chevronContainer}>
                <Icon name="chevron-down" size={12} color="#973d88" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.headerButtons}>
            <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
              <Icon name="chat" size={18} color="#95247b" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
              <Icon name="gift" size={18} color="#963486" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Carousel Banner */}
        <View style={styles.carouselContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carouselScroll}>
            {/* Peeking left card */}
            <View style={[styles.bannerCard, styles.peekingCardLeft]} />
            
            {/* Main Banner */}
            <View style={styles.bannerCard}>
              <View style={styles.bannerTag}>
                <Text style={styles.bannerTagText}>NEW</Text>
              </View>
              <Text style={styles.bannerTitle}>TRY MONSTER NEW FLAVORS</Text>
              <View style={styles.bannerContentRow}>
                <Text style={styles.bannerFlavor1}>TROPICAL FLAVOUR</Text>
                <Text style={styles.bannerFlavor2}>PIPINE PUNCH</Text>
              </View>
              <View style={styles.cansRow}>
                <Text style={{fontSize: 45}}>🥫</Text>
                <Text style={{fontSize: 55}}>🥤</Text>
                <Text style={{fontSize: 50}}>🥤</Text>
              </View>
            </View>

            {/* Peeking right card */}
            <View style={[styles.bannerCard, styles.peekingCardRight]} />
          </ScrollView>
        </View>

        {/* Section Title */}
        <Text style={styles.sectionTitle}>Explore Breadfast</Text>

        {/* Grid Categories */}
        <View style={styles.gridContainer}>
          
          {/* Row 1 */}
          <View style={styles.gridRow}>
            <TouchableOpacity style={styles.card} activeOpacity={0.8}>
              <View>
                <Text style={styles.cardTitle}>Supermarket</Text>
              </View>
              <Text style={styles.cardEmoji}>🛒</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} activeOpacity={0.8}>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>Restaurants</Text>
                <Text style={styles.cardSubtitle}>Up to 50% off</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>New</Text>
              </View>
              <Text style={styles.cardEmoji}>🍔</Text>
            </TouchableOpacity>
          </View>

          {/* Row 2 */}
          <View style={styles.gridRow}>
            <TouchableOpacity style={styles.card} activeOpacity={0.8}>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>Lunchbox</Text>
                <Text style={styles.cardSubtitle}>Essentials</Text>
              </View>
              <Text style={styles.cardEmoji}>🍱</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} activeOpacity={0.8}>
              <View>
                <Text style={styles.cardTitle}>Shops</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>New</Text>
              </View>
              <Text style={styles.cardEmoji}>🧸</Text>
            </TouchableOpacity>
          </View>

          {/* Row 3 */}
          <View style={styles.gridRow}>
            <TouchableOpacity style={styles.card} activeOpacity={0.8}>
              <View>
                <Text style={styles.cardTitle}>Coffee</Text>
              </View>
              <Text style={styles.cardEmoji}>☕</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} activeOpacity={0.8}>
              <View>
                <Text style={styles.cardTitle}>Beauty</Text>
              </View>
              <Text style={styles.cardEmoji}>🧴</Text>
            </TouchableOpacity>
          </View>

          {/* Row 4 */}
          <View style={styles.gridRow}>
            <TouchableOpacity style={styles.card} activeOpacity={0.8}>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>Chef</Text>
                <Text style={styles.cardSubtitle}>on-Demand</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>New</Text>
              </View>
              <Text style={styles.cardEmoji}>🍳</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} activeOpacity={0.8}>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>Hotels</Text>
                <Text style={styles.cardSubtitle}>with Journeys</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>New</Text>
              </View>
              <Text style={styles.cardEmoji}>🏖️</Text>
            </TouchableOpacity>
          </View>

          {/* Row 5 */}
          <View style={styles.gridRow}>
            <TouchableOpacity style={styles.card} activeOpacity={0.8}>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>Buddy</Text>
                <Text style={styles.cardSubtitle}>Get errands done</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>New</Text>
              </View>
              <Text style={styles.cardEmoji}>🛵</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card} activeOpacity={0.8}>
              <View>
                <Text style={styles.cardTitle}>Print</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>New</Text>
              </View>
              <Text style={styles.cardEmoji}>🖨️</Text>
            </TouchableOpacity>
          </View>

        </View>

        {/* Bottom Banner Peek */}
        <View style={styles.bottomBanner}>
          <Text style={styles.bottomBannerTitle}>GAME ON</Text>
        </View>

      </ScrollView>

      {/* Floating Bottom Navigation */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.tabBar}>
          <TouchableOpacity 
            style={[styles.tabItemActive]} 
            onPress={() => setSelectedTab('Home')}
            activeOpacity={0.8}
          >
            <Icon name="home" size={18} color="#9b1f7f" />
            <Text style={styles.tabTextActive}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.tabItem} 
            onPress={() => setSelectedTab('Cart')}
            activeOpacity={0.8}
          >
            <Icon name="cart" size={18} color="#6f6f6f" />
            <Text style={styles.tabText}>Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.tabItem} 
            onPress={() => setSelectedTab('Pay')}
            activeOpacity={0.8}
          >
            <Icon name="wallet" size={18} color="#707070" />
            <Text style={styles.tabText}>Pay</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.tabItem} 
            onPress={() => setSelectedTab('More')}
            activeOpacity={0.8}
          >
            <Icon name="menu" size={18} color="#707070" />
            <Text style={styles.tabText}>More</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.searchButton} activeOpacity={0.8}>
          <Icon name="search" size={20} color="#212121" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 793,
    backgroundColor: '#ffffff',
    flex: 1,
    position: 'relative',
  },
  scrollContent: {
    paddingBottom: 110,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 10,
  },
  deliverToText: {
    fontSize: 12,
    color: '#373737',
    marginBottom: 4,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#973d88',
    marginRight: 6,
  },
  chevronContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  iconButton: {
    width: 36,
    height: 36,
    backgroundColor: '#fcfcfc',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  carouselContainer: {
    marginTop: 10,
    height: 194,
  },
  carouselScroll: {
    paddingHorizontal: 16,
    gap: 10,
  },
  bannerCard: {
    width: 344,
    height: 194,
    backgroundColor: '#080705',
    borderRadius: 16,
    padding: 16,
    position: 'relative',
    overflow: 'hidden',
  },
  peekingCardLeft: {
    width: 20,
    backgroundColor: '#57223d',
    opacity: 0.8,
  },
  peekingCardRight: {
    width: 20,
    backgroundColor: '#0f1109',
    opacity: 0.8,
  },
  bannerTag: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    transform: [{ rotate: '-15deg' }],
    borderRadius: 2,
  },
  bannerTagText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  bannerTitle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    letterSpacing: 0.5,
  },
  bannerContentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  bannerFlavor1: {
    color: '#a1d884',
    fontSize: 10,
    fontWeight: 'bold',
  },
  bannerFlavor2: {
    color: '#f39ac8',
    fontSize: 10,
    fontWeight: 'bold',
  },
  cansRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
    marginHorizontal: 16,
    marginTop: 25,
    marginBottom: 15,
  },
  gridContainer: {
    paddingHorizontal: 16,
    gap: 12,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: 174,
    height: 58,
    backgroundColor: '#f8f9fa',
    borderRadius: 24,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  cardTextContainer: {
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#292929',
  },
  cardSubtitle: {
    fontSize: 10,
    color: '#8e8e8e',
    marginTop: 1,
  },
  cardEmoji: {
    fontSize: 24,
  },
  badge: {
    position: 'absolute',
    top: 6,
    right: 32,
    backgroundColor: '#9b1f7f',
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 6,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: 'bold',
  },
  bottomBanner: {
    marginTop: 30,
    height: 38,
    backgroundColor: '#181f50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBannerTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 36,
    height: 62,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    marginRight: 12,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  tabItemActive: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3e6f0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    gap: 6,
  },
  tabText: {
    fontSize: 11,
    color: '#707070',
    marginTop: 2,
  },
  tabTextActive: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#9b1f7f',
  },
  searchButton: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
});
