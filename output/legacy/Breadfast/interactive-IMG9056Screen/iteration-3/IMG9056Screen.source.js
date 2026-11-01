import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from '../generated-icon';

export default function IMG9056Screen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Search</Text>

      <View style={styles.footerContainer}>
        <View style={styles.menuButton}>
          <Icon name="menu" size={20} color="#717171" />
        </View>

        <View style={styles.searchBar}>
          <Icon name="search" size={16} color="#969696" style={styles.searchIconStyle} />
          <TextInput
            style={styles.input}
            placeholder="What are you looking for?"
            placeholderTextColor="#969696"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: 32,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#050505',
    marginTop: 0,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 23,
    left: 23,
    right: 23,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
  },
  menuButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#dadada',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  searchBar: {
    flex: 1,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#dadada',
    paddingHorizontal: 16,
  },
  searchIconStyle: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#050505',
    paddingVertical: 0,
  },
});
