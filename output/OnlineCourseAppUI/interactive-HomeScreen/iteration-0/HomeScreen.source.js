import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatarShape} />
            </View>
            <Text style={styles.greeting}>Hello, Daniel !</Text>
          </View>
          <View style={styles.headerIcons}>
            <View style={styles.iconButton}>
              <View style={styles.bellInner} />
            </View>
            <View style={styles.iconButton}>
              <View style={styles.heartInner} />
            </View>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchInputArea}>
            <Text style={styles.searchText}>Search</Text>
          </View>
          <View style={styles.filterButton}>
            <View style={styles.filterLines}>
              <View style={styles.filterLineLong} />
              <View style={styles.filterLineMed} />
              <View style={styles.filterLineShort} />
            </View>
          </View>
        </View>

        {/* Promotion Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Promotion</Text>
          <Text style={styles.seeAllText}>See all</Text>
        </View>

        <View style={styles.promoCard}>
          <View style={styles.promoImageContainer}>
            <View style={styles.promoAbstractArt}>
              <View style={styles.abstractBlob1} />
              <View style={styles.abstractBlob2} />
              <View style={styles.abstractBlob3} />
            </View>
          </View>
          <View style={styles.promoContent}>
            <Text style={styles.promoTitle}>3D Design{'\n'}Fundamentals</Text>
            <View style={styles.smallButton}>
              <Text style={styles.smallButtonText}>Small Button</Text>
            </View>
          </View>
        </View>

        {/* Awesome Courses Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Awesome Courses</Text>
          <Text style={styles.seeAllText}>See all</Text>
        </View>

        <View style={styles.categoriesRow}>
          <View style={[styles.categoryPill, styles.categoryPillActive]}>
            <Text style={[styles.categoryText, styles.categoryTextActive]}>Medium</Text>
          </View>
          <View style={styles.categoryPill}>
            <Text style={styles.categoryText}>Popular</Text>
          </View>
          <View style={styles.categoryPill}>
            <Text style={styles.categoryText}>Medium</Text>
          </View>
        </View>

        {/* Course Card 1 */}
        <View style={styles.courseCard}>
          <View style={styles.courseThumbnail}>
            <View style={styles.thumbArt1} />
          </View>
          <View style={styles.courseInfo}>
            <Text style={styles.courseName}>3D Design Basic</Text>
            <Text style={styles.courseLessons}>24 lessons</Text>
            <View style={styles.ratingRow}>
              <Text style={styles.star}>★</Text>
              <Text style={styles.ratingText}>4.9</Text>
            </View>
          </View>
          <View style={styles.courseRight}>
            <View style={styles.smallHeartOutline}>
              <View style={styles.heartInnerSm} />
            </View>
            <Text style={styles.coursePrice}>$24.99</Text>
          </View>
        </View>

        {/* Course Card 2 */}
        <View style={styles.courseCard}>
          <View style={[styles.courseThumbnail, { backgroundColor: '#e2d4e8' }]}>
            <View style={styles.pinkCharacter}>
              <View style={styles.pinkBody} />
            </View>
          </View>
          <View style={styles.courseInfo}>
            <Text style={styles.courseName}>Characters Animation</Text>
            <Text style={styles.courseLessons}>22 lessons</Text>
            <View style={styles.ratingRow}>
              <Text style={styles.star}>★</Text>
              <Text style={styles.ratingText}>4.8</Text>
            </View>
          </View>
          <View style={styles.courseRight}>
            <View style={styles.smallHeartOutline}>
              <View style={styles.heartInnerSmPink} />
            </View>
            <Text style={styles.coursePrice}>$22.69</Text>
          </View>
        </View>

        {/* Bottom spacer */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <View style={styles.navItemActive}>
          <View style={styles.navIconHome} />
          <Text style={styles.navTextActive}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <View style={styles.navIconList} />
        </View>
        <View style={styles.navItem}>
          <View style={styles.navIconChat} />
        </View>
        <View style={styles.navItem}>
          <View style={styles.navIconUser} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#3b54ff',
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 14,
  },
  avatarShape: {
    width: 32,
    height: 28,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111111',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#f1f4fb',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  bellInner: {
    width: 16,
    height: 18,
    backgroundColor: '#7a869a',
    borderRadius: 3,
  },
  heartInner: {
    width: 18,
    height: 16,
    backgroundColor: '#3b54ff',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 28,
  },
  searchInputArea: {
    flex: 1,
    height: 52,
    backgroundColor: '#f4f6fb',
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 18,
    marginRight: 12,
  },
  searchText: {
    color: '#8c98a9',
    fontSize: 16,
  },
  filterButton: {
    width: 52,
    height: 52,
    backgroundColor: '#e6eeff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterLines: {
    width: 18,
    height: 14,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  filterLineLong: {
    width: 18,
    height: 3,
    backgroundColor: '#3b54ff',
    borderRadius: 1.5,
  },
  filterLineMed: {
    width: 13,
    height: 3,
    backgroundColor: '#3b54ff',
    borderRadius: 1.5,
  },
  filterLineShort: {
    width: 8,
    height: 3,
    backgroundColor: '#3b54ff',
    borderRadius: 1.5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1d26',
  },
  seeAllText: {
    fontSize: 15,
    color: '#3b54ff',
    fontWeight: '600',
  },
  promoCard: {
    backgroundColor: '#3b54ff',
    borderRadius: 24,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    marginBottom: 32,
    height: 170,
    overflow: 'hidden',
  },
  promoImageContainer: {
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  promoAbstractArt: {
    width: 110,
    height: 110,
    position: 'relative',
  },
  abstractBlob1: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ff33aa',
    top: 10,
    left: 10,
    opacity: 0.8,
  },
  abstractBlob2: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#00e5ff',
    bottom: 5,
    right: 5,
    opacity: 0.8,
  },
  abstractBlob3: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffee00',
    top: 30,
    right: 20,
    opacity: 0.9,
  },
  promoContent: {
    flex: 1,
    justifyContent: 'center',
  },
  promoTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    lineHeight: 24,
  },
  smallButton: {
    backgroundColor: '#ffcc00',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  smallButtonText: {
    color: '#1a1d26',
    fontWeight: 'bold',
    fontSize: 13,
  },
  categoriesRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  categoryPill: {
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 20,
    backgroundColor: '#f4f6fb',
    marginRight: 12,
  },
  categoryPillActive: {
    backgroundColor: '#3b54ff',
  },
  categoryText: {
    color: '#7a869a',
    fontWeight: '600',
    fontSize: 14,
  },
  categoryTextActive: {
    color: '#ffffff',
  },
  courseCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 12,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#f0f3f8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 12,
    elevation: 2,
  },
  courseThumbnail: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: '#1b3af2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    overflow: 'hidden',
  },
  thumbArt1: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#00ffff',
    opacity: 0.8,
  },
  pinkCharacter: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinkBody: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ff3b99',
  },
  courseInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  courseName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1d26',
    marginBottom: 4,
  },
  courseLessons: {
    fontSize: 13,
    color: '#8c98a9',
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: '#ffb800',
    fontSize: 12,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1a1d26',
  },
  courseRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 60,
  },
  smallHeartOutline: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartInnerSm: {
    width: 14,
    height: 14,
    backgroundColor: '#8c98a9',
  },
  heartInnerSmPink: {
    width: 14,
    height: 14,
    backgroundColor: '#3b54ff',
  },
  coursePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3b54ff',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 85,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f0f3f8',
    paddingHorizontal: 20,
  },
  navItemActive: {
    flexDirection: 'row',
    backgroundColor: '#e6eeff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: 'center',
  },
  navIconHome: {
    width: 16,
    height: 16,
    backgroundColor: '#3b54ff',
    marginRight: 6,
    borderRadius: 3,
  },
  navTextActive: {
    color: '#3b54ff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  navItem: {
    padding: 10,
  },
  navIconList: {
    width: 22,
    height: 18,
    backgroundColor: '#c5d0e0',
    borderRadius: 3,
  },
  navIconChat: {
    width: 20,
    height: 18,
    backgroundColor: '#c5d0e0',
    borderRadius: 3,
  },
  navIconUser: {
    width: 18,
    height: 18,
    backgroundColor: '#c5d0e0',
    borderRadius: 9,
  },
});
