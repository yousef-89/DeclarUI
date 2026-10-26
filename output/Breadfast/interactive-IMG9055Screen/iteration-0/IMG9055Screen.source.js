import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Svg, Path, Rect, Circle } from 'react-native-svg';

export default function IMG9055Screen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>yousef Samy</Text>
          <View style={styles.qrButton}>
            <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
              <Path
                d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"
                stroke="#d32f54"
                strokeWidth={1.5}
              />
            </Svg>
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
            <View style={styles.cardMockup} />
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
                <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    stroke="#111"
                    strokeWidth={1.8}
                  />
                </Svg>
              </View>
              <Text style={styles.menuItemText}>Favorites</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </View>

          <View style={styles.menuDivider} />

          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.iconCircle}>
                <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M20 12v10H4V12M2 7h20v5H2V7zm10-4v4m-5 0h10"
                    stroke="#111"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
              </View>
              <Text style={styles.menuItemText}>Invite a friend</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </View>

          <View style={styles.menuDivider} />

          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.iconCircle}>
                <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    stroke="#111"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
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
                <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M12 15a3 3 0 100-6 3 3 0 000 6z"
                    stroke="#111"
                    strokeWidth={1.8}
                  />
                  <Path
                    d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
                    stroke="#111"
                    strokeWidth={1.8}
                  />
                </Svg>
              </View>
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </View>

          <View style={styles.menuDivider} />

          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.iconCircle}>
                <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
                    stroke="#111"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
              </View>
              <Text style={styles.menuItemText}>Chat with us</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </View>

          <View style={styles.menuDivider} />

          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={styles.iconCircle}>
                <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                  <Circle cx={12} cy={12} r={9} stroke="#111" strokeWidth={1.8} />
                  <Path
                    d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01"
                    stroke="#111"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
              </View>
              <Text style={styles.menuItemText}>Help</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </View>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Path
              d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              stroke="#666"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M9 22V12h6v10"
              stroke="#666"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
          <Text style={styles.navLabel}>Home</Text>
        </View>

        <View style={styles.navItem}>
          <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Path
              d="M9 20a1 1 0 100 2 1 1 0 000-2zm7 0a1 1 0 100 2 1 1 0 000-2zm-9.5-4h13.24a1 1 0 00.97-.76l1.52-6.5A1 1 0 0021.28 8H6.51M5.5 4H2"
              stroke="#666"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
          <Text style={styles.navLabel}>Cart</Text>
        </View>

        <View style={styles.navItem}>
          <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Rect x={2} y={5} width={20} height={14} rx={2} stroke="#666" strokeWidth={1.8} />
            <Path d="M2 10h20" stroke="#666" strokeWidth={1.8} />
          </Svg>
          <Text style={styles.navLabel}>Pay</Text>
        </View>

        <View style={styles.activeNavItem}>
          <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Path
              d="M3 12h18M3 6h18M3 18h18"
              stroke="#d32f54"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
          <Text style={styles.activeNavLabel}>More</Text>
        </View>

        <View style={styles.navItem}>
          <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Circle cx={11} cy={11} r={8} stroke="#666" strokeWidth={1.8} />
            <Path d="M21 21l-4.35-4.35" stroke="#666" strokeWidth={1.8} strokeLinecap="round" />
          </Svg>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f8',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111',
  },
  qrButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  banner: {
    backgroundColor: '#5b2d49',
    borderRadius: 16,
    flexDirection: 'row',
    padding: 16,
    overflow: 'hidden',
    height: 120,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '750',
    lineHeight: 22,
  },
  bannerSubtitle: {
    color: '#e0b3cd',
    fontSize: 11,
    marginTop: 8,
    fontWeight: '500',
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
    width: 60,
    height: 38,
    backgroundColor: '#333',
    borderRadius: 6,
    left: 0,
    top: 25,
    transform: [{ rotate: '-10deg' }],
    borderWidth: 1,
    borderColor: '#555',
  },
  bagMockup: {
    position: 'absolute',
    width: 55,
    height: 65,
    backgroundColor: '#d946a0',
    borderRadius: 6,
    right: 5,
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '8deg' }],
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
    color: '#d946a0',
    fontWeight: 'bold',
    fontSize: 14,
  },
  topCardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  topCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    width: '48%',
    height: 100,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  cardIconBox: {
    width: 28,
    height: 34,
    backgroundColor: '#fbece8',
    borderRadius: 6,
    padding: 5,
    justifyContent: 'space-around',
  },
  receiptLine: {
    height: 2,
    backgroundColor: '#e65c3b',
    borderRadius: 1,
    width: '100%',
  },
  receiptLineShort: {
    height: 2,
    backgroundColor: '#e65c3b',
    borderRadius: 1,
    width: '60%',
  },
  rewardsIconBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fcd3e1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rewardsIconText: {
    color: '#d32f54',
    fontWeight: 'bold',
    fontSize: 16,
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
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '700',
    color: '#888',
    marginBottom: 8,
    marginLeft: 4,
    letterSpacing: 0.5,
  },
  sectionContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
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
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f7f7f8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
  },
  chevron: {
    fontSize: 20,
    color: '#c7c7cc',
    fontWeight: '300',
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#f0f0f2',
    marginLeft: 60,
  },
  bottomSpacer: {
    height: 20,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navLabel: {
    fontSize: 10,
    color: '#666',
    marginTop: 4,
  },
  activeNavItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#f3e6ea',
    paddingVertical: 6,
    borderRadius: 20,
    marginHorizontal: 6,
  },
  activeNavLabel: {
    fontSize: 10,
    color: '#d32f54',
    fontWeight: 'bold',
    marginTop: 2,
  },
});
