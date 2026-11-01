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
          <View>
            <Text style={styles.cardTitle}>Conditions</Text>
            <Text style={styles.cardSubtitle}>Temperature (°C)</Text>
          </View>
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
        <ForecastRow day="Today" icon="🌤️" low="16°" high="25°" progressWidth="36%”" progressLeft="32%" active={true} />
        <View style={styles.divider} />
        <ForecastRow day="Wed" icon="☀️" low="16°" high="25°" progressWidth="48%" progressLeft="22%" />
        <View style={styles.divider} />
        <ForecastRow day="Thu" icon="☀️" low="16°" high="24°" progressWidth="42%" progressLeft="22%" />
        <View style={styles.divider} />
        <ForecastRow day="Fri" icon="☀️" low="14°" high="23°" progressWidth="40%" progressLeft="26%" />
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
    backgroundColor: '#448ecb',
    paddingTop: 36,
    paddingHorizontal: 16,
    justifyContent: 'flex-start',
    position: 'relative',
    overflow: 'hidden',
  },
  bgSunGlow: {
    position: 'absolute',
    top: -60,
    left: -80,
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: 'rgba(255, 235, 160, 0.55)',
    opacity: 0.9,
  },
  header: {
    alignItems: 'center',
    marginBottom: 12,
  },
  myLocation: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2.5,
    marginBottom: 1,
    opacity: 0.95,
  },
  cityName: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '400',
    marginBottom: -6,
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
    marginBottom: 2,
  },
  highLowText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '500',
    opacity: 0.95,
  },
  card: {
    backgroundColor: 'rgba(42, 101, 163, 0.58)',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.22)',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
  },
  cardSubtitle: {
    color: '#b5d4f1',
    fontSize: 11,
    marginTop: 1,
  },
  segmentedControl: {
    flexDirection: 'row',
    backgroundColor: 'rgba(10, 38, 75, 0.35)',
    borderRadius: 18,
    padding: 2,
  },
  segment: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.28)',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentIcon: {
    fontSize: 13,
  },
  hourlyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    paddingHorizontal: 2,
  },
  hourlyItem: {
    alignItems: 'center',
  },
  hourlyTime: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 6,
    opacity: 0.9,
  },
  hourlyIcon: {
    fontSize: 20,
    marginBottom: 8,
  },
  hourlyTemp: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  forecastRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  forecastDay: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '500',
    width: 60,
  },
  forecastIcon: {
    fontSize: 16,
    width: 32,
    textAlign: 'center',
  },
  forecastLow: {
    color: '#b5d4f1',
    fontSize: 15,
    fontWeight: '500',
    width: 42,
    textAlign: 'right',
    marginRight: 8,
  },
  forecastHigh: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '500',
    width: 42,
    textAlign: 'left',
    marginLeft: 8,
  },
  sliderTrack: {
    flex: 1,
    height: 6,
    backgroundColor: 'rgba(10, 35, 65, 0.45)',
    borderRadius: 3,
    position: 'relative',
    justifyContent: 'center',
  },
  sliderFill: {
    height: 6,
    backgroundColor: '#f6be2f',
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
    marginTop: 2,
    paddingHorizontal: 2,
  },
  navButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(42, 101, 163, 0.58)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.22)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIconText: {
    fontSize: 17,
  },
  navSliderContainer: {
    flex: 1,
    height: 42,
    backgroundColor: 'rgba(42, 101, 163, 0.58)',
    borderRadius: 21,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.22)',
    marginHorizontal: 8,
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
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
  },
  navDotActive: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#ffffff',
  },
});
