import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const IMG9052Screen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.deliverTo}>Deliver to</Text>
          <View style={styles.locationRow}>
            <Text style={styles.locationText}>Hyde Park Damac Compound</Text>
            <Text style={styles.chevron}> ▾</Text>
          </View>
        </View>
        <View style={styles.headerIcons}>
          <View style={styles.iconButton}>
            <Text style={styles.iconText}>💬</Text>
          </View>
          <View style={styles.iconButton}>
            <Text style={styles.iconText}>🎁</Text>
          </View>
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
              <View>
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
              <View>
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
              <View>
                <Text style={styles.cardTitle}>Lunchbox</Text>
                <Text style={styles.cardTitle}>Essentials</Text>
              </View>
              <View style={styles.cardImagePlaceholder}>
                <Text style={styles.emojiImg}>🍱</Text>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.newBadge}>
                <Text style={styles.newBadgeText}>New</Text>
              </View>
              <View>
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
              <View>
                <Text style={styles.cardTitle}>Coffee</Text>
              </View>
              <View style={styles.cardImagePlaceholder}>
                <Text style={styles.emojiImg}>☕</Text>
              </View>
            </View>
            <View style={styles.card}>
              <View>
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
              <View>
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
              <View>
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
              <View>
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
              <View>
                <Text style={styles.cardTitle}>Print</Text>
              </View>
              <View style={styles.cardImagePlaceholder}>
                <Text style={styles.emojiImg}>🖨️</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Extra bottom spacing */}
        <View style={{ height: 130 }} />
      </ScrollView>

      {/* Floating Search & Bottom Navigation */}
      <View style={styles.floatingSearchContainer}>
        <View style={styles.searchButton}>
          <Text style={styles.searchIcon}>🔍</Text>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <View style={[styles.navItem, styles.activeNavItem]}>
          <Text style={styles.navIconActive}>🏠</Text>
          <Text style={styles.navTextActive}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🛒</Text>
          <Text style={styles.navText}>Cart</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>💳</Text>
          <Text style={styles.navText}>Pay</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>☰</Text>
          <Text style={styles.navText}>More</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    maxWidth: 480,
    width: '100%',
    alignSelf: 'center',
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  deliverTo: {
    fontSize: 12,
    color: '#777',
    marginBottom: 2,
    fontWeight: '500',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5C0632',
    letterSpacing: -0.2,
  },
  chevron: {
    fontSize: 14,
    color: '#5C0632',
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#F9F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  iconText: {
    fontSize: 18,
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  bannerContainer: {
    marginVertical: 4,
  },
  bannerCard: {
    width: 380,
    height: 190,
    backgroundColor: '#230710',
    borderRadius: 22,
    padding: 18,
    overflow: 'hidden',
    position: 'relative',
  },
  bannerBadge: {
    position: 'absolute',
    top: 14,
    left: 14,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  bannerBadgeText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#000',
    letterSpacing: 0.5,
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 0.8,
    marginBottom: 16,
    textAlign: 'center',
  },
  cansRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 12,
  },
  canLeft: {
    alignItems: 'flex-start',
  },
  canRight: {
    alignItems: 'flex-end',
  },
  canSub: {
    color: '#a3e635',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  canMain: {
    color: '#a3e635',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  canSubRight: {
    color: '#f472b6',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  canMainRight: {
    color: '#f472b6',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
    marginTop: 22,
    marginBottom: 14,
    letterSpacing: -0.3,
  },
  gridContainer: {
    flexDirection: 'column',
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    width: '48%',
    backgroundColor: '#F8F9FB',
    borderRadius: 20,
    padding: 16,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111',
    letterSpacing: -0.2,
  },
  cardSubtitle: {
    fontSize: 11,
    color: '#666',
    marginTop: 3,
    fontWeight: '500',
  },
  cardImagePlaceholder: {
    position: 'absolute',
    right: 12,
    bottom: 8,
  },
  emojiImg: {
    fontSize: 38,
  },
  newBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#6b21a8',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    zIndex: 2,
  },
  newBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  floatingSearchContainer: {
    position: 'absolute',
    right: 20,
    bottom: 85,
    zIndex: 20,
  },
  searchButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#eee',
  },
  searchIcon: {
    fontSize: 22,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
    paddingBottom: 12,
    paddingHorizontal: 12,
    zIndex: 15,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  activeNavItem: {
    backgroundColor: '#f3e8ff',
    borderRadius: 24,
    marginHorizontal: 4,
    paddingVertical: 8,
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  navIcon: {
    fontSize: 20,
    color: '#888',
    marginBottom: 2,
  },
  navText: {
    fontSize: 11,
    color: '#888',
    fontWeight: '500',
  },
  navIconActive: {
    fontSize: 18,
    color: '#7c3aed',
    marginRight: 6,
  },
  navTextActive: {
    fontSize: 12,
    color: '#7c3aed',
    fontWeight: 'bold',
  },
});

export default IMG9052Screen;
