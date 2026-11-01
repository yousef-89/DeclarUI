import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../generated-icon';

export default function IMG9057Screen() {
  return (
    <View style={styles.container}>
      {/* c1 header */}
      <View style={styles.header}>
        {/* c2 icon_button */}
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Icon name="chevron-left" size={18} color="#982f88" />
        </TouchableOpacity>
        {/* c3 title */}
        <Text style={styles.headerTitle}>Refer and earn</Text>
      </View>

      {/* c4 illustration banner */}
      <View style={styles.illustrationBanner}>
        <View style={styles.illustrationGraphicContainer}>
          <Text style={styles.illustrationEmoji}>👥📱🎁</Text>
        </View>
      </View>

      {/* c5 title */}
      <Text style={styles.sectionTitle}>Unlock your referral program</Text>

      {/* c6 text */}
      <Text style={styles.sectionSubtitle}>
        Get free credit in your Breadfast wallet when you...
      </Text>

      {/* Cards container */}
      <View style={styles.cardsRow}>
        {/* c7 card 1 */}
        <View style={styles.card}>
          {/* c8 icon */}
          <View style={styles.cardIconContainer}>
            <Icon name="cart" size={18} color="#272727" />
          </View>
          {/* c9 text */}
          <Text style={styles.cardTitle}>Complete{'\n'}5 orders</Text>
          {/* c10 progress_bar */}
          <View style={styles.progressBarTrack}>
            <View style={[styles.progressBarFill, { width: '0%' }]} />
          </View>
          {/* c11 text */}
          <Text style={styles.cardFooterText}>5 orders left</Text>
        </View>

        {/* c12 card 2 */}
        <View style={styles.card}>
          {/* c13 icon */}
          <View style={styles.cardIconContainer}>
            <Icon name="chat" size={18} color="#272727" />
          </View>
          {/* c14 text */}
          <Text style={styles.cardTitle}>Spend EGP 1,000{'\n'}in purchases</Text>
          {/* c15 progress_bar */}
          <View style={styles.progressBarTrack}>
            <View style={[styles.progressBarFill, { width: '0%' }]} />
          </View>
          {/* c16 text */}
          <Text style={styles.cardFooterText}>EGP 1,000.00 left</Text>
        </View>
      </View>

      {/* c17 link */}
      <View style={styles.footerLinkContainer}>
        <Text style={styles.footerLinkText}>
          <Text style={{ color: '#a36a9a' }}>Terms and Conditions</Text> apply.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 804,
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 0,
    width: 390,
    height: 51,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  iconButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  headerTitle: {
    position: 'absolute',
    left: 136,
    top: 32,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#242424',
    textAlign: 'center',
  },
  illustrationBanner: {
    position: 'absolute',
    top: 71,
    left: 0,
    width: 390,
    height: 167,
    backgroundColor: '#f5d9c4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationGraphicContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationEmoji: {
    fontSize: 48,
  },
  sectionTitle: {
    position: 'absolute',
    top: 282,
    left: 70,
    width: 250,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
    textAlign: 'center',
  },
  sectionSubtitle: {
    position: 'absolute',
    top: 333,
    left: 19,
    width: 351,
    fontSize: 13,
    color: '#3e3e3e',
    textAlign: 'center',
  },
  cardsRow: {
    position: 'absolute',
    top: 372,
    left: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 360,
  },
  card: {
    width: 173,
    height: 182,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d8d8d8',
    backgroundColor: '#ffffff',
    padding: 16,
    alignItems: 'center',
  },
  cardIconContainer: {
    width: 41,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ebebeb',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#323232',
    textAlign: 'center',
    height: 32,
    marginBottom: 16,
    lineHeight: 16,
  },
  progressBarTrack: {
    width: '100%',
    height: 10,
    backgroundColor: '#ebebeb',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#982f88',
  },
  cardFooterText: {
    fontSize: 9,
    color: '#919191',
    textAlign: 'center',
  },
  footerLinkContainer: {
    position: 'absolute',
    top: 740,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  footerLinkText: {
    fontSize: 11,
    color: '#555555',
    textAlign: 'center',
  },
});
