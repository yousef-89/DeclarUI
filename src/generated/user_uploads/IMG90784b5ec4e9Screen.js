import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const IMG90784b5ec4e9Screen = () => {
  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <View style={styles.proBadge}>
          <Text style={styles.proIcon}>⚡</Text>
          <Text style={styles.proText}>PRO Start</Text>
        </View>
        <Text style={styles.dots}>•••</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Banner Card */}
        <View style={styles.bannerCard}>
          <View style={styles.bannerLeft}>
            <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>NEW</Text>
            </View>
            <View style={styles.bannerTextContainer}>
              <Text style={styles.bannerSubtitle}>Overslept AGAIN?</Text>
              <Text style={styles.bannerTitle}>Try our new mission</Text>
            </View>
          </View>
          <Text style={styles.chevron}>›</Text>
        </View>

        {/* Ring in section */}
        <View style={styles.ringSection}>
          <Text style={styles.ringText}>Ring in 26min</Text>
          <Text style={styles.ringChevron}>›</Text>
        </View>

        {/* Alarm Card 1 */}
        <View style={styles.alarmCard}>
          <View>
            <Text style={styles.alarmType}>One-time</Text>
            <View style={styles.timeRow}>
              <Text style={[styles.alarmTime, styles.dimmedTime]}>8:45</Text>
              <Text style={[styles.alarmAmPm, styles.dimmedAmPm]}>am</Text>
            </View>
          </View>
          <View style={styles.alarmRight}>
            <View style={styles.switchTrackOff}>
              <View style={styles.switchThumb} />
            </View>
            <Text style={styles.verticalDots}>⋮</Text>
          </View>
        </View>

        {/* Alarm Card 2 */}
        <View style={styles.alarmCard}>
          <View>
            <Text style={styles.alarmType}>One-time</Text>
            <View style={styles.timeRow}>
              <Text style={[styles.alarmTime, styles.dimmedTime]}>9:00</Text>
              <Text style={[styles.alarmAmPm, styles.dimmedAmPm]}>am</Text>
            </View>
          </View>
          <View style={styles.alarmRight}>
            <View style={styles.switchTrackOff}>
              <View style={styles.switchThumb} />
            </View>
            <Text style={styles.verticalDots}>⋮</Text>
          </View>
        </View>

        {/* Alarm Card 3 (Active) */}
        <View style={styles.alarmCard}>
          <View>
            <Text style={styles.alarmType}>One-time</Text>
            <View style={styles.timeRow}>
              <Text style={styles.alarmTime}>9:00</Text>
              <Text style={styles.alarmAmPm}>am</Text>
            </View>
          </View>
          <View style={styles.alarmRight}>
            <View style={styles.switchTrackOn}>
              <View style={styles.switchThumbOn} />
            </View>
            <Text style={styles.verticalDots}>⋮</Text>
          </View>
        </View>

        {/* Alarm Card 4 (Active) */}
        <View style={[styles.alarmCard, { marginBottom: 90 }]}>
          <View>
            <Text style={styles.alarmType}>One-time</Text>
            <View style={styles.timeRow}>
              <Text style={styles.alarmTime}>9:15</Text>
              <Text style={styles.alarmAmPm}>am</Text>
            </View>
          </View>
          <View style={styles.alarmRight}>
            <View style={styles.switchTrackOn}>
              <View style={styles.switchThumbOn} />
            </View>
            <Text style={styles.verticalDots}>⋮</Text>
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <View style={styles.fab}>
        <Text style={styles.fabIcon}>+</Text>
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
          <Text style={styles.navIcon}>🔆</Text>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a192f', // Requested blue background
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  proBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1b2a47',
    borderWidth: 1,
    borderColor: '#ff4b4b',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  proIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  proText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  dots: {
    color: '#8b9bb4',
    fontSize: 18,
    letterSpacing: 2,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  bannerCard: {
    backgroundColor: '#112240',
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  bannerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  newBadge: {
    backgroundColor: '#ff4b4b',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginRight: 14,
  },
  newBadgeText: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: 'bold',
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerSubtitle: {
    color: '#8b9bb4',
    fontSize: 13,
    marginBottom: 2,
  },
  bannerTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  chevron: {
    color: '#8b9bb4',
    fontSize: 24,
    fontWeight: '300',
  },
  ringSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ringText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 4,
  },
  ringChevron: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  alarmCard: {
    backgroundColor: '#112240',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  alarmType: {
    color: '#8b9bb4',
    fontSize: 13,
    marginBottom: 6,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  alarmTime: {
    color: '#ffffff',
    fontSize: 42,
    fontWeight: '300',
    letterSpacing: -1,
  },
  alarmAmPm: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 4,
  },
  dimmedTime: {
    color: '#486581',
  },
  dimmedAmPm: {
    color: '#486581',
  },
  alarmRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchTrackOff: {
    width: 52,
    height: 32,
    backgroundColor: '#1b2a47',
    borderRadius: 16,
    padding: 2,
    justifyContent: 'center',
    marginRight: 12,
  },
  switchThumb: {
    width: 28,
    height: 28,
    backgroundColor: '#486581',
    borderRadius: 14,
  },
  switchTrackOn: {
    width: 52,
    height: 32,
    backgroundColor: '#00b4d8',
    borderRadius: 16,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 12,
  },
  switchThumbOn: {
    width: 28,
    height: 28,
    backgroundColor: '#ffffff',
    borderRadius: 14,
  },
  verticalDots: {
    color: '#486581',
    fontSize: 18,
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 100,
    width: 56,
    height: 56,
    backgroundColor: '#ff4b4b',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  fabIcon: {
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
    height: 80,
    backgroundColor: '#112240',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  navItemActive: {
    backgroundColor: '#1b2a47',
    borderRadius: 20,
  },
  navIcon: {
    fontSize: 18,
    marginBottom: 2,
    opacity: 0.6,
  },
  navIconActive: {
    fontSize: 18,
    marginBottom: 2,
  },
  navText: {
    color: '#8b9bb4',
    fontSize: 11,
  },
  navTextActive: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '600',
  },
});

export default IMG90784b5ec4e9Screen;
