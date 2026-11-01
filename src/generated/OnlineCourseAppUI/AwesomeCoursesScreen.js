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
      thumbColors: ['#0022ff', '#00d4ff'],
      shapeType: 'fluid',
    },
    {
      id: 2,
      title: 'Characters Animation',
      lessons: '22 lessons',
      rating: '4.8',
      price: '$22.69',
      thumbColors: ['#ffb6c1', '#db7093'],
      shapeType: 'character',
    },
    {
      id: 3,
      title: '3D Abstract Design',
      lessons: '18 lessons',
      rating: '4.7',
      price: '$19.29',
      thumbColors: ['#8a2be2', '#ff1493'],
      shapeType: 'abstract',
    },
    {
      id: 4,
      title: 'Product Design',
      lessons: '23 lessons',
      rating: '4.8',
      price: '$25.79',
      thumbColors: ['#2f4f4f', '#000000'],
      shapeType: 'product',
    },
    {
      id: 5,
      title: 'Game Design',
      lessons: '25 lessons',
      rating: '4.9',
      price: '$26.39',
      thumbColors: ['#da70d6', '#ba55d3'],
      shapeType: 'game',
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
            <View style={[styles.thumbnailContainer, { backgroundColor: index === 0 ? '#1020ee' : index === 1 ? '#e08090' : index === 2 ? '#6a11cb' : index === 3 ? '#223333' : '#b033aa' }]} />
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseLessons}>{course.lessons}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.star}>★</Text>
                <Text style={styles.ratingText}>{course.rating}</Text>
              </View>
            </View>
            <View style={styles.courseRight}>
              <Text style={styles.heartIcon}>♡</Text>
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
    paddingTop: 44,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 20,
    marginTop: 8,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#f0f3ff',
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    letterSpacing: -0.3,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: '#3b5afb',
    marginRight: 12,
    backgroundColor: 'transparent',
  },
  chipActive: {
    backgroundColor: '#3b5afb',
  },
  chipText: {
    fontSize: 15,
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
    paddingBottom: 110,
  },
  courseCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 14,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#1d2633',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  thumbnailContainer: {
    width: 68,
    height: 68,
    borderRadius: 16,
    marginRight: 16,
  },
  courseInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
    letterSpacing: -0.2,
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
    height: 60,
    paddingVertical: 2,
  },
  heartIcon: {
    fontSize: 18,
    color: '#9ca3af',
  },
  coursePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3b5afb',
    letterSpacing: -0.2,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 84,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 12,
  },
  navItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItemActive: {
    backgroundColor: '#f0f3ff',
    paddingHorizontal: 18,
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
