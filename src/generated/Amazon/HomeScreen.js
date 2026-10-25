import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from '../../generated/generated-icon';
import MaterialCommunityIcons from '../../generated/generated-icon';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Top Header Section with Gradient background simulation */}
        <View style={styles.headerContainer}>
          {/* Search Bar Component */}
          <View style={styles.searchBarContainer}>
            <Icon name="search" size={20} color="#222" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Amazon.co.uk"
              placeholderTextColor="#7f8c8d"
            />
            <MaterialCommunityIcons name="line-scan" size={22} color="#222" style={styles.scanIcon} />
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
          <Icon name="location-outline" size={16} color="#000" style={{ marginRight: 6 }} />
          <Text style={styles.deliveryText} numberOfLines={1}>
            Deliver to Muyi - St. Andrews KY16 9
          </Text>
          <Icon name="chevron-down" size={14} color="#333" style={{ marginLeft: 4 }} />
        </TouchableOpacity>

        {/* Featured Section: Shop Electronics Today */}
        <View style={styles.featuredContainer}>
          <View style={styles.featuredLeft}>
            <Text style={styles.shopElectronicsHeading}>Shop Electronics today</Text>
          </View>
          <View style={styles.featuredRight}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' }} 
              style={styles.featuredImage} 
            />
          </View>
        </View>

        {/* Recommended & Deals Row */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dealsRow} contentContainerStyle={{ paddingHorizontal: 8 }}>
          {/* Recommended deal for you product card */}
          <TouchableOpacity style={styles.dealCard}>
            <Text style={styles.dealCardTitle} numberOfLines={2}>Recommended deal for you</Text>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' }} 
              style={styles.airFryerImage} 
            />
          </TouchableOpacity>

          {/* 4+ star deal for you card preview */}
          <View style={styles.dealCard}>
            <Text style={styles.dealCardTitle} numberOfLines={2}>4+ star deal for you</Text>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' }} 
              style={styles.airFryerImage} 
            />
          </View>

          {/* Sports & Outdoors category icon & card */}
          <TouchableOpacity style={styles.sportsCard}>
            <Text style={styles.sportsText} numberOfLines={2}>Sports & Outdoors</Text>
            <View style={styles.sportsIconContainer}>
              <MaterialCommunityIcons name="soccer" size={72} color="#fff" />
            </View>
          </TouchableOpacity>
        </ScrollView>

        {/* Prime Day by Category */}
        <View style={styles.categorySection}>
          <Text style={styles.sectionHeading}>Prime Day by category</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryRow} contentContainerStyle={{ paddingHorizontal: 6 }}>
            {/* Bags & Luggage */}
            <TouchableOpacity style={styles.categoryItem}>
              <View style={styles.iconCircle}>
                <MaterialCommunityIcons name="bag-suitcase" size={32} color="#0071e3" />
              </View>
              <Text style={styles.categoryLabel} numberOfLines={2}>Bags & Luggage</Text>
            </TouchableOpacity>

            {/* Office */}
            <TouchableOpacity style={styles.categoryItem}>
              <View style={styles.iconCircle}>
                <MaterialCommunityIcons name="printer" size={32} color="#0071e3" />
              </View>
              <Text style={styles.categoryLabel} numberOfLines={2}>Office</Text>
            </TouchableOpacity>

            {/* Automotive */}
            <TouchableOpacity style={styles.categoryItem}>
              <View style={styles.iconCircle}>
                <MaterialCommunityIcons name="car" size={32} color="#0071e3" />
              </View>
              <Text style={styles.categoryLabel} numberOfLines={2}>Automotive</Text>
            </TouchableOpacity>

            {/* Jewellery & Watches */}
            <TouchableOpacity style={styles.categoryItem}>
              <View style={styles.iconCircle}>
                <MaterialCommunityIcons name="diamond-stone" size={32} color="#0071e3" />
              </View>
              <Text style={styles.categoryLabel} numberOfLines={2}>Jewellery & Watches</Text>
            </TouchableOpacity>

            {/* Beauty */}
            <TouchableOpacity style={styles.categoryItem}>
              <View style={styles.iconCircle}>
                <MaterialCommunityIcons name="bottle-tonic-plus" size={32} color="#0071e3" />
              </View>
              <Text style={styles.categoryLabel} numberOfLines={2}>Beauty</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Extra bottom spacing so content isn't hidden behind the absolute bottom bar */}
        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.bottomNavIconContainer} onPress={() => navigation && navigation.navigate('Home')}>
          <View style={styles.activeTabIndicator} />
          <Icon name="home-outline" size={26} color="#0071e3" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavIconContainer} onPress={() => navigation && navigation.navigate('Profile')}>
          <Icon name="person-outline" size={26} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavIconContainer}>
          <View style={styles.cartBadgeContainer}>
            <Text style={styles.cartBadgeText}>2</Text>
          </View>
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
    backgroundColor: '#eaeded',
  },
  scrollContainer: {
    backgroundColor: '#eaeded',
  },
  headerContainer: {
    paddingTop: 12,
    paddingHorizontal: 12,
    paddingBottom: 10,
    backgroundColor: '#82e8e2',
    backgroundImage: 'linear-gradient(to bottom, #82e8e2, #a8f3ee)',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
    borderWidth: 1,
    borderColor: '#c8d6e5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 0,
  },
  scanIcon: {
    marginLeft: 10,
  },
  topMenuContainer: {
    flexDirection: 'row',
    marginTop: 10,
    paddingLeft: 4,
  },
  primeLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 28,
  },
  topMenuText: {
    fontSize: 16,
    color: '#111',
    marginRight: 28,
  },
  deliveryBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7ce5db',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  deliveryText: {
    flex: 1,
    fontSize: 13,
    color: '#111',
    fontWeight: '500',
  },
  featuredContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 8,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 6,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#d5dbdb',
  },
  featuredLeft: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  shopElectronicsHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111',
    lineHeight: 28,
  },
  featuredRight: {
    flex: 1,
    height: 180,
    backgroundColor: '#f8f9fa',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dealsRow: {
    marginBottom: 8,
  },
  dealCard: {
    width: 145,
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 10,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#d5dbdb',
  },
  dealCardTitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#111',
    marginBottom: 8,
    height: 36,
  },
  airFryerImage: {
    width: '100%',
    height: 110,
    resizeMode: 'contain',
  },
  sportsCard: {
    width: 145,
    backgroundColor: '#0071e3',
    borderRadius: 6,
    padding: 10,
    marginHorizontal: 4,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#005bb5',
  },
  sportsText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    height: 36,
  },
  sportsIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 110,
  },
  categorySection: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    marginTop: 4,
    marginBottom: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#d5dbdb',
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  categoryRow: {
    paddingHorizontal: 4,
  },
  categoryItem: {
    alignItems: 'center',
    width: 85,
    marginHorizontal: 4,
  },
  iconCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#e6f2ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#3895e6',
    marginBottom: 6,
  },
  categoryLabel: {
    fontSize: 12,
    textAlign: 'center',
    color: '#111',
    lineHeight: 16,
    height: 32,
  },
  bottomNavBar: {
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
    borderTopColor: '#d5dbdb',
    elevation: 10,
  },
  bottomNavIconContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  activeTabIndicator: {
    position: 'absolute',
    top: 0,
    left: 4,
    right: 4,
    height: 3,
    backgroundColor: '#0071e3',
    borderRadius: 1.5,
  },
  cartBadgeContainer: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#0071e3',
    borderRadius: 8,
    paddingHorizontal: 4,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
