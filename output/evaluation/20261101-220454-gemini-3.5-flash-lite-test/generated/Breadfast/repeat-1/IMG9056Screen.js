import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '../generated-icon';

export default function IMG9056Screen() {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      {/* Header Title */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      {/* Bottom Area: Hamburger Menu & Search Bar */}
      <View style={styles.bottomBarContainer}>
        {/* Menu Button */}
        <TouchableOpacity style={styles.menuButton} activeOpacity={0.7}>
          <Icon name="menu" size={20} color="#717171" />
        </TouchableOpacity>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Icon name="search" size={17} color="#6f6f6f" style={styles.searchIcon} />
          <TextInput
            style={styles.textInput}
            placeholder="What are you looking for?"
            placeholderTextColor="#969696"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 804,
    backgroundColor: '#ffffff',
    flex: 1,
    position: 'relative',
  },
  headerContainer: {
    position: 'absolute',
    left: 166,
    top: 32,
    width: 56,
    height: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#050505',
    lineHeight: 18,
  },
  bottomBarContainer: {
    position: 'absolute',
    left: 27,
    top: 728,
    width: 336,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dadada',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flex: 1,
    height: 49,
    marginLeft: 9,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 24.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 12,
    color: '#050505',
    padding: 0,
  },
});
