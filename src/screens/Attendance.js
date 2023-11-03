import React, { useState } from 'react';
import {
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Header from '../components/Header';
import { Colors } from '../constants/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../components/Card';
import { useSelector, useDispatch } from 'react-redux';
import { updateAll, updateAttendance } from '../redux/actions/attendance';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

const Attendance = ({ navigation, route }) => {
  const list = useSelector((state) => state.attendance.officersList);
  const showCalender = route.params?.show;

  const dispatch = useDispatch();
  const presentDay = moment().format('MMM DD, YYYY');
  const [selectedDate, setSelectedDate] = useState(presentDay);
  const [showDate, setShowDate] = useState(showCalender ? showCalender : false);

  const navBack = () => {
    navigation.goBack();
  };

  const onClickP = (item) => {
    const data = { ...item };
    data.status = '1';
    data.show = false;
    dispatch(updateAttendance(data));
  };

  const onClickA = (item) => {
    const data = { ...item };
    data.status = '2';
    data.show = false;
    dispatch(updateAttendance(data));
  };

  const onClickE = (item) => {
    const data = { ...item };
    data.status = '3';
    data.show = false;
    dispatch(updateAttendance(data));
  };

  const onClickL = (item) => {
    const data = { ...item };
    data.status = '4';
    data.show = false;
    dispatch(updateAttendance(data));
  };

  const onEdit = (item) => {
    const data = { ...item };
    data.show = true;
    dispatch(updateAttendance(data));
  };

  const presentAll = () => {
    const data = list.map((obj) => ({
      ...obj,
      ['status']: '1'
    }));
    dispatch(updateAll(data));
  };

  const dateBack = () => {
    let date = moment(selectedDate, 'MMM DD, YYYY').subtract(1, 'day').format('MMM DD, YYYY');
    setSelectedDate(date);
  };

  const dateForward = () => {
    let date = moment(selectedDate, 'MMM DD, YYYY').add(1, 'day').format('MMM DD, YYYY');
    setSelectedDate(date);
  };

  const showDatePicker = () => {
    setShowDate(true);
  };

  const hideDatePicker = () => {
    setShowDate(false);
  };

  const pickDate = (date) => {
    let chosenDate = moment(date, 'MMM DD, YYYY').format('MMM DD, YYYY');
    setSelectedDate(chosenDate);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Header
        icon1={Platform.OS === 'ios' ? 'chevron-back' : 'arrow-back'}
        icon2={'search'}
        title={'Attendance'}
        onPress={navBack}
      />
      <View style={styles.holder}>
        <View style={styles.ctnInner}>
          <View style={styles.titleCtn}>
            <Text style={styles.title}>Working Hours</Text>
            <Entypo name="chevron-small-down" color={Colors.Secondary} size={16} />
          </View>
          <View style={styles.btns}>
            <TouchableOpacity onPress={dateBack} style={styles.leftBtn}>
              <Icon name={'chevron-back'} color={Colors.Primary} size={18} />
            </TouchableOpacity>
            <TouchableOpacity onPress={showDatePicker} style={styles.centerBtn}>
              <Text style={styles.dateText}>{selectedDate}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={dateForward} style={styles.rightBtn}>
              <Icon name={'chevron-forward'} color={Colors.Primary} size={18} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.btnCtn}>
          <Text style={styles.btnText}>Daily Attendance</Text>
          <Entypo name="chevron-small-down" color={Colors.Primary} size={16} />
        </TouchableOpacity>
      </View>

      <View style={styles.seperator} />

      <View style={styles.holder2}>
        <View style={styles.titleCtn2}>
          <Text style={styles.title2}>{'All Officers(5)'}</Text>
        </View>
        <Pressable onPress={presentAll} style={styles.markCtn}>
          <Text style={styles.markText}>Mark all present</Text>
          <Icon name="checkmark-circle-outline" color={Colors.Secondary} size={20} />
        </Pressable>
      </View>

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Card
              image={item.image}
              title={item.officer}
              role={item.role}
              status={item.status}
              record={item}
              onPressP={() => onClickP(item)}
              onPressA={() => onClickA(item)}
              onPressE={() => onClickE(item)}
              onPressL={() => onClickL(item)}
              onEdit={() => onEdit(item)}
              show={item.show}
            />
          );
        }}
      />

      {showDate && (
        <DateTimePicker
          is24Hour={true}
          value={selectedDate ? new Date(moment(selectedDate, 'MMM DD, YYYY')) : new Date()}
          textColor={Colors.black}
          accentColor={Colors.Secondary}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(e, date) => pickDate(date)}
        />
      )}
    </View>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary
  },
  ctnInner: {},
  btns: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6
  },
  leftBtn: {
    width: 30,
    height: 30,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    elevation: 10,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    marginRight: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Secondary
  },
  centerBtn: {
    width: 100,
    height: 30,
    elevation: 10,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    justifyContent: 'center',
    backgroundColor: Colors.Secondary
  },
  dateText: {
    textAlign: 'center',
    fontSize: 14,
    color: Colors.Primary
  },
  rightBtn: {
    width: 30,
    height: 30,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    elevation: 10,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    marginLeft: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Secondary
  },
  holder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30
  },
  titleCtn: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    paddingRight: 6,
    fontSize: 18,
    fontWeight: '500',
    color: Colors.black
  },
  titleCtn2: {},
  btnCtn: {
    padding: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 10,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: Colors.Secondary
  },
  btnText: {
    fontSize: 16,
    paddingRight: 6,
    fontWeight: '400',
    color: Colors.Primary,
    textAlign: 'center'
  },
  seperator: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.LightGrey,
    marginHorizontal: 20,
    marginVertical: 20
  },
  holder2: {
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title2: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black
  },
  markCtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  markText: {
    color: Colors.Secondary,
    fontSize: 14,
    fontWeight: '500',
    paddingRight: 4
  },
  modalCtn: {
    flex: 1,
    backgroundColor: Colors.black
  }
});
