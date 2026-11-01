import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const EnrolledCoursesScreen = () => {
  const courses = [
    { title: '3D Design Basic', lessons: '24 lessons', progress: '25%', color: '#3b82f6', bgColors: ['#1e3a8a', '#3b82f6'] },
    { title: '3D Abstract Design', lessons: '18 lessons', progress: '50%', color: '#3b82f6', bgColors: ['#000', '#4f46e5'] },
    { title: 'Characters Animation', lessons: '22 lessons', progress: '75%', color: '#3b82f6', bgColors: ['#f472b6', '#db2777'] },
    { title: 'Game Design', lessons: '25 lessons', progress: '100%', color: '#3b82f6', bgColors: ['#ec4899', '#8b5cf6'] },
    { title: 'Product Design', lessons: '23 lessons', progress: '100%', color: '#3b82f6', bgColors: ['#000', '#ef4444'] },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatarCard}>
          <View style={styles.avatarIconWrapper}>
            <View style={styles.avatarBody} />
            <View style={styles.avatarHead} />
          </View>
          <Text style={styles.avatarText}>My</Text>
          <Text style={styles.avatarSubText}>Medium</Text>
        </View>
        <Text style={styles.headerTitle}>Enrolled Courses</Text>
      </View>

      {/* Filter Tabs */}
      <View style={styles.filterRow}>
        <View style={styles.filterTabActive}>
          <Text style={styles.filterTextActive}>Medium</Text>
        </View>
        <View style={styles.filterTabInactive}>
          <Text style={styles.filterTextInactive}>Medium</Text>
        </View>
      </View>

      {/* Course List */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {courses.map((course, index) => (
          <View key={index} style={styles.courseCard}>
            <View style={[styles.thumbnail, { backgroundColor: course.bgColors[0] }]} />
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseLessons}>{course.lessons}</Text>
            </View>
            <View style={styles.progressContainer}>
              <View style={[
                styles.progressCircle, 
                course.progress === '100%' ? styles.circleFilled : styles.circlePartial
              ]}>
                <Text style={[
                  styles.progressText, 
                  course.progress === '100%' ? styles.textWhite : styles.textBlue
                ]}>
                  {course.progress}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <View style={styles.navIconContainer}>
          <View style={styles.homeRoof} />
          <View style={styles.homeBase} />
        </View>
        <View style={styles.navCourseActive}>
          <View style={styles.bulletListIcon}>
            <View style={styles.bulletRow} />
            <View style={styles.bulletRow} />
            <View style={styles.bulletRow} />
          </View>
          <Text style={styles.navCourseText}>Course</Text>
        </View>
        <View style={styles.navIconContainer}>
          <View style={styles.chatBubble} />
        </View>
        <View style={styles.navIconContainer}>
          <View style={styles.userHead} />
          <View style={styles.userBody} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 60,
    width: '100%',
    maxWidth: 430,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  avatarCard: {
    width: 90,
    height: 100,
    backgroundColor: '#3b54f6',
    borderRadius: 16,
    padding: 10,
    justifyContent: 'space-between',
    shadowColor: '#3b54f6',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  avatarIconWrapper: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarHead: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 4,
  },
  avatarBody: {
    width: 20,
    height: 12,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: 4,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginBottom: -10,
  },
  avatarSubText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginLeft: 20,
  },
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  filterTabActive: {
    borderWidth: 1.5,
    borderColor: '#3b54f6',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginRight: 12,
    backgroundColor: '#ffffff',
  },
  filterTextActive: {
    color: '#3b54f6',
    fontWeight: '600',
    fontSize: 14,
  },
  filterTabInactive: {
    borderWidth: 1.5,
    borderColor: '#3b54f6',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
  },
  filterTextInactive: {
    color: '#3b54f6',
    fontWeight: '600',
    fontSize: 14,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  courseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  thumbnail: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: '#e5e7eb',
  },
  courseInfo: {
    flex: 1,
    marginLeft: 16,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  courseLessons: {
    fontSize: 13,
    color: '#9ca3af',
  },
  progressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 54,
    height: 54,
  },
  progressCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleFilled: {
    backgroundColor: '#3b54f6',
  },
  circlePartial: {
    backgroundColor: '#eff6ff',
    borderWidth: 3,
    borderColor: '#3b54f6',
  },
  progressText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  textWhite: {
    color: '#ffffff',
  },
  textBlue: {
    color: '#3b54f6',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 72,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 10,
    paddingHorizontal: 10,
  },
  navIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navCourseActive: {
    flexDirection: 'row',
    backgroundColor: '#e0e7ff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: 'center',
  },
  navCourseText: {
    color: '#3b54f6',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 8,
  },
  homeRoof: {
    width: 0,
    height: 0,
    borderLeftWidth: 7,
    borderLeftColor: 'transparent',
    borderRightWidth: 7,
    borderRightColor: 'transparent',
    borderBottomWidth: 8,
    borderBottomColor: '#9ca3af',
    marginBottom: 1,
  },
  homeBase: {
    width: 8,
    height: 7,
    backgroundColor: '#9ca3af',
  },
  bulletListIcon: {
    width: 14,
    height: 12,
    justifyContent: 'space-between',
  },
  bulletRow: {
    height: 2.5,
    backgroundColor: '#3b54f6',
    borderRadius: 1,
    width: '100%',
  },
  chatBubble: {
    width: 14,
    height: 11,
    borderWidth: 1.5,
    borderColor: '#9ca3af',
    borderRadius: 3,
  },
  userHead: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#9ca3af',
    marginBottom: 2,
  },
  userBody: {
    width: 12,
    height: 5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: '#9ca3af',
  },
});

export default EnrolledCoursesScreen;
