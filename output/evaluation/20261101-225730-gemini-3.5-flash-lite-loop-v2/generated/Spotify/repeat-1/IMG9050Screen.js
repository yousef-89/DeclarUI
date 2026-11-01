import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from '../generated-icon';

export default function IMG9050Screen() {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="#000000" />
        <TextInput
          style={styles.searchInput}
          placeholder="What do you want to listen to?"
          placeholderTextColor="#000000"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Categories Content Scrollable Area */}
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.gridContainer}>
          {/* Card 1 */}
          <View style={[styles.card, { backgroundColor: '#8769a7' }]}>
            <Text style={styles.cardText}>Made For You</Text>
          </View>
          {/* Card 2 */}
          <View style={[styles.card, { backgroundColor: '#296251' }]}>
            <Text style={styles.cardText}>Upcoming releases</Text>
          </View>
          {/* Card 3 */}
          <View style={[styles.card, { backgroundColor: '#677f27' }]}>
            <Text style={styles.cardText}>New Releases</Text>
          </View>
          {/* Card 4 */}
          <View style={[styles.card, { backgroundColor: '#d2373b' }]}>
            <Text style={styles.cardText}>Arab</Text>
          </View>
          {/* Card 5 */}
          <View style={[styles.card, { backgroundColor: '#537c92' }]}>
            <Text style={styles.cardText}>Pop</Text>
          </View>
          {/* Card 6 */}
          <View style={[styles.card, { backgroundColor: '#d2373b' }]}>
            <Text style={styles.cardText}>K-pop</Text>
          </View>
          {/* Card 7 */}
          <View style={[styles.card, { backgroundColor: '#d63334' }]}>
            <Text style={styles.cardText}>Indie</Text>
          </View>
          {/* Card 8 */}
          <View style={[styles.card, { backgroundColor: '#8769a7' }]}>
            <Text style={styles.cardText}>Charts</Text>
          </View>
          {/* Card 9 */}
          <View style={[styles.cardShort, { backgroundColor: '#c4357c' }]}>
            <Text style={styles.cardText}>Comedy</Text>
          </View>
          {/* Card 10 */}
          <View style={[styles.cardShort, { backgroundColor: '#c4357c' }]}>
            <Text style={styles.cardText}>Educational</Text>
          </View>
        </View>
      </ScrollView>

      {/* Mini Player */}
      <View style={styles.miniPlayer}>
        <View style={styles.miniPlayerArtwork}>
          {/* Artwork representation */}
          <View style={styles.artworkInner} />
        </View>
        <View style={styles.miniPlayerInfo}>
          <Text style={styles.miniPlayerTitle} numberOfLines={1}>Muqattel</Text>
          <Text style={styles.miniPlayerSubtitle} numberOfLines={1}>Wegz, Amaka Jaji</Text>
        </View>
        <View style={styles.miniPlayerControls}>
          <TouchableOpacity style={styles.controlIcon}>
            <Icon name="devices" size={20} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlIcon}>
            <Icon name="plus" size={20} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlIcon}>
            <Icon name="play" size={20} color="#ffffff" filled />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="home" size={22} color="#b3b3b3" />
          <Text style={[styles.tabText, { color: '#ababab' }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="search" size={22} color="#fefefe" />
          <Text style={[styles.tabText, { color: '#f1f1f1' }]}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="library" size={22} color="#b3b3b3" />
          <Text style={[styles.tabText, { color: '#a9a9a9' }]}>Your Library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="plus" size={22} color="#b3b3b3" />
          <Text style={[styles.tabText, { color: '#aaaaaa' }]}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 795,
    backgroundColor: '#121212',
    position: 'relative',
    overflow: 'hidden',
  },
  searchBar: {
    position: 'absolute',
    top: 11,
    left: 15,
    width: 360,
    height: 49,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    zIndex: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    marginLeft: 8,
    fontWeight: '500',
    padding: 0,
  },
  scrollView: {
    position: 'absolute',
    top: 75,
    left: 0,
    right: 0,
    bottom: 125,
  },
  scrollContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: 172,
    height: 106,
    borderRadius: 8,
    marginBottom: 15,
    padding: 12,
    overflow: 'hidden',
  },
  cardShort: {
    width: 172,
    height: 75,
    borderRadius: 8,
    marginBottom: 15,
    padding: 12,
    overflow: 'hidden',
  },
  cardText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  miniPlayer: {
    position: 'absolute',
    top: 650,
    left: 7,
    width: 375,
    height: 56,
    backgroundColor: '#7b1c1c',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    zIndex: 20,
  },
  miniPlayerArtwork: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#d2373b',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  artworkInner: {
    width: '100%',
    height: '100%',
    backgroundColor: '#b32424',
  },
  miniPlayerInfo: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  miniPlayerTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  miniPlayerSubtitle: {
    color: '#b3b3b3',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 2,
  },
  miniPlayerControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlIcon: {
    padding: 8,
  },
  tabBar: {
    position: 'absolute',
    top: 718,
    left: 7,
    width: 375,
    height: 47,
    backgroundColor: '#121212',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 20,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabText: {
    fontSize: 10,
    marginTop: 2,
    fontWeight: '400',
  },
});
