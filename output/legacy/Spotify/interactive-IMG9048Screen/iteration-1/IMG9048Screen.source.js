import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export function IMG9048Screen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Top Header Filter Chips */}
        <View style={styles.headerRow}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>Y</Text>
            <View style={styles.avatarNotificationDot} />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsContainer}>
            <View style={[styles.chip, styles.chipActive]}>
              <Text style={[styles.chipText, styles.chipTextActive]}>All</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>Music</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>Podcasts</Text>
            </View>
            <View style={styles.chip}>
              <Text style={styles.chipText}>Audiobooks</Text>
            </View>
          </ScrollView>
        </View>

        {/* 4x2 Grid of Playlist Cards */}
        <View style={styles.gridContainer}>
          {/* Row 1 */}
          <View style={styles.gridRow}>
            <View style={styles.card}>
              <View style={[styles.cardThumb, { backgroundColor: '#5c33f6', alignItems: 'center', justifyContent: 'center' }]}>
                <Text style={{ color: '#fff', fontSize: 20 }}>♥</Text>
              </View>
              <Text style={styles.cardTitle} numberOfLines={2}>Liked Songs</Text>
            </View>
            <View style={styles.card}>
              <View style={[styles.cardThumb, { backgroundColor: '#d1342f' }]} />
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitleSingle} numberOfLines={1}>AQAREB</Text>
                <Text style={styles.cardSubtitle} numberOfLines={1}>(Deluxe Editi...</Text>
              </View>
              <Text style={styles.cardDots}>•••</Text>
            </View>
          </View>

          {/* Row 2 */}
          <View style={styles.gridRow}>
            <View style={styles.card}>
              <View style={[styles.cardThumb, { backgroundColor: '#444' }]} />
              <Text style={styles.cardTitle} numberOfLines={1}>التوب</Text>
            </View>
            <View style={styles.card}>
              <View style={[styles.cardThumb, { backgroundColor: '#2ba483' }]} />
              <Text style={styles.cardTitle} numberOfLines={1}>ملوك السين</Text>
            </View>
          </View>

          {/* Row 3 */}
          <View style={styles.gridRow}>
            <View style={styles.card}>
              <View style={[styles.cardThumb, { backgroundColor: '#f09623' }]} />
              <Text style={styles.cardTitle} numberOfLines={1}>This Is Wegz</Text>
            </View>
            <View style={styles.card}>
              <View style={[styles.cardThumb, { backgroundColor: '#9e321b' }]} />
              <Text style={styles.cardTitle} numberOfLines={1}>Marwan Pablo</Text>
            </View>
          </View>

          {/* Row 4 */}
          <View style={styles.gridRow}>
            <View style={styles.card}>
              <View style={[styles.cardThumb, { backgroundColor: '#1d2a4a' }]} />
              <Text style={styles.cardTitle} numberOfLines={2}>عايش | ريد بُل مَزيكا صالونات</Text>
            </View>
            <View style={styles.card}>
              <View style={[styles.cardThumb, { backgroundColor: '#cfd8dc' }]} />
              <Text style={styles.cardTitle} numberOfLines={1}>Abyusif</Text>
            </View>
          </View>
        </View>

        {/* Section: Albums featuring songs you like */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Albums featuring songs you like</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.albumsScroll} contentContainerStyle={styles.albumsScrollContent}>
          <View style={styles.albumItem}>
            <View style={[styles.albumArt, { backgroundColor: '#284b7a' }]} />
            <Text style={styles.albumName} numberOfLines={1}>Sadeek El Bernameg</Text>
            <Text style={styles.albumArtist} numberOfLines={1}>TUL8TE</Text>
          </View>
          <View style={styles.albumItem}>
            <View style={[styles.albumArt, { backgroundColor: '#111' }]} />
            <Text style={styles.albumName} numberOfLines={1}>MAFHOOM</Text>
            <Text style={styles.albumArtist} numberOfLines={1}>Omar Keif, Lege-Cy</Text>
          </View>
        </ScrollView>

        {/* Section: Recents */}
        <View style={styles.sectionHeaderRecents}>
          <Text style={styles.sectionTitle}>Recents</Text>
          <Text style={styles.showAllText}>Show all</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.albumsScroll} contentContainerStyle={styles.albumsScrollContent}>
          <View style={styles.albumItem}>
            <View style={[styles.albumArt, { backgroundColor: '#555' }]} />
          </View>
          <View style={styles.albumItem}>
            <View style={[styles.albumArt, { backgroundColor: '#222' }]} />
          </View>
          <View style={styles.albumItem}>
            <View style={[styles.albumArt, { backgroundColor: '#8a4b11' }]} />
          </View>
        </ScrollView>

        <View style={{ height: 140 }} />
      </ScrollView>

      {/* Mini Player */}
      <View style={styles.miniPlayer}>
        <View style={[styles.miniPlayerArt, { backgroundColor: '#d1342f' }]} />
        <View style={styles.miniPlayerInfo}>
          <Text style={styles.miniPlayerTitle} numberOfLines={1}>Muqattel</Text>
          <Text style={styles.miniPlayerSubtitle} numberOfLines={1}>Wegz, Amaka Jaji</Text>
        </View>
        <View style={styles.miniPlayerIcons}>
          <View style={styles.miniPlayerIconBox}><Text style={styles.iconPlaceholder}>📺</Text></View>
          <View style={styles.miniPlayerIconBox}><Text style={styles.iconPlaceholder}>➕</Text></View>
          <View style={styles.miniPlayerIconBox}><Text style={styles.iconPlaceholder}>▶</Text></View>
        </View>
        <View style={styles.miniPlayerProgress} />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Text style={[styles.navIcon, styles.navActive]}>🏠</Text>
          <Text style={[styles.navText, styles.navActiveText]}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🔍</Text>
          <Text style={styles.navText}>Search</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>📚</Text>
          <Text style={styles.navText}>Your Library</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>➕</Text>
          <Text style={styles.navText}>Create</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContent: {
    paddingTop: 12,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  avatarCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#b39ddb',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    position: 'relative',
  },
  avatarText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },
  avatarNotificationDot: {
    position: 'absolute',
    top: -1,
    right: -1,
    width: 9,
    height: 9,
    borderRadius: 4.5,
    backgroundColor: '#3b82f6',
    borderWidth: 1.5,
    borderColor: '#121212',
  },
  chipsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chip: {
    backgroundColor: '#262626',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
  },
  chipActive: {
    backgroundColor: '#1ed760',
  },
  chipText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '400',
  },
  chipTextActive: {
    color: '#000',
    fontWeight: '500',
  },
  gridContainer: {
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#242424',
    borderRadius: 4,
    overflow: 'hidden',
    alignItems: 'center',
    marginHorizontal: 4,
    height: 54,
  },
  cardThumb: {
    width: 54,
    height: 54,
  },
  cardTextContainer: {
    flex: 1,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  cardTitle: {
    flex: 1,
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 10,
    textAlignVertical: 'center',
    lineHeight: 16,
  },
  cardTitleSingle: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 1,
  },
  cardSubtitle: {
    color: '#a7a7a7',
    fontSize: 11,
  },
  cardDots: {
    color: '#a7a7a7',
    paddingHorizontal: 8,
    fontSize: 12,
  },
  sectionHeader: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionHeaderRecents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  showAllText: {
    color: '#a7a7a7',
    fontSize: 12,
    fontWeight: '600',
  },
  albumsScroll: {
    marginBottom: 24,
  },
  albumsScrollContent: {
    paddingLeft: 16,
  },
  albumItem: {
    width: 140,
    marginRight: 12,
  },
  albumArt: {
    width: 140,
    height: 140,
    borderRadius: 4,
    marginBottom: 8,
  },
  albumName: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 2,
  },
  albumArtist: {
    color: '#a7a7a7',
    fontSize: 12,
  },
  miniPlayer: {
    position: 'absolute',
    bottom: 56,
    left: 8,
    right: 8,
    height: 60,
    backgroundColor: '#8b1e19',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    overflow: 'hidden',
  },
  miniPlayerArt: {
    width: 44,
    height: 44,
    borderRadius: 4,
    marginRight: 10,
  },
  miniPlayerInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  miniPlayerTitle: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  miniPlayerSubtitle: {
    color: '#fca5a5',
    fontSize: 11,
  },
  miniPlayerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniPlayerIconBox: {
    paddingHorizontal: 6,
  },
  iconPlaceholder: {
    color: '#fff',
    fontSize: 16,
  },
  miniPlayerProgress: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#fff',
  },
  bottomNav: {
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
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navIcon: {
    fontSize: 18,
    color: '#b3b3b3',
    marginBottom: 2,
  },
  navActive: {
    color: '#fff',
  },
  navText: {
    fontSize: 10,
    color: '#b3b3b3',
  },
  navActiveText: {
    color: '#fff',
  },
});
