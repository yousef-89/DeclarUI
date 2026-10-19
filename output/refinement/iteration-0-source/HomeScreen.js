import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from '../generated-icon';
import MaterialCommunityIcons from '../generated-icon';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Top Header Section with Gradient-like background simulation */}
        <View style={styles.headerContainer}>
          {/* Search Bar Component */}
          <View style={styles.searchBarContainer}>
            <Icon name="search" size={20} color="#333" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Amazon.co.uk"
              placeholderTextColor="#7f8c8d"
            />
            <MaterialCommunityIcons name="line-scan" size={22} color="#333" style={styles.scanIcon} />
          </View>

          {/* Top Menu / Tabs */}
          <View style={styles.topMenuContainer}>
            <TouchableOpacity>
              <Text style={styles.primeLabel}>Prime</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.topMenuText}>Video</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.topMenuText}>Music</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Delivery Location Address Bar */}
        <TouchableOpacity style={styles.deliveryBar}>
          <Icon name="location-outline" size={18} color="#000" style={{ marginRight: 6 }} />
          <Text style={styles.deliveryText} numberOfLines={1}>
            Deliver to Muyi - St. Andrews KY16 9
          </Text>
          <Icon name="chevron-down" size={16} color="#333" style={{ marginLeft: 4 }} />
        </TouchableOpacity>

        {/* Featured Section: Shop Electronics Today */}
        <View style={styles.featuredContainer}>
          <View style={styles.featuredLeft}>
            <Text style={styles.shopElectronicsHeading}>Shop Electronics today</Text>
          </View>
          <View style={styles.featuredRight}>
            <Image source={require('../assets/snack-icon.png')} style={styles.featuredImage} />
          </View>
        </View>

        {/* Recommended & Deals Row */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dealsRow}>
          {/* Recommended deal for you product card */}
          <TouchableOpacity style={styles.dealCard}>
            <Text style={styles.dealCardTitle}>Recommended deal for you</Text>
            <Image source={require('../assets/snack-icon.png')} style={styles.airFryerImage} />
          </TouchableOpacity>

          {/* 4+ star deal for you card preview */}
          <View style={styles.dealCard}>
            <Text style={styles.dealCardTitle}>4+ star deal for you</Text>
            <Image source={require('../assets/snack-icon.png')} style={styles.airFryerImage} />
          </View>

          {/* Sports & Outdoors category icon & card */}
          <TouchableOpacity style={styles.sportsCard}>
            <Text style={styles.sportsText}>Sports & Outdoors</Text>
            <View style={styles.sportsIconContainer}>
              <Image source={require('../assets/snack-icon.png')} style={styles.sportsImg} />
            </View>
          </TouchableOpacity>
        </ScrollView>

        {/* Prime Day by Category */}
        <View style={styles.categorySection}>
          <Text style={styles.sectionHeading}>Prime Day by category</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryRow}>
            {/* Bags & Luggage */}
            <TouchableOpacity style={styles.categoryItem}>
              <View style={styles.iconCircle}>
                <MaterialCommunityIcons name="bag-suitcase" size={32} color="#0071e3" />
              </View>
              <Text style={styles.categoryLabel}>Bags & Luggage</Text>
            </TouchableOpacity>

            {/* Office */}
            <TouchableOpacity style={styles.categoryItem}>
              <View style={styles.iconCircle}>
                <MaterialCommunityIcons name="printer" size={32} color="#0071e3" />
              </View>
              <Text style={styles.categoryLabel}>Office</Text>
            </TouchableOpacity>

            {/* Automotive */}
            <TouchableOpacity style={styles.categoryItem}>
              <View style={styles.iconCircle}>
                <MaterialCommunityIcons name="car" size={32} color="#0071e3" />
              </View>
              <Text style={styles.categoryLabel}>Automotive</Text>
            </TouchableOpacity>

            {/* Jewellery & Watches */}
            <TouchableOpacity style={styles.categoryItem}>
              <View style={styles.iconCircle}>
                <MaterialCommunityIcons name="diamond-stone" size={32} color="#0071e3" />
              </View>
              <Text style={styles.categoryLabel}>Jewellery & Watches</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Extra bottom spacing so content isn't hidden behind the absolute bottom bar */}
        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.bottomNavIconContainer} onPress={() => navigation.navigate('Home')}>
          <Icon name="home-outline" size={26} color="#0071e3" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavIconContainer} onPress={() => navigation.navigate('Profile')}>
          <Icon name="person-outline" size={26} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavIconContainer}>
          <Icon name="cart-outline" size={26} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavIconContainer}>
          <Icon name="menu-outline" size={26} color="#333" />
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
  scrollContainer: {
    backgroundColor: '#eaeded',
  },
  headerContainer: {
    paddingTop: 50,
    paddingHorizontal: 12,
    paddingBottom: 10,
    backgroundColor: '#8fe3e0',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 44,
    borderWidth: 1,
    borderColor: '#bdc3c7',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  scanIcon: {
    marginLeft: 8,
  },
  topMenuContainer: {
    flexDirection: 'row',
    marginTop: 12,
    paddingLeft: 4,
  },
  primeLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 24,
  },
  topMenuText: {
    fontSize: 16,
    color: '#2c3e50',
    marginRight: 24,
  },
  deliveryBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#b8f2e6',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  deliveryText: {
    flex: 1,
    fontSize: 13,
    color: '#2c3e50',
  },
  featuredContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  featuredLeft: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  shopElectronicsHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
  },
  featuredRight: {
    flex: 1,
    height: 160,
    backgroundColor: '#ddd',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dealsRow: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  dealCard: {
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    elevation: 2,
  },
  dealCardTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  airFryerImage: {
    width: '100%',
    height: 110,
    resizeMode: 'contain',
  },
  sportsCard: {
    width: 150,
    backgroundColor: '#1e90ff',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    elevation: 2,
    justifyContent: 'space-between',
  },
  sportsText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  sportsIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 110,
  },
  sportsImg: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  categorySection: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    marginBottom: 10,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  categoryRow: {
    paddingHorizontal: 8,
  },
  categoryItem: {
    alignItems: 'center',
    width: 95,
    marginHorizontal: 4,
  },
  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#bbdefb',
    marginBottom: 6,
  },
  categoryLabel: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
  bottomNavBar: {
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
    borderTopColor: '#e0e0e0',
    elevation: 10,
  },
  bottomNavIconContainer: {
    padding: 10,
  },
});

export default HomeScreen;