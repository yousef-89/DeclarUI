import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from '../generated-icon';

const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Header with Back Arrow and Search Bar */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#000" style={styles.searchIcon} />
          <TextInput 
            style={styles.searchInput}
            placeholder="Search Amazon.co.uk"
            placeholderTextColor="#7a7a7a"
          />
          <Icon name="camera" size={20} color="#555" style={styles.searchRightIcon} />
          <Icon name="mic" size={20} color="#555" style={styles.searchRightIconMic} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Orders Section */}
        <Text style={styles.sectionHeader}>Orders</Text>
        <View style={styles.sectionContainer}>
          <TouchableOpacity 
            style={styles.listItem}
            onPress={() => navigation.navigate('Orders')}
          >
            <Text style={styles.listItemText}>Your Orders</Text>
            <Icon name="chevron-right" size={18} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Your Subscribe & Save</Text>
            <Icon name="chevron-right" size={18} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItemLast}>
            <Text style={styles.listItemText}>Your Amazon Day</Text>
            <Icon name="chevron-right" size={18} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Payments Section */}
        <Text style={styles.sectionHeader}>Payments</Text>
        <View style={styles.sectionContainer}>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Payments and transactions</Text>
            <Icon name="chevron-right" size={18} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Manage gift card balance</Text>
            <Icon name="chevron-right" size={18} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Shop with Points</Text>
            <Icon name="chevron-right" size={18} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Top up account</Text>
            <Icon name="chevron-right" size={18} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItemLast}>
            <Text style={styles.listItemText}>In-Store Promo Wallet</Text>
            <Icon name="chevron-right" size={18} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Customer Service Section */}
        <Text style={styles.sectionHeader}>Customer Service</Text>
        <View style={styles.sectionContainer}>
          <TouchableOpacity style={styles.listItemLast}>
            <Text style={styles.listItemText}>Contact Us</Text>
            <Icon name="chevron-right" size={18} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Account Settings Section */}
        <Text style={styles.sectionHeader}>Account Settings</Text>
        <View style={[styles.sectionContainer, { marginBottom: 40 }]}>
          <TouchableOpacity style={styles.listItemLast}>
            <Text style={styles.listItemText}>Login & security</Text>
            <Icon name="chevron-right" size={18} color="#000" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.bottomBarItem}>
          <Icon name="home" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.bottomBarItem}>
          <Icon name="user" size={24} color="#00838f" />
          <View style={styles.activeIndicator} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <View style={styles.cartContainer}>
            <Icon name="shopping-cart" size={24} color="#000" />
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>2</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Icon name="menu" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeded',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7ce4ef',
    paddingTop: 45,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  backButton: {
    padding: 5,
    marginRight: 2,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    borderWidth: 1,
    borderColor: '#b0c4de',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 0,
  },
  searchRightIcon: {
    marginLeft: 14,
  },
  searchRightIconMic: {
    marginLeft: 14,
    marginRight: 2,
  },
  scrollContent: {
    paddingHorizontal: 12,
    paddingTop: 4,
    paddingBottom: 90,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
    marginTop: 16,
    marginBottom: 8,
  },
  sectionContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d5d9d9',
    overflow: 'hidden',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#d5d9d9',
  },
  listItemLast: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  listItemText: {
    fontSize: 16,
    color: '#111',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#d5d9d9',
  },
  bottomBarItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
  activeIndicator: {
    position: 'absolute',
    top: 0,
    width: '45%',
    height: 3,
    backgroundColor: '#00838f',
  },
  cartContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadge: {
    position: 'absolute',
    top: -6,
    right: -10,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 2,
    minWidth: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default AccountScreen;
