import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HourlyItem = ({ time, icon, temp }) => (
  <View style={styles.hourlyItem}>
    <Text style={styles.hourlyTime}>{time}</Text>
    <Text style={styles.hourlyIcon}>{icon}</Text>
    <Text style={styles.hourlyTemp}>{temp}</Text>
  </View>
);

const ForecastRow = ({ day, icon, low, high, progressWidth, progressLeft, active }) => (
  <View style={styles.forecastRow}>
    <Text style={styles.forecastDay}>{day}</Text>
    <Text style={styles.forecastIcon}>{icon}</Text>
    <Text style={styles.forecastLow}>{low}</Text>
    <View style={styles.sliderTrack}>
      <View style={[styles.sliderFill, { width: progressWidth, left: progressLeft || 0 }]} />
      {active && <View style={styles.sliderThumb} />}
    </View>
    <Text style={styles.forecastHigh}>{high}</Text>
  </View>
);

export default function IMG907976c23f15Screen() {
  return (
    <View style={styles.container}>
      {/* Background Gradient Simulation */}
      <View style={styles.bgSunGlow} />
      
      {/* Main Header */}
      <View style={styles.header}>
        <Text style={styles.myLocation}>MY LOCATION</Text>
        <Text style={styles.cityName}>Cairo</Text>
        <Text style={styles.tempMain}>19°</Text>
        <Text style={styles.conditionText}>Mostly Sunny</Text>
        <Text style={styles.highLowText}>H:25° L:16°</Text>
      </View>

      {/* Conditions Card (Hourly) */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Conditions</Text>
          <Text style={styles.cardSubtitle}>Temperature (°C)</Text>
          <View style={styles.segmentedControl}>
            <View style={styles.segmentActive}><Text style={styles.segmentIcon}>☁️</Text></View>
            <View style={styles.segment}><Text style={styles.segmentIcon}>💧</Text></View>
            <View style={styles.segment}><Text style={styles.segmentIcon}>🌬️</Text></View>
          </View>
        </View>

        <View style={styles.hourlyContainer}>
          <HourlyItem time="Now" icon="☀️" temp="19°" />
          <HourlyItem time="9AM" icon="☀️" temp="20°" />
          <HourlyItem time="10AM" icon="🌤️" temp="22°" />
          <HourlyItem time="11AM" icon="🌤️" temp="24°" />
          <HourlyItem time="12PM" icon="☁️" temp="24°" />
          <HourlyItem time="1PM" icon="☁️" temp="25°" />
        </View>
      </View>

      {/* Daily Forecast Card */}
      <View style={styles.card}>
        <ForecastRow day="Today" icon="🌤️" low="16°" high="25°" progressWidth="50%" progressLeft="20%" active={true} />
        <View style={styles.divider} />
        <ForecastRow day="Wed" icon="☀️" low="16°" high="25°" progressWidth="60%" progressLeft="10%" />
        <View style={styles.divider} />
        <ForecastRow day="Thu" icon="☀️" low="16°" high="24°" progressWidth="55%" progressLeft="15%" />
        <View style={styles.divider} />
        <ForecastRow day="Fri" icon="☀️" low="14°" high="23°" progressWidth="50%" progressLeft="20%" />
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <View style={styles.navButton}>
          <Text style={styles.navIconText}>🗺️</Text>
        </View>
        <View style={styles.navSliderContainer}>
          <View style={styles.navIndicatorRow}>
            <View style={styles.navDotActive} />
            <View style={styles.navDot} />
            <View style={styles.navDot} />
            <View style={styles.navDot} />
            <View style={styles.navDot} />
          </View>
        </View>
        <View style={styles.navButton}>
          <Text style={styles.navIconText}>☰</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4a8ec9',
    paddingTop: 60,
    paddingHorizontal: 16,
    justifyContent: 'flex-start',
    position: 'relative',
    overflow: 'hidden',
  },
  bgSunGlow: {
    position: 'absolute',
    top: -50,
    left: -50,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(255, 240, 180, 0.4)',
    opacity: 0.8,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  myLocation: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 4,
    opacity: 0.9,
  },
  cityName: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '400',
    marginBottom: -4,
  },
  tempMain: {
    color: '#ffffff',
    fontSize: 88,
    fontWeight: '200',
    lineHeight: 100,
  },
  conditionText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 4,
  },
  highLowText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    opacity: 0.9,
  },
  card: {
    backgroundColor: 'rgba(53, 115, 175, 0.65)',
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  cardSubtitle: {
    color: '#d0e3f5',
    fontSize: 12,
    position: 'absolute',
    left: 0,
    top: 22,
  },
  segmentedControl: {
    flexDirection: 'row',
    backgroundColor: 'rgba(25, 65, 110, 0.4)',
    borderRadius: 16,
    padding: 2,
  },
  segment: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentIcon: {
    fontSize: 14,
  },
  hourlyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  hourlyItem: {
    alignItems: 'center',
  },
  hourlyTime: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 10,
    opacity: 0.9,
  },
  hourlyIcon: {
    fontSize: 22,
    marginBottom: 12,
  },
  hourlyTemp: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  forecastRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  forecastDay: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    width: 65,
  },
  forecastIcon: {
    fontSize: 18,
    width: 35,
    textAlign: 'center',
  },
  forecastLow: {
    color: '#d0e3f5',
    fontSize: 16,
    fontWeight: '500',
    width: 45,
    textAlign: 'right',
    marginRight: 10,
  },
  forecastHigh: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    width: 45,
    textAlign: 'left',
    marginLeft: 10,
  },
  sliderTrack: {
    flex: 1,
    height: 6,
    backgroundColor: 'rgba(15, 45, 80, 0.4)',
    borderRadius: 3,
    position: 'relative',
    justifyContent: 'center',
  },
  sliderFill: {
    height: 6,
    backgroundColor: '#f5be31',
    borderRadius: 3,
    position: 'absolute',
  },
  sliderThumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    position: 'absolute',
    left: '50%',
    marginLeft: -5,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    width: '100%',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    paddingHorizontal: 4,
  },
  navButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(53, 115, 175, 0.65)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIconText: {
    fontSize: 18,
  },
  navSliderContainer: {
    flex: 1,
    height: 44,
    backgroundColor: 'rgba(53, 115, 175, 0.65)',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    marginHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  navIndicatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  navDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  navDotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },
});
