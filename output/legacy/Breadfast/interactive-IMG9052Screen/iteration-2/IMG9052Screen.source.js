import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../generated-icon';

export default function IMG9052Screen() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.deliverTo}>Deliver to</Text>
          <View style={styles.locationRow}>
            <Text style={styles.locationText}>Hyde Park Damac Compound</Text>
            <View style={{ marginLeft: 4 }}>
              <Icon name="chevron-down" size={11} color="#973d88" />
            </View>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="chat" size={16} color="#95247b" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="gift" size={16} color="#963486" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Banner Carousel */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bannerContainer}>
          <View style={styles.bannerCard}>
            <View style={styles.bannerBadge}>
              <Text style={styles.bannerBadgeText}>NEW</Text>
            </View>
            <View style={styles.bannerContent}>
              <Text style={styles.bannerTitle}>TRY MONSTER NEW FLAVORS</Text>
              <View style={styles.cansRow}>
                <View style={styles.canLeft}>
                  <Text style={styles.canSub}>TROPICAL FLAVOUR</Text>
                  <Text style={styles.canMain}>ZERO SUGAR</Text>
                </View>
                <View style={styles.canRight}>
                  <Text style={styles.canSubRight}>PIPELINE PUNCH</Text>
                  <Text style={styles.canMainRight}>PUNCH</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Section Title */}
        <Text style={styles.sectionTitle}>Explore Breadfast</Text>

        {/* Grid Categories */}
        <View style={styles.gridContainer}>
          {/* Row 1 */}
          <View style={styles.gridRow}>
            <View style={styles.card}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Supermarket</Text>
              </View>
              <View style={styles.cardImagePlaceholder}>
                <Text style={styles.emojiImg}>🛍️</Text>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.newBadge}>
                <Text style={styles.newBadgeText}>New</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Restaurants</Text>
                <Text style={styles.cardSubtitle}>Up to 50% off</Text>
              </View>
              <View style={styles.cardImagePlaceholder}>
                <Text style={styles.emojiImg}>🍔</Text>
              </View>
            </View>
          </View>

          {/* Row 2 */}
          <View style={styles.gridRow}>
            <View style={styles.card}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Lunchbox</Text>
                <Text style={styles.cardSubtitle}>Essentials</Text>
              </View>
              <View style={styles.cardImagePlaceholder}>
                <Text style={styles.emojiImg}>🍱</Text>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.newBadge}>
                <Text style={styles.newBadgeText}>New</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Shops</Text>
              </View>
              <View style={styles.cardImagePlaceholder}>
                <Text style={styles.emojiImg}>🧸</Text>
              </View>
            </View>
          </View>

          {/* Row 3 */}
          <View style={styles.gridRow}>
            <View style={styles.card}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Coffee</Text>
              </View>
              <View style={styles.cardImagePlaceholder}>
                <Text style={styles.emojiImg}>☕</Text>
              </View>
            </View>
            <View style={styles.card}>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Beauty</Text>
              </View>
              <View style={styles.cardImagePlaceholder}>
                <Text style={styles.emojiImg}>🧴</Text>
              </View>
            </View>
          </View>

          {/* Row 4 */}
          <View style={styles.gridRow}>
            <View style={styles.card}>
              <View style={styles.newBadge}>
                <Text style={styles.newBadgeText}>New</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Chef</Text>
                <Text style={styles.cardSubtitle}>on-Demand</Text>
              </View>
              <View style={styles.cardImagePlaceholder}>
                <Text style={styles.emojiImg}>👨‍🍳</Text>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.newBadge}>
                <Text style={styles.newBadgeText}>New</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Hotels</Text>
                <Text style={styles.cardSubtitle}>with Journeys</Text>
              </View>
              <View style={styles.cardImagePlaceholder}>
                <Text style={styles.emojiImg}>🏖️</Text>
              </View>
            </View>
          </View>

          {/* Row 5 */}
          <View style={styles.gridRow}>
            <View style={styles.card}>
              <View style={styles.newBadge}>
                <Text style={styles.newBadgeText}>New</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Buddy</Text>
                <Text style={styles.cardSubtitle}>Get errands done</Text>
              </View>
              <View style={styles.cardImagePlaceholder}>
                <Text style={styles.emojiImg}>🏃‍♂️</Text>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.newBadge}>
                <Text style={styles.newBadgeText}>New</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>Print</Text>
              </View>
              <View style={styles.cardImagePlaceholder}>
                <Text style={styles.emojiImg}>🖨️</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Extra bottom spacing */}
        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Floating Search & Bottom Navigation */}
      <TouchableOpacity style={styles.floatingSearchButton}>
        <Icon name="search" size={20} color="#10b981" />
      </TouchableOpacity>

      <View style={styles.floatingTabContainer}>
        <TouchableOpacity 
          style={[styles.navItem, activeTab === 'Home' && styles.activeNavItem]}
          onPress={() => setActiveTab('Home')}
        >
          <Icon name="home" size={18} color={activeTab === 'Home' ? '#7c3aed' : '#888'} />
          {activeTab === 'Home' && <Text style={styles.navTextActive}>Home</Text>}
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navItem, activeTab === 'Cart' && styles.activeNavItem]}
          onPress={() => setActiveTab('Cart')}
        >
          <Icon name="cart" size={18} color={activeTab === 'Cart' ? '#7c3aed' : '#888'} />
          {activeTab === 'Cart' && <Text style={styles.navTextActive}>Cart</Text>}
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navItem, activeTab === 'Pay' && styles.activeNavItem]}
          onPress={() => setActiveTab('Pay')}
        >
          <Icon name="wallet" size={18} color={activeTab === 'Pay' ? '#7c3aed' : '#888'} />
          {activeTab === 'Pay' && <Text style={styles.navTextActive}>Pay</Text>}
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navItem, activeTab === 'More' && styles.activeNavItem]}
          onPress={() => setActiveTab('More')}
        >
          <Icon name="menu" size={18} color={activeTab === 'More' ? '#7c3aed' : '#888'} />
          {activeTab === 'More' && <Text style={styles.navTextActive}>More</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    maxWidth: 390,
    width: '100%',
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 10,
  },
  deliverTo: {
    fontSize: 11,
    color: '#373737',
    marginBottom: 2,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#973d88',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  bannerContainer: {
    marginVertical: 4,
  },
  bannerCard: {
    width: 358,
    height: 193,
    backgroundColor: '#160408',
    borderRadius: 16,
    padding: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  bannerBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  bannerBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000000',
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerTitle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 20,
    textAlign: 'center',
  },
  cansRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  canLeft: {
    alignItems: 'flex-start',
  },
  canRight: {
    alignItems: 'flex-end',
  },
  canSub: {
    color: '#a3e635',
    fontSize: 9,
    fontWeight: 'bold',
  },
  canMain: {
    color: '#a3e635',
    fontSize: 17,
    fontWeight: '900',
  },
  canSubRight: {
    color: '#f472b6',
    fontSize: 9,
    fontWeight: 'bold',
  },
  canMainRight: {
    color: '#f472b6',
    fontSize: 17,
    fontWeight: '900',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
    marginTop: 14,
    marginBottom: 12,
  },
  gridContainer: {
    flexDirection: 'column',
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    width: 175,
    backgroundColor: '#f8f8f8',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    overflow: 'visible',
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#212121',
  },
  cardSubtitle: {
    fontSize: 10,
    color: '#777777',
    marginTop: 1,
  },
  cardImagePlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emojiImg: {
    fontSize: 26,
  },
  newBadge: {
    position: 'absolute',
    top: -6,
    right: 6,
    backgroundColor: '#95247b',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 8,
    zIndex: 10,
  },
  newBadgeText: {
    color: '#ffffff',
    fontSize: 9,
    fontWeight: 'bold',
  },
  floatingSearchButton: {
    position: 'absolute',
    right: 16,
    bottom: 92,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 2,
    borderColor: '#10b981',
    zIndex: 20,
  },
  floatingTabContainer: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    right: 15,
    height: 64,
    backgroundColor: '#ffffff',
    borderRadius: 32,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 8,
    zIndex: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  activeNavItem: {
    backgroundColor: '#f3e8ff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  navTextActive: {
    fontSize: 12,
    color: '#7c3aed',
    fontWeight: 'bold',
    marginLeft: 6,
  },
});
