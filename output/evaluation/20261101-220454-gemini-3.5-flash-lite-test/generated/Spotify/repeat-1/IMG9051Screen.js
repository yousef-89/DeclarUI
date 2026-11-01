import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from '../generated-icon';

export default function IMG9051Screen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>Y</Text>
          <View style={styles.avatarDot} />
        </View>
        <Text style={styles.headerTitle}>Your Library</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="search" size={22} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="plus" size={23} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Carousel / Filter Chips */}
      <View style={styles.carouselContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carouselContent}>
          <View style={styles.chip}>
            <Text style={styles.chipText}>Playlists</Text>
          </View>
          <View style={styles.chip}>
            <Text style={styles.chipText}>Podcasts</Text>
          </View>
          <View style={styles.chip}>
            <Text style={styles.chipText}>Albums</Text>
          </View>
          <View style={styles.chip}>
            <Text style={styles.chipText}>Artists</Text>
          </View>
          <View style={styles.chip}>
            <Text style={styles.chipText}>Downloads</Text>
          </View>
        </ScrollView>
      </View>

      {/* Subheader / Sort & Grid View */}
      <View style={styles.subheader}>
        <View style={styles.sortContainer}>
          <Icon name="sliders" size={12} color="#b3b3b3" />
          <Text style={styles.sortText}>Recents</Text>
        </View>
        <TouchableOpacity>
          <Icon name="grid" size={15} color="#b3b3b3" />
        </TouchableOpacity>
      </View>

      {/* Grid Content */}
      <ScrollView contentContainerStyle={styles.gridContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.gridRow}>
          {/* Card 1: Liked Songs */}
          <View style={styles.card}>
            <View style={[styles.cardImage, { backgroundColor: '#5d3fe5', justifyContent: 'center', alignItems: 'center' }]}>
              <Icon name="heart" size={40} color="#ffffff" filled />
            </View>
            <Text style={styles.cardTitle} numberOfLines={1}>Liked Songs</Text>
            <View style={styles.cardSubtitleRow}>
              <Icon name="pin" size={10} color="#aab2aa" />
              <Text style={styles.cardSubtitle} numberOfLines={1}> Playlist • Yousa...</Text>
            </View>
          </View>

          {/* Card 2: Your Episodes */}
          <View style={styles.card}>
            <View style={[styles.cardImage, { backgroundColor: '#296251', justifyContent: 'center', alignItems: 'center' }]}>
              <Icon name="bookmark" size={40} color="#ffffff" filled />
            </View>
            <Text style={styles.cardTitle} numberOfLines={1}>Your Episodes</Text>
            <View style={styles.cardSubtitleRow}>
              <Icon name="pin" size={10} color="#a7b1a7" />
              <Text style={styles.cardSubtitle} numberOfLines={1}> Playlist • Saved...</Text>
            </View>
          </View>

          {/* Card 3: Offline Backup */}
          <View style={styles.card}>
            <View style={[styles.cardImage, { backgroundColor: '#8de095', justifyContent: 'center', alignItems: 'center' }]}>
              <View style={{ position: 'absolute', top: 8, left: 8 }}>
                <Icon name="wifi" size={14} color="#000000" />
              </View>
              <Text style={{ fontSize: 28, fontWeight: '900', color: '#000000', fontStyle: 'italic' }}>//</Text>
              <View style={{ position: 'absolute', bottom: 6, left: 6 }}>
                <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#000000' }}>Offline Backup</Text>
              </View>
            </View>
            <Text style={styles.cardTitle} numberOfLines={1}>Offline Backup</Text>
            <Text style={styles.cardSubtitle} numberOfLines={1}>Playlist</Text>
          </View>
        </View>

        <View style={styles.gridRow}>
          {/* Card 4: Marwan Pablo */}
          <View style={styles.card}>
            <View style={[styles.cardImage, { backgroundColor: '#b24620', borderRadius: 55, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }]}>
              <View style={{ position: 'absolute', bottom: 0, width: '100%', height: '80%', backgroundColor: '#40150b' }} />
              <Text style={{ fontSize: 45, position: 'absolute', bottom: -10 }}>🧑🏽‍🎤</Text>
            </View>
            <Text style={styles.cardTitle} numberOfLines={1}>Marwan Pablo</Text>
            <Text style={styles.cardSubtitle} numberOfLines={1}>Artist</Text>
          </View>

          {/* Card 5: Abyusif */}
          <View style={styles.card}>
            <View style={[styles.cardImage, { backgroundColor: '#d5dce2', borderRadius: 55, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }]}>
              <View style={{ position: 'absolute', bottom: 0, width: '100%', height: '85%', backgroundColor: '#c5ccd2' }} />
              <Text style={{ fontSize: 45, position: 'absolute', bottom: -10 }}>🧑🏻‍🦲</Text>
            </View>
            <Text style={styles.cardTitle} numberOfLines={1}>Abyusif</Text>
            <Text style={styles.cardSubtitle} numberOfLines={1}>Artist</Text>
          </View>

          {/* Card 6: ElGrandeToto */}
          <View style={styles.card}>
            <View style={[styles.cardImage, { backgroundColor: '#dfdfdf', borderRadius: 55, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }]}>
              <View style={{ position: 'absolute', bottom: 0, width: '100%', height: '85%', backgroundColor: '#333333' }} />
              <Text style={{ fontSize: 45, position: 'absolute', bottom: -10 }}>🧔🏽</Text>
            </View>
            <Text style={styles.cardTitle} numberOfLines={1}>ElGrandeToto</Text>
            <Text style={styles.cardSubtitle} numberOfLines={1}>Artist</Text>
          </View>
        </View>

        <View style={styles.gridRow}>
          {/* Card 7: Kanye West */}
          <View style={styles.card}>
            <View style={[styles.cardImage, { backgroundColor: '#c1beb2', borderRadius: 55, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }]}>
              <Text style={{ fontSize: 50 }}>🐐</Text>
            </View>
            <Text style={styles.cardTitle} numberOfLines={1}>Kanye West</Text>
            <Text style={styles.cardSubtitle} numberOfLines={1}>Artist</Text>
          </View>

          {/* Card 8: TUL8TE */}
          <View style={styles.card}>
            <View style={[styles.cardImage, { backgroundColor: '#e8e6e0', borderRadius: 55, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }]}>
              <Text style={{ fontSize: 50 }}>🎭</Text>
            </View>
            <Text style={styles.cardTitle} numberOfLines={1}>TUL8TE</Text>
            <Text style={styles.cardSubtitle} numberOfLines={1}>Artist</Text>
          </View>

          {/* Card 9: This Is Baby Gang */}
          <View style={styles.card}>
            <View style={[styles.cardImage, { backgroundColor: '#fcd153', justifyContent: 'center', alignItems: 'center' }]}>
              <View style={{ position: 'absolute', top: 8, left: 8 }}>
                <Icon name="wifi" size={14} color="#000000" />
              </View>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}>THIS IS</Text>
              <View style={{ width: '80% H', height: 40, backgroundColor: '#333', marginTop: 5 }} />
            </View>
            <Text style={styles.cardTitle} numberOfLines={1}>This Is Baby Gang</Text>
            <Text style={styles.cardSubtitle} numberOfLines={1}>Playlist • Spotify</Text>
          </View>
        </View>
      </ScrollView>

      {/* Floating Mini Player */}
      <View style={styles.miniPlayer}>
        <View style={styles.miniPlayerContent}>
          <View style={styles.miniPlayerImage}>
            <Text style={{ fontSize: 24 }}>👤</Text>
          </View>
          <View style={styles.miniPlayerTextContainer}>
            <Text style={styles.miniPlayerTitle} numberOfLines={1}>Muqattel</Text>
            <Text style={styles.miniPlayerSubtitle} numberOfLines={1}>Wegz, Amaka Jaji</Text>
          </View>
          <View style={styles.miniPlayerActions}>
            <TouchableOpacity style={styles.miniPlayerIcon}>
              <Icon name="smartphone" size={20} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.miniPlayerIcon}>
              <Icon name="plus" size={20} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.miniPlayerIcon}>
              <Icon name="play" size={16} color="#ffffff" filled />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.progressBarTrack}>
          <View style={styles.progressBarFill} />
        </View>
      </View>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="home" size={22} color="#b3b3b3" />
          <Text style={styles.tabLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="search" size={22} color="#b3b3b3" />
          <Text style={styles.tabLabel}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="grid" size={22} color="#ffffff" filled />
          <Text style={[styles.tabLabel, { color: '#ffffff' }]}>Your Library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="plus" size={22} color="#b3b3b3" />
          <Text style={styles.tabLabel}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    width: 390,
    height: 801,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 21,
    height: 55,
  },
  avatar: {
    width: 33,
    height: 33,
    borderRadius: 16.5,
    backgroundColor: '#9b51e0',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  avatarDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#38ef7d',
    borderWidth: 1.5,
    borderColor: '#121212',
  },
  headerTitle: {
    flex: 1,
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    height: 50,
    marginTop: 10,
  },
  carouselContent: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  chip: {
    backgroundColor: '#2a2a2a',
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 20,
    marginRight: 8,
    height: 32,
    justifyContent: 'center',
  },
  chipText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  subheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    color: '#b3b3b3',
    fontSize: 14,
    marginLeft: 6,
    fontWeight: '500',
  },
  gridContainer: {
    paddingHorizontal: 12,
    paddingBottom: 130,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: 110,
  },
  cardImage: {
    width: 110,
    height: 110,
    borderRadius: 6,
    marginBottom: 6,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  cardSubtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardSubtitle: {
    color: '#aab2aa',
    fontSize: 11,
  },
  miniPlayer: {
    position: 'absolute',
    bottom: 60,
    left: 7,
    right: 7,
    height: 54,
    backgroundColor: '#7b1c1c',
    borderRadius: 6,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  miniPlayerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    flex: 1,
  },
  miniPlayerImage: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#aa3333',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  miniPlayerTextContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  miniPlayerTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  miniPlayerSubtitle: {
    color: '#b3b2b3',
    fontSize: 12,
    marginTop: 1,
  },
  miniPlayerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniPlayerIcon: {
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarTrack: {
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: '100%',
  },
  progressBarFill: {
    height: 2,
    backgroundColor: '#ffffff',
    width: '20%',
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#222',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabLabel: {
    color: '#b3b3b3',
    fontSize: 10,
    marginTop: 4,
  },
});
