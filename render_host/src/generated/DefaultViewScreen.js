import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

const DefaultViewScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Header Section */}
      <View style={styles.header}>
        <View style={styles.switchContainer}>
          <Switch value={false} trackColor={{ false: '#767577', true: '#FF0080' }} />
          <Text style={styles.switchLabel}>Switch to Dark</Text>
        </View>
        <View style={styles.displayArea}>
          <Text style={styles.historyText}>45 × 24</Text>
          <Text style={styles.resultText}>1080</Text>
        </View>
      </View>

      {/* Main Keypad Section */}
      <View style={styles.keypadContainer}>
        {/* Tool Bar */}
        <View style={styles.toolbar}>
          <TouchableOpacity><Text>🕒</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ExpandedView')}>
            <Text>⤢</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.historyTag}>
            <Text style={styles.historyTagText}>1080</Text>
          </TouchableOpacity>
          <TouchableOpacity><Text>⌫</Text></TouchableOpacity>
        </View>

        {/* Buttons Grid */}
        <View style={styles.grid}>
          {['C', '()', '%', '/'].map((item) => (
            <TouchableOpacity key={item} style={[styles.button, item === '/' && styles.purpleButton]}>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
          {['7', '8', '9', 'x'].map((item) => (
            <TouchableOpacity key={item} style={[styles.button, item === 'x' && styles.purpleButton]}>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
          {['4', '5', '6', '-'].map((item) => (
            <TouchableOpacity key={item} style={[styles.button, item === '-' && styles.purpleButton]}>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
          {['1', '2', '3', '+'].map((item) => (
            <TouchableOpacity key={item} style={[styles.button, item === '+' && styles.purpleButton]}>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
          {['+/-', '0', '.', '='].map((item) => (
            <TouchableOpacity key={item} style={[styles.button, item === '=' && styles.pinkButton]}>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },
  header: {
    padding: 20,
    paddingTop: 50,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    marginLeft: 10,
    color: '#666',
    fontWeight: 'bold',
  },
  displayArea: {
    alignItems: 'flex-end',
  },
  historyText: {
    fontSize: 24,
    color: '#888',
  },
  resultText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#2D3436',
  },
  keypadContainer: {
    flex: 1,
    backgroundColor: '#C8BFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  historyTag: {
    backgroundColor: '#B5A8FF',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
  },
  historyTagText: {
    color: '#555',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '22%',
    aspectRatio: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
  },
  purpleButton: {
    backgroundColor: '#6C5CE7',
  },
  pinkButton: {
    backgroundColor: '#FF0080',
  }
});

export default DefaultViewScreen;