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
            <View style={styles.iconButtonBell}>
              <View style={styles.bellInner} />
            </View>
            <View style={styles.iconButtonHeart}>
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
          <View style={[styles.categoryPill, styles.categoryPillInactive]}>
            <Text style={[styles.categoryText, styles.categoryTextInactive]}>Popular</Text>
          </View>
          <View style={[styles.categoryPill, styles.categoryPillInactive]}>
            <Text style={[styles.categoryText, styles.categoryTextInactive]}>Medium</Text>
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
          <View style={[styles.courseThumbnail, { backgroundColor: '#eed8e2' }]}>
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
        <View style={{ height: 110 }} />
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
    paddingHorizontal: 20,
    paddingTop: 16,
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
    width: 60,
    height: 60,
    borderRadius: 22,
    backgroundColor: '#3b54ff',
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 14,
  },
  avatarShape: {
    width: 42,
    height: 36,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111111',
    letterSpacing: -0.4,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButtonBell: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#f1f4fb',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  iconButtonHeart: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#eaf0ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellInner: {
    width: 18,
    height: 18,
    backgroundColor: '#8c98a9',
    borderRadius: 3,
  },
  heartInner: {
    width: 20,
    height: 18,
    backgroundColor: '#3b54ff',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 26,
  },
  searchInputArea: {
    flex: 1,
    height: 56,
    backgroundColor: '#f7f9fc',
    borderRadius: 18,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginRight: 12,
  },
  searchText: {
    color: '#9aa5b4',
    fontSize: 16,
  },
  filterButton: {
    width: 56,
    height: 56,
    backgroundColor: '#e6eeff',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterLines: {
    width: 18,
    height: 12,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  filterLineLong: {
    width: 18,
    height: 2,
    backgroundColor: '#3b54ff',
    borderRadius: 1,
  },
  filterLineMed: {
    width: 13,
    height: 2,
    backgroundColor: '#3b54ff',
    borderRadius: 1,
  },
  filterLineShort: {
    width: 8,
    height: 2,
    backgroundColor: '#3b54ff',
    borderRadius: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1d26',
    letterSpacing: -0.3,
  },
  seeAllText: {
    fontSize: 16,
    color: '#3b54ff',
    fontWeight: '600',
  },
  promoCard: {
    backgroundColor: '#3b54ff',
    borderRadius: 28,
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    marginBottom: 28,
    height: 185,
    overflow: 'hidden',
  },
  promoImageContainer: {
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  promoAbstractArt: {
    width: 120,
    height: 120,
    position: 'relative',
  },
  abstractBlob1: {
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#ff33aa',
    top: 15,
    left: 0,
    opacity: 0.9,
  },
  abstractBlob2: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#00e5ff',
    bottom: 5,
    right: 10,
    opacity: 0.9,
  },
  abstractBlob3: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffcc00',
    top: 30,
    right: 20,
    opacity: 0.95,
  },
  promoContent: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 4,
  },
  promoTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    lineHeight: 26,
    letterSpacing: -0.3,
  },
  smallButton: {
    backgroundColor: '#ffcc00',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 14,
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
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginRight: 10,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  categoryPillActive: {
    backgroundColor: '#3b54ff',
  },
  categoryPillInactive: {
    backgroundColor: '#ffffff',
    borderColor: '#e2e8f0',
  },
  categoryText: {
    fontWeight: '600',
    fontSize: 15,
  },
  categoryTextActive: {
    color: '#ffffff',
  },
  categoryTextInactive: {
    color: '#64748b',
  },
  courseCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 12,
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  courseThumbnail: {
    width: 72,
    height: 72,
    borderRadius: 20,
    backgroundColor: '#1b3af2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    overflow: 'hidden',
  },
  thumbArt1: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#00ffff',
    opacity: 0.95,
  },
  pinkCharacter: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinkBody: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ff3b99',
  },
  courseInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  courseName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1a1d26',
    marginBottom: 4,
    letterSpacing: -0.2,
  },
  courseLessons: {
    fontSize: 14,
    color: '#8c98a9',
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: '#ffb800',
    fontSize: 13,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 14,
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
    width: 16,
    height: 15,
    backgroundColor: '#94a3b8',
    borderRadius: 2,
  },
  heartInnerSmPink: {
    width: 18,
    height: 16,
    backgroundColor: '#3b54ff',
    borderRadius: 2,
  },
  coursePrice: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#3b54ff',
    letterSpacing: -0.2,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 95,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  navItemActive: {
    flexDirection: 'row',
    backgroundColor: '#e6eeff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 24,
    alignItems: 'center',
  },
  navIconHome: {
    width: 20,
    height: 20,
    backgroundColor: '#3b54ff',
    marginRight: 8,
    borderRadius: 5,
  },
  navTextActive: {
    color: '#3b54ff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  navItem: {
    padding: 12,
  },
  navIconList: {
    width: 24,
    height: 20,
    backgroundColor: '#cbd5e1',
    borderRadius: 4,
  },
  navIconChat: {
    width: 22,
    height: 20,
    backgroundColor: '#cbd5e1',
    borderRadius: 4,
  },
  navIconUser: {
    width: 20,
    height: 20,
    backgroundColor: '#cbd5e1',
    borderRadius: 10,
  },
});
