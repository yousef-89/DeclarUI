import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function AwesomeCoursesScreen() {
  const courses = [
    {
      id: 1,
      title: '3D Design Basic',
      lessons: '24 lessons',
      rating: '4.9',
      price: '$24.99',
    },
    {
      id: 2,
      title: 'Characters Animation',
      lessons: '22 lessons',
      rating: '4.8',
      price: '$22.69',
    },
    {
      id: 3,
      title: '3D Abstract Design',
      lessons: '18 lessons',
      rating: '4.7',
      price: '$19.29',
    },
    {
      id: 4,
      title: 'Product Design',
      lessons: '23 lessons',
      rating: '4.8',
      price: '$25.79',
    },
    {
      id: 5,
      title: 'Game Design',
      lessons: '25 lessons',
      rating: '4.9',
      price: '$26.39',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.backButton}>
          <Text style={styles.backArrow}>{'<'}</Text>
        </View>
        <Text style={styles.headerTitle}>Awesome Courses</Text>
      </View>

      {/* Filter Chips */}
      <View style={styles.filterContainer}>
        <View style={[styles.chip, styles.chipActive]}>
          <Text style={[styles.chipText, styles.chipTextActive]}>Medium</Text>
        </View>
        <View style={styles.chip}>
          <Text style={styles.chipText}>Medium</Text>
        </View>
        <View style={styles.chip}>
          <Text style={styles.chipText}>Medium</Text>
        </View>
      </View>

      {/* Course List */}
      <ScrollView
        style={styles.courseList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {courses.map((course, index) => (
          <View key={course.id} style={styles.courseCard}>
            <View 
              style={[
                styles.thumbnailContainer, 
                index === 0 && { backgroundColor: '#183efb' },
                index === 1 && { backgroundColor: '#f18897' },
                index === 2 && { backgroundColor: '#6912cb' },
                index === 3 && { backgroundColor: '#212d2d' },
                index === 4 && { backgroundColor: '#be39a8' },
              ]} 
            />
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseLessons}>{course.lessons}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.star}>★</Text>
                <Text style={styles.ratingText}>{course.rating}</Text>
              </View>
            </View>
            <View style={styles.courseRight}>
              <Text style={styles.heartIcon}>♥</Text>
              <Text style={styles.coursePrice}>{course.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Nav Bar */}
      <View style={styles.bottomNav}>
        <View style={[styles.navItem, styles.navItemActive]}>
          <Text style={styles.navIconActive}>🏠</Text>
          <Text style={styles.navTextActive}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>☰</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>💬</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 48,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  backButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#f2f5ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  backArrow: {
    fontSize: 20,
    color: '#3b5afb',
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111827',
    letterSpacing: -0.5,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  chip: {
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#3b5afb',
    marginRight: 12,
    backgroundColor: 'transparent',
  },
  chipActive: {
    backgroundColor: '#3b5afb',
  },
  chipText: {
    fontSize: 16,
    color: '#3b5afb',
    fontWeight: '600',
  },
  chipTextActive: {
    color: '#ffffff',
  },
  courseList: {
    flex: 1,
    paddingHorizontal: 24,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  courseCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 28,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#1d2633',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  thumbnailContainer: {
    width: 72,
    height: 72,
    borderRadius: 18,
    marginRight: 16,
  },
  courseInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  courseTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
    letterSpacing: -0.3,
  },
  courseLessons: {
    fontSize: 13,
    color: '#9ca3af',
    marginBottom: 6,
    fontWeight: '500',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: '#f59e0b',
    fontSize: 13,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4b5563',
  },
  courseRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 64,
    paddingVertical: 2,
  },
  heartIcon: {
    fontSize: 18,
    color: '#9ca3af',
    fontWeight: '300',
  },
  coursePrice: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#3b5afb',
    letterSpacing: -0.3,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 96,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.06,
    shadowRadius: 20,
    elevation: 16,
  },
  navItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItemActive: {
    backgroundColor: '#f0f3ff',
    paddingHorizontal: 20,
  },
  navIcon: {
    fontSize: 22,
    color: '#9ca3af',
  },
  navIconActive: {
    fontSize: 18,
    color: '#3b5afb',
    marginRight: 8,
  },
  navTextActive: {
    fontSize: 15,
    fontWeight: '600',
    color: '#3b5afb',
  },
});
