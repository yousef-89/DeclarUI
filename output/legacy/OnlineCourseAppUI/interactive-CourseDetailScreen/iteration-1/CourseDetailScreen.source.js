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
    padding: 24,
    paddingBottom: 48,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  backArrow: {
    fontSize: 28,
    color: '#1F2937',
    marginTop: -3,
    marginLeft: -2,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  videoContainer: {
    width: '100%',
    height: 220,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#0F172A',
    marginBottom: 20,
  },
  abstractArt: {
    flex: 1,
    backgroundColor: '#1E1B4B',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'radial-gradient(circle at 50% 30%, #3B82F6 0%, #1E1B4B 60%, #020617 100%)',
  },
  playButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
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
    marginBottom: 20,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 8,
  },
  badgeIcon: {
    fontSize: 13,
    marginRight: 6,
    color: '#4F46E5',
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4F46E5',
  },
  bestSellerBadge: {
    backgroundColor: '#4F46E5',
    paddingHorizontal: 14,
  },
  bestSellerText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 28,
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
    borderRadius: 20,
    padding: 16,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  lessonThumbnail: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: '#6366F1',
    overflow: 'hidden',
    marginRight: 16,
  },
  thumbnailInner: {
    flex: 1,
    backgroundImage: 'linear-gradient(135deg, #818CF8 0%, #4F46E5 100%)',
  },
  lessonInfo: {
    flex: 1,
  },
  lessonName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  lessonDuration: {
    fontSize: 13,
    color: '#9CA3AF',
  },
  checkCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
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
    marginTop: 8,
  },
  largeButton: {
    flexDirection: 'row',
    backgroundColor: '#4B5563',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
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
