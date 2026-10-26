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
              <Text style={styles.cardText}>Breadfast Pay</Text>
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
    paddingHorizontal: 20,
    paddingTop: 36,
    paddingBottom: 110,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
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
    borderRadius: 20,
    flexDirection: 'row',
    padding: 18,
    overflow: 'hidden',
    height: 124,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerTextContainer: {
    flex: 1,
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
    width: 110,
    height: 100,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardMockup: {
    position: 'absolute',
    width: 64,
    height: 40,
    backgroundColor: '#2b292c',
    borderRadius: 6,
    left: 2,
    top: 30,
    transform: [{ rotate: '-12deg' }],
    borderWidth: 1,
    borderColor: '#444',
    padding: 4,
    justifyContent: 'flex-end',
  },
  cardText: {
    color: '#aaa',
    fontSize: 6,
    fontWeight: 'bold',
  },
  bagMockup: {
    position: 'absolute',
    width: 60,
    height: 70,
    backgroundColor: '#d842a2',
    borderRadius: 8,
    right: 4,
    top: 6,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '8deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  bagLogo: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bagLogoText: {
    color: '#d842a2',
    fontWeight: '900',
    fontSize: 15,
  },
  topCardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  topCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    width: '48%',
    height: 108,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  cardIconBox: {
    width: 32,
    height: 38,
    backgroundColor: '#fbece8',
    borderRadius: 8,
    padding: 6,
    justifyContent: 'space-around',
  },
  receiptLine: {
    height: 2.5,
    backgroundColor: '#e65c3b',
    borderRadius: 1,
    width: '100%',
  },
  receiptLineShort: {
    height: 2.5,
    backgroundColor: '#e65c3b',
    borderRadius: 1,
    width: '65%',
  },
  rewardsIconBox: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#fcd3e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rewardsIconText: {
    color: '#d32f54',
    fontWeight: '900',
    fontSize: 17,
  },
  topCardTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111',
  },
  topCardSubtitle: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
    fontWeight: '500',
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '700',
    color: '#888',
    marginBottom: 10,
    marginLeft: 4,
    letterSpacing: 0.8,
  },
  sectionContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 16,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f8f8f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  glyphText: {
    fontSize: 16,
    color: '#111',
  },
  menuItemText: {
    fontSize: 15,
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
    marginLeft: 66,
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
    paddingHorizontal: 12,
    borderRadius: 36,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#f0f0f2',
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
