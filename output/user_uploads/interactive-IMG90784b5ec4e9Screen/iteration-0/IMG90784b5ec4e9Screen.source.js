import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function IMG90784b5ec4e9Screen() {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <View style={styles.proButton}>
          <Text style={styles.proText}>⚡ PRO Start</Text>
        </View>
        <Text style={styles.dotsText}>•••</Text>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <View style={styles.newBadge}>
          <Text style={styles.newBadgeText}>NEW</Text>
        </View>
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerTitle}>Overslept AGAIN?</Text>
          <Text style={styles.bannerSubtitle}>Try our new mission</Text>
        </View>
        <Text style={styles.arrowText}>›</Text>
      </View>

      {/* Subheader */}
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>Ring in 26min</Text>
        <Text style={styles.subHeaderArrow}>›</Text>
      </View>

      {/* Alarm List */}
      <View style={styles.alarmList}>
        {/* Alarm 1 */}
        <View style={styles.alarmCard}>
          <View>
            <Text style={styles.alarmType}>One-time</Text>
            <View style={styles.timeRow}>
              <Text style={[styles.alarmTime, styles.inactiveText]}>8:45</Text>
              <Text style={[styles.alarmAmPm, styles.inactiveText]}>am</Text>
            </View>
          </View>
          <View style={styles.alarmRight}>
            <View style={styles.toggleOff}>
              <View style={styles.toggleThumbOff} />
            </View>
            <Text style={styles.dotsVertical}>⋮</Text>
          </View>
        </View>

        {/* Alarm 2 */}
        <View style={styles.alarmCard}>
          <View>
            <Text style={styles.alarmType}>One-time</Text>
            <View style={styles.timeRow}>
              <Text style={[styles.alarmTime, styles.inactiveText]}>9:00</Text>
              <Text style={[styles.alarmAmPm, styles.inactiveText]}>am</Text>
            </View>
          </View>
          <View style={styles.alarmRight}>
            <View style={styles.toggleOff}>
              <View style={styles.toggleThumbOff} />
            </View>
            <Text style={styles.dotsVertical}>⋮</Text>
          </View>
        </View>

        {/* Alarm 3 */}
        <View style={styles.alarmCard}>
          <View>
            <Text style={styles.alarmType}>One-time</Text>
            <View style={styles.timeRow}>
              <Text style={styles.alarmTime}>9:00</Text>
              <Text style={styles.alarmAmPm}>am</Text>
            </View>
          </View>
          <View style={styles.alarmRight}>
            <View style={styles.toggleOn}>
              <View style={styles.toggleThumbOn} />
            </View>
            <Text style={styles.dotsVertical}>⋮</Text>
          </View>
        </View>

        {/* Alarm 4 */}
        <View style={styles.alarmCard}>
          <View>
            <Text style={styles.alarmType}>One-time</Text>
            <View style={styles.timeRow}>
              <Text style={styles.alarmTime}>9:15</Text>
              <Text style={styles.alarmAmPm}>am</Text>
            </View>
          </View>
          <View style={styles.alarmRight}>
            <View style={styles.toggleOn}>
              <View style={styles.toggleThumbOn} />
            </View>
            <Text style={styles.dotsVertical}>⋮</Text>
          </View>
        </View>
      </View>

      {/* Floating Action Button */}
      <View style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <View style={[styles.navItem, styles.navItemActive]}>
          <Text style={styles.navIconActive}>⏰</Text>
          <Text style={styles.navTextActive}>Alarm</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🌙</Text>
          <Text style={styles.navText}>Sleep</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>☀️</Text>
          <Text style={styles.navText}>Morning</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>📊</Text>
          <Text style={styles.navText}>Report</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>⚙️</Text>
          <Text style={styles.navText}>Setting</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 742,
    backgroundColor: '#18171c',
    flex: 1,
    position: 'relative',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    height: 50,
  },
  proButton: {
    backgroundColor: '#272228',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e94443',
  },
  proText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  dotsText: {
    color: '#ffffff',
    fontSize: 18,
    letterSpacing: 2,
  },
  banner: {
    backgroundColor: '#222126',
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  newBadge: {
    backgroundColor: '#e94443',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 12,
  },
  newBadgeText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bannerSubtitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 2,
  },
  arrowText: {
    color: '#ffffff',
    fontSize: 24,
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  subHeaderText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subHeaderArrow: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  alarmList: {
    paddingHorizontal: 16,
  },
  alarmCard: {
    backgroundColor: '#222126',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    height: 100,
  },
  alarmType: {
    color: '#69686e',
    fontSize: 13,
    marginBottom: 4,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  alarmTime: {
    color: '#ffffff',
    fontSize: 38,
    fontWeight: '300',
    letterSpacing: -1,
  },
  alarmAmPm: {
    color: '#ffffff',
    fontSize: 16,
    marginLeft: 4,
  },
  inactiveText: {
    color: '#525254',
  },
  alarmRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: '100%',
  },
  toggleOff: {
    width: 50,
    height: 30,
    backgroundColor: '#3b3a40',
    borderRadius: 15,
    padding: 2,
    justifyContent: 'center',
  },
  toggleThumbOff: {
    width: 26,
    height: 26,
    backgroundColor: '#ffffff',
    borderRadius: 13,
  },
  toggleOn: {
    width: 50,
    height: 30,
    backgroundColor: '#43b3ae',
    borderRadius: 15,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  toggleThumbOn: {
    width: 26,
    height: 26,
    backgroundColor: '#ffffff',
    borderRadius: 13,
  },
  dotsVertical: {
    color: '#69686e',
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    right: 32,
    bottom: 90,
    width: 56,
    height: 56,
    backgroundColor: '#e84653',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  fabText: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '300',
    marginTop: -2,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    backgroundColor: '#201f24',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#2b2a30',
    paddingHorizontal: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navItemActive: {
    backgroundColor: '#323137',
    borderRadius: 20,
    paddingVertical: 6,
  },
  navIcon: {
    fontSize: 18,
    color: '#8b8a91',
  },
  navIconActive: {
    fontSize: 18,
    color: '#ffffff',
  },
  navText: {
    fontSize: 10,
    color: '#8b8a91',
    marginTop: 2,
  },
  navTextActive: {
    fontSize: 10,
    color: '#ffffff',
    marginTop: 2,
    fontWeight: 'bold',
  },
});
