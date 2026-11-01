import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function ConversationScreen() {
  return (
    <View style={styles.container}>
      {/* Background Image / Overlay Simulation */}
      <View style={styles.backgroundOverlay} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </View>
        <Text style={styles.headerTitle}>When taking a taxi</Text>
      </View>

      {/* Main Content / Bubbles */}
      <View style={styles.content}>
        
        {/* Bubble 1: Ellen */}
        <View style={[styles.bubble, styles.bubbleLeft]}>
          <View style={styles.bubbleTopRow}>
            <View style={{ flex: 1, paddingRight: 10 }}>
              <Text style={styles.mainText}>Hey there</Text>
              <Text style={styles.subText}>Xin chào</Text>
            </View>
            <View style={styles.speakerButton}>
              <Text style={styles.speakerIcon}>🔊</Text>
            </View>
          </View>
          <View style={styles.bubbleBottomRow}>
            <View style={styles.repeatButton}>
              <Text style={styles.repeatIcon}>🎙️</Text>
              <Text style={styles.repeatText}>REPEAT</Text>
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Ellen</Text>
              <View style={styles.avatarContainer}>
                <Image 
                  source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' }} 
                  style={styles.avatarImage} 
                />
              </View>
            </View>
          </View>
        </View>

        {/* Bubble 2: Taxi Driver */}
        <View style={[styles.bubble, styles.bubbleRight]}>
          <View style={styles.bubbleTopRow}>
            <View style={{ flex: 1, paddingRight: 10 }}>
              <Text style={styles.mainText}>Hey,where are you going today?</Text>
              <Text style={styles.subText}>Chào cô, hôm nay cô sẽ đi đâu</Text>
            </View>
            <View style={styles.speakerButton}>
              <Text style={styles.speakerIcon}>🔊</Text>
            </View>
          </View>
          <View style={[styles.bubbleBottomRow, { justifyContent: 'space-between' }]}>
            <View style={styles.userInfo}>
              <View style={styles.avatarContainer}>
                <Image 
                  source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100' }} 
                  style={styles.avatarImage} 
                />
              </View>
              <Text style={styles.userName}>Taxi Driver</Text>
            </View>
            <View style={styles.repeatButton}>
              <Text style={styles.repeatIcon}>🎙️</Text>
              <Text style={styles.repeatText}>REPEAT</Text>
            </View>
          </View>
        </View>

        {/* Bubble 3: Ellen */}
        <View style={[styles.bubble, styles.bubbleLeft]}>
          <View style={styles.bubbleTopRow}>
            <View style={{ flex: 1, paddingRight: 10 }}>
              <Text style={styles.mainText}>25 Gerhold Valley, please.</Text>
              <Text style={styles.subText}>Cho tôi tới 25 Gerhold Valley.</Text>
            </View>
            <View style={styles.speakerButton}>
              <Text style={styles.speakerIcon}>🔊</Text>
            </View>
          </View>
          <View style={styles.bubbleBottomRow}>
            <View style={styles.repeatButton}>
              <Text style={styles.repeatIcon}>🎙️</Text>
              <Text style={styles.repeatText}>REPEAT</Text>
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Ellen</Text>
              <View style={styles.avatarContainer}>
                <Image 
                  source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' }} 
                  style={styles.avatarImage} 
                />
              </View>
            </View>
          </View>
        </View>

        {/* Bubble 4: Taxi Driver (Active / Bottom) */}
        <View style={[styles.bubble, styles.bubbleRight, { marginBottom: 0 }]}>
          <View style={styles.bubbleTopRow}>
            <View style={{ flex: 1, paddingRight: 10 }}>
              <Text style={styles.mainText}>No problem.</Text>
              <Text style={styles.subText}>Không vấn đề.</Text>
            </View>
            <View style={styles.speakerButton}>
              <Text style={styles.speakerIcon}>🔊</Text>
            </View>
          </View>
          <View style={styles.actionRow}>
            <View style={styles.listenButton}>
              <Text style={styles.actionButtonText}>LISTEN</Text>
            </View>
            <View style={styles.speakingButton}>
              <Text style={styles.repeatIcon}>🎙️</Text>
              <Text style={styles.actionButtonText}>SPEAKING</Text>
            </View>
          </View>
        </View>

      </View>

      {/* Home Indicator */}
      <View style={styles.homeIndicatorContainer}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 800,
    backgroundColor: '#1E293B',
    fontFamily: 'System',
    overflow: 'hidden',
    position: 'relative',
  },
  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(20, 28, 45, 0.4)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 48,
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
  backButton: {
    marginRight: 16,
  },
  backArrow: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '500',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    paddingBottom: 32,
    paddingTop: 8,
  },
  bubble: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    position: 'relative',
  },
  bubbleLeft: {
    borderBottomLeftRadius: 4,
  },
  bubbleRight: {
    borderBottomRightRadius: 4,
  },
  bubbleTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  mainText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  subText: {
    fontSize: 13,
    color: '#6B7280',
  },
  speakerButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  speakerIcon: {
    fontSize: 14,
  },
  bubbleBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
  repeatButton: {
    flexDirection: 'row',
    backgroundColor: '#005b8e',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
    alignItems: 'center',
  },
  repeatIcon: {
    fontSize: 12,
    marginRight: 4,
    color: '#FFFFFF',
  },
  repeatText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111827',
    marginHorizontal: 6,
  },
  avatarContainer: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#E2E8F0',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
    gap: 8,
  },
  listenButton: {
    flex: 1,
    backgroundColor: '#10B981',
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  speakingButton: {
    flex: 1.2,
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  homeIndicatorContainer: {
    width: '100%',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  homeIndicator: {
    width: 134,
    height: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
  },
});
