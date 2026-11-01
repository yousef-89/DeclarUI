import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IMG905909d69872Screen = () => {
  return (
    <View style={styles.container}>
      {/* Top Navigation / Status Bar */}
      <View style={styles.header}>
        {/* Flag & Number */}
        <View style={styles.headerItem}>
          <View style={styles.flag}>
            <View style={styles.flagStripeBlack} />
            <View style={styles.flagStripeRed} />
            <View style={styles.flagStripeGold} />
          </View>
          <Text style={styles.headerText}>9</Text>
        </View>

        {/* Fire / Streak */}
        <View style={styles.headerItem}>
          <View style={styles.streakFlame}>
            <View style={styles.flameInner} />
          </View>
          <Text style={styles.headerText}>0</Text>
        </View>

        {/* Gems */}
        <View style={styles.headerItem}>
          <View style={styles.gemIcon}>
            <View style={styles.gemDot} />
          </View>
          <Text style={styles.headerTextBlue}>2662</Text>
        </View>

        {/* Lightning / Hearts */}
        <View style={styles.headerItem}>
          <View style={styles.heartIcon}>
            <View style={styles.lightningBolt} />
          </View>
          <Text style={styles.headerTextPink}>25</Text>
        </View>
      </View>

      {/* Section Banner */}
      <View style={styles.sectionBanner}>
        <View style={styles.sectionBannerCard}>
          <Text style={styles.sectionSubtitle}>SECTION 1, EXTRA UNIT 1</Text>
          <Text style={styles.sectionTitle}>Course update: Learn new words</Text>
        </View>
      </View>

      {/* Path Area */}
      <View style={styles.pathContainer}>
        {/* Left avatar badge */}
        <View style={styles.avatarBadge}>
          <View style={styles.avatarHead}>
            <View style={styles.witchHat}>
              <View style={styles.witchHatBrim} />
              <View style={styles.witchHatTop} />
            </View>
          </View>
          <View style={styles.badgeLabel}>
            <Text style={styles.badgeText}>29 days</Text>
          </View>
        </View>

        {/* Path nodes curving right and left */}
        <View style={styles.nodeWrapperTopRight}>
          <View style={styles.nodeCircleLarge}>
            <View style={styles.starIcon}>
              <View style={styles.starShape} />
            </View>
          </View>
        </View>

        <View style={styles.nodeWrapperMidRight}>
          <View style={styles.nodeCircleMedium}>
            <View style={styles.starIconSmall}>
              <View style={styles.starShapeSmall} />
            </View>
          </View>
        </View>

        <View style={styles.nodeWrapperMidLeft}>
          <View style={styles.nodeCircleActive}>
            <View style={styles.dumbbellIcon}>
              <View style={styles.dumbbellBar} />
            </View>
          </View>
        </View>

        <View style={styles.nodeWrapperChest}>
          <View style={styles.chestBox}>
            <View style={styles.chestLid} />
            <View style={styles.chestLock} />
          </View>
        </View>

        <View style={styles.nodeWrapperLock1}>
          <View style={styles.nodeCircleLocked}>
            <View style={styles.lockBody}>
              <View style={styles.lockShackle} />
            </View>
          </View>
        </View>

        <View style={styles.nodeWrapperLock2}>
          <View style={styles.nodeCircleLocked}>
            <View style={styles.lockBody}>
              <View style={styles.lockShackle} />
            </View>
          </View>
        </View>

        <View style={styles.nodeWrapperLock3}>
          <View style={styles.nodeCircleLocked}>
            <View style={styles.lockBody}>
              <View style={styles.lockShackle} />
            </View>
          </View>
        </View>
      </View>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        {/* Tab 1: Home (Active) */}
        <View style={styles.tabItemActive}>
          <View style={styles.tabHomeHouse}>
            <View style={styles.tabRoof} />
            <View style={styles.tabBase} />
            <View style={styles.tabDoor} />
          </View>
        </View>

        {/* Tab 2: Chest */}
        <View style={styles.tabItem}>
          <View style={styles.tabChestIcon}>
            <View style={styles.tabChestLid} />
          </View>
        </View>

        {/* Tab 3: Target/Shield */}
        <View style={styles.tabItem}>
          <View style={styles.tabShieldIcon} />
        </View>

        {/* Tab 4: Heart */}
        <View style={styles.tabItem}>
          <View style={styles.tabHeartIcon} />
        </View>

        {/* Tab 5: Profile/Bird */}
        <View style={styles.tabItem}>
          <View style={styles.tabBirdIcon} />
        </View>

        {/* Tab 6: Dots */}
        <View style={styles.tabItem}>
          <View style={styles.tabDotsIcon}>
            <View style={styles.dotSingle} />
            <View style={styles.dotSingle} />
            <View style={styles.dotSingle} />
            <View style={styles.dotRedBadge} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131f24',
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  headerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 26,
    height: 18,
    borderRadius: 3,
    overflow: 'hidden',
    marginRight: 6,
    backgroundColor: '#000',
  },
  flagStripeBlack: {
    height: '33.3%',
    backgroundColor: '#000000',
  },
  flagStripeRed: {
    height: '33.3%',
    backgroundColor: '#dd0000',
  },
  flagStripeGold: {
    height: '33.3%',
    backgroundColor: '#ffcc00',
  },
  streakFlame: {
    width: 24,
    height: 24,
    backgroundColor: '#2b3f4a',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  flameInner: {
    width: 10,
    height: 14,
    backgroundColor: '#778893',
    borderRadius: 5,
  },
  gemIcon: {
    width: 24,
    height: 22,
    backgroundColor: '#1cb0f6',
    borderRadius: 6,
    marginRight: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gemDot: {
    width: 10,
    height: 10,
    backgroundColor: '#ffffff',
    transform: [{ rotate: '45deg' }],
  },
  heartIcon: {
    width: 24,
    height: 22,
    backgroundColor: '#ff4b4b',
    borderRadius: 12,
    marginRight: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightningBolt: {
    width: 8,
    height: 13,
    backgroundColor: '#ffffff',
    borderRadius: 2,
  },
  headerText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  headerTextBlue: {
    color: '#1cb0f6',
    fontWeight: 'bold',
    fontSize: 15,
  },
  headerTextPink: {
    color: '#ff4b4b',
    fontWeight: 'bold',
    fontSize: 15,
  },
  sectionBanner: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  sectionBannerCard: {
    backgroundColor: '#1cb0f6',
    borderRadius: 16,
    padding: 16,
  },
  sectionSubtitle: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pathContainer: {
    flex: 1,
    position: 'relative',
    marginTop: 10,
  },
  avatarBadge: {
    position: 'absolute',
    top: 10,
    left: 48,
    alignItems: 'center',
  },
  avatarHead: {
    width: 54,
    height: 54,
    backgroundColor: '#ce82ff',
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  witchHat: {
    position: 'absolute',
    top: -16,
    alignItems: 'center',
  },
  witchHatBrim: {
    width: 44,
    height: 10,
    backgroundColor: '#381460',
    borderRadius: 5,
  },
  witchHatTop: {
    width: 24,
    height: 26,
    backgroundColor: '#4b1a82',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginTop: -4,
  },
  badgeLabel: {
    backgroundColor: '#4b1a82',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    marginTop: 6,
    borderWidth: 2,
    borderColor: '#ce82ff',
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  nodeWrapperTopRight: {
    position: 'absolute',
    top: 20,
    right: 110,
  },
  nodeCircleLarge: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#1cb0f6',
    borderBottomWidth: 6,
    borderBottomColor: '#0a8bc9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  starIcon: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  starShape: {
    width: 28,
    height: 28,
    backgroundColor: '#ffffff',
    transform: [{ rotate: '45deg' }],
    borderRadius: 4,
  },
  nodeWrapperMidRight: {
    position: 'absolute',
    top: 116,
    right: 170,
  },
  nodeCircleMedium: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#1cb0f6',
    borderBottomWidth: 6,
    borderBottomColor: '#0a8bc9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  starIconSmall: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  starShapeSmall: {
    width: 24,
    height: 24,
    backgroundColor: '#ffffff',
    transform: [{ rotate: '45deg' }],
    borderRadius: 3,
  },
  nodeWrapperMidLeft: {
    position: 'absolute',
    top: 212,
    left: 140,
  },
  nodeCircleActive: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#1cb0f6',
    borderWidth: 6,
    borderColor: '#84d8ff',
    borderBottomWidth: 8,
    borderBottomColor: '#0a8bc9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dumbbellIcon: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dumbbellBar: {
    width: 32,
    height: 14,
    backgroundColor: '#ffffff',
    borderRadius: 6,
  },
  nodeWrapperChest: {
    position: 'absolute',
    top: 340,
    left: 270,
  },
  chestBox: {
    width: 64,
    height: 52,
    backgroundColor: '#2b3f4a',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderBottomColor: '#1d2c35',
  },
  chestLid: {
    position: 'absolute',
    top: 0,
    width: 68,
    height: 16,
    backgroundColor: '#374d5b',
    borderRadius: 6,
  },
  chestLock: {
    width: 14,
    height: 14,
    backgroundColor: '#1d2c35',
    borderRadius: 7,
  },
  nodeWrapperLock1: {
    position: 'absolute',
    top: 450,
    left: 450,
  },
  nodeCircleLocked: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#1d2c35',
    borderBottomWidth: 6,
    borderBottomColor: '#131f24',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockBody: {
    width: 22,
    height: 20,
    backgroundColor: '#445863',
    borderRadius: 5,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockShackle: {
    position: 'absolute',
    top: -10,
    width: 14,
    height: 12,
    borderWidth: 3.5,
    borderColor: '#445863',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    backgroundColor: 'transparent',
  },
  nodeWrapperLock2: {
    position: 'absolute',
    top: 550,
    left: 490,
  },
  nodeWrapperLock3: {
    position: 'absolute',
    top: 660,
    left: 540,
  },
  tabBar: {
    height: 64,
    borderTopWidth: 2,
    borderTopColor: '#2b3f4a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#131f24',
    paddingHorizontal: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  tabItemActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderBottomWidth: 4,
    borderBottomColor: '#1cb0f6',
  },
  tabHomeHouse: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  tabRoof: {
    width: 0,
    height: 0,
    borderLeftWidth: 16,
    borderRightWidth: 16,
    borderBottomWidth: 14,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#1cb0f6',
    position: 'absolute',
    top: 2,
  },
  tabBase: {
    width: 18,
    height: 12,
    backgroundColor: '#1cb0f6',
    position: 'absolute',
    bottom: 4,
  },
  tabDoor: {
    width: 6,
    height: 8,
    backgroundColor: '#131f24',
    position: 'absolute',
    bottom: 4,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  tabChestIcon: {
    width: 26,
    height: 20,
    backgroundColor: '#ff9600',
    borderRadius: 4,
    position: 'relative',
  },
  tabChestLid: {
    position: 'absolute',
    top: -4,
    left: -2,
    right: -2,
    height: 8,
    backgroundColor: '#ffb22a',
    borderRadius: 4,
  },
  tabShieldIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#ff8200',
    borderRadius: 12,
  },
  tabHeartIcon: {
    width: 26,
    height: 24,
    backgroundColor: '#ff4b4b',
    borderRadius: 12,
  },
  tabBirdIcon: {
    width: 26,
    height: 24,
    backgroundColor: '#00cd9c',
    borderRadius: 12,
  },
  tabDotsIcon: {
    width: 28,
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  dotSingle: {
    width: 6,
    height: 6,
    backgroundColor: '#777b7e',
    borderRadius: 3,
  },
  dotRedBadge: {
    position: 'absolute',
    top: 2,
    right: 0,
    width: 8,
    height: 8,
    backgroundColor: '#ff4b4b',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#131f24',
  },
});

export default IMG905909d69872Screen;
