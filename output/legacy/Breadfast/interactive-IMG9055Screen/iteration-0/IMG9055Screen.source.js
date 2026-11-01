import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function IMG9055Screen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>yousef Samy</Text>
          <View style={styles.qrButton}>
            <View style={styles.qrIconGrid}>
              <View style={styles.qrRow}>
                <View style={[styles.qrCell, { borderColor: '#d32f54' }]} />
                <View style={[styles.qrCell, { borderColor: '#d32f54' }]} />
                <View style={[styles.qrCell, { borderColor: '#d32f54' }]} />
              </View>
              <View style={styles.qrRow}>
                <View style={[styles.qrCell, { borderColor: '#d32f54' }]} />
                <View style={[styles.qrCell, { backgroundColor: '#d32f54', borderColor: '#d32f54' }]} />
                <View style={[styles.qrCell, { borderColor: '#d32f54' }]} />
              </View>
              <View style={styles.qrRow}>
                <View style={[styles.qrCell, { borderColor: '#d32f54' }]} />
                <View style={[styles.qrCell, { borderColor: '#d32f54' }]} />
                <View style={[styles.qrCell, { borderColor: '#d32f54' }]} />
              </View>
            </View>
          </View>
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Get Free Delivery</Text>
            <Text style={styles.bannerTitle}>on orders above EGP 200</Text>
            <Text style={styles.bannerSubtitle}>Tap to apply for your Breadfast Card</Text>
          </View>
          <View style={styles.bannerGraphic}>
            <View style={styles.cardMockup}>
              <View style={styles.cardHeaderRow}>
                <View style={styles.cardChip} />
              </View>
              <Text style={styles.cardBrandText}>Breadfast Pay</Text>
              <Text style={styles.cardSubText}>ADIB VISA</Text>
            </View>
            <View style={styles.bagMockup}>
              <View style={styles.bagLogo}>
                <Text style={styles.bagLogoText}>8</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Top Cards (Order history & Rewards) */}
        <View style={styles.topCardsRow}>
          <View style={styles.topCard}>
            <View style={styles.cardIconBox}>
              <View style={styles.receiptLine} />
              <View style={styles.receiptLine} />
              <View style={styles.receiptLineShort} />
            </View>
            <Text style={styles.topCardTitle}>Order history</Text>
          </View>

          <View style={styles.topCard}>
            <View style={styles.rewardsIconBox}>
              <Text style={styles.rewardsIconText}>8</Text>
            </View>
            <Text style={styles.topCardTitle}>Breadfast Rewards</Text>
            <Text style={styles.topCardSubtitle}>Shop to earn points</Text>
          </View>
        </View>

        {/* Section: EXPLORE */}
        <Text style={styles.sectionHeader}>EXPLORE</Text>
        <View style={styles.sectionContainer}>
          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.iconCircle}>
                <Text style={styles.glyphText}>♡</Text>
              </View>
              <Text style={styles.menuItemText}>Favorites</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </View>

          <View style={styles.menuDivider} />

          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.iconCircle}>
                <Text style={styles.glyphText}>🎁</Text>
              </View>
              <Text style={styles.menuItemText}>Invite a friend</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </View>

          <View style={styles.menuDivider} />

          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.iconCircle}>
                <Text style={styles.glyphText}>📦</Text>
              </View>
              <Text style={styles.menuItemText}>BundleUp</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </View>
        </View>

        {/* Section: ACCOUNT */}
        <Text style={styles.sectionHeader}>ACCOUNT</Text>
        <View style={styles.sectionContainer}>
          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.iconCircle}>
                <Text style={styles.glyphText}>⚙</Text>
              </View>
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </View>

          <View style={styles.menuDivider} />

          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.iconCircle}>
                <Text style={styles.glyphText}>💬</Text>
              </View>
              <Text style={styles.menuItemText}>Chat with us</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </View>

          <View style={styles.menuDivider} />

          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.iconCircle}>
                <Text style={styles.glyphText}>?</Text>
              </View>
              <Text style={styles.menuItemText}>Help</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </View>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Floating Bottom Navigation */}
      <View style={styles.floatingNavWrapper}>
        <View style={styles.bottomNav}>
          <View style={styles.navItem}>
            <Text style={styles.navIconText}>🏠</Text>
            <Text style={styles.navLabel}>Home</Text>
          </View>

          <View style={styles.navItem}>
            <Text style={styles.navIconText}>🛒</Text>
            <Text style={styles.navLabel}>Cart</Text>
          </View>

          <View style={styles.navItem}>
            <Text style={styles.navIconText}>💳</Text>
            <Text style={styles.navLabel}>Pay</Text>
          </View>

          <View style={styles.activeNavItem}>
            <Text style={styles.activeNavIconText}>≡</Text>
            <Text style={styles.activeNavLabel}>More</Text>
          </View>

          <View style={styles.searchNavItem}>
            <Text style={styles.searchNavIconText}>🔍</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f9',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 110,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 4,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#111',
    letterSpacing: -0.5,
  },
  qrButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f2f2f4',
  },
  qrIconGrid: {
    width: 18,
    height: 18,
    justifyContent: 'space-between',
  },
  qrRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 4.5,
  },
  qrCell: {
    width: 4.5,
    height: 4.5,
    borderWidth: 1.5,
    borderRadius: 1,
  },
  banner: {
    backgroundColor: '#582b48',
    borderRadius: 24,
    flexDirection: 'row',
    padding: 20,
    overflow: 'hidden',
    height: 136,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 22,
  },
  bannerSubtitle: {
    color: '#eca6d1',
    fontSize: 11,
    marginTop: 8,
    fontWeight: '600',
  },
  bannerGraphic: {
    width: 120,
    height: 110,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardMockup: {
    position: 'absolute',
    width: 76,
    height: 48,
    backgroundColor: '#262427',
    borderRadius: 6,
    left: 0,
    top: 40,
    transform: [{ rotate: '-12deg' }],
    borderWidth: 1,
    borderColor: '#444',
    padding: 6,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardChip: {
    width: 10,
    height: 8,
    backgroundColor: '#d4af37',
    borderRadius: 1,
  },
  cardBrandText: {
    color: '#fff',
    fontSize: 5.5,
    fontWeight: 'bold',
  },
  cardSubText: {
    color: '#aaa',
    fontSize: 4.5,
    fontWeight: '600',
  },
  bagMockup: {
    position: 'absolute',
    width: 68,
    height: 80,
    backgroundColor: '#d842a2',
    borderRadius: 10,
    right: 0,
    top: 6,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '8deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  bagLogo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bagLogoText: {
    color: '#d842a2',
    fontWeight: '900',
    fontSize: 17,
  },
  topCardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  topCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 18,
    width: '48%',
    height: 120,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f2f2f4',
  },
  cardIconBox: {
    width: 38,
    height: 44,
    backgroundColor: '#fbece8',
    borderRadius: 10,
    padding: 8,
    justifyContent: 'space-around',
  },
  receiptLine: {
    height: 3,
    backgroundColor: '#e65c3b',
    borderRadius: 1.5,
    width: '100%',
  },
  receiptLineShort: {
    height: 3,
    backgroundColor: '#e65c3b',
    borderRadius: 1.5,
    width: '65%',
  },
  rewardsIconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fcd3e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rewardsIconText: {
    color: '#d32f54',
    fontWeight: '900',
    fontSize: 20,
  },
  topCardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111',
  },
  topCardSubtitle: {
    fontSize: 11.5,
    color: '#888',
    marginTop: 2,
    fontWeight: '500',
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '700',
    color: '#888',
    marginBottom: 10,
    marginLeft: 6,
    letterSpacing: 0.8,
  },
  sectionContainer: {
    backgroundColor: '#fff',
    borderRadius: 24,
    marginBottom: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f2f2f4',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#f8f8f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  glyphText: {
    fontSize: 18,
    color: '#111',
  },
  menuItemText: {
    fontSize: 15.5,
    fontWeight: '600',
    color: '#111',
  },
  chevron: {
    fontSize: 22,
    color: '#c7c7cc',
    fontWeight: '300',
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#f1f1f3',
    marginLeft: 70,
  },
  bottomSpacer: {
    height: 20,
  },
  floatingNavWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    alignItems: 'center',
  },
  bottomNav: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 36,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#eee',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 4,
  },
  navIconText: {
    fontSize: 18,
  },
  navLabel: {
    fontSize: 10,
    color: '#666',
    marginTop: 3,
    fontWeight: '500',
  },
  activeNavItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1.3,
    backgroundColor: '#f4e7ec',
    paddingVertical: 8,
    borderRadius: 24,
    flexDirection: 'row',
  },
  activeNavIconText: {
    fontSize: 16,
    color: '#d32f54',
    marginRight: 4,
    fontWeight: 'bold',
  },
  activeNavLabel: {
    fontSize: 11,
    color: '#d32f54',
    fontWeight: 'bold',
  },
  searchNavItem: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchNavIconText: {
    fontSize: 16,
  },
});
