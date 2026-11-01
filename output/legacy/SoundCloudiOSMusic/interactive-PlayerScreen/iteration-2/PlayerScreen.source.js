import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const PlayerScreen = () => {
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusTime}>9:41</Text>
        <View style={styles.statusIcons}>
          <View style={styles.signalBars}>
            <View style={[styles.bar, { height: 4 }]} />
            <View style={[styles.bar, { height: 7 }]} />
            <View style={[styles.bar, { height: 10 }]} />
            <View style={[styles.bar, { height: 12 }]} />
          </View>
          <View style={styles.wifiIcon} />
          <View style={styles.batteryOuter}>
            <View style={styles.batteryInner} />
          </View>
        </View>
      </View>

      {/* Main Content Card */}
      <View style={styles.card}>
        {/* Album Art / Mountain Image representation */}
        <View style={styles.albumArt}>
          <ImageBackground 
            source={{ uri: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop' }} 
            style={styles.albumArtImage}
          >
            <View style={styles.mountainTextContainer}>
              <Text style={styles.mountainText}>I hate being{'\n'}Bi-Polar{'\n'}its awesome</Text>
            </View>
          </ImageBackground>
        </View>

        {/* Track Info */}
        <View style={styles.trackInfoRow}>
          <View style={styles.iconButtonCircle}>
            <View style={styles.plusOuter}>
              <Text style={styles.plusSymbol}>+</Text>
            </View>
          </View>
          <View style={styles.trackTextContainer}>
            <Text style={styles.trackTitle}>All Mine</Text>
            <Text style={styles.trackArtist}>Kanye West</Text>
          </View>
          <View style={styles.iconButtonCircle}>
            <Text style={styles.heartIcon}>♡</Text>
          </View>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBarBackground}>
            <View style={styles.progressBarFill} />
            <View style={styles.progressThumb} />
          </View>
          <View style={styles.timeRow}>
            <Text style={styles.timeText}>01:30</Text>
            <Text style={styles.timeText}>03:00</Text>
          </View>
        </View>

        {/* Player Controls */}
        <View style={styles.controlsRow}>
          <Text style={styles.controlSymbol}>⟳</Text>
          <Text style={styles.controlSymbol}>⏮</Text>
          <View style={styles.playButtonCircle}>
            <Text style={styles.playSymbol}>▶</Text>
          </View>
          <Text style={styles.controlSymbol}>⏭</Text>
          <View style={styles.shuffleContainer}>
            <Text style={styles.shuffleSymbol}>🔀</Text>
          </View>
        </View>

        {/* Bottom Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerClose}>
            <Text style={styles.bannerCloseText}>✕</Text>
          </View>
          <View style={styles.instagramIconContainer}>
            <View style={styles.instagramGradient}>
              <View style={styles.instagramInnerCircle} />
              <View style={styles.instagramDot} />
            </View>
          </View>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Share the sound!</Text>
            <Text style={styles.bannerSubtitle}>Let your friends know what{'\n'}are you listening! Share this song</Text>
          </View>
          <View style={styles.useAppButton}>
            <Text style={styles.useAppText}>Use the app</Text>
          </View>
        </View>

        {/* Home Indicator */}
        <View style={styles.homeIndicatorContainer}>
          <View style={styles.homeIndicator} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6B1A',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  statusBar: {
    width: '100%',
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 28,
    position: 'absolute',
    top: 0,
    zIndex: 10,
  },
  statusTime: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  signalBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 2.5,
    height: 12,
  },
  bar: {
    width: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
  wifiIcon: {
    width: 15,
    height: 11,
    borderTopWidth: 2,
    borderTopColor: '#FFFFFF',
    borderRadius: 8,
  },
  batteryOuter: {
    width: 22,
    height: 11,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 3,
    padding: 1.5,
    justifyContent: 'center',
  },
  batteryInner: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  albumArt: {
    width: '100%',
    height: 335,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#27384A',
  },
  albumArtImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mountainTextContainer: {
    position: 'absolute',
    top: '25%',
  },
  mountainText: {
    color: '#84E444',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 20,
    transform: [{ rotate: '-3deg' }],
    zIndex: 2,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  trackInfoRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 4,
  },
  iconButtonCircle: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusOuter: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1.5,
    borderColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusSymbol: {
    fontSize: 16,
    color: '#1A1A1A',
    fontWeight: '300',
    marginTop: -2,
  },
  heartIcon: {
    fontSize: 26,
    color: '#1A1A1A',
    fontWeight: '300',
  },
  trackTextContainer: {
    alignItems: 'center',
  },
  trackTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
    letterSpacing: -0.3,
  },
  trackArtist: {
    fontSize: 16,
    color: '#FF6B1A',
    fontWeight: '500',
  },
  progressContainer: {
    width: '100%',
    marginTop: 22,
  },
  progressBarBackground: {
    width: '100%',
    height: 3,
    backgroundColor: '#E5E5E5',
    borderRadius: 1.5,
    justifyContent: 'center',
  },
  progressBarFill: {
    width: '51%',
    height: '100%',
    backgroundColor: '#FF6B1A',
    borderRadius: 1.5,
  },
  progressThumb: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FF6B1A',
    position: 'absolute',
    left: '51%',
    marginLeft: -6,
  },
  timeRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  timeText: {
    fontSize: 12,
    color: '#8E8E93',
  },
  controlsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
    paddingHorizontal: 12,
  },
  controlSymbol: {
    fontSize: 24,
    color: '#1A1A1A',
    fontWeight: '400',
  },
  shuffleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shuffleSymbol: {
    fontSize: 22,
    color: '#1A1A1A',
  },
  playButtonCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: '#FF6B1A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playSymbol: {
    fontSize: 22,
    color: '#FF6B1A',
    marginLeft: 3,
  },
  banner: {
    width: '100%',
    backgroundColor: '#F2F2F7',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginTop: 24,
    position: 'relative',
  },
  bannerClose: {
    position: 'absolute',
    top: 6,
    right: 8,
  },
  bannerCloseText: {
    fontSize: 12,
    color: '#8E8E93',
  },
  instagramIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#E1306C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  instagramGradient: {
    width: 26,
    height: 26,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  instagramInnerCircle: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  instagramDot: {
    position: 'absolute',
    top: 3,
    right: 3,
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: '#FFFFFF',
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 2,
  },
  bannerSubtitle: {
    fontSize: 12,
    color: '#8E8E93',
    lineHeight: 16,
  },
  useAppButton: {
    backgroundColor: '#FF2D55',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    marginLeft: 8,
  },
  useAppText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  homeIndicatorContainer: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#000000',
    borderRadius: 100,
  },
});

export default PlayerScreen;
