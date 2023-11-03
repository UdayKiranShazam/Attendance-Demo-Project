import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import DashboardBox from '../components/DashboardBox';
import BottomBar from '../components/BottomBar';

const HomeScreen = ({ navigation }) => {
  const navToAttendance = () => {
    navigation.navigate('Attendance');
  };

  const navToCalender = () => {
    navigation.navigate('Attendance', { show: true });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleHolder}>
        <View style={styles.titleIconCtn}>
          <ImageBackground
            source={require('../assets/sherlock2.jpeg')}
            style={styles.image}
            imageStyle={styles.imageStyle}
          />
        </View>
        <View style={styles.titleTextHolder}>
          <Text style={styles.title}>Sherlock Holmes</Text>
          <View style={styles.title2}>
            <Text style={styles.title2}>Working Hours - Solving Cases</Text>
          </View>
        </View>
        <View style={styles.bellCtn}>
          <View style={styles.bell}>
            <Icon name="bell-o" color={Colors.Secondary} size={16} />
          </View>
        </View>
      </View>
      <View style={styles.boxHolder}>
        <Pressable onPress={navToCalender}>
          <DashboardBox
            image={require('../assets/Images/calender.png')}
            width={45}
            height={45}
            bgColor={Colors.LightCreme}
            title={'Calendar'}
          />
        </Pressable>
        <Pressable onPress={navToAttendance}>
          <DashboardBox
            image={require('../assets/Images/check.png')}
            width={45}
            height={45}
            bgColor={Colors.SecondarySlight}
            title={'Attendance'}
          />
        </Pressable>
      </View>
      <View style={styles.boxHolder}>
        <DashboardBox
          image={require('../assets/Images/chart.png')}
          width={45}
          height={45}
          bgColor={Colors.LightGreen}
          title={'General Insights'}
        />
        <DashboardBox
          image={require('../assets/Images/announcement.png')}
          width={45}
          height={45}
          bgColor={Colors.DarkCreme}
          title={'Announcements'}
        />
      </View>
      <View style={styles.boxHolder}>
        <DashboardBox
          image={require('../assets/Images/chat.webp')}
          width={50}
          height={50}
          bgColor={Colors.LightPink}
          title={'Messages'}
        />
        <DashboardBox
          image={require('../assets/Images/list.png')}
          width={45}
          height={45}
          bgColor={Colors.LightYellow}
          title={'Entry/Dispersal'}
        />
      </View>
      <View style={styles.bottomBarHolder}>
        <BottomBar />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary
  },
  titleHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 30,
    marginBottom: 40
  },
  titleIconCtn: {
    width: 50,
    height: 50,
    left: 20
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  imageStyle: {
    resizeMode: 'contain',
    borderRadius: 50
  },
  titleTextHolder: {
    marginLeft: 30
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: Colors.black,
    paddingBottom: 2
  },
  title2Holder: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title2: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.Secondary,
    paddingTop: 2
  },
  bellCtn: {
    flex: 1,
    alignItems: 'flex-end'
  },
  bell: {
    height: 30,
    width: 30,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.SecondarySlight
  },
  boxHolder: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bottomBarHolder: {
    position: 'absolute',
    bottom: 20,
    marginHorizontal: 20
  }
});
