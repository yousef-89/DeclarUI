import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>SoundCloud</Text>
            <Text style={styles.bannerSubtitle}>Premium</Text>
            <Text style={styles.bannerDescription}>
              Remove boring advs, create infinite playlists and so much
            </Text>
          </View>
          <View style={styles.bannerDecorations}>
            <Text style={styles.bannerClose}>×</Text>
            <Text style={styles.bannerStar}>★</Text>
          </View>
        </View>

        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View>
            <Text style={styles.profileName}>Kimberly Evans</Text>
            <Text style={styles.profileEdit}>Edit profile</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>KE</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          <View style={styles.menuItem}>
            <Text style={styles.menuText}>My SoundCloud</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Free User</Text>
            </View>
          </View>

          <View style={styles.menuItem}>
            <Text style={styles.menuText}>Music quality</Text>
            <Text style={styles.chevron}>›</Text>
          </View>

          <View style={styles.menuItem}>
            <Text style={styles.menuText}>Help</Text>
            <Text style={styles.chevron}>›</Text>
          </View>
        </View>

        {/* My Playlists */}
        <View style={styles.playlistSection}>
          <Text style={styles.sectionTitle}>My playlists</Text>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.playlistScroll}>
            {/* Playlist 1 */}
            <View style={styles.playlistItem}>
              <View style={[styles.playlistCover, { backgroundColor: '#4a8cb8' }]}>
                <Text style={styles.playlistCoverTitle}>Summer</Text>
                <Text style={styles.playlistCoverTitle}>Vibes</Text>
              </View>
              <Text style={styles.playlistName} numberOfLines={1}>Summer Vibes</Text>
              <Text style={styles.playlistSub}>1.300.231 FOLLOWERS</Text>
            </View>

            {/* Playlist 2 */}
            <View style={styles.playlistItem}>
              <View style={[styles.playlistCover, { backgroundColor: '#2d4f6c' }]}>
                <Text style={styles.playlistCoverTitleSmall}>Rap Zone</Text>
              </View>
              <Text style={styles.playlistName} numberOfLines={1}>Rap Zone</Text>
              <Text style={styles.playlistSub}>650.231 FOLLOWERS</Text>
            </View>

            {/* Playlist 3 */}
            <View style={styles.playlistItem}>
              <View style={[styles.playlistCover, { backgroundColor: '#0055b3' }]}>
                <Text style={styles.playlistCoverTitleSmall}>Music Mix</Text>
              </View>
              <Text style={styles.playlistName} numberOfLines={1}>Music Mix</Text>
              <Text style={styles.playlistSub}>50.231 FOLLOWERS</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      {/* Mini Player */}
      <View style={styles.miniPlayer}>
        <View style={styles.miniPlayerProgress} />
        <View style={styles.miniPlayerContent}>
          <View>
            <Text style={styles.miniPlayerTitle}>All Mine</Text>
            <Text style={styles.miniPlayerArtist}>Kanye West</Text>
          </View>
          <View style={styles.playButton}>
            <Text style={styles.playIcon}>▶</Text>
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Text style={styles.navIcon}>⚡</Text>
        <Text style={styles.navIcon}>🎧</Text>
        <Text style={styles.navIcon}>🔍</Text>
        <Text style={[styles.navIcon, styles.navIconActive]}>👤</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    paddingBottom: 140,
  },
  banner: {
    backgroundColor: '#ff5500',
    margin: 16,
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    position: 'relative',
  },
  bannerTextContainer: {
    flex: 1,
    paddingRight: 20,
  },
  bannerTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  bannerSubtitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 24,
    marginBottom: 8,
  },
  bannerDescription: {
    color: '#ffffff',
    fontSize: 13,
    opacity: 0.9,
    lineHeight: 18,
  },
  bannerDecorations: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  bannerClose: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '350',
  },
  bannerStar: {
    color: '#ffffff',
    fontSize: 36,
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 4,
  },
  profileEdit: {
    fontSize: 14,
    color: '#666666',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666666',
  },
  menuSection: {
    marginTop: 4,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    fontSize: 16,
    color: '#111111',
  },
  badge: {
    backgroundColor: '#ff5500',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  chevron: {
    fontSize: 22,
    color: '#cccccc',
    fontWeight: '300',
  },
  playlistSection: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111111',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  playlistScroll: {
    paddingLeft: 20,
  },
  playlistItem: {
    width: 130,
    marginRight: 16,
  },
  playlistCover: {
    width: 130,
    height: 130,
    borderRadius: 8,
    padding: 12,
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  playlistCoverTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  playlistCoverTitleSmall: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  playlistName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111111',
    marginBottom: 2,
  },
  playlistSub: {
    fontSize: 9,
    color: '#888888',
    fontWeight: '500',
  },
  miniPlayer: {
    position: 'absolute',
    bottom: 56,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderTopWidth: 0.5,
    borderTopColor: '#eeeeee',
  },
  miniPlayerProgress: {
    height: 2,
    backgroundColor: '#ff5500',
    width: '100%',
  },
  miniPlayerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  miniPlayerTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111111',
    textAlign: 'center',
  },
  miniPlayerArtist: {
    fontSize: 11,
    color: '#ff5500',
    textAlign: 'center',
    marginTop: 1,
  },
  playButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#ff5500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    color: '#ff5500',
    fontSize: 12,
    marginLeft: 2,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 56,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#eeeeee',
  },
  navIcon: {
    fontSize: 20,
    color: '#888888',
  },
  navIconActive: {
    color: '#ff5500',
  },
});
