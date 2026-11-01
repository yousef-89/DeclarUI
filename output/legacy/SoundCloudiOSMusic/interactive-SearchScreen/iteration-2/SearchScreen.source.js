import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image } from 'react-native';

const SearchScreen = () => {
  const recents = [
    { id: 1, title: 'Better Now', subtitle: 'Post Malone', color: '#E5C158', url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&auto=format&fit=crop&q=80' },
    { id: 2, title: 'Kimberly Evans', subtitle: 'Calvin Harris, Dua Lipa', color: '#2B579A', url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&auto=format&fit=crop&q=80' },
    { id: 3, title: 'I Like It', subtitle: 'Cardi B, Bad Bunny, J Balvin', color: '#A62B35', url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&auto=format&fit=crop&q=80' },
    { id: 4, title: 'Girls Like You (feat Cardi B)', subtitle: 'Maroon 5, Cardi B', color: '#213345', url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=100&auto=format&fit=crop&q=80' },
    { id: 5, title: 'Back To You', subtitle: 'Selena Gomez', color: '#3A5A78', url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&auto=format&fit=crop&q=80' },
    { id: 6, title: 'Lucid Dreams', subtitle: 'Juice WRLD', color: '#A0B4C8', url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=100&auto=format&fit=crop&q=80' },
    { id: 7, title: 'No Tears Left To Cry', subtitle: 'Ariana Grande', color: '#4B3A5A', url: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=100&auto=format&fit=crop&q=80' },
    { id: 8, title: 'Nice For What', subtitle: 'Drake', color: '#C83278', url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=100&auto=format&fit=crop&q=80' },
    { id: 9, title: 'Youngblood', subtitle: '5 Seconds of Summer', color: '#102040', url: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=100&auto=format&fit=crop&q=80' },
  ];

  return (
    <View style={styles.container}>
      {/* Search Header */}
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.input}
            placeholder="Search that song!"
            placeholderTextColor="#8E8E93"
          />
        </View>
        <View style={styles.shazamButton}>
          <Text style={styles.shazamLogo}>⚡</Text>
        </View>
      </View>

      {/* Recents Section */}
      <Text style={styles.sectionTitle}>Recents</Text>

      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
        {recents.map((item) => (
          <View key={item.id} style={styles.listItem}>
            <Image source={{ uri: item.url }} style={styles.albumArt} />
            <View style={styles.textContainer}>
              <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
              <Text style={styles.subtitle} numberOfLines={1}>{item.subtitle}</Text>
            </View>
            <Text style={styles.closeIcon}>✕</Text>
          </View>
        ))}
        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Mini Player */}
      <View style={styles.miniPlayer}>
        <View style={styles.playerInfo}>
          <Text style={styles.playerTitle}>All Mine</Text>
          <Text style={styles.playerArtist}>Kanye West</Text>
        </View>
        <View style={styles.playButtonContainer}>
          <View style={styles.playButtonCircle}>
            <Text style={styles.playIcon}>▶</Text>
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.navBar}>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>⚡</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🎧</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={[styles.navIcon, styles.activeNavIcon]}>🔍</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
        </View>
      </View>
      <View style={styles.homeIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 54,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F6',
    borderRadius: 24,
    height: 48,
    paddingHorizontal: 16,
    marginRight: 12,
  },
  searchIcon: {
    fontSize: 15,
    marginRight: 10,
    color: '#8E8E93',
  },
  input: {
    flex: 1,
    fontSize: 17,
    color: '#000000',
    paddingVertical: 0,
  },
  shazamButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  shazamLogo: {
    fontSize: 22,
    color: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    paddingHorizontal: 20,
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  list: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  albumArt: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginRight: 14,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 2,
    letterSpacing: -0.2,
  },
  subtitle: {
    fontSize: 14,
    color: '#8E8E93',
    letterSpacing: -0.1,
  },
  closeIcon: {
    fontSize: 13,
    color: '#8E8E93',
    padding: 8,
    fontWeight: '400',
  },
  miniPlayer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    borderBottomWidth: 2.5,
    borderBottomColor: '#FF5722',
  },
  playerInfo: {
    alignItems: 'center',
    flex: 1,
  },
  playerTitle: {
    fontSize: 12.5,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  playerArtist: {
    fontSize: 11,
    color: '#FF5722',
    marginTop: 1,
  },
  playButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1.5,
    borderColor: '#FF5722',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    fontSize: 9,
    color: '#FF5722',
    marginLeft: 1.5,
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#E5E5EA',
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  navIcon: {
    fontSize: 22,
    color: '#8E8E93',
  },
  activeNavIcon: {
    color: '#FF5722',
  },
  homeIndicator: {
    position: 'absolute',
    bottom: 6,
    left: '35%',
    width: '30%',
    height: 4,
    backgroundColor: '#000000',
    borderRadius: 100,
  },
});

export default SearchScreen;
