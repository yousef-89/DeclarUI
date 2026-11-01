import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';

const SearchScreen = () => {
  const recents = [
    { id: 1, title: 'Better Now', subtitle: 'Post Malone', color: '#E5C158' },
    { id: 2, title: 'Kimberly Evans', subtitle: 'Calvin Harris, Dua Lipa', color: '#2B579A' },
    { id: 3, title: 'I Like It', subtitle: 'Cardi B, Bad Bunny, J Balvin', color: '#A62B35' },
    { id: 4, title: 'Girls Like You (feat Cardi B)', subtitle: 'Maroon 5, Cardi B', color: '#213345' },
    { id: 5, title: 'Back To You', subtitle: 'Selena Gomez', color: '#3A5A78' },
    { id: 6, title: 'Lucid Dreams', subtitle: 'Juice WRLD', color: '#A0B4C8' },
    { id: 7, title: 'No Tears Left To Cry', subtitle: 'Ariana Grande', color: '#4B3A5A' },
    { id: 8, title: 'Nice For What', subtitle: 'Drake', color: '#C83278' },
    { id: 9, title: 'Youngblood', subtitle: '5 Seconds of Summer', color: '#102040' },
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
            placeholderTextColor="#999"
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
            <View style={[styles.albumArt, { backgroundColor: item.color }]} />
            <View style={styles.textContainer}>
              <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
              <Text style={styles.subtitle} numberOfLines={1}>{item.subtitle}</Text>
            </View>
            <Text style={styles.closeIcon}>✕</Text>
          </View>
        ))}
        <View style={{ height: 100 }} />
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
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 24,
    height: 48,
    paddingHorizontal: 16,
    marginRight: 12,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
    color: '#8E8E93',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  shazamButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shazamLogo: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  list: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  albumArt: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: '#6E6E73',
  },
  closeIcon: {
    fontSize: 14,
    color: '#8E8E93',
    padding: 8,
  },
  miniPlayer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    height: 54,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#FF5722',
  },
  playerInfo: {
    alignItems: 'center',
    flex: 1,
  },
  playerTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333333',
  },
  playerArtist: {
    fontSize: 11,
    color: '#FF5722',
  },
  playButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#FF5722',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    fontSize: 10,
    color: '#FF5722',
    marginLeft: 2,
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
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  navIcon: {
    fontSize: 20,
    color: '#8E8E93',
  },
  activeNavIcon: {
    color: '#FF5722',
  },
  homeIndicator: {
    position: 'absolute',
    bottom: 8,
    left: '35%',
    width: '30%',
    height: 5,
    backgroundColor: '#000000',
    borderRadius: 100,
  },
});

export default SearchScreen;
