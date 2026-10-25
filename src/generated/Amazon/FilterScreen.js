import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from '../../generated/generated-icon';
import MaterialCommunityIcons from '../../generated/generated-icon';

const FilterScreen = ({ navigation }) => {
  const [selectedOrderType, setSelectedOrderType] = useState('Orders');
  const [selectedOrderDate, setSelectedOrderDate] = useState('Last 3 months');

  const handleApplyFilter = () => {
    navigation.navigate('Orders');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Top Search Bar */}
        <View style={styles.topBarContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
            <Icon name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <View style={styles.searchBarContainer}>
            <Icon name="search" size={18} color="#333" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Amazon.co.uk"
              placeholderTextColor="#888"
            />
            <MaterialCommunityIcons name="qrcode-scan" size={18} color="#333" style={styles.iconSpacing} />
            <Icon name="mic" size={18} color="#333" />
          </View>
        </View>

        {/* Sub Header (Back & Apply) */}
        <View style={styles.subHeader}>
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={() => navigation.navigate('Orders')}
          >
            <Icon name="chevron-left" size={24} color="#000" style={styles.backChevron} />
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.applyTopButton}
            onPress={handleApplyFilter}
          >
            <Text style={styles.applyTopButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>

        {/* Scrollable Filter Content */}
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          {/* FILTER BY ORDER TYPE */}
          <Text style={styles.sectionHeader}>FILTER BY ORDER TYPE</Text>

          {/* Orders */}
          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => setSelectedOrderType('Orders')}
          >
            <View style={styles.radioContainer}>
              {selectedOrderType === 'Orders' ? (
                <View style={styles.radioSelectedOuter}>
                  <View style={styles.radioSelectedInner} />
                </View>
              ) : (
                <View style={styles.radioUnselected} />
              )}
            </View>
            <Text style={styles.optionText}>Orders</Text>
          </TouchableOpacity>

          {/* Not Yet Dispatched */}
          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => setSelectedOrderType('Not Yet Dispatched')}
          >
            <View style={styles.radioContainer}>
              {selectedOrderType === 'Not Yet Dispatched' ? (
                <View style={styles.radioSelectedOuter}>
                  <View style={styles.radioSelectedInner} />
                </View>
              ) : (
                <View style={styles.radioUnselected} />
              )}
            </View>
            <Text style={styles.optionText}>Not Yet Dispatched</Text>
          </TouchableOpacity>

          {/* Local shops */}
          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => setSelectedOrderType('Local shops')}
          >
            <View style={styles.radioContainer}>
              {selectedOrderType === 'Local shops' ? (
                <View style={styles.radioSelectedOuter}>
                  <View style={styles.radioSelectedInner} />
                </View>
              ) : (
                <View style={styles.radioUnselected} />
              )}
            </View>
            <Text style={styles.optionText}>Local shops</Text>
          </TouchableOpacity>

          {/* Cancelled */}
          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => setSelectedOrderType('Cancelled')}
          >
            <View style={styles.radioContainer}>
              {selectedOrderType === 'Cancelled' ? (
                <View style={styles.radioSelectedOuter}>
                  <View style={styles.radioSelectedInner} />
                </View>
              ) : (
                <View style={styles.radioUnselected} />
              )}
            </View>
            <Text style={styles.optionText}>Cancelled</Text>
          </TouchableOpacity>

          {/* FILTER BY ORDER DATE */}
          <Text style={styles.sectionHeader}>FILTER BY ORDER DATE</Text>

          {/* Last 30 days */}
          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => setSelectedOrderDate('Last 30 days')}
          >
            <View style={styles.radioContainer}>
              {selectedOrderDate === 'Last 30 days' ? (
                <View style={styles.radioSelectedOuter}>
                  <View style={styles.radioSelectedInner} />
                </View>
              ) : (
                <View style={styles.radioUnselected} />
              )}
            </View>
            <Text style={styles.optionText}>Last 30 days</Text>
          </TouchableOpacity>

          {/* Last 3 months */}
          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => setSelectedOrderDate('Last 3 months')}
          >
            <View style={styles.radioContainer}>
              {selectedOrderDate === 'Last 3 months' ? (
                <View style={styles.radioSelectedOuter}>
                  <View style={styles.radioSelectedInner} />
                </View>
              ) : (
                <View style={styles.radioUnselected} />
              )}
            </View>
            <Text style={styles.optionText}>Last 3 months</Text>
          </TouchableOpacity>

          {/* 2024 */}
          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => setSelectedOrderDate('2024')}
          >
            <View style={styles.radioContainer}>
              {selectedOrderDate === '2024' ? (
                <View style={styles.radioSelectedOuter}>
                  <View style={styles.radioSelectedInner} />
                </View>
              ) : (
                <View style={styles.radioUnselected} />
              )}
            </View>
            <Text style={styles.optionText}>2024</Text>
          </TouchableOpacity>

          {/* 2023 */}
          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => setSelectedOrderDate('2023')}
          >
            <View style={styles.radioContainer}>
              {selectedOrderDate === '2023' ? (
                <View style={styles.radioSelectedOuter}>
                  <View style={styles.radioSelectedInner} />
                </View>
              ) : (
                <View style={styles.radioUnselected} />
              )}
            </View>
            <Text style={styles.optionText}>2023</Text>
          </TouchableOpacity>

          {/* 2022 */}
          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => setSelectedOrderDate('2022')}
          >
            <View style={styles.radioContainer}>
              {selectedOrderDate === '2022' ? (
                <View style={styles.radioSelectedOuter}>
                  <View style={styles.radioSelectedInner} />
                </View>
              ) : (
                <View style={styles.radioUnselected} />
              )}
            </View>
            <Text style={styles.optionText}>2022</Text>
          </TouchableOpacity>

          {/* 2021 */}
          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => setSelectedOrderDate('2021')}
          >
            <View style={styles.radioContainer}>
              {selectedOrderDate === '2021' ? (
                <View style={styles.radioSelectedOuter}>
                  <View style={styles.radioSelectedInner} />
                </View>
              ) : (
                <View style={styles.radioUnselected} />
              )}
            </View>
            <Text style={styles.optionText}>2021</Text>
          </TouchableOpacity>

          {/* Bottom Apply Button inside scroll */}
          <View style={styles.bottomButtonContainer}>
            <TouchableOpacity style={styles.applyButton} onPress={handleApplyFilter}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Bottom Navigation Bar */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Home')}>
            <Icon name="home" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Profile')}>
            <Icon name="user" size={24} color="#00838f" />
            <View style={styles.activeIndicator} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavItem}>
            <View>
              <Icon name="shopping-cart" size={24} color="#000" />
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>2</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavItem}>
            <Icon name="menu" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#62d7c5',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#62d7c5',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginLeft: 12,
    paddingHorizontal: 12,
    height: 42,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#000',
    paddingVertical: 0,
  },
  iconSpacing: {
    marginHorizontal: 12,
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eaeded',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d5dbdb',
  },
  backButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backChevron: {
    marginLeft: -6,
    marginRight: 0,
  },
  backButtonText: {
    fontSize: 17,
    color: '#0f1111',
    fontWeight: '400',
  },
  applyTopButton: {
    backgroundColor: '#ffd814',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fcd200',
  },
  applyTopButtonText: {
    fontSize: 15,
    color: '#0f1111',
    fontWeight: '400',
  },
  scrollView: {
    flex: 1,
    marginBottom: 60,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: '700',
    color: '#555555',
    backgroundColor: '#eaeded',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#d5dbdb',
    letterSpacing: 0.2,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeded',
  },
  radioContainer: {
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioUnselected: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#888',
    backgroundColor: '#fff',
  },
  radioSelectedOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007185',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelectedInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#007185',
  },
  optionText: {
    fontSize: 17,
    color: '#0f1111',
    fontWeight: '400',
  },
  bottomButtonContainer: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  applyButton: {
    backgroundColor: '#ffd814',
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#fcd200',
  },
  applyButtonText: {
    fontSize: 16,
    color: '#0f1111',
    fontWeight: '400',
  },
  bottomNav: {
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
    borderTopColor: '#d5dbdb',
  },
  bottomNavItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    width: '40%',
    height: 3,
    backgroundColor: '#00838f',
  },
  cartBadge: {
    position: 'absolute',
    top: -6,
    right: -10,
    backgroundColor: '#00838f',
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  cartBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default FilterScreen;
