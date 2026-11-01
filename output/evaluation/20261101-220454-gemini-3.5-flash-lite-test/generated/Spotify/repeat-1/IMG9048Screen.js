import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from '../generated-icon';

export default function IMG9048Screen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Top Chips / Avatar Row */}
        <View style={styles.topRow}>
          {/* c1 avatar */}
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>Y</Text>
            <View style={styles.avatarDot} />
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsScroll}>
            {/* c2 chip */}
            <TouchableOpacity style={[styles.chip, styles.chipSelected]}>
              <Text style={styles.chipTextSelected}>All</Text>
            </TouchableOpacity>
            
            {/* c3 chip */}
            <TouchableOpacity style={styles.chip}>
              <Text style={styles.chipText}>Music</Text>
            </TouchableOpacity>
            
            {/* c4 chip */}
            <TouchableOpacity style={styles.chip}>
              <Text style={styles.chipText}>Podcasts</Text>
            </TouchableOpacity>
            
            {/* c5 chip */}
            <TouchableOpacity style={styles.chip}>
              <Text style={styles.chipText}>Audiobooks</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Playlist Grid 4x2 */}
        <View style={styles.gridContainer}>
          {/* Row 1 */}
          <View style={styles.gridRow}>
            {/* c6 card */}
            <TouchableOpacity style={styles.playlistCard}>
              <View style={[styles.playlistThumb, { backgroundColor: '#dbafe2', justifyContent: 'center', alignItems: 'center' }]}>
                <Icon name="heart" size={22} color="#fff" filled />
              </View>
              <Text style={styles.playlistText} numberOfLines={1}>Liked Songs</Text>
            </TouchableOpacity>

            {/* c7 card */}
            <TouchableOpacity style={styles.playlistCard}>
              <View style={[styles.playlistThumb, { backgroundColor: '#a0a196' }]}>
                <View style={styles.miniThumbRed} />
              </View>
              <Text style={styles.playlistText} numberOfLines={1}>AQAREB (Deluxe Editi...</Text>
              <View style={styles.cardEllipsis}>
                <Icon name="more-horizontal" size={14} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>

          {/* Row 2 */}
          <View style={styles.gridRow}>
            {/* c8 card */}
            <TouchableOpacity style={styles.playlistCard}>
              <View style={[styles.playlistThumb, { backgroundColor: '#c38563' }]} />
              <Text style={styles.playlistText} numberOfLines={1}>التوب</Text>
            </TouchableOpacity>

            {/* c9 card */}
            <TouchableOpacity style={styles.playlistCard}>
              <View style={[styles.playlistThumb, { backgroundColor: '#292929' }]} />
              <Text style={styles.playlistText} numberOfLines={1}>ملوك السين</Text>
            </TouchableOpacity>
          </View>

          {/* Row 3 */}
          <View style={styles.gridRow}>
            {/* c10 card */}
            <TouchableOpacity style={styles.playlistCard}>
              <View style={[styles.playlistThumb, { backgroundColor: '#f49437' }]} />
              <Text style={styles.playlistText} numberOfLines={1}>This Is Wegz</Text>
            </TouchableOpacity>

            {/* c11 card */}
            <TouchableOpacity style={styles.playlistCard}>
              <View style={[styles.playlistThumb, { backgroundColor: '#b74323' }]} />
              <Text style={styles.playlistText} numberOfLines={1}>Marwan Pablo</Text>
            </TouchableOpacity>
          </View>

          {/* Row 4 */}
          <View style={styles.gridRow}>
            {/* c12 card */}
            <TouchableOpacity style={styles.playlistCard}>
              <View style={[styles.playlistThumb, { backgroundColor: '#394665' }]} />
              <Text style={styles.playlistText} numberOfLines={1}>عايش | ريد بل مزيكا صالونات</Text>
            </TouchableOpacity>

            {/* c13 card */}
            <TouchableOpacity style={styles.playlistCard}>
              <View style={[styles.playlistThumb, { backgroundColor: '#d0d3d4' }]} />
              <Text style={styles.playlistText} numberOfLines={1}>Abyusif</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Section: Albums featuring songs you like */}
        <Text style={styles.sectionTitle}>Albums featuring songs you like</Text>
        
        <View style={styles.albumsContainer}>
          {/* c15 card */}
          <View style={styles.albumCard}>
            <View style={styles.albumArtworkLarge}>
              <View style={styles.albumArtBg1} />
            </View>
            <Text style={styles.albumTitle} numberOfLines={1}>Sadeek El Bernameg</Text>
            <Text style={styles.albumSubtitle} numberOfLines={1}>TUL8TE</Text>
          </View>

          {/* c16 card */}
          <View style={styles.albumCard}>
            <View style={styles.albumArtworkLarge2}>
              <View style={styles.albumArtBg2} />
            </View>
            <Text style={styles.albumTitle} numberOfLines={1}>MAHFOOM</Text>
            <Text style={styles.albumSubtitle} numberOfLines={1}>Omar Keif, Lege-Cy</Text>
          </View>
        </View>

        {/* Section: Recents */}
        <View style={styles.recentsHeader}>
          <Text style={styles.sectionTitle}>Recents</Text>
          <Text style={styles.showAllText}>Show all</Text>
        </View>

        {/* Recents Carousel */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.recentsContainer}>
          <View style={styles.recentItem}>
            <View style={[styles.recentThumb, { backgroundColor: '#ab8a8b' }]} />
          </View>
          <View style={styles.recentItem}>
            <View style={[styles.recentThumb, { backgroundColor: '#424247' }]} />
          </View>
          <View style={styles.recentItem}>
            <View style={[styles.recentThumb, { backgroundColor: '#898989' }]} />
          </View>
          <View style={styles.recentItem}>
            <View style={[styles.recentThumb, { backgroundColor: '#2f4f4f' }]} />
          </View>
        </ScrollView>

        {/* Spacer for bottom bar & banner */}
        <View style={{ height: 140 }} />
      </ScrollView>

      {/* c23 Banner / Now Playing */}
      <View style={styles.bannerContainer}>
        <View style={styles.bannerContent}>
          <View style={styles.bannerThumb}>
            <View style={styles.bannerThumbInner} />
          </View>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle} numberOfLines={1}>Muqattel</Text>
            <Text style={styles.bannerSubtitle} numberOfLines={1}>Wegz, Amaka Jaji</Text>
          </View>
          <View style={styles.bannerActions}>
            <TouchableOpacity style={styles.bannerIconBtn}>
              <Icon name="tv" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bannerIconBtn}>
              <Icon name="plus-circle" size={22} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bannerPlayBtn}>
              <Icon name="play" size={14} color="#000" filled />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bannerProgressBar}>
          <View style={styles.bannerProgressFill} />
        </View>
      </View>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="home" size={22} color="#fff" filled />
          <Text style={[styles.tabText, styles.tabTextSelected]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Icon name="search" size={22} color="#b2b2b2" />
          <Text style={styles.tabText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Icon name="align-justify" size={22} color="#b3b3b3" />
          <Text style={styles.tabText}>Your Library</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Icon name="plus" size={22} color="#b3b3b3" />
          <Text style={styles.tabText}>Create</Text>
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
  scrollContent: {
    paddingTop: 15,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  avatar: {
    width: 33,
    height: 33,
    borderRadius: 16.5,
    backgroundColor: '#b19cc5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 11,
  },
  avatarText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 14,
  },
  avatarDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3b82f6',
    borderWidth: 1.5,
    borderColor: '#121212',
  },
  chipsScroll: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#616061',
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipSelected: {
    backgroundColor: '#65d46e',
  },
  chipText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
  },
  chipTextSelected: {
    color: '#000',
    fontSize: 13,
    fontWeight: '600',
  },
  gridContainer: {
    paddingHorizontal: 15,
    marginTop: 10,
    gap: 8,
  },
  gridRow: {
    flexDirection: 'row',
    gap: 8,
  },
  playlistCard: {
    flex: 1,
    height: 48,
    backgroundColor: '#2a2a2a',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  playlistThumb: {
    width: 48,
    height: 48,
    backgroundColor: '#333',
  },
  miniThumbRed: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: '#d32f2f',
    top: 14,
    left: 14,
    borderRadius: 3,
  },
  playlistText: {
    flex: 1,
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 10,
  },
  cardEllipsis: {
    paddingRight: 10,
  },
  sectionTitle: {
    color: '#fefefe',
    fontSize: 18,
    fontWeight: '700',
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 12,
  },
  albumsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 20,
  },
  albumCard: {
    width: 145,
  },
  albumArtworkLarge: {
    width: 145,
    height: 145,
    backgroundColor: '#a1b6d3',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  albumArtBg1: {
    flex: 1,
  },
  albumArtworkLarge2: {
    width: 145,
    height: 145,
    backgroundColor: '#262626',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  albumArtBg2: {
    flex: 1,
    backgroundColor: '#181818',
  },
  albumTitle: {
    color: '#f4f4f4',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 4,
  },
  albumSubtitle: {
    color: '#b2b2b2',
    fontSize: 12,
    fontWeight: '400',
  },
  recentsHeader: {
    flexDirection: 'row',
    justify5ontent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
  },
  showAllText: {
    color: '#afafaf',
    fontSize: 12,
    fontWeight: '600',
  },
  recentsContainer: {
    paddingHorizontal: 16,
    gap: 12,
  },
  recentItem: {
    width: 105,
    height: 105,
  },
  recentThumb: {
    width: 105,
    height: 105,
    borderRadius: 4,
  },
  bannerContainer: {
    position: 'absolute',
    bottom: 56,
    left: 8,
    right: 8,
    height: 56,
    backgroundColor: '#8b1e1b',
    borderRadius: 6,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  bannerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  bannerThumb: {
    width: 40,
    height: 40,
    backgroundColor: '#d32f2f',
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: 10,
  },
  bannerThumbInner: {
    flex: 1,
    backgroundColor: '#c62828',
  },
  bannerTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  bannerSubtitle: {
    color: '#d1d1d1',
    fontSize: 11,
    fontWeight: '400',
  },
  bannerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  bannerIconBtn: {
    padding: 2,
  },
  bannerPlayBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerProgressBar: {
    height: 2,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  bannerProgressFill: {
    width: '30%',
    height: '100%',
    backgroundColor: '#fff',
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 56,
    backgroundColor: '#121212',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#282828',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabText: {
    color: '#b2b2b2',
    fontSize: 10,
    marginTop: 4,
  },
  tabTextSelected: {
    color: '#fff',
    fontWeight: '600',
  },
});
