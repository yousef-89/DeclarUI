import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const EnrolledCoursesScreen = () => {
  const courses = [
    { title: '3D Design Basic', lessons: '24 lessons', progress: '25%', bgColors: ['#1e3a8a', '#3b82f6'], imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80' },
    { title: '3D Abstract Design', lessons: '18 lessons', progress: '50%', bgColors: ['#000', '#4f46e5'], imageUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=150&auto=format&fit=crop&q=80' },
    { title: 'Characters Animation', lessons: '22 lessons', progress: '75%', bgColors: ['#f472b6', '#db2777'], imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=150&auto=format&fit=crop&q=80' },
    { title: 'Game Design', lessons: '25 lessons', progress: '100%', bgColors: ['#ec4899', '#8b5cf6'], imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=150&auto=format&fit=crop&q=80' },
    { title: 'Product Design', lessons: '23 lessons', progress: '100%', bgColors: ['#000', '#ef4444'], imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=150&auto=format&fit=crop&q=80' },
  ];

  return (
    <View style={styles.container}>
      {/* Header with Top Profile Card & Title */}
      <View style={styles.header}>
        <View style={styles.avatarCard}>
          <View style={styles.avatarIconWrapper}>
            <View style={styles.avatarHead} />
            <View style={styles.avatarBody} />
          </View>
          <View style={styles.avatarTextContainer}>
            <Text style={styles.avatarText}>My</Text>
            <Text style={styles.avatarSubText}>Medium</Text>
          </View>
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
            <Image source={{ uri: course.imageUrl }} style={styles.thumbnail} />
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
          <View style={styles.userHeadNav} />
          <View style={styles.userBodyNav} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 44,
    width: '100%',
    maxWidth: 430,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  avatarCard: {
    width: 96,
    height: 104,
    backgroundColor: '#3b54f6',
    borderRadius: 24,
    padding: 14,
    justifyContent: 'space-between',
    shadowColor: '#3b54f6',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
  avatarIconWrapper: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarHead: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: 2,
  },
  avatarBody: {
    width: 24,
    height: 12,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: 2,
  },
  avatarTextContainer: {
    alignItems: 'flex-start',
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 18,
  },
  avatarSubText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
    marginLeft: 18,
    letterSpacing: -0.5,
  },
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  filterTabActive: {
    borderWidth: 1.5,
    borderColor: '#3b54f6',
    borderRadius: 22,
    paddingVertical: 8,
    paddingHorizontal: 22,
    marginRight: 10,
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
    borderRadius: 22,
    paddingVertical: 8,
    paddingHorizontal: 22,
    backgroundColor: '#ffffff',
  },
  filterTextInactive: {
    color: '#3b54f6',
    fontWeight: '600',
    fontSize: 14,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 110,
  },
  courseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 12,
    marginBottom: 14,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  thumbnail: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: '#e5e7eb',
  },
  courseInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
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
    width: 56,
    height: 56,
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
    backgroundColor: '#ffffff',
    borderWidth: 3.5,
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
    shadowOpacity: 0.06,
    shadowRadius: 20,
    elevation: 10,
    paddingHorizontal: 8,
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
    borderBottomColor: '#3b54f6',
    marginBottom: 1,
  },
  homeBase: {
    width: 8,
    height: 7,
    backgroundColor: '#3b54f6',
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
    borderColor: '#3b54f6',
    borderRadius: 3,
  },
  userHeadNav: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#3b54f6',
    marginBottom: 2,
  },
  userBodyNav: {
    width: 12,
    height: 5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: '#3b54f6',
  },
});

export default EnrolledCoursesScreen;
