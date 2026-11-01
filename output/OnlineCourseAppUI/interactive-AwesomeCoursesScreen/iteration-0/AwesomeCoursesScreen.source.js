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
        {courses.map((course) => (
          <View key={course.id} style={styles.courseCard}>
            <View style={styles.thumbnailContainer}>
              <View style={[styles.thumbnail, { backgroundColor: course.thumbColors[0] }]} />
            </View>
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
    backgroundColor: '#f8f9fe',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#eef1fc',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  backArrow: {
    fontSize: 18,
    color: '#3b5afb',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#3b5afb',
    marginRight: 12,
    backgroundColor: 'transparent',
  },
  chipActive: {
    backgroundColor: '#3b5afb',
  },
  chipText: {
    fontSize: 14,
    color: '#3b5afb',
    fontWeight: '600',
  },
  chipTextActive: {
    color: '#ffffff',
  },
  courseList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  courseCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#d1d5db',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 3,
  },
  thumbnailContainer: {
    width: 64,
    height: 64,
    borderRadius: 14,
    overflow: 'hidden',
    marginRight: 14,
  },
  thumbnail: {
    flex: 1,
  },
  courseInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 4,
  },
  courseLessons: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 6,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: '#fbbf24',
    fontSize: 12,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4b5563',
  },
  courseRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: '100%',
    paddingVertical: 4,
  },
  heartIcon: {
    fontSize: 18,
    color: '#9ca3af',
    marginBottom: 16,
  },
  coursePrice: {
    fontSize: 15,
    fontWeight: '700',
    color: '#3b5afb',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 10,
  },
  navItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItemActive: {
    backgroundColor: '#eef1fc',
  },
  navIcon: {
    fontSize: 20,
    color: '#9ca3af',
  },
  navIconActive: {
    fontSize: 18,
    color: '#3b5afb',
    marginRight: 6,
  },
  navTextActive: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3b5afb',
  },
});
