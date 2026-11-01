import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export default function SearchScreen() {
  const items = [
    {
      title: '3D Design Basic',
      lessons: '24 lessons',
      rating: '4.9',
      price: '$24.99',
      isFavorite: true,
      colors: ['#0022ff', '#00bfff', '#9400d3'],
    },
    {
      title: 'Characters Animation',
      lessons: '22 lessons',
      rating: '4.8',
      price: '$22.69',
      isFavorite: false,
      colors: ['#e0aaff', '#ff007f'],
    },
    {
      title: '3D Abstract Design',
      lessons: '18 lessons',
      rating: '4.7',
      price: '$19.29',
      isFavorite: false,
      colors: ['#3a0ca3', '#f72585'],
    },
    {
      title: 'Product Design',
      lessons: '23 lessons',
      rating: '4.8',
      price: '$25.79',
      isFavorite: false,
      colors: ['#03045e', '#d90429'],
    },
  ];

  return (
    <View style={styles.container}>
      {/* Search Header */}
      <View style={styles.header}>
        <View style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </View>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            defaultValue="3D|"
            selectionColor="#007aff"
          />
        </View>
        <View style={styles.filterButton}>
          <View style={styles.filterLines}>
            <View style={styles.filterLineLong} />
            <View style={styles.filterLineMed} />
            <View style={styles.filterLineShort} />
          </View>
        </View>
      </View>

      {/* Results Title */}
      <View style={styles.resultsHeader}>
        <Text style={styles.resultsTitle}>Results</Text>
      </View>

      {/* Results List */}
      <ScrollView style={styles.resultsList} showsVerticalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={[styles.cardThumbnail, { backgroundColor: item.colors[0] }]}>
              <View style={[styles.thumbInner, { backgroundColor: item.colors[1] || '#fff' }]} />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardLessons}>{item.lessons}</Text>
              <View style={styles.ratingRow}>
                <Text style={styles.star}>★</Text>
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
            </View>
            <View style={styles.cardRight}>
              <Text style={[styles.heart, item.isFavorite && styles.heartActive]}>{item.isFavorite ? '♥' : '♡'}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* iOS Keyboard Mock */}
      <View style={styles.keyboard}>
        <View style={styles.kbRow}>
          {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((l) => (
            <View key={l} style={styles.kbKey}><Text style={styles.kbText}>{l}</Text></View>
          ))}
        </View>
        <View style={styles.kbRow}>
          {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((l) => (
            <View key={l} style={styles.kbKey}><Text style={styles.kbText}>{l}</Text></View>
          ))}
        </View>
        <View style={styles.kbRow}>
          <View style={[styles.kbKey, styles.kbSpecialKey]}><Text style={styles.kbText}>⇧</Text></View>
          {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((l) => (
            <View key={l} style={styles.kbKey}><Text style={styles.kbText}>{l}</Text></View>
          ))}
          <View style={[styles.kbKey, styles.kbSpecialKey]}><Text style={styles.kbText}>⌫</Text></View>
        </View>
        <View style={styles.kbRow}>
          <View style={[styles.kbKey, styles.kbActionKey]}><Text style={styles.kbText}>123</Text></View>
          <View style={[styles.kbKey, styles.kbSpaceKey]}><Text style={styles.kbText}>space</Text></View>
          <View style={[styles.kbKey, styles.kbActionKey]}><Text style={styles.kbText}>return</Text></View>
        </View>
        <View style={styles.kbBottomBar}>
          <Text style={styles.kbEmoji}>☺</Text>
          <Text style={styles.kbMic}>🎤</Text>
        </View>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
}

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
    marginBottom: 16,
  },
  backButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#F1F4FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  backButtonText: {
    fontSize: 20,
    color: '#335ef7',
    fontWeight: '500',
    marginTop: -2,
  },
  searchBar: {
    flex: 1,
    height: 48,
    backgroundColor: '#F6F8FF',
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginRight: 12,
  },
  input: {
    fontSize: 16,
    color: '#1a1a1a',
    padding: 0,
    fontWeight: '400',
  },
  filterButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#EBF0FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterLines: {
    width: 16,
    height: 12,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  filterLineLong: {
    width: 16,
    height: 2,
    backgroundColor: '#335ef7',
    borderRadius: 1,
  },
  filterLineMed: {
    width: 11,
    height: 2,
    backgroundColor: '#335ef7',
    borderRadius: 1,
  },
  filterLineShort: {
    width: 6,
    height: 2,
    backgroundColor: '#335ef7',
    borderRadius: 1,
  },
  resultsHeader: {
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  resultsTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1e293b',
  },
  resultsList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f1f5f9',
    shadowColor: '#64748b',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  cardThumbnail: {
    width: 64,
    height: 64,
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbInner: {
    width: 36,
    height: 36,
    borderRadius: 10,
    opacity: 0.5,
  },
  cardInfo: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 4,
  },
  cardLessons: {
    fontSize: 13,
    color: '#94a3b8',
    marginBottom: 6,
    fontWeight: '400',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: '#fbbf24',
    fontSize: 13,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
  },
  cardRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 56,
    paddingRight: 4,
  },
  heart: {
    fontSize: 18,
    color: '#cbd5e1',
  },
  heartActive: {
    color: '#94a3b8',
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#335ef7',
  },
  keyboard: {
    backgroundColor: '#d1d5db',
    paddingTop: 8,
    paddingBottom: 2,
    paddingHorizontal: 4,
  },
  kbRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 6,
  },
  kbKey: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: 42,
    marginHorizontal: 3,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 0,
    elevation: 1,
  },
  kbSpecialKey: {
    flex: 1.3,
    backgroundColor: '#acb2bc',
  },
  kbActionKey: {
    flex: 1.5,
    backgroundColor: '#acb2bc',
  },
  kbSpaceKey: {
    flex: 5.5,
  },
  kbText: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '400',
  },
  kbBottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 36,
    paddingTop: 2,
    paddingBottom: 6,
  },
  kbEmoji: {
    fontSize: 22,
    color: '#111827',
  },
  kbMic: {
    fontSize: 20,
    color: '#111827',
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#000000',
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 2,
    marginBottom: 6,
  },
});
