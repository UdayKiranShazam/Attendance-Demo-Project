import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Colors } from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomBar = () => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.navCtn}>
        <View style={styles.iconCtn}>
          <Icon name="view-grid" color={Colors.Secondary} size={16} />
          <Text style={styles.title}>Planning</Text>
        </View>
        <View style={styles.iconCtn}>
          <Icon name="file-edit-outline" color={Colors.Grey} size={16} />
          <Text style={styles.title}>Documentation</Text>
        </View>
        <View style={styles.iconCtn}>
          <Icon name="file-document-outline" color={Colors.Grey} size={16} />
          <Text style={styles.title}>HouseKeeping</Text>
        </View>
        <View style={styles.iconCtn}>
          <Icon name="cog-outline" color={Colors.Grey} size={16} />
          <Text style={styles.title}>Settings</Text>
        </View>
        <View style={styles.iconCtn}>
          <Icon name="dots-horizontal" color={Colors.Grey} size={16} />
          <Text style={styles.title}>More</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    elevation: 5,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: Colors.Primary,
    borderRadius: 30,
    width: Platform.OS === 'ios' ? '98%' : '100%'
  },
  navCtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 30
  },
  iconCtn: {
    alignItems: 'center'
  },
  title: {
    fontSize: 12,
    paddingHorizontal: 5
  }
});

export default BottomBar;
