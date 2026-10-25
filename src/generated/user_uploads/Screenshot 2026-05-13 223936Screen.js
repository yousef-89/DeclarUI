import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function Screenshot20260513223936Screen() {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>{'<'}</Text>
        </TouchableOpacity>
        <View style={styles.topRightIcons}>
          <TouchableOpacity style={[styles.iconButton, { marginRight: 12 }]}>
            <Text style={styles.iconText}>↗</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconText}>🛒</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Salad Image Container in B&W */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop' }}
            style={styles.saladImage}
            resizeMode="cover"
          />
        </View>

        {/* Carousel Dots */}
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Product Meta & Title */}
        <View style={styles.productInfoContainer}>
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.inStockText}>In stock</Text>
              <Text style={styles.productTitle}>Apple Chicken Salad</Text>
            </View>
            <TouchableOpacity style={styles.heartButton}>
              <Text style={styles.heartIcon}>♡</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.quickBitesText}>Quick Bites</Text>
          <Text style={styles.priceText}>EGP 160.00</Text>
        </View>

        {/* View in Room Button */}
        <TouchableOpacity style={styles.viewInRoomButton}>
          <Text style={styles.viewInRoomIcon}>📷</Text>
          <Text style={styles.viewInRoomText}>View in Room</Text>
        </TouchableOpacity>

        {/* Product Details Section */}
        <View style={styles.detailsCard}>
          <Text style={styles.detailsTitle}>Product details</Text>
          <Text style={styles.descriptionHeader}>Description</Text>
          <Text style={styles.descriptionText}>
            Sliced grilled chicken, crisp apples, walnuts, and greens with a honey mustard vinaigrette.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Sticky Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.counterContainer}>
          <TouchableOpacity style={styles.counterBtn}>
            <Text style={styles.counterBtnText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.counterValue}>1</Text>
          <TouchableOpacity style={styles.counterBtn}>
            <Text style={styles.counterBtnText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addToCartBtn}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>

      {/* Home Indicator Bar */}
      <View style={styles.homeIndicatorContainer}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  topRightIcons: {
    flexDirection: 'row',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  imageContainer: {
    width: '100%',
    height: 260,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saladImage: {
    width: '100%',
    height: '100%',
    // @ts-ignore
    filter: 'grayscale(100%)',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#C51162',
    width: 16,
  },
  productInfoContainer: {
    paddingHorizontal: 16,
    marginTop: 12,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  inStockText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#00C853',
    marginBottom: 4,
  },
  productTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  heartButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  heartIcon: {
    fontSize: 18,
    color: '#757575',
  },
  quickBitesText: {
    fontSize: 14,
    color: '#757575',
    marginTop: 4,
  },
  priceText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginTop: 12,
  },
  viewInRoomButton: {
    flexDirection: 'row',
    backgroundColor: '#FCE4EC',
    marginHorizontal: 16,
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewInRoomIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  viewInRoomText: {
    color: '#C51162',
    fontSize: 15,
    fontWeight: 'bold',
  },
  detailsCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 20,
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 12,
  },
  descriptionHeader: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 6,
  },
  descriptionText: {
    fontSize: 14,
    color: '#757575',
    lineHeight: 20,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  counterBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterBtnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  counterValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 16,
    color: '#1A1A1A',
  },
  addToCartBtn: {
    flex: 1,
    backgroundColor: '#C51162',
    borderRadius: 24,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  homeIndicatorContainer: {
    position: 'absolute',
    bottom: 4,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  homeIndicator: {
    width: 120,
    height: 4,
    backgroundColor: '#1A1A1A',
    borderRadius: 2,
  },
});
