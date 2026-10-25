import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from '../../generated/generated-icon';
import MaterialIcons from '../../generated/generated-icon';
import Ionicons from '../../generated/generated-icon';
import Feather from '../../generated/generated-icon';

const OrdersScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header background area */}
      <View style={styles.headerContainer}>
        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation?.navigate?.('Profile')}
          >
            <Icon name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <View style={styles.searchContainer}>
            <Icon name="search" size={18} color="#000" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Amazon.co.uk"
              placeholderTextColor="#7D7D7D"
            />
            <MaterialIcons name="center-focus-weak" size={20} color="#555" style={styles.scanIcon} />
            <Ionicons name="mic-outline" size={20} color="#555" style={styles.micIcon} />
          </View>
        </View>
        <Text style={styles.pageTitle}>Your Orders</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Search all orders input & Filter button */}
        <View style={styles.orderSearchFilterRow}>
          <View style={styles.orderSearchContainer}>
            <Icon name="search" size={16} color="#009688" style={styles.orderSearchIcon} />
            <TextInput
              style={styles.orderSearchInput}
              placeholder="Search all orders"
              placeholderTextColor="#555"
            />
          </View>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => navigation?.navigate?.('Filter')}
          >
            <Text style={styles.filterText}>Filter</Text>
            <Icon name="chevron-right" size={18} color="#000" style={styles.filterArrow} />
          </TouchableOpacity>
        </View>

        {/* Buy again section */}
        <View style={styles.buyAgainSection}>
          <View style={styles.buyAgainHeader}>
            <Text style={styles.buyAgainTitle}>Buy again</Text>
            <TouchableOpacity>
              <Text style={styles.seeMoreText}>See more</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carouselContainer}>
            <View style={styles.productThumbnailContainer}>
              <Image source={{ uri: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=300&q=80' }} style={styles.thumbnailImage} />
            </View>
            <View style={styles.productThumbnailContainer}>
              <Image source={{ uri: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80' }} style={styles.thumbnailImage} />
            </View>
            <View style={styles.productThumbnailContainer}>
              <Image source={{ uri: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=300&q=80' }} style={styles.thumbnailImage} />
            </View>
            <View style={styles.productThumbnailContainer}>
              <Image source={{ uri: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80' }} style={styles.thumbnailImage} />
            </View>
          </ScrollView>
        </View>

        {/* Past three months label */}
        <View style={styles.timeFrameContainer}>
          <Text style={styles.timeFrameText}>Past three months</Text>
        </View>

        {/* Order Item 1 */}
        <View style={styles.orderItemCard}>
          <View style={styles.imagePlaceholder}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1585338107529-13afc5f02c86?auto=format&fit=crop&w=300&q=80' }} style={styles.orderItemImage} />
          </View>
          <View style={styles.orderItemDetails}>
            <Text style={styles.orderItemTitle} numberOfLines={2}>
              SmithPackaging Large Bubble Wrap Roll 300mm x 5m - Sm...
            </Text>
            <Text style={styles.orderItemDelivery}>Delivered 10 June</Text>
          </View>
          <TouchableOpacity style={styles.arrowButton}>
            <Icon name="chevron-right" size={22} color="#555" />
          </TouchableOpacity>
        </View>

        {/* Order Item 2 */}
        <View style={styles.orderItemCard}>
          <View style={styles.imagePlaceholder}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1592722716012-d5582f37c35f?auto=format&fit=crop&w=300&q=80' }} style={styles.orderItemImage} />
          </View>
          <View style={styles.orderItemDetails}>
            <Text style={styles.orderItemTitle} numberOfLines={2}>
              AYhome Travel Pillow, Memory Foam Neck Pillow for Travel,...
            </Text>
            <Text style={styles.orderItemDelivery}>Delivered 10 June</Text>
          </View>
          <TouchableOpacity style={styles.arrowButton}>
            <Icon name="chevron-right" size={22} color="#555" />
          </TouchableOpacity>
        </View>

        {/* Order Item 3 */}
        <View style={styles.orderItemCard}>
          <View style={styles.imageBadgeContainer}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80' }} style={styles.orderItemImage} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </View>
          <View style={styles.orderItemDetails}>
            <Text style={styles.orderItemTitle} numberOfLines={2}>
              Toyama Koshihikari 1kg
            </Text>
            <Text style={styles.orderItemDelivery}>Delivered 28 May</Text>
          </View>
          <TouchableOpacity style={styles.arrowButton}>
            <Icon name="chevron-right" size={22} color="#555" />
          </TouchableOpacity>
        </View>

        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Bottom navigation bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity onPress={() => navigation?.navigate?.('Home')} style={styles.navItem}>
          <Feather name="home" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation?.navigate?.('Profile')} style={styles.navItem}>
          <Feather name="user" size={24} color="#00838F" />
          <View style={styles.activeIndicator} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="shopping-cart" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="menu" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEDED',
  },
  headerContainer: {
    backgroundColor: '#81dcf3',
    paddingTop: 45,
    paddingBottom: 16,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#BDC3C7',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#BDC3C7',
    paddingHorizontal: 12,
    height: 48,
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
  scanIcon: {
    marginHorizontal: 8,
  },
  micIcon: {
    marginLeft: 2,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 14,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  orderSearchFilterRow: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D5D8DC',
  },
  orderSearchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#BDC3C7',
    paddingHorizontal: 10,
    height: 42,
    marginRight: 8,
  },
  orderSearchIcon: {
    marginRight: 8,
  },
  orderSearchInput: {
    flex: 1,
    fontSize: 15,
    color: '#000',
    paddingVertical: 0,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#BDC3C7',
    height: 42,
  },
  filterText: {
    fontSize: 15,
    color: '#000',
    fontWeight: '400',
  },
  filterArrow: {
    marginLeft: 4,
  },
  buyAgainSection: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#D5D8DC',
  },
  buyAgainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  buyAgainTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  seeMoreText: {
    fontSize: 14,
    color: '#0066C0',
  },
  carouselContainer: {
    paddingLeft: 15,
  },
  productThumbnailContainer: {
    width: 95,
    height: 95,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D5D8DC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    padding: 6,
  },
  thumbnailImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  timeFrameContainer: {
    backgroundColor: '#EAEDED',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D5D8DC',
  },
  timeFrameText: {
    fontSize: 13,
    color: '#555',
    fontWeight: '500',
    textAlign: 'center',
  },
  orderItemCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D5D8DC',
  },
  orderItemImage: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },
  imagePlaceholder: {
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBadgeContainer: {
    position: 'relative',
    width: 75,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#BDC3C7',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000',
  },
  orderItemDetails: {
    flex: 1,
    marginLeft: 15,
    marginRight: 10,
  },
  orderItemTitle: {
    fontSize: 15,
    color: '#000',
    marginBottom: 6,
    lineHeight: 20,
  },
  orderItemDelivery: {
    fontSize: 14,
    color: '#008577',
    fontWeight: '500',
  },
  arrowButton: {
    padding: 5,
  },
  bottomNavBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 55,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#BDC3C7',
    elevation: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    width: 45,
    backgroundColor: '#00838F',
  },
});

export default OrdersScreen;
