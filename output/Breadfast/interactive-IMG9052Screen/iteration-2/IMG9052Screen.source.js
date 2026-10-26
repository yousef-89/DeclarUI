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
        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Floating Search Button */}
      <View style={styles.floatingSearchContainer}>
        <View style={styles.searchButton}>
          <Text style={styles.searchIcon}>🔍</Text>
        </View>
      </View>

      {/* Floating Bottom Navigation */}
      <View style={styles.bottomNavWrapper}>
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
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  deliverTo: {
    fontSize: 12,
    color: '#888',
    marginBottom: 2,
    fontWeight: '400',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#5B0029',
  },
  chevron: {
    fontSize: 14,
    color: '#5B0029',
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#F0F2F5',
  },
  iconText: {
    fontSize: 20,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  bannerContainer: {
    marginVertical: 4,
  },
  bannerCard: {
    width: 356,
    height: 196,
    backgroundColor: '#23030F',
    borderRadius: 24,
    padding: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  bannerBadge: {
    position: 'absolute',
    top: 14,
    left: 14,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
  },
  bannerBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#000',
    letterSpacing: 0.5,
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.8,
    marginBottom: 16,
    textAlign: 'center',
  },
  cansRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 8,
  },
  canLeft: {
    alignItems: 'flex-start',
  },
  canRight: {
    alignItems: 'flex-end',
  },
  canSub: {
    color: '#bbf246',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  canMain: {
    color: '#bbf246',
    fontSize: 19,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  canSubRight: {
    color: '#f472b6',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  canMainRight: {
    color: '#f472b6',
    fontSize: 19,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#111',
    marginTop: 20,
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
    width: '48.5%',
    backgroundColor: '#F8F9FA',
    borderRadius: 24,
    padding: 16,
    height: 96,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111',
    letterSpacing: 0.2,
  },
  cardSubtitle: {
    fontSize: 11,
    color: '#777',
    marginTop: 2,
    fontWeight: '500',
  },
  cardImagePlaceholder: {
    position: 'absolute',
    right: 12,
    bottom: 8,
  },
  emojiImg: {
    fontSize: 36,
  },
  newBadge: {
    position: 'absolute',
    top: 10,
    right: 12,
    backgroundColor: '#6b21a8',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    zIndex: 2,
  },
  newBadgeText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: '700',
  },
  floatingSearchContainer: {
    position: 'absolute',
    right: 20,
    bottom: 90,
    zIndex: 20,
  },
  searchButton: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#ECEFF4',
  },
  searchIcon: {
    fontSize: 22,
  },
  bottomNavWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 20,
    backgroundColor: 'transparent',
    zIndex: 15,
  },
  bottomNav: {
    width: '100%',
    maxWidth: 420,
    height: 64,
    backgroundColor: '#fff',
    borderRadius: 32,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#ECEFF4',
    paddingHorizontal: 6,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
  activeNavItem: {
    backgroundColor: '#f3e8ff',
    borderRadius: 24,
    marginHorizontal: 4,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    flex: 1.3,
    justifyContent: 'center',
  },
  navIcon: {
    fontSize: 18,
    color: '#999',
    marginBottom: 2,
  },
  navText: {
    fontSize: 10,
    color: '#999',
    fontWeight: '600',
  },
  navIconActive: {
    fontSize: 16,
    color: '#7c3aed',
    marginRight: 6,
  },
  navTextActive: {
    fontSize: 12,
    color: '#7c3aed',
    fontWeight: '700',
  },
});

export default IMG9052Screen;
