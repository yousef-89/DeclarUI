import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function Screenshot20260513223936Screen() {
  return (
    <View style={styles.container}>
      {/* Status Bar / Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>‹</Text>
        </TouchableOpacity>
        <View style={styles.topRightIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconText}>⎋</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconButton, { marginLeft: 16 }]}>
            <Text style={styles.iconText}>🛒</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80' }}
            style={styles.productImage}
            resizeMode="cover"
          />
          {/* Pagination Dots */}
          <View style={styles.pagination}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* Product Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.inStock}>In stock</Text>
          
          <View style={styles.titleRow}>
            <Text style={styles.title}>Apple Chicken Salad</Text>
            <TouchableOpacity style={styles.heartButton}>
              <Text style={styles.heartIcon}>♡</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.category}>Quick Bites</Text>

          <Text style={styles.price}>EGP 160.00</Text>

          {/* User Requested Blue Balance Card */}
          <View style={styles.balanceCard}>
            <Text style={styles.balanceLabel}>Account Balance</Text>
            <Text style={styles.balanceAmount}>EGP 1,250.00</Text>
          </View>

          {/* User Requested Top Up Button */}
          <TouchableOpacity style={styles.topUpButton}>
            <Text style={styles.topUpText}>Top up balance</Text>
          </TouchableOpacity>

          {/* View in Room Button */}
          <TouchableOpacity style={styles.roomButton}>
            <Text style={styles.roomButtonText}>📦  View in Room</Text>
          </TouchableOpacity>

          {/* Product Details Card */}
          <View style={styles.detailsCard}>
            <Text style={styles.detailsTitle}>Product details</Text>
            <Text style={styles.detailsHeading}>Description</Text>
            <Text style={styles.detailsText}>
              Sliced grilled chicken, crisp apples, walnuts, and greens with a honey mustard vinaigrette.
            </Text>
            
            <Text style={[styles.detailsHeading, { marginTop: 12 }]}>Ingredients</Text>
            <Text style={styles.detailsText}>
              Mixed greens, grilled chicken breast, green apples, walnuts, shredded parmesan, honey mustard dressing.
            </Text>
          </View>
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

        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    maxWidth: 450,
    width: '100%',
    alignSelf: 'center',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 22,
    color: '#111111',
  },
  topRightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  imageContainer: {
    width: '100%',
    height: 280,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 12,
    alignSelf: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#D1D1D6',
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#C70068',
    width: 16,
  },
  infoContainer: {
    padding: 16,
  },
  inStock: {
    color: '#00A86B',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111111',
    flex: 1,
  },
  heartButton: {
    padding: 4,
  },
  heartIcon: {
    fontSize: 24,
    color: '#8E8E93',
  },
  category: {
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 2,
    marginBottom: 8,
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 16,
  },
  balanceCard: {
    backgroundColor: '#1E3A8A', // Rich blue requested by user
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  balanceLabel: {
    color: '#93C5FD',
    fontSize: 13,
    fontWeight: '500',
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
  },
  topUpButton: {
    backgroundColor: '#3B82F6', // Complementary lighter shade of blue
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  topUpText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  roomButton: {
    backgroundColor: '#FCE7F3',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
  },
  roomButtonText: {
    color: '#BE185D',
    fontSize: 15,
    fontWeight: '600',
  },
  detailsCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 12,
  },
  detailsHeading: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  detailsText: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 18,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
    alignItems: 'center',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F4F6',
    borderRadius: 24,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginRight: 12,
  },
  counterBtn: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterBtnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111111',
  },
  counterValue: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 8,
    color: '#111111',
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#A2006D',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
