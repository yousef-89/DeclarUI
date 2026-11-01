import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ListenScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Text style={styles.mainTitle}>Hots now</Text>

        {/* Hots now Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScrollContent} style={styles.horizontalScroll}>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer1}>
              <View style={styles.orangeCircle1} />
              <View style={styles.orangeCircle2} />
              <Text style={styles.cardTitle}>Summer{'\n'}Vibes</Text>
              <Text style={styles.cloudIcon}>☁</Text>
            </View>
            <Text style={styles.cardSubtitle}>Summer Vibes</Text>
            <Text style={styles.cardSubtext}>1.300.231 FOLLOWERS</Text>
          </View>

          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer2}>
              <Text style={styles.cardTitle}>Monday{'\n'}<Text style={{color: '#FF6b35'}}>Party</Text></Text>
              <Text style={styles.cloudIcon}>☁</Text>
            </View>
            <Text style={styles.cardSubtitle}>Rap Zone</Text>
            <Text style={styles.cardSubtext}>650.231 FOLLOWERS</Text>
          </View>
        </ScrollView>

        {/* Recents Section */}
        <Text style={styles.sectionTitle}>Recents</Text>

        <View style={styles.listItem}>
          <View style={styles.listLeft}>
            <Text style={styles.listIconText}>📈</Text>
            <Text style={styles.listText}>Ranking</Text>
          </View>
          <View style={styles.listRight}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>News</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </View>
        </View>

        <View style={styles.listItem}>
          <View style={styles.listLeft}>
            <Text style={styles.listIconText}>🔖</Text>
            <Text style={styles.listText}>Weekly featured</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </View>

        <View style={styles.listItem}>
          <View style={styles.listLeft}>
            <Text style={styles.listIconText}>◎</Text>
            <Text style={styles.listText}>Podcast</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </View>

        <View style={styles.listItem}>
          <View style={styles.listLeft}>
            <Text style={styles.listIconText}>🎙</Text>
            <Text style={styles.listText}>Live</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </View>

        <View style={styles.listItem}>
          <View style={styles.listLeft}>
            <Text style={styles.listIconText}>🍞</Text>
            <Text style={styles.listText}>Concerts</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </View>

        {/* Playlists Section */}
        <Text style={styles.sectionTitle}>Playlists</Text>
      </ScrollView>

      {/* Mini Player */}
      <View style={styles.miniPlayer}>
        <View style={styles.playerInfo}>
          <Text style={styles.playerSong}>All Mine</Text>
          <Text style={styles.playerArtist}>Kanye West</Text>
        </View>
        <Text style={styles.playButton}>▶</Text>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>⚡</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={[styles.navIcon, { color: '#FF6b35' }]}>🎧</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🔍</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
        </View>
      </View>
      <View style={styles.homeIndicator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  scrollContent: {
    paddingTop: 45,
    paddingBottom: 130,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF6b35',
    marginHorizontal: 20,
    marginBottom: 16,
  },
  horizontalScroll: {
    marginBottom: 25,
  },
  horizontalScrollContent: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  cardContainer: {
    width: 195,
    marginRight: 16,
  },
  cardImageContainer1: {
    width: 195,
    height: 195,
    backgroundColor: '#6ba4c8',
    borderRadius: 20,
    padding: 18,
    justifyContent: 'flex-end',
    position: 'relative',
    overflow: 'hidden',
  },
  cardImageContainer2: {
    width: 195,
    height: 195,
    backgroundColor: '#2c2220',
    borderRadius: 20,
    padding: 18,
    justifyContent: 'flex-end',
    position: 'relative',
    overflow: 'hidden',
  },
  orangeCircle1: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FF8c53',
    bottom: -10,
    left: 20,
    opacity: 0.9,
  },
  orangeCircle2: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF7d3f',
    bottom: -20,
    right: -15,
    opacity: 0.9,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 26,
    zIndex: 2,
  },
  cloudIcon: {
    position: 'absolute',
    top: 14,
    right: 14,
    color: '#FFFFFF',
    fontSize: 18,
    opacity: 0.9,
  },
  cardSubtitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111111',
    marginTop: 8,
  },
  cardSubtext: {
    fontSize: 10,
    color: '#888888',
    marginTop: 2,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111111',
    marginHorizontal: 20,
    marginBottom: 6,
    marginTop: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  listLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listIconText: {
    fontSize: 18,
    marginRight: 16,
    color: '#FF6b35',
    width: 24,
    textAlign: 'center',
  },
  listText: {
    fontSize: 16,
    color: '#222222',
    fontWeight: '500',
  },
  listRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#FF6b35',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 10,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  chevron: {
    fontSize: 22,
    color: '#D8D8D8',
    fontWeight: '300',
  },
  miniPlayer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  playerInfo: {
    alignItems: 'center',
    flex: 1,
  },
  playerSong: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111111',
  },
  playerArtist: {
    fontSize: 11,
    color: '#FF6b35',
    marginTop: 1,
  },
  playButton: {
    fontSize: 18,
    color: '#FF6b35',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navIcon: {
    fontSize: 20,
    color: '#999999',
  },
  homeIndicator: {
    position: 'absolute',
    bottom: 4,
    left: '35%',
    width: '30%',
    height: 4,
    backgroundColor: '#000000',
    borderRadius: 2,
    zIndex: 10,
  },
});
