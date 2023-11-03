import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';

const DashboardBox = ({ bgColor, title, image, width, height }) => {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={[styles.imgCtn, { width: width, height: height }]}>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 164,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12
  },
  imgCtn: {
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center'
  }
});

export default DashboardBox;
