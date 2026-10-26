import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const Screenshot2026052215423304d39047Screen = () => {
  return (
    <View style={styles.container}>
      {/* Status Bar simulation */}
      <View style={styles.statusBar}>
        <Text style={styles.statusText}>3:42</Text>
        <View style={styles.statusIcons}>
          <Text style={styles.statusIconText}>📶 🔋</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Text style={styles.headerTitle}>Breadfast Pay</Text>

        {/* Balance Card Widget */}
        <View style={styles.balanceCard}>
          <Text style={styles.walletLabel}>Wallet Balance</Text>
          <Text style={styles.balanceAmount}>EGP 0.00</Text>

          <View style={styles.actionButtonsRow}>
            {/* Send */}
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.iconCircle}>
                <Text style={styles.iconSymbol}>↗</Text>
              </View>
              <Text style={styles.actionText}>Send</Text>
            </TouchableOpacity>

            {/* History */}
            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.iconCircle}>
                <Text style={styles.iconSymbol}>🕒</Text>
              </View>
              <Text style={styles.actionText}>History</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Top Up Full Width Button */}
        <TouchableOpacity style={styles.fullWidthTopUpButton}>
          <View style={styles.fullWidthTopUpContent}>
            <View style={styles.smallIconCircle}>
              <Text style={styles.smallIconSymbol}>+</Text>
            </View>
            <Text style={styles.fullWidthTopUpText}>Top Up Wallet</Text>
          </View>
        </TouchableOpacity>

        {/* Quick Pay */}
        <Text style={styles.sectionTitle}>Quick Pay</Text>
        <View style={styles.cardContainer}>
          {/* Scan & Pay */}
          <TouchableOpacity style={styles.listItem}>
            <View style={[styles.listIconContainer, { backgroundColor: '#FCE7F3' }]}>
              <Text style={styles.listIcon}>📷</Text>
            </View>
            <View style={styles.listTextContainer}>
              <Text style={styles.listTitle}>Scan & Pay</Text>
              <Text style={styles.listSubtitle}>Pay at any Breadfast partner</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          {/* Link a Card */}
          <TouchableOpacity style={styles.listItem}>
            <View style={[styles.listIconContainer, { backgroundColor: '#FCE7F3' }]}>
              <Text style={styles.listIcon}>💳</Text>
            </View>
            <View style={styles.listTextContainer}>
              <Text style={styles.listTitle}>Link a Card</Text>
              <Text style={styles.listSubtitle}>Add debit or credit card</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Transactions */}
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <View style={styles.emptyTransactionCard}>
          <Text style={styles.emptyIcon}>📄</Text>
          <Text style={styles.emptyTitle}>No transactions yet</Text>
          <Text style={styles.emptySubtitle}>Your pay history will appear here</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🔍</Text>
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🛒</Text>
          <Text style={styles.navText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={[styles.navIcon, styles.activeNavText]}>👛</Text>
          <Text style={[styles.navText, styles.activeNavText]}>Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>☰</Text>
          <Text style={styles.navText}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  statusBar: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  statusIcons: {
    flexDirection: 'row',
  },
  statusIconText: {
    fontSize: 12,
    color: '#333',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 90,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 12,
    color: '#1A1A1A',
  },
  balanceCard: {
    backgroundColor: '#0052CC',
    borderRadius: 24,
    padding: 20,
    marginTop: 4,
    shadowColor: '#0052CC',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
  },
  walletLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    fontWeight: '500',
  },
  balanceAmount: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  actionButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 12,
    gap: 32,
  },
  actionButton: {
    alignItems: 'center',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  iconSymbol: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  actionText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  fullWidthTopUpButton: {
    backgroundColor: '#1E40AF',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1E40AF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  fullWidthTopUpContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  smallIconSymbol: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fullWidthTopUpText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginTop: 24,
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
  },
  listIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  listIcon: {
    fontSize: 18,
  },
  listTextContainer: {
    flex: 1,
  },
  listTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  listSubtitle: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 2,
  },
  chevron: {
    fontSize: 22,
    color: '#C7C7CC',
    fontWeight: '300',
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginLeft: 66,
  },
  emptyTransactionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  emptyIcon: {
    fontSize: 36,
    marginBottom: 10,
  },
  emptyTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#8E8E93',
  },
  emptySubtitle: {
    fontSize: 12,
    color: '#AEAEB2',
    marginTop: 4,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
    paddingBottom: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navIcon: {
    fontSize: 20,
    color: '#8E8E93',
    marginBottom: 2,
  },
  navText: {
    fontSize: 11,
    color: '#8E8E93',
  },
  activeNavText: {
    color: '#B8007C',
  },
});

export default Screenshot2026052215423304d39047Screen;
