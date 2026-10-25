import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const UserUploadScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800' }}
            style={styles.productImage}
          />
          <View style={styles.pagination}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* Product Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.inStockText}>In stock</Text>
          
          <View style={styles.titleRow}>
            <Text style={styles.title}>Apple Chicken Salad</Text>
            <View style={styles.heartButton}>
              <Text style={styles.heartIcon}>{"\u2661"}</Text>
            </View>
          </View>
          
          <Text style={styles.subtitle}>Quick Bites</Text>
          
          <Text style={styles.price}>EGP 160.00</Text>

          {/* View in Room Button */}
          <TouchableOpacity style={styles.viewInRoomButton}>
            <Text style={styles.viewInRoomIcon}>{"\u25CE"}</Text>
            <Text style={styles.viewInRoomText}>View in Room</Text>
          </TouchableOpacity>

          {/* Product Details Section */}
          <View style={styles.detailsCard}>
            <Text style={styles.detailsTitle}>Product details</Text>
            
            <Text style={styles.sectionHeading}>Description</Text>
            <Text style={styles.descriptionText}>
              Sliced grilled chicken, crisp apples, walnuts, and greens with a honey mustard vinaigrette.
            </Text>

            <Text style={[styles.sectionHeading, { marginTop: 16 }]}>Ingredients</Text>
            <Text style={styles.descriptionText}>
              Mixed greens, grilled chicken breast, green apples, walnuts, shredded parmesan cheese.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Top Navigation overlay */}
      <View style={styles.header}>
        <View style={styles.iconButton}>
          <Text style={styles.iconText}>{"\u2039"}</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.iconButton}>
            <Text style={styles.iconText}>{"\u2191"}</Text>
          </View>
          <View style={[styles.iconButton, { marginLeft: 12 }]}>
            <Text style={styles.iconText}>{"\u1F6D2"}</Text>
          </View>
        </View>
      </View>

      {/* Bottom Sticky Action Bar */}
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF3F5',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    zIndex: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  iconText: {
    fontSize: 20,
    color: '#111111',
    fontWeight: '400',
  },
  scrollContent: {
    paddingBottom: 110,
  },
  imageContainer: {
    width: '100%',
    height: 380,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 0,
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    filter: 'grayscale(100%)',
    WebkitFilter: 'grayscale(100%)',
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
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#C51162',
    width: 16,
  },
  infoContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  inStockText: {
    color: '#00C853',
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111111',
    flex: 1,
  },
  heartButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  heartIcon: {
    fontSize: 20,
    color: '#777777',
  },
  subtitle: {
    fontSize: 14,
    color: '#7C7C7C',
    marginTop: 2,
    marginBottom: 12,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 16,
  },
  viewInRoomButton: {
    flexDirection: 'row',
    backgroundColor: '#FCE4EC',
    borderRadius: 16,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  viewInRoomIcon: {
    fontSize: 16,
    color: '#C51162',
    marginRight: 8,
  },
  viewInRoomText: {
    color: '#C51162',
    fontSize: 16,
    fontWeight: '600',
  },
  detailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  detailsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 12,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111111',
    marginBottom: 4,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F4F6',
    borderRadius: 28,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  counterBtn: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterBtnText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#111111',
  },
  counterValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111111',
    paddingHorizontal: 12,
  },
  addToCartButton: {
    backgroundColor: '#A00057',
    flex: 1,
    marginLeft: 16,
    borderRadius: 28,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserUploadScreen;
