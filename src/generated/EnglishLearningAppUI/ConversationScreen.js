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
            <View>
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
                <View style={styles.avatarPlaceholder} />
              </View>
            </View>
          </View>
        </View>

        {/* Bubble 2: Taxi Driver */}
        <View style={[styles.bubble, styles.bubbleRight]}>
          <View style={styles.bubbleTopRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.mainText}>Hey,where are you going today?</Text>
              <Text style={styles.subText}>Chào cô, hôm nay cô sẽ đi đâu</Text>
            </View>
            <View style={styles.speakerButton}>
              <Text style={styles.speakerIcon}>🔊</Text>
            </View>
          </View>
          <View style={[styles.bubbleBottomRow, { justifyContent: 'space-between' }]}>
            <View style={styles.userInfo}>
              <View style={[styles.avatarContainer, { backgroundColor: '#FF8A65' }]}>
                <View style={styles.avatarPlaceholder} />
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
            <View>
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
                <View style={styles.avatarPlaceholder} />
              </View>
            </View>
          </View>
        </View>

        {/* Bubble 4: Taxi Driver (Active / Bottom) */}
        <View style={[styles.bubble, styles.bubbleRight, { marginBottom: 0 }]}>
          <View style={styles.bubbleTopRow}>
            <View style={{ flex: 1 }}>
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
    backgroundColor: '#2b3954',
    fontFamily: 'System',
    overflow: 'hidden',
    position: 'relative',
  },
  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(30, 40, 60, 0.75)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 48,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  backButton: {
    marginRight: 16,
  },
  backArrow: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '600',
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
    paddingBottom: 24,
  },
  bubble: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
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
    marginBottom: 12,
  },
  mainText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  subText: {
    fontSize: 14,
    color: '#7C828D',
  },
  speakerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F4F6F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  speakerIcon: {
    fontSize: 16,
  },
  bubbleBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  repeatButton: {
    flexDirection: 'row',
    backgroundColor: '#006699',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 24,
    alignItems: 'center',
  },
  repeatIcon: {
    fontSize: 14,
    marginRight: 6,
    color: '#FFFFFF',
  },
  repeatText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
    marginHorizontal: 8,
  },
  avatarContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#A0AEC0',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#D1D5DB',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  listenButton: {
    flex: 1,
    backgroundColor: '#10B981',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
    marginRight: 8,
  },
  speakingButton: {
    flex: 1.2,
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 8,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  homeIndicatorContainer: {
    width: '100%',
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
  },
});
