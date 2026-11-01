import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from '../generated-icon';

export default function IMG9049Screen() {
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('Search');

  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header (c2) */}
        <View style={styles.header}>
          {/* Avatar (c3) */}
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>Y</Text>
          </View>
          {/* Title (c4) */}
          <Text style={styles.headerTitle}>Search</Text>
          {/* Icon Button (c5) */}
          <TouchableOpacity style={styles.cameraButton}>
            <Icon name="camera" size={22} color="#ffffff" />
          </TouchableOpacity>
        </View>

        {/* Search Bar (c6) */}
        <View style={styles.searchBar}>
          <View style={styles.searchIconContainer}>
            <Icon name="search" size={20} color="#121212" />
          </View>
          <TextInput
            style={styles.searchInput}
            placeholder="What do you want to listen to?"
            placeholderTextColor="#121212"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Categories Grid - Row 1 */}
        <View style={styles.categoryRow}>
          {/* Card c7: Music */}
          <View style={[styles.categoryCard, { backgroundColor: '#ca3289' }]}>
            <Text style={styles.categoryTitle}>Music</Text>
            {/* Visual art approximation */}
            <View style={styles.cardImagePlaceholder1} />
          </View>

          {/* Card c8: Podcasts */}
          <View style={[styles.categoryCard, { backgroundColor: '#296251' }]}>
            <Text style={styles.categoryTitle}>Podcasts</Text>
            <View style={styles.cardImagePlaceholder2} />
          </View>
        </View>

        {/* Categories Grid - Row 2 */}
        <View style={styles.categoryRow}>
          {/* Card c9: Audiobooks */}
          <View style={[styles.categoryCard, { backgroundColor: '#a7e7db' }]}>
            <Text style={[styles.categoryTitle, { color: '#121212' }]}>
              Audiobooks
            </Text>
            <View style={styles.cardImagePlaceholder3} />
          </View>

          {/* Card c10: Live Events */}
          <View style={[styles.categoryCard, { backgroundColor: '#7816dd' }]}>
            <Text style={styles.categoryTitle}>Live Events</Text>
            <View style={styles.cardImagePlaceholder4} />
          </View>
        </View>

        {/* Section Title c11 */}
        <Text style={styles.sectionTitle}>Explore episodes for you</Text>

        {/* Episode Cards Horizontal Carousel */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.episodeCarousel}
          contentContainerStyle={styles.episodeCarouselContent}
        >
          {/* Card c12 */}
          <View style={[styles.episodeCard, { backgroundColor: '#f9dc80' }]}>
            <View style={styles.episode12Inner}>
              <View style={styles.episode12Circle}>
                <Text style={styles.episode12Number}>14</Text>
              </View>
              <Text style={styles.episode12Subtitle}>WAS TUN MIT</Text>
              <Text style={styles.episode12MainTitle}>
                unerwartet viel Deutsch. Geld?
              </Text>
            </View>
          </View>

          {/* Card c13 */}
          <View style={[styles.episodeCard, { backgroundColor: '#bebdba' }]}>
            <View style={styles.episode13Overlay}>
              <Text style={styles.episode13Title} numberOfLines={2}>
                Die Macht des Verbs „geben“
              </Text>
            </View>
          </View>

          {/* Card c14 */}
          <View style={[styles.episodeCardWidthC14, { backgroundColor: '#ffffff' }]}>
            <View style={styles.episode14Inner}>
              <Text style={styles.episode14Brand}>RN MAN</Text>
              <Text style={styles.episode14Text} numberOfLines={3}>
                w German For Begi Deutsch im Alltag traini
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* Made For You & Upcoming releases */}
        <View style={styles.categoryRow}>
          {/* Card c15 */}
          <View style={[styles.longCard, { backgroundColor: '#886aa7' }]}>
            <Text style={styles.categoryTitle}>Made For You</Text>
          </View>

          {/* Card c16 */}
          <View style={[styles.longCard, { backgroundColor: '#296251' }]}>
            <Text style={styles.categoryTitle}>Upcoming releases</Text>
          </View>
        </View>

        {/* Bottom spacing to prevent mini-player overlap */}
        <View style={{ height: 140 }} />
      </ScrollView>

      {/* Mini Player (c17) */}
      <View style={styles.miniPlayer}>
        {/* Progress Bar (c18) */}
        <View style={styles.miniPlayerProgressBarTrack}>
          <View style={styles.miniPlayerProgressBarFill} />
        </View>

        <View style={styles.miniPlayerContent}>
          {/* Thumbnail */}
          <View style={styles.miniPlayerThumb}>
            <Text style={styles.miniPlayerThumbText}>Y</Text>
          </View>

          {/* Track Info */}
          <View style={styles.miniPlayerInfo}>
            <Text style={styles.miniPlayerTitle} numberOfLines={1}>
              Muqattel
            </Text>
            <Text style={styles.miniPlayerSubtitle} numberOfLines={1}>
              Wegz, Amaka Jaji
            </Text>
          </View>

          {/* Controls */}
          <View style={styles.miniPlayerControls}>
            <TouchableOpacity style={styles.miniPlayerIconBtn}>
              <Icon name="phone" size={18} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.miniPlayerIconBtn}>
              <Icon name="plus" size={18} color="#ffffff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.miniPlayerPlayBtn}>
              <Icon name="play" size={14} color="#121212" filled />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Tab Bar (c19) */}
      <View style={styles.tabBar}>
        {/* Home */}
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab('Home')}
        >
          <Icon
            name="home"
            size={24}
            color={activeTab === 'Home' ? '#ffffff' : '#b3b3b3'}
            filled={activeTab === 'Home'}
          />
          <Text
            style={[
              styles.tabLabel,
              { color: activeTab === 'Home' ? '#ffffff' : '#b3b3b3' },
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>

        {/* Search */}
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab('Search')}
        >
          <Icon
            name="search"
            size={24}
            color={activeTab === 'Search' ? '#ffffff' : '#b3b3b3'}
            filled={activeTab === 'Search'}
          />
          <Text
            style={[
              styles.tabLabel,
              { color: activeTab === 'Search' ? '#ffffff' : '#b3b3b3' },
            ]}
          >
            Search
          </Text>
        </TouchableOpacity>

        {/* Your Library */}
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab('Your Library')}
        >
          <Icon
            name="list"
            size={24}
            color={activeTab === 'Your Library' ? '#ffffff' : '#b3b3b3'}
            filled={activeTab === 'Your Library'}
          />
          <Text
            style={[
              styles.tabLabel,
              { color: activeTab === 'Your Library' ? '#ffffff' : '#b3b3b3' },
            ]}
          >
            Your Library
          </Text>
        </TouchableOpacity>

        {/* Create */}
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab('Create')}
        >
          <Icon
            name="plus"
            size={24}
            color={activeTab === 'Create' ? '#ffffff' : '#b3b3b3'}
            filled={activeTab === 'Create'}
          />
          <Text
            style={[
              styles.tabLabel,
              { color: activeTab === 'Create' ? '#ffffff' : '#b3b3b3' },
            ]}
          >
            Create
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 800,
    backgroundColor: '#121212',
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  header: {
    height: 49,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  avatar: {
    width: 33,
    height: 33,
    borderRadius: 16.5,
    backgroundColor: '#ff5555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
    flex: 1,
    marginLeft: 15,
  },
  cameraButton: {
    width: 25,
    height: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    height: 49,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  searchIconContainer: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#121212',
    fontWeight: '500',
    padding: 0,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  categoryCard: {
    width: 172,
    height: 65,
    borderRadius: 6,
    padding: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  longCard: {
    width: 172,
    height: 97,
    borderRadius: 6,
    padding: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  categoryTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    zIndex: 2,
  },
  cardImagePlaceholder1: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    width: 70,
    height: 70,
    backgroundColor: '#e2559a',
    borderRadius: 35,
    opacity: 0.8,
  },
  cardImagePlaceholder2: {
    position: 'absolute',
    right: -15,
    bottom: -15,
    width: 80,
    height: 80,
    backgroundColor: '#1b4034',
    borderRadius: 40,
  },
  cardImagePlaceholder3: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    width: 70,
    height: 70,
    backgroundColor: '#68c4b4',
    borderRadius: 35,
  },
  cardImagePlaceholder4: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    width: 70,
    height: 70,
    backgroundColor: '#560fb0',
    borderRadius: 35,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 15,
  },
  episodeCarousel: {
    marginBottom: 20,
    marginHorizontal: -15,
    paddingHorizontal: 15,
  },
  episodeCarouselContent: {
    paddingRight: 15,
  },
  episodeCard: {
    width: 132,
    height: 198,
    borderRadius: 8,
    marginRight: 18,
    overflow: 'hidden',
    position: 'relative',
  },
  episodeCardWidthC14: {
    width: 73,
    height: 198,
    borderRadius: 8,
    marginRight: 18,
    overflow: 'hidden',
    position: 'relative',
  },
  episode12Inner: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  episode12Circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1.5,
    borderColor: '#121212',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  episode12Number: {
    fontSize: 32,
    fontWeight: '700',
    color: '#121212',
  },
  episode12Subtitle: {
    fontSize: 10,
    fontWeight: '700',
    color: '#121212',
  },
  episode12MainTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#121212',
  },
  episode13Overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
    padding: 10,
  },
  episode13Title: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '700',
  },
  episode14Inner: {
    flex: 1,
    padding: 8,
    justifyContent: 'space-between',
  },
  episode14Brand: {
    fontSize: 8,
    fontWeight: '700',
    color: '#121212',
  },
  episode14Text: {
    fontSize: 10,
    fontWeight: '600',
    color: '#121212',
  },
  miniPlayer: {
    position: 'absolute',
    bottom: 67,
    left: 7,
    right: 8,
    height: 52,
    backgroundColor: '#821a1a',
    borderRadius: 6,
    overflow: 'hidden',
  },
  miniPlayerProgressBarTrack: {
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: '100%',
  },
  miniPlayerProgressBarFill: {
    height: '100%',
    width: '40%',
    backgroundColor: '#ffffff',
  },
  miniPlayerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  miniPlayerThumb: {
    width: 38,
    height: 38,
    borderRadius: 4,
    backgroundColor: '#e28888',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  miniPlayerThumbText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  miniPlayerInfo: {
    flex: 1,
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
  },
  miniPlayerControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniPlayerIconBtn: {
    padding: 6,
    marginLeft: 4,
  },
  miniPlayerPlayBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 67,
    backgroundColor: '#121212',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
    borderTopWidth: 0.5,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 4,
    fontWeight: '500',
  },
});
