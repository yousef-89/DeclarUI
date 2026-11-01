import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from '../generated-icon';

export default function IMG9055Screen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>yousef Samy</Text>
          <View style={styles.qrButton}>
            <Icon name="grid" size={18} color="#97227d" />
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
              <Icon name="file-text" size={20} color="#c95188" />
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
                <Icon name="heart" size={18} color="#232323" />
              </View>
              <Text style={styles.menuItemText}>Favorites</Text>
            </View>
            <Icon name="chevron-right" size={18} color="#737373" />
          </View>

          <View style={styles.menuDivider} />

          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.iconCircle}>
                <Icon name="gift" size={18} color="#212121" />
              </View>
              <Text style={styles.menuItemText}>Invite a friend</Text>
            </View>
            <Icon name="chevron-right" size={18} color="#7b7b7b" />
          </View>

          <View style={styles.menuDivider} />

          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.iconCircle}>
                <Icon name="package" size={18} color="#050505" />
              </View>
              <Text style={styles.menuItemText}>BundleUp</Text>
            </View>
            <Icon name="chevron-right" size={18} color="#767676" />
          </View>
        </View>

        {/* Section: ACCOUNT */}
        <Text style={styles.sectionHeader}>ACCOUNT</Text>
        <View style={styles.sectionContainer}>
          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.iconCircle}>
                <Icon name="settings" size={18} color="#242424" />
              </View>
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
            <Icon name="chevron-right" size={18} color="#737373" />
          </View>

          <View style={styles.menuDivider} />

          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.iconCircle}>
                <Icon name="message-circle" size={18} color="#222222" />
              </View>
              <Text style={styles.menuItemText}>Chat with us</Text>
            </View>
            <Icon name="chevron-right" size={18} color="#777777" />
          </View>

          <View style={styles.menuDivider} />

          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.iconCircle}>
                <Icon name="help-circle" size={18} color="#262626" />
              </View>
              <Text style={styles.menuItemText}>Help</Text>
            </View>
            <Icon name="chevron-right" size={18} color="#7d7d7d" />
          </View>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Floating Bottom Navigation */}
      <View style={styles.floatingNavWrapper}>
        <View style={styles.bottomNav}>
          <View style={styles.navItem}>
            <Icon name="home" size={20} color="#717173" />
            <Text style={styles.navLabel}>Home</Text>
          </View>

          <View style={styles.navItem}>
            <Icon name="shopping-cart" size={20} color="#747474" />
            <Text style={styles.navLabel}>Cart</Text>
          </View>

          <View style={styles.navItem}>
            <Icon name="credit-card" size={20} color="#737373" />
            <Text style={styles.navLabel}>Pay</Text>
          </View>

          <View style={styles.activeNavItem}>
            <Icon name="menu" size={18} color="#292929" />
            <Text style={styles.activeNavLabel}>More</Text>
          </View>

          <View style={styles.searchNavItem}>
            <Icon name="search" size={20} color="#717172" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    paddingHorizontal: 15,
    paddingTop: 16,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#212121',
  },
  qrButton: {
    width: 34,
    height: 34,
    borderRadius: 16,
    backgroundColor: '#f7eaf3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    backgroundColor: '#7c336a',
    borderRadius: 16,
    flexDirection: 'row',
    padding: 16,
    overflow: 'hidden',
    height: 72,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bannerTitle: {
    color: '#ffffff',
    fontSize: 13.5,
    fontWeight: '700',
    lineHeight: 18,
  },
  bannerSubtitle: {
    color: '#ffffff',
    fontSize: 10,
    marginTop: 3,
    fontWeight: '400',
    opacity: 0.9,
  },
  bannerGraphic: {
    width: 120,
    height: 72,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardMockup: {
    position: 'absolute',
    width: 65,
    height: 42,
    backgroundColor: '#262427',
    borderRadius: 5,
    left: 10,
    top: 15,
    transform: [{ rotate: '-10deg' }],
    borderWidth: 1,
    borderColor: '#444',
    padding: 5,
    justifyContent: 'space-between',
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardChip: {
    width: 8,
    height: 6,
    backgroundColor: '#d4af37',
    borderRadius: 1,
  },
  cardBrandText: {
    color: '#fff',
    fontSize: 5,
    fontWeight: 'bold',
  },
  cardSubText: {
    color: '#aaa',
    fontSize: 4,
    fontWeight: '600',
  },
  bagMockup: {
    position: 'absolute',
    width: 55,
    height: 62,
    backgroundColor: '#d842a2',
    borderRadius: 8,
    right: 5,
    top: 5,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '6deg' }],
  },
  bagLogo: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bagLogoText: {
    color: '#d842a2',
    fontWeight: '900',
    fontSize: 14,
  },
  topCardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  topCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 16,
    width: '48%',
    height: 108,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  cardIconBox: {
    width: 36,
    height: 36,
    backgroundColor: '#fbece8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rewardsIconBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fcd3e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rewardsIconText: {
    color: '#c95188',
    fontWeight: '900',
    fontSize: 16,
  },
  topCardTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#212121',
  },
  topCardSubtitle: {
    fontSize: 10.5,
    color: '#7e7e7f',
    marginTop: 1,
    fontWeight: '400',
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '600',
    color: '#7e7e7f',
    marginBottom: 8,
    marginLeft: 4,
  },
  sectionContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#f7f7f8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#212121',
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#f0f0f2',
    marginLeft: 64,
  },
  bottomSpacer: {
    height: 20,
  },
  floatingNavWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  bottomNav: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 28,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
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
  navLabel: {
    fontSize: 9.5,
    color: '#717173',
    marginTop: 2,
    fontWeight: '500',
  },
  activeNavItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e1e3',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 24,
    flexDirection: 'row',
  },
  activeNavLabel: {
    fontSize: 11,
    color: '#292929',
    fontWeight: '600',
    marginLeft: 4,
  },
  searchNavItem: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dadada',
  },
});
