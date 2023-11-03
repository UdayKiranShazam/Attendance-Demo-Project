import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../constants/Colors';

const Card = ({
  image,
  title,
  role,
  status,
  onPressP,
  onPressA,
  onPressE,
  onPressL,
  onEdit,
  show
}) => {
  const getBgColor = () => {
    if (status == '1') {
      return Colors.SlightBlue;
    } else if (status == '2') {
      return Colors.SlightOrange;
    } else if (status == '3') {
      return Colors.LightGrey;
    } else if (status == '4') {
      return Colors.DarkYellow;
    } else {
      return Colors.Primary;
    }
  };

  const getBgColorP = (status) => {
    if (status == '1') {
      return Colors.SlightBlue;
    } else {
      return Colors.Primary;
    }
  };

  const getBgColorA = (status) => {
    if (status == '2') {
      return Colors.SlightOrange;
    } else {
      return Colors.Primary;
    }
  };

  const getBgColorE = (status) => {
    if (status == '3') {
      return Colors.LightGrey;
    } else {
      return Colors.Primary;
    }
  };

  const getBgColorL = (status) => {
    if (status == '4') {
      return Colors.DarkYellow;
    } else {
      return Colors.Primary;
    }
  };

  const getText = (status) => {
    if (status == '1') {
      return 'P';
    } else if (status == '2') {
      return 'A';
    } else if (status == '3') {
      return 'E';
    } else if (status == '4') {
      return 'L';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerCtn}>
        <View style={styles.ctn1}>
          <ImageBackground source={image} style={styles.imgIcon} imageStyle={styles.imageStyle} />
          <View style={styles.titleCtn}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{role}</Text>
          </View>
        </View>
        <View style={styles.ctn2}>
          {show || !status ? (
            <View style={[styles.ctn3, { justifyContent: 'space-between' }]}>
              <Pressable
                onPress={onPressP}
                style={[styles.attendanceCtn, { backgroundColor: getBgColorP(status) }]}>
                <Text
                  style={[
                    styles.attendanceText,
                    { color: show && status == '1' ? Colors.Primary : Colors.black }
                  ]}>
                  P
                </Text>
              </Pressable>
              <Pressable
                onPress={onPressA}
                style={[styles.attendanceCtn, { backgroundColor: getBgColorA(status) }]}>
                <Text
                  style={[
                    styles.attendanceText,
                    { color: show && status == '2' ? Colors.Primary : Colors.black }
                  ]}>
                  A
                </Text>
              </Pressable>
              <Pressable
                onPress={onPressE}
                style={[styles.attendanceCtn, { backgroundColor: getBgColorE(status) }]}>
                <Text style={styles.attendanceText}>E</Text>
              </Pressable>
              <Pressable
                onPress={onPressL}
                style={[styles.attendanceCtn, { backgroundColor: getBgColorL(status) }]}>
                <Text style={styles.attendanceText}>L</Text>
              </Pressable>
              <Pressable
                style={[
                  styles.noteCtn,
                  { borderRadius: 8, backgroundColor: Colors.SecondarySlight }
                ]}>
                <Icon name="text-box-outline" color={Colors.Secondary} size={16} />
              </Pressable>
            </View>
          ) : (
            <View style={[styles.ctn3, { justifyContent: 'flex-end' }]}>
              <View
                style={[
                  styles.attendanceCtn,
                  { marginHorizontal: 10, backgroundColor: getBgColor(status) }
                ]}>
                <Text style={styles.text}>{getText(status)}</Text>
              </View>
              <Pressable onPress={onEdit} style={[styles.noteCtn, { marginHorizontal: 10 }]}>
                <Icon name="pencil-outline" color={Colors.Grey} size={16} />
              </Pressable>
              <Pressable
                style={[
                  styles.noteCtn,
                  { borderRadius: 8, backgroundColor: Colors.SecondarySlight, marginLeft: 10 }
                ]}>
                <Icon name="text-box-outline" color={Colors.Secondary} size={16} />
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20
  },
  innerCtn: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ctn1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%'
  },
  ctn2: {
    width: '60%'
  },
  ctn3: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  imgIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  imageStyle: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    borderRadius: 30
  },
  titleCtn: {
    marginLeft: 8
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.black
  },
  subTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.Grey
  },
  attendanceCtn: {
    width: 26,
    height: 26,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: Colors.LightGrey,
    alignItems: 'center',
    justifyContent: 'center'
  },
  attendanceText: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.Primary
  },
  noteCtn: {
    width: 26,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
