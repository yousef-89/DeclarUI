import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>9:41 AM</Text>
        <View style={styles.statusIcons}>
          <View style={styles.signalIcon} />
          <View style={styles.wifiIcon} />
          <View style={styles.batteryIcon} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Hots now */}
        <Text style={styles.sectionTitle}>Hots now</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <View style={styles.cardContainer}>
            <View style={[styles.card, { backgroundColor: '#4a8ec2' }]}>
              <View style={styles.overlay} />
              <Text style={styles.cardTitle}>Summer Vibes</Text>
            </View>
            <Text style={styles.cardName}>Summer Vibes</Text>
            <Text style={styles.cardSub}>1.300.231 FOLLOWERS</Text>
          </View>

          <View style={styles.cardContainer}>
            <View style={[styles.card, { backgroundColor: '#2d68c4' }]}>
              <View style={styles.overlay} />
              <Text style={styles.cardTitle}>Rap Zone</Text>
            </View>
            <Text style={styles.cardName}>Rap Zone</Text>
            <Text style={styles.cardSub}>650.231 FOLLOWERS</Text>
          </View>

          <View style={styles.cardContainer}>
            <View style={[styles.card, { backgroundColor: '#1d4f8a' }]}>
              <View style={styles.overlay} />
            </View>
          </View>
        </ScrollView>

        {/* Mood */}
        <Text style={styles.sectionTitle}>Mood</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <View style={styles.cardContainer}>
            <View style={[styles.card, { backgroundColor: '#5c6382' }]}>
              <View style={styles.overlay} />
              <Text style={styles.cardTitle}>Shower Time</Text>
            </View>
            <Text style={styles.cardName}>Shower Time</Text>
            <Text style={styles.cardSub}>1.300.231 FOLLOWERS</Text>
          </View>

          <View style={styles.cardContainer}>
            <View style={[styles.card, { backgroundColor: '#8a8886' }]}>
              <View style={styles.overlay} />
              <Text style={styles.cardTitle}>Old School</Text>
            </View>
            <Text style={styles.cardName}>Old School</Text>
            <Text style={styles.cardSub}>300.231 FOLLOWERS</Text>
          </View>

          <View style={styles.cardContainer}>
            <View style={[styles.card, { backgroundColor: '#222' }]} />
          </View>
        </ScrollView>

        {/* Popular artists */}
        <Text style={styles.sectionTitle}>Popular artists</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <View style={styles.artistContainer}>
            <View style={[styles.artistCircle, { backgroundColor: '#b56d4f' }]} />
            <Text style={styles.artistName}>Ed Sheeran</Text>
          </View>

          <View style={styles.artistContainer}>
            <View style={[styles.artistCircle, { backgroundColor: '#c29b53' }]} />
            <Text style={styles.artistName}>Rita Ora</Text>
          </View>

          <View style={styles.artistContainer}>
            <View style={[styles.artistCircle, { backgroundColor: '#802f2f' }]} />
            <Text style={styles.artistName}>Eminem</Text>
          </View>

          <View style={styles.artistContainer}>
            <View style={[styles.artistCircle, { backgroundColor: '#6e4b40' }]} />
            <Text style={styles.artistName}>Dua Lipa</Text>
          </View>
        </ScrollView>
      </ScrollView>

      {/* Now Playing Bar */}
      <View style={styles.nowPlayingBar}>
        <View style={styles.progressBar} />
        <View style={styles.nowPlayingContent}>
          <View>
            <Text style={styles.npTitle}>All Mine</Text>
            <Text style={styles.npArtist}>Kanye West</Text>
          </View>
          <View style={styles.playButtonCircle}>
            <View style={styles.playTriangle} />
          </View>
        </View>
      </View>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <View style={styles.navIconZap} />
        </View>
        <View style={styles.navItem}>
          <View style={styles.navIconHeadphones} />
        </View>
        <View style={styles.navItem}>
          <View style={styles.navIconSearch} />
        </View>
        <View style={styles.navItem}>
          <View style={styles.navIconUser} />
        </View>
      </View>
      <View style={styles.homeIndicator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  timeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signalIcon: {
    width: 15,
    height: 10,
    backgroundColor: '#000',
    marginRight: 5,
  },
  wifiIcon: {
    width: 15,
    height: 11,
    backgroundColor: '#000',
    marginRight: 5,
  },
  batteryIcon: {
    width: 22,
    height: 11,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 2,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 140,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f95d20',
    marginTop: 20,
    marginBottom: 12,
  },
  horizontalScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  cardContainer: {
    marginRight: 16,
    width: 160,
  },
  card: {
    width: 160,
    height: 160,
    borderRadius: 16,
    justifyContent: 'center',
    alignItem: 'center',
    overflow: 'hidden',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 1,
  },
  cardName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 8,
  },
  cardSub: {
    fontSize: 10,
    color: '#888',
    marginTop: 2,
  },
  artistContainer: {
    marginRight: 16,
    alignItems: 'center',
    width: 80,
  },
  artistCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  artistName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#222',
    marginTop: 6,
    textAlign: 'center',
  },
  nowPlayingBar: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  progressBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '60%',
    height: 2,
    backgroundColor: '#f95d20',
  },
  nowPlayingContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  npTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
  },
  npArtist: {
    fontSize: 12,
    color: '#f95d20',
    marginTop: 2,
  },
  playButtonCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#f95d20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderLeftColor: '#f95d20',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    marginLeft: 2,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f9f9f9',
  },
  navItem: {
    padding: 10,
  },
  navIconZap: {
    width: 20,
    height: 20,
    backgroundColor: '#f95d20',
  },
  navIconHeadphones: {
    width: 20,
    height: 20,
    backgroundColor: '#ccc',
  },
  navIconSearch: {
    width: 20,
    height: 20,
    backgroundColor: '#ccc',
  },
  navIconUser: {
    width: 20,
    height: 20,
    backgroundColor: '#ccc',
  },
  homeIndicator: {
    position: 'absolute',
    bottom: 8,
    alignSelf: 'center',
    width: 134,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 100,
  },
});
