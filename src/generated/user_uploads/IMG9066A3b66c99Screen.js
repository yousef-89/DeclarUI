import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather, FontAwesome5 } from '../generated-icon';

export default function IMG9066A3b66c99Screen() {
  const categories = [
    { title: 'Food', icon: '🍔', badge: null },
    { title: 'talabat mart', icon: '🛒', badge: null },
    { title: 'Groceries', icon: '🥦', badge: null },
    { title: 'DineOut', icon: '🍽️', badge: 'New' },
    { title: 'Pharmacies', icon: '💊', badge: null },
    { title: 'Give Back', icon: '🎁', badge: null },
    { title: 'Stores', icon: '🛍️', badge: null },
    { title: 'Pickup', icon: '🛍️', badge: null },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <Text style={styles.deliverText}>Deliver to</Text>
            <Text style={styles.apartmentText}>Apartment</Text>
            <Ionicons name="chevron-down" size={16} color="#FFFFFF" style={{ marginLeft: 4 }} />
          </View>
          
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={18} color="#999999" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for P"
              placeholderTextColor="#999999"
            />
          </View>
        </View>

        {/* Categories Grid */}
        <View style={styles.gridContainer}>
          {categories.map((item, index) => (
            <View key={index} style={styles.categoryCard}>
              {item.badge && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.badge}</Text>
                </View>
              )}
              <View style={styles.iconCircle}>
                <Text style={{ fontSize: 28 }}>{item.icon}</Text>
              </View>
              <Text style={styles.categoryTitle}>{item.title}</Text>
            </View>
          ))}
        </View>

        {/* Promo Banner */}
        <View style={styles.bannerContainer}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>Same prices as the restaurant,{'\n'}guaranteed!</Text>
            <View style={styles.bannerSubtitleRow}>
              <Text style={styles.bannerSubtitle}>Look for the </Text>
              <View style={styles.priceMatchTag}>
                <Text style={styles.priceMatchText}>Price Match</Text>
              </View>
              <Text style={styles.bannerSubtitle}> label</Text>
            </View>
          </View>
          <View style={styles.phoneMockup}>
            <View style={styles.phoneScreen}>
              <View style={styles.phoneHeader}>
                <Text style={styles.phoneHeaderText}>Roma Pizza To Go</Text>
              </View>
              <View style={styles.phoneBadgeRow}>
                <Ionicons name="checkmark-circle" size={14} color="#00A082" />
                <Text style={styles.phoneBadgeText}>Price match</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Pagination Dots */}
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>

        {/* Redeem Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Redeem and save</Text>
        </View>
        <View style={styles.horizontalScroll}>
          <View style={styles.promoCard}>
            <View style={styles.promoCardContent}>
              <Text style={styles.promoCardTitle}>EGP 100 OFF</Text>
              <Text style={styles.promoCardSubtitle}>talabat mart</Text>
            </View>
          </View>
          <View style={styles.promoCard}>
            <View style={styles.promoCardContent}>
              <Text style={styles.promoCardTitle}>50% OFF</Text>
              <Text style={styles.promoCardSubtitle}>Food</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Floating Bottom Bar */}
      <View style={styles.floatingBar}>
        <View style={styles.floatingBarContent}>
          <View style={styles.floatingBarLeft}>
            <Text style={styles.floatingBadge}>EGP100 OFF</Text>
            <Text style={styles.floatingText}> talabat mart. Ends today</Text>
          </View>
          <Ionicons name="chevron-up" size={20} color="#FFFFFF" />
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <MaterialCommunityIcons name="home-variant" size={24} color="#FA5000" />
          <Text style={[styles.navText, { color: '#FA5000' }]}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <Feather name="file-text" size={22} color="#8F959E" />
          <Text style={styles.navText}>Orders</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="wallet-outline" size={22} color="#8F959E" />
          <Text style={styles.navText}>talabat pay</Text>
        </View>
        <View style={styles.navItem}>
          <Feather name="user" size={22} color="#8F959E" />
          <Text style={styles.navText}>Account</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5A00',
  },
  scrollContent: {
    paddingBottom: 140,
  },
  header: {
    backgroundColor: '#FF5A00',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  deliverText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  apartmentText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 24,
    paddingHorizontal: 16,
    height: 44,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
    outlineStyle: 'none',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    marginTop: 4,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 16,
  },
  categoryCard: {
    width: '25%',
    alignItems: 'center',
    marginBottom: 16,
    position: 'relative',
  },
  iconCircle: {
    width: 68,
    height: 68,
    backgroundColor: '#F9F6F0',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryTitle: {
    fontSize: 12,
    color: '#333333',
    fontWeight: '500',
    textAlign: 'center',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: 12,
    backgroundColor: '#222222',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    zIndex: 1,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  bannerContainer: {
    backgroundColor: '#FA5000',
    marginHorizontal: 16,
    borderRadius: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    height: 170,
    marginTop: 8,
  },
  bannerContent: {
    flex: 1.2,
    padding: 16,
    justifyContent: 'center',
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 20,
    marginBottom: 8,
  },
  bannerSubtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  bannerSubtitle: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  priceMatchTag: {
    backgroundColor: '#CCFF00',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 4,
  },
  priceMatchText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  phoneMockup: {
    flex: 0.8,
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  phoneScreen: {
    width: 130,
    height: 150,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 16,
    padding: 8,
    position: 'absolute',
    right: -10,
    bottom: -10,
  },
  phoneHeader: {
    backgroundColor: '#F2F2F2',
    padding: 4,
    borderRadius: 4,
    marginBottom: 6,
  },
  phoneHeaderText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  phoneBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    padding: 4,
    borderRadius: 4,
  },
  phoneBadgeText: {
    fontSize: 10,
    color: '#00A082',
    fontWeight: 'bold',
    marginLeft: 2,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#DCDCDC',
    marginHorizontal: 3,
  },
  activeDot: {
    width: 16,
    backgroundColor: '#FA5000',
  },
  sectionHeader: {
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
  horizontalScroll: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  promoCard: {
    width: 220,
    height: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginRight: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    justifyContent: 'center',
  },
  promoCardContent: {
    justifyContent: 'center',
  },
  promoCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  promoCardSubtitle: {
    fontSize: 14,
    color: '#666666',
  },
  floatingBar: {
    position: 'absolute',
    bottom: 60,
    left: 16,
    right: 16,
    backgroundColor: '#FA5000',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  floatingBarContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  floatingBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  floatingBadge: {
    backgroundColor: '#FFFFFF',
    color: '#FA5000',
    fontWeight: 'bold',
    fontSize: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
  },
  floatingText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '500',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navText: {
    fontSize: 10,
    color: '#8F959E',
    marginTop: 2,
    fontWeight: '500',
  },
});
