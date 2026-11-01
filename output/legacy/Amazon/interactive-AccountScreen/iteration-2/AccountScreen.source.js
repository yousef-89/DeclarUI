import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from '../../generated/generated-icon';

const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Header with Back Arrow and Search Bar */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.navigate && navigation.navigate('Profile')}
        >
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        
        <View style={styles.searchContainer}>
          <Icon name="search" size={18} color="#000" style={styles.searchIcon} />
          <TextInput 
            style={styles.searchInput}
            placeholder="Search Amazon.co.uk"
            placeholderTextColor="#666"
          />
          <Icon name="camera" size={18} color="#000" style={styles.searchRightIcon} />
          <Icon name="mic" size={18} color="#000" style={styles.searchRightIconMic} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Orders Section */}
        <Text style={styles.sectionHeader}>Orders</Text>
        <View style={styles.sectionContainer}>
          <TouchableOpacity 
            style={styles.listItem}
            onPress={() => navigation.navigate && navigation.navigate('Orders')}
          >
            <Text style={styles.listItemText}>Your Orders</Text>
            <Text style={styles.chevronText}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Your Subscribe & Save</Text>
            <Text style={styles.chevronText}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItemLast}>
            <Text style={styles.listItemText}>Your Amazon Day</Text>
            <Text style={styles.chevronText}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Payments Section */}
        <Text style={styles.sectionHeader}>Payments</Text>
        <View style={styles.sectionContainer}>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Payments and transactions</Text>
            <Text style={styles.chevronText}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Manage gift card balance</Text>
            <Text style={styles.chevronText}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Shop with Points</Text>
            <Text style={styles.chevronText}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Top up account</Text>
            <Text style={styles.chevronText}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItemLast}>
            <Text style={styles.listItemText}>In-Store Promo Wallet</Text>
            <Text style={styles.chevronText}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Customer Service Section */}
        <Text style={styles.sectionHeader}>Customer Service</Text>
        <View style={styles.sectionContainer}>
          <TouchableOpacity style={styles.listItemLast}>
            <Text style={styles.listItemText}>Contact Us</Text>
            <Text style={styles.chevronText}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Account Settings Section */}
        <Text style={styles.sectionHeader}>Account Settings</Text>
        <View style={[styles.sectionContainer, { marginBottom: 40 }]}>
          <TouchableOpacity style={styles.listItemLast}>
            <Text style={styles.listItemText}>Login & security</Text>
            <Text style={styles.chevronText}>›</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => navigation.navigate && navigation.navigate('Home')} style={styles.bottomBarItem}>
          <Icon name="home" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate && navigation.navigate('Profile')} style={styles.bottomBarItem}>
          <View style={styles.activeIndicator} />
          <Icon name="user" size={24} color="#00838f" />
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
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#66e4ee',
    paddingTop: 44,
    paddingBottom: 10,
    paddingHorizontal: 8,
  },
  backButton: {
    padding: 6,
    marginRight: 4,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
    borderWidth: 1,
    borderColor: '#b8c5cc',
  },
  searchIcon: {
    marginRight: 10,
    marginTop: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#111',
    paddingVertical: 0,
    outlineStyle: 'none',
  },
  searchRightIcon: {
    marginLeft: 10,
  },
  searchRightIconMic: {
    marginLeft: 12,
    marginRight: 0,
  },
  scrollContent: {
    paddingHorizontal: 12,
    paddingTop: 2,
    paddingBottom: 90,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
    marginTop: 18,
    marginBottom: 8,
    letterSpacing: -0.3,
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
  chevronText: {
    fontSize: 22,
    color: '#333',
    fontWeight: '300',
    marginTop: -2,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 56,
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
    width: '55%',
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
