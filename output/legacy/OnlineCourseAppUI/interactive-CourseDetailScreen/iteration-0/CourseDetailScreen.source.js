import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function CourseDetailScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.backButton}>
          <Text style={styles.backArrow}>‹</Text>
        </View>
        <Text style={styles.headerTitle}>3D Design Basic</Text>
      </View>

      {/* Video Container */}
      <View style={styles.videoContainer}>
        <View style={styles.abstractArt}>
          <View style={styles.playButton}>
            <Text style={styles.playIcon}>▶</Text>
          </View>
        </View>
      </View>

      {/* Badges */}
      <View style={styles.badgesContainer}>
        <View style={styles.badge}>
          <Text style={styles.badgeIcon}>👥</Text>
          <Text style={styles.badgeText}>4.569</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeIcon}>★</Text>
          <Text style={styles.badgeText}>4.9</Text>
        </View>
        <View style={[styles.badge, styles.bestSellerBadge]}>
          <Text style={styles.bestSellerText}>Best Seller</Text>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>3D Design Basic</Text>

      {/* Description */}
      <Text style={styles.description}>
        In this course you will learn how to build a space to a 3-dimensional product. There are 24 premium learning videos for you.
      </Text>

      {/* Lessons Section Header */}
      <View style={styles.lessonsHeader}>
        <Text style={styles.lessonsTitle}>24 Lessons (20 hours)</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>

      {/* Lesson Item */}
      <View style={styles.lessonCard}>
        <View style={styles.lessonThumbnail}>
          <View style={styles.thumbnailInner} />
        </View>
        <View style={styles.lessonInfo}>
          <Text style={styles.lessonName}>Introduction to 3D</Text>
          <Text style={styles.lessonDuration}>20 mins</Text>
        </View>
        <View style={styles.checkCircle}>
          <Text style={styles.checkIcon}>✓</Text>
        </View>
      </View>

      {/* Bottom Button */}
      <View style={styles.buttonContainer}>
        <View style={styles.largeButton}>
          <Text style={styles.buttonCloud}>☁</Text>
          <Text style={styles.buttonText}>Large Button</Text>
          <Text style={styles.buttonArrow}>→</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  backArrow: {
    fontSize: 24,
    color: '#1F2937',
    marginTop: -2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  videoContainer: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#0F172A',
    marginBottom: 16,
  },
  abstractArt: {
    flex: 1,
    backgroundColor: '#1E1B4B',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'radial-gradient(circle at 30% 30%, #3B82F6 0%, #1E1B4B 60%, #000000 100%)',
  },
  playButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 3,
  },
  badgesContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 8,
  },
  badgeIcon: {
    fontSize: 12,
    marginRight: 4,
    color: '#4F46E5',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4F46E5',
  },
  bestSellerBadge: {
    backgroundColor: '#4F46E5',
  },
  bestSellerText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    marginBottom: 24,
  },
  lessonsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  lessonsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4F46E5',
  },
  lessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    borderRadius: 16,
    padding: 12,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  lessonThumbnail: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#6366F1',
    overflow: 'hidden',
    marginRight: 12,
  },
  thumbnailInner: {
    flex: 1,
    backgroundImage: 'linear-gradient(135deg, #818CF8 0%, #4F46E5 100%)',
  },
  lessonInfo: {
    flex: 1,
  },
  lessonName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  lessonDuration: {
    fontSize: 13,
    color: '#9CA3AF',
  },
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  largeButton: {
    flexDirection: 'row',
    backgroundColor: '#4B5563',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  buttonCloud: {
    color: '#FFFFFF',
    fontSize: 16,
    marginRight: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  buttonArrow: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
