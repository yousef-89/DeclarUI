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
      thumbType: 'abstract1',
    },
    {
      title: 'Characters Animation',
      lessons: '22 lessons',
      rating: '4.8',
      price: '$22.69',
      isFavorite: false,
      colors: ['#e0aaff', '#ff007f'],
      thumbType: 'character',
    },
    {
      title: '3D Abstract Design',
      lessons: '18 lessons',
      rating: '4.7',
      price: '$19.29',
      isFavorite: false,
      colors: ['#3a0ca3', '#f72585'],
      thumbType: 'abstract2',
    },
    {
      title: 'Product Design',
      lessons: '23 lessons',
      rating: '4.8',
      price: '$25.79',
      isFavorite: false,
      colors: ['#03045e', '#d90429'],
      thumbType: 'product',
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
            selectionColor="#335ef7"
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
              {item.thumbType === 'abstract1' && (
                <View style={styles.thumbAbstract1} />
              )}
              {item.thumbType === 'character' && (
                <View style={styles.thumbCharacterContainer}>
                  <View style={styles.thumbCharacterHead} />
                  <View style={styles.thumbCharacterHornsLeft} />
                  <View style={styles.thumbCharacterHornsRight} />
                </View>
              )}
              {item.thumbType === 'abstract2' && (
                <View style={styles.thumbAbstract2Row}>
                  <View style={styles.thumbAbstractBlob1} />
                  <View style={styles.thumbAbstractBlob2} />
                </View>
              )}
              {item.thumbType === 'product' && (
                <View style={styles.thumbProductContainer}>
                  <View style={styles.thumbProductBase} />
                </View>
              )}
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
        <View style={{ height: 20 }} />
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
          <View style={[styles.kbKey, styles.kbSpecialKey]}><Text style={styles.kbSymbol}>⇧</Text></View>
          {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((l) => (
            <View key={l} style={styles.kbKey}><Text style={styles.kbText}>{l}</Text></View>
          ))}
          <View style={[styles.kbKey, styles.kbSpecialKey]}><Text style={styles.kbSymbol}>⌫</Text></View>
        </View>
        <View style={styles.kbRow}>
          <View style={[styles.kbKey, styles.kbActionKey]}><Text style={styles.kbActionText}>123</Text></View>
          <View style={[styles.kbKey, styles.kbSpaceKey]}><Text style={styles.kbSpaceText}>space</Text></View>
          <View style={[styles.kbKey, styles.kbActionKey, styles.kbReturnKey]}><Text style={styles.kbReturnText}>return</Text></View>
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
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  backButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#eef2ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  backButtonText: {
    fontSize: 20,
    color: '#335ef7',
    fontWeight: '400',
    marginTop: -2,
  },
  searchBar: {
    flex: 1,
    height: 48,
    backgroundColor: '#f4f6fb',
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 18,
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
    backgroundColor: '#eef2ff',
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
    height: 2.5,
    backgroundColor: '#335ef7',
    borderRadius: 1.5,
  },
  filterLineMed: {
    width: 11,
    height: 2.5,
    backgroundColor: '#335ef7',
    borderRadius: 1.5,
  },
  filterLineShort: {
    width: 6,
    height: 2.5,
    backgroundColor: '#335ef7',
    borderRadius: 1.5,
  },
  resultsHeader: {
    paddingHorizontal: 24,
    marginBottom: 14,
  },
  resultsTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    letterSpacing: -0.3,
  },
  resultsList: {
    flex: 1,
    paddingHorizontal: 24,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 14,
    marginBottom: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f3f4f6',
    shadowColor: '#64748b',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 3,
  },
  cardThumbnail: {
    width: 60,
    height: 60,
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  thumbAbstract1: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0044ff',
    opacity: 0.9,
    borderRadius: 16,
  },
  thumbCharacterContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f3d8f8',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  thumbCharacterHead: {
    width: 32,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#ff3399',
  },
  thumbCharacterHornsLeft: {
    position: 'absolute',
    top: 12,
    left: 14,
    width: 6,
    height: 8,
    backgroundColor: '#111',
    transform: [{ rotate: '-20deg' }],
  },
  thumbCharacterHornsRight: {
    position: 'absolute',
    top: 12,
    right: 14,
    width: 6,
    height: 8,
    backgroundColor: '#111',
    transform: [{ rotate: '20deg' }],
  },
  thumbAbstract2Row: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a0536',
  },
  thumbAbstractBlob1: {
    width: 24,
    height: 32,
    borderRadius: 12,
    backgroundColor: '#ff007f',
    marginRight: -6,
    zIndex: 2,
  },
  thumbAbstractBlob2: {
    width: 24,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#00bfff',
    opacity: 0.8,
  },
  thumbProductContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0b092b',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 8,
  },
  thumbProductBase: {
    width: 34,
    height: 18,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#ff3366',
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
    letterSpacing: -0.2,
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
    marginTop: -1,
  },
  ratingText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
  },
  cardRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 52,
    paddingRight: 2,
  },
  heart: {
    fontSize: 19,
    color: '#cbd5e1',
    fontWeight: '300',
  },
  heartActive: {
    color: '#64748b',
    fontWeight: '600',
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#335ef7',
    letterSpacing: -0.2,
  },
  keyboard: {
    backgroundColor: '#cfd4dc',
    paddingTop: 8,
    paddingBottom: 4,
    paddingHorizontal: 4,
  },
  kbRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 7,
    paddingHorizontal: 2,
  },
  kbKey: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: 44,
    marginHorizontal: 3,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 0,
    elevation: 1,
  },
  kbSpecialKey: {
    flex: 1.35,
    backgroundColor: '#adb3be',
  },
  kbActionKey: {
    flex: 1.45,
    backgroundColor: '#adb3be',
  },
  kbReturnKey: {
    backgroundColor: '#8690a0',
  },
  kbSpaceKey: {
    flex: 5.4,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 0,
    elevation: 1,
  },
  kbText: {
    fontSize: 19,
    color: '#111827',
    fontWeight: '400',
  },
  kbSymbol: {
    fontSize: 18,
    color: '#111827',
    fontWeight: '400',
  },
  kbActionText: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '400',
  },
  kbSpaceText: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '400',
  },
  kbReturnText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
  },
  kbBottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 38,
    paddingTop: 4,
    paddingBottom: 2,
  },
  kbEmoji: {
    fontSize: 24,
    color: '#111827',
  },
  kbMic: {
    fontSize: 22,
    color: '#111827',
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#000000',
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
});
