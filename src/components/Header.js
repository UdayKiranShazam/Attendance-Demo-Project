import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ icon1, icon2, title, onPress }) => {
  return (
    <View style={styles.container}>
      <Icon name={icon1} size={25} color={Colors.Secondary} onPress={onPress} />
      <Text style={styles.title}>{title}</Text>
      <Icon name={icon2} size={20} color={Colors.Secondary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black
  }
});

export default Header;
