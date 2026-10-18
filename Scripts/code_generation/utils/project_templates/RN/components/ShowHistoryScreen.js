import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ShowHistoryScreen = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClearHistory = () => {
    navigation.navigate('ClearHistory');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header Section */}
      <View style={styles.header}>
        <View style={styles.switchContainer}>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: '#767577', true: '#ff007f' }}
            thumbColor={isDarkMode ? '#ffffff' : '#f4f3f4'}
          />
          <Text style={styles.switchLabel}>Switch to Dark</Text>
        </View>
        <Text style={styles.expressionText}>45 × 24</Text>
        <Text style={styles.resultText}>1080</Text>
      </View>

      <View style={styles.divider} />

      {/* History Container */}
      <View style={styles.historyContainer}>
        <View style={styles.toolbar}>
          <TouchableOpacity>
            <Text style={styles.iconPlaceholder}>🕒</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.iconPlaceholder}>⤢</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tagButton}>
            <Text style={styles.tagText}>1080</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.iconPlaceholder}>✕</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contentArea}>
          <View style={styles.listContainer}>
            <View style={styles.historyItem}>
              <Text style={styles.historyExpr}>45 × 24</Text>
              <Text style={styles.historyResult}>= 1080</Text>
            </View>
            <View style={styles.historyItem}>
              <Text style={styles.historyExpr}>25 × 2</Text>
              <Text style={styles.historyResult}>= 50</Text>
            </View>
          </View>

          <View style={styles.keypad}>
            <TouchableOpacity style={styles.opButton}><Text style={styles.opText}>/</Text></TouchableOpacity>
            <TouchableOpacity style={styles.opButton}><Text style={styles.opText}>x</Text></TouchableOpacity>
            <TouchableOpacity style={styles.opButton}><Text style={styles.opText}>-</Text></TouchableOpacity>
            <TouchableOpacity style={styles.opButton}><Text style={styles.opText}>+</Text></TouchableOpacity>
            <TouchableOpacity style={styles.equalButton}><Text style={styles.opText}>=</Text></TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.clearButton} onPress={handleClearHistory}>
          <Text style={styles.clearButtonText}>Clear Histroy</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
  header: {
    padding: 20,
    alignItems: 'flex-end',
  },
  switchContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    marginLeft: 10,
    color: '#7f7f7f',
    fontWeight: '600',
  },
  expressionText: {
    fontSize: 32,
    color: '#7f7f7f',
  },
  resultText: {
    fontSize: 64,
    color: '#2d3436',
    fontWeight: 'bold',
  },
  divider: {
    height: 4,
    backgroundColor: '#ff007f',
  },
  historyContainer: {
    flex: 1,
    backgroundColor: '#cdc1ff',
    padding: 15,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconPlaceholder: { fontSize: 24 },
  tagButton: {
    backgroundColor: '#bcafff',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#a89dff',
  },
  tagText: { color: '#6c5ce7', fontWeight: 'bold' },
  contentArea: {
    flex: 1,
    flexDirection: 'row',
    gap: 15,
  },
  listContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
  },
  historyItem: { marginBottom: 20 },
  historyExpr: { fontSize: 20, color: '#636e72' },
  historyResult: { fontSize: 32, color: '#6c5ce7', fontWeight: 'bold' },
  keypad: { width: 70, gap: 10 },
  opButton: {
    backgroundColor: '#6c5ce7',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  opText: { color: 'white', fontSize: 24, fontWeight: 'bold' },
  equalButton: {
    backgroundColor: '#ff007f',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  clearButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 15,
  },
  clearButtonText: { color: '#6c5ce7', fontWeight: 'bold', fontSize: 16 },
});

export default ShowHistoryScreen;