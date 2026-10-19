import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ExpandedViewShowHistroyScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Top Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.switchRow}>
          <Switch value={false} trackColor={{ false: '#767577', true: '#ff007f' }} thumbColor={'#fff'} />
          <Text style={styles.switchLabel}>Switch to Dark</Text>
        </View>
        <View style={styles.resultDisplay}>
          <Text style={styles.expressionText}>45 × 24</Text>
          <Text style={styles.mainResultText}>1080</Text>
        </View>
      </View>

      {/* Main Calculator Area */}
      <View style={styles.mainContent}>
        <View style={styles.toolbar}>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('ShowHistory')}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.calculatorLayout}>
          <View style={styles.historySection}>
            <ScrollView style={styles.historyScroll}>
              <View style={styles.historyEntry}>
                <Text style={styles.historyOp}>45 × 24</Text>
                <Text style={styles.historyRes}>= 1080</Text>
              </View>
              <View style={styles.historyEntry}>
                <Text style={styles.historyOp}>25 × 2</Text>
                <Text style={styles.historyRes}>= 50</Text>
              </View>
            </ScrollView>
            <TouchableOpacity style={styles.clearHistoryBtn}>
              <Text style={styles.clearHistoryText}>Clear Histroy</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.keypad}>
            <View style={styles.row}>
              <TouchableOpacity style={[styles.btn, styles.funcBtn]}><Text>C</Text></TouchableOpacity>
              <TouchableOpacity style={[styles.btn, styles.funcBtn]}><Text>()</Text></TouchableOpacity>
              <TouchableOpacity style={[styles.btn, styles.funcBtn]}><Text>%</Text></TouchableOpacity>
              <TouchableOpacity style={[styles.btn, styles.opBtn]}><Text style={styles.opText}>/</Text></TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn}><Text>7</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn}><Text>8</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn}><Text>9</Text></TouchableOpacity>
              <TouchableOpacity style={[styles.btn, styles.opBtn]}><Text style={styles.opText}>x</Text></TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn}><Text>4</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn}><Text>5</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn}><Text>6</Text></TouchableOpacity>
              <TouchableOpacity style={[styles.btn, styles.opBtn]}><Text style={styles.opText}>-</Text></TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn}><Text>1</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn}><Text>2</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn}><Text>3</Text></TouchableOpacity>
              <TouchableOpacity style={[styles.btn, styles.opBtn]}><Text style={styles.opText}>+</Text></TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn}><Text>+/-</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn}><Text>0</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn}><Text>.</Text></TouchableOpacity>
              <TouchableOpacity style={[styles.btn, styles.equalBtn]}><Text style={styles.opText}>=</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#d1c4e9' },
  headerContainer: { padding: 20, paddingTop: 40 },
  switchRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  switchLabel: { marginLeft: 10, color: '#555' },
  resultDisplay: { alignItems: 'flex-end' },
  expressionText: { fontSize: 24, color: '#777' },
  mainResultText: { fontSize: 48, fontWeight: 'bold', color: '#2c3e50' },
  mainContent: { flex: 1, backgroundColor: '#c5b4ff', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 },
  toolbar: { flexDirection: 'row', marginBottom: 10 },
  iconButton: { padding: 10 },
  icon: { width: 24, height: 24 },
  calculatorLayout: { flexDirection: 'row', flex: 1 },
  historySection: { flex: 1, backgroundColor: '#fff', borderRadius: 15, padding: 10, marginRight: 10 },
  historyScroll: { flex: 1 },
  historyEntry: { marginBottom: 15 },
  historyOp: { fontSize: 16, color: '#666' },
  historyRes: { fontSize: 20, color: '#4a148c', fontWeight: 'bold' },
  clearHistoryBtn: { padding: 12, backgroundColor: '#fff', borderRadius: 20, alignItems: 'center', borderWidth: 1, borderColor: '#eee' },
  clearHistoryText: { color: '#4a148c', fontWeight: 'bold' },
  keypad: { width: '50%' },
  row: { flexDirection: 'row', marginBottom: 8 },
  btn: { flex: 1, backgroundColor: '#fff', margin: 2, padding: 15, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  funcBtn: { backgroundColor: '#e0e0e0' },
  opBtn: { backgroundColor: '#5c6bc0' },
  opText: { color: '#fff', fontWeight: 'bold' },
  equalBtn: { backgroundColor: '#ff4081' }
});

export default ExpandedViewShowHistroyScreen;