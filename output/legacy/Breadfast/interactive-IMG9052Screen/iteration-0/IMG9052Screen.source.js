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
        <View style={{ height: 100 }} />
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  deliverTo: {
    fontSize: 12,
    color: '#777',
    marginBottom: 2,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#5C0632',
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
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  iconText: {
    fontSize: 16,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  bannerContainer: {
    marginVertical: 8,
  },
  bannerCard: {
    width: 340,
    height: 180,
    backgroundColor: '#2b0b14',
    borderRadius: 16,
    padding: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  bannerBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  bannerBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 16,
    textAlign: 'center',
  },
  cansRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
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
    fontWeight: 'bold',
  },
  canMain: {
    color: '#a3e635',
    fontSize: 18,
    fontWeight: '900',
  },
  canSubRight: {
    color: '#f472b6',
    fontSize: 10,
    fontWeight: 'bold',
  },
  canMainRight: {
    color: '#f472b6',
    fontSize: 18,
    fontWeight: '900',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
    marginTop: 16,
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
    width: '48%',
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    padding: 14,
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111',
  },
  cardSubtitle: {
    fontSize: 11,
    color: '#666',
    marginTop: 2,
  },
  cardImagePlaceholder: {
    position: 'absolute',
    right: 8,
    bottom: 4,
  },
  emojiImg: {
    fontSize: 36,
  },
  newBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#7c3aed',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 8,
    zIndex: 2,
  },
  newBadgeText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: 'bold',
  },
  floatingSearchContainer: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    zIndex: 10,
  },
  searchButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#eee',
  },
  searchIcon: {
    fontSize: 20,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 65,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingBottom: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  activeNavItem: {
    backgroundColor: '#f3e8ff',
    borderRadius: 20,
    marginHorizontal: 8,
    paddingVertical: 6,
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  navIcon: {
    fontSize: 18,
    color: '#888',
    marginBottom: 2,
  },
  navText: {
    fontSize: 10,
    color: '#888',
  },
  navIconActive: {
    fontSize: 16,
    color: '#7c3aed',
    marginRight: 4,
  },
  navTextActive: {
    fontSize: 11,
    color: '#7c3aed',
    fontWeight: 'bold',
  },
});

export default IMG9052Screen;
