import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from '../generated-icon';

export default function IMG90784b5ec4e9Screen() {
  const [alarms, setAlarms] = useState([
    { id: 1, type: 'One-time', time: '8:45', ampm: 'am', active: false },
    { id: 2, type: 'One-time', time: '9:00', ampm: 'am', active: false },
    { id: 3, type: 'One-time', time: '9:00', ampm: 'am', active: true },
    { id: 4, type: 'One-time', time: '9:15', ampm: 'am', active: true },
  ]);

  const [activeTab, setActiveTab] = useState('Alarm');

  const toggleAlarm = (id) => {
    setAlarms(alarms.map(a => a.id === id ? { ...a, active: !a.active } : a));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <View style={styles.proButton}>
            <Icon name="zap" size={14} color="#f06292" style={styles.proIcon} />
            <Text style={styles.proText}>PRO Start</Text>
          </View>
          <TouchableOpacity style={styles.dotsButton}>
            <Icon name="more-horizontal" size={18} color="#ffffff" />
          </TouchableOpacity>
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
          <Icon name="chevron-right" size={20} color="#ffffff" />
        </View>

        {/* Subheader */}
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>Ring in 26min</Text>
          <Icon name="chevron-right" size={20} color="#ffffff" style={styles.subHeaderArrowIcon} />
        </View>

        {/* Alarm List */}
        <View style={styles.alarmList}>
          {alarms.map((alarm) => (
            <View key={alarm.id} style={styles.alarmCard}>
              <View style={styles.alarmLeftContent}>
                <Text style={[styles.alarmType, alarm.active && styles.activeAlarmType]}>
                  {alarm.type}
                </Text>
                <View style={styles.timeRow}>
                  <Text style={[styles.alarmTime, !alarm.active && styles.inactiveText]}>
                    {alarm.time}
                  </Text>
                  <Text style={[styles.alarmAmPm, !alarm.active && styles.inactiveText]}>
                    {alarm.ampm}
                  </Text>
                </View>
              </View>
              <View style={styles.alarmRight}>
                <TouchableOpacity 
                  activeOpacity={0.8} 
                  onPress={() => toggleAlarm(alarm.id)}
                  style={[styles.toggle, alarm.active ? styles.toggleOn : styles.toggleOff]}
                >
                  <View style={[styles.toggleThumb, alarm.active ? styles.toggleThumbOn : styles.toggleThumbOff]} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.dotsVerticalContainer}>
                  <Icon name="more-vertical" size={14} color="#69686e" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.9}>
        <Icon name="plus" size={26} color="#ffffff" />
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomNav}>
          <TouchableOpacity 
            style={[styles.tabItem, activeTab === 'Alarm' && styles.tabItemActive]}
            onPress={() => setActiveTab('Alarm')}
          >
            <Icon name="clock" size={20} color={activeTab === 'Alarm' ? '#ffffff' : '#8b8a91'} />
            <Text style={[styles.tabText, activeTab === 'Alarm' && styles.tabTextActive]}>Alarm</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tabItem, activeTab === 'Sleep' && styles.tabItemActive]}
            onPress={() => setActiveTab('Sleep')}
          >
            <Icon name="moon" size={20} color={activeTab === 'Sleep' ? '#ffffff' : '#8b8a91'} />
            <Text style={[styles.tabText, activeTab === 'Sleep' && styles.tabTextActive]}>Sleep</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tabItem, activeTab === 'Morning' && styles.tabItemActive]}
            onPress={() => setActiveTab('Morning')}
          >
            <Icon name="sun" size={20} color={activeTab === 'Morning' ? '#ffffff' : '#8b8a91'} />
            <Text style={[styles.tabText, activeTab === 'Morning' && styles.tabTextActive]}>Morning</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tabItem, activeTab === 'Report' && styles.tabItemActive]}
            onPress={() => setActiveTab('Report')}
          >
            <Icon name="file-text" size={20} color={activeTab === 'Report' ? '#ffffff' : '#8b8a91'} />
            <Text style={[styles.tabText, activeTab === 'Report' && styles.tabTextActive]}>Report</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tabItem, activeTab === 'Setting' && styles.tabItemActive]}
            onPress={() => setActiveTab('Setting')}
          >
            <Icon name="settings" size={20} color={activeTab === 'Setting' ? '#ffffff' : '#8b8a91'} />
            <Text style={[styles.tabText, activeTab === 'Setting' && styles.tabTextActive]}>Setting</Text>
          </TouchableOpacity>
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
  scrollContent: {
    paddingTop: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 44,
    marginTop: 4,
  },
  proButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#241f26',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e94443',
  },
  proIcon: {
    marginRight: 4,
  },
  proText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  dotsButton: {
    padding: 4,
  },
  banner: {
    backgroundColor: '#222126',
    marginHorizontal: 16,
    marginTop: 14,
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  newBadge: {
    backgroundColor: '#e94443',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 12,
  },
  newBadgeText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 11,
    letterSpacing: 0.5,
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerTitle: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
    opacity: 0.9,
  },
  bannerSubtitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 1,
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 12,
  },
  subHeaderText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subHeaderArrowIcon: {
    marginLeft: 2,
    marginTop: 2,
  },
  alarmList: {
    paddingHorizontal: 16,
  },
  alarmCard: {
    backgroundColor: '#222126',
    borderRadius: 22,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    height: 104,
  },
  alarmLeftContent: {
    justifyContent: 'center',
  },
  alarmType: {
    color: '#ffffff',
    fontSize: 12,
    marginBottom: 2,
    fontWeight: '500',
  },
  activeAlarmType: {
    color: '#ffffff',
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  alarmTime: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: '300',
    letterSpacing: -1,
  },
  alarmAmPm: {
    color: '#ffffff',
    fontSize: 15,
    marginLeft: 3,
    fontWeight: '400',
  },
  inactiveText: {
    color: '#525254',
  },
  alarmRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: '100%',
    paddingVertical: 2,
  },
  toggle: {
    width: 51,
    height: 31,
    borderRadius: 16,
    padding: 2,
    justifyContent: 'center',
  },
  toggleOff: {
    backgroundColor: '#3b3a40',
  },
  toggleOn: {
    backgroundColor: '#43b3ae',
    alignItems: 'flex-end',
  },
  toggleThumb: {
    width: 27,
    height: 27,
    backgroundColor: '#ffffff',
    borderRadius: 14,
  },
  toggleThumbOff: {
    transform: [{ translateX: 0 }],
  },
  toggleThumbOn: {
    transform: [{ translateX: 0 }],
  },
  dotsVerticalContainer: {
    padding: 2,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 84,
    width: 56,
    height: 56,
    backgroundColor: '#e84653',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 8,
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 16,
    backgroundColor: 'transparent',
  },
  bottomNav: {
    width: 350,
    height: 60,
    backgroundColor: '#201f24',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: '#2b2a30',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  tabItemActive: {
    backgroundColor: '#323137',
  },
  tabText: {
    fontSize: 10,
    color: '#8b8a91',
    marginTop: 2,
  },
  tabTextActive: {
    fontSize: 10,
    color: '#ffffff',
    marginTop: 2,
    fontWeight: 'bold',
  },
});
