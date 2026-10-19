import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header Bar */}
        <View style={styles.headerBar}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>amazon<Text style={styles.logoDomain}>.co.uk</Text></Text>
            <Text style={styles.primeText}>prime</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <View>
                <Icon name="bell" size={24} color="#000" />
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>3</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="search" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* User Greeting Section */}
          <View style={styles.greetingSection}>
            <View style={styles.userInfo}>
              <View style={styles.userProfileIcon}>
                <Icon name="user" size={22} color="#fff" />
              </View>
              <Text style={styles.greetingText}>Hello, ml296</Text>
              <MaterialIcons name="keyboard-arrow-down" size={24} color="#000" />
            </View>
            <View style={styles.languageContainer}>
              <Image source={require('../assets/snack-icon.png')} style={styles.ukFlag} />
              <Text style={styles.enLabel}>EN</Text>
            </View>
          </View>

          {/* Quick Action Buttons */}
          <View style={styles.quickAccessGrid}>
            <TouchableOpacity 
              style={styles.quickAccessButton}
              onPress={() => navigation.navigate('Orders')}
            >
              <Text style={styles.quickAccessButtonText}>Your Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickAccessButton}>
              <Text style={styles.quickAccessButtonText}>Buy Again</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.quickAccessButton}
              onPress={() => navigation.navigate('Account')}
            >
              <Text style={styles.quickAccessButtonText}>Your Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickAccessButton}>
              <Text style={styles.quickAccessButtonText}>Your Lists</Text>
            </TouchableOpacity>
          </View>

          {/* Your Orders Section */}
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionTitle}>Your Orders</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
              <Text style={styles.seeAllLink}>See all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            <View style={styles.productContainerCard}>
              <Image source={require('../assets/snack-icon.png')} style={styles.bubbleWrapImage} />
              <Text style={styles.productTitle} numberOfLines={2}>SmithPackaging Large Bubble Wrap Roll</Text>
            </View>
            <View style={styles.productContainerCard}>
              <Image source={require('../assets/snack-icon.png')} style={styles.travelPillowImage} />
              <Text style={styles.productTitle} numberOfLines={2}>AYhome Travel Pillow</Text>
            </View>
            <View style={styles.emptyProductPlaceholderCard} />
          </ScrollView>

          {/* Buy Again Section */}
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionTitle}>Buy again</Text>
            <Text style={styles.seeAllLink}>See all</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            <View style={styles.buyAgainCard}>
              <Image source={require('../assets/snack-icon.png')} style={styles.waterBottlesImage} />
              <Text style={styles.buyAgainItemText} numberOfLines={2}>Highland Spring water</Text>
            </View>
            <View style={styles.buyAgainCard}>
              <Image source={require('../assets/snack-icon.png')} style={styles.disposableGlovesImage} />
              <Text style={styles.buyAgainItemText} numberOfLines={2}>Disposable gloves</Text>
            </View>
            <View style={styles.buyAgainCard}>
              <Image source={require('../assets/snack-icon.png')} style={styles.productImageAndrex} />
              <Text style={styles.buyAgainItemText} numberOfLines={2}>King pot noodles</Text>
            </View>
            <View style={styles.buyAgainCard}>
              <Image source={require('../assets/snack-icon.png')} style={styles.waterBottlesImage} />
              <Text style={styles.buyAgainItemText} numberOfLines={2}>Toyama Koshihikari rice</Text>
            </View>
            <View style={styles.buyAgainCard}>
              <Image source={require('../assets/snack-icon.png')} style={styles.disposableGlovesImage} />
              <Text style={styles.buyAgainItemText} numberOfLines={2}>Jin Ramen</Text>
            </View>
            <View style={styles.buyAgainCard}>
              <Image source={require('../assets/snack-icon.png')} style={styles.productImageAndrex} />
              <Text style={styles.buyAgainItemText} numberOfLines={2}>Andrex toilet paper</Text>
            </View>
          </ScrollView>
          <View style={{ height: 80 }} />
        </ScrollView>

        {/* Bottom Navigation Bar */}
        <View style={styles.bottomBar}>
          <TouchableOpacity 
            style={styles.bottomNavIcon} 
            onPress={() => navigation.navigate('Home')}
          >
            <Ionicons name="home-outline" size={26} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavIcon}>
            <Ionicons name="person" size={26} color="#00839b" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavIcon}>
            <View>
              <Ionicons name="cart-outline" size={26} color="#000" />
              <View style={styles.cartBadgeContainer}>
                <Text style={styles.cartBadgeText}>2</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavIcon}>
            <Ionicons name="menu-outline" size={28} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#84e4d6',
  },
  container: {
    flex: 1,
    backgroundColor: '#eaeded',
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#84e4d6',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  logoDomain: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 2,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 20,
    position: 'relative',
  },
  badgeContainer: {
    position: 'absolute',
    top: -5,
    right: -8,
    backgroundColor: '#cc0c39',
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 3,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  greetingSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#84e4d6',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfileIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#95a5a6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginRight: 4,
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  ukFlag: {
    width: 20,
    height: 14,
    marginRight: 4,
    resizeMode: 'contain',
  },
  enLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  quickAccessGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  quickAccessButton: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#d5dbdb',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  quickAccessButtonText: {
    fontSize: 15,
    color: '#0f1111',
    fontWeight: '500',
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f1111',
  },
  seeAllLink: {
    fontSize: 15,
    color: '#007185',
  },
  horizontalScroll: {
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingBottom: 16,
  },
  productContainerCard: {
    width: 170,
    borderWidth: 1,
    borderColor: '#d5dbdb',
    borderRadius: 8,
    padding: 12,
    marginRight: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  bubbleWrapImage: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  travelPillowImage: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 13,
    color: '#0f1111',
    textAlign: 'left',
    width: '100%',
  },
  emptyProductPlaceholderCard: {
    width: 80,
    borderWidth: 1,
    borderColor: '#d5dbdb',
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#f7f7f7',
  },
  buyAgainCard: {
    width: 130,
    borderWidth: 1,
    borderColor: '#d5dbdb',
    borderRadius: 8,
    padding: 8,
    marginRight: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  waterBottlesImage: {
    width: 100,
    height: 90,
    resizeMode: 'contain',
    marginBottom: 6,
  },
  disposableGlovesImage: {
    width: 100,
    height: 90,
    resizeMode: 'contain',
    marginBottom: 6,
  },
  productImageAndrex: {
    width: 100,
    height: 90,
    resizeMode: 'contain',
    marginBottom: 6,
  },
  buyAgainItemText: {
    fontSize: 12,
    color: '#0f1111',
    textAlign: 'center',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justify-around: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#d5dbdb',
    paddingHorizontal: 10,
  },
  bottomNavIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeContainer: {
    position: 'absolute',
    top: -4,
    right: -10,
    backgroundColor: '#00839b',
    borderRadius: 7,
    minWidth: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;