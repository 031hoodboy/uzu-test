import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  Dimensions,
  FlatList,
} from 'react-native';

import Swiper from 'react-native-swiper';
const {screenWidth} = Dimensions.get('screen');

const DATA = [
  {
    id: 1,
    clinic: '서초바른치과',
    dentist: '이상은 원장',
    src: require('./assets/dentist1.png'),
  },
  {
    id: 2,
    clinic: '베네치아치과',
    dentist: '진우규 원장',
    src: require('./assets/dentist2.png'),
  },
  {
    id: 3,
    clinic: '서초연세치과',
    dentist: '장호일 원장',
    src: require('./assets/dentist3.png'),
  },
  {
    id: 4,
    clinic: '서초바른치과',
    dentist: '김진하 원장',
    src: require('./assets/dentist4.png'),
  },
  {
    id: 5,
    clinic: '서초연세치과',
    dentist: '이동준 원장',
    src: require('./assets/dentist5.png'),
  },
  {
    id: 6,
    clinic: '베네치아치과',
    dentist: '손승욱 원장',
    src: require('./assets/dentist6.png'),
  },
];

const Item = ({clinic, dentist, id, src}) => {
  return (
    <View style={styles.item}>
      <Image source={src} style={styles.itemImg} />
      <View style={styles.itemTitleWrapper}>
        <Text style={styles.clinic}>
          {clinic}, {id}
        </Text>
        <Text style={styles.dentist}>{dentist}</Text>
      </View>
    </View>
  );
};

const App = () => {
  const renderItem = ({item}) => (
    <Item
      clinic={item.clinic}
      dentist={item.dentist}
      id={item.id}
      src={item.src}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/uzulogo.png')} style={styles.logo} />
        <View style={styles.headerRightContnet}>
          <Image
            source={require('./assets/searchlogo.jpg')}
            style={styles.noticeLogo}
          />
          <Image
            source={require('./assets/noticelogo.jpg')}
            style={styles.searchLogo}
          />
        </View>
      </View>
      <StatusBar />

      <View style={styles.grayBackground}>
        <ScrollView bounces={false} style={styles.scrollview}>
          <View style={styles.bar}>
            <View style={styles.barWrapper}>
              <Text style={styles.barText}>서울특별시 금천구</Text>
              <Image
                source={require('./assets/noticelogo.jpg')}
                style={styles.locationLogo}
              />
            </View>
          </View>
          <View style={styles.background} />
          <View style={styles.firstSection}>
            <Text style={styles.subTitle}>
              <Text style={styles.bold}>금천구</Text>의 인기있는 주치의
            </Text>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>
                <Text style={styles.bold}>지금! 우리 동네에 뜨는 주치의 </Text>
              </Text>
              <View style={styles.refreshWrapper}>
                <Text style={styles.refreshText}>새로고침</Text>
                <Image
                  source={require('./assets/refreshlogo.jpg')}
                  style={styles.refreshLogo}
                />
              </View>
            </View>
            <ScrollView
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              style={styles.firstSectionScrollView}>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
              />
            </ScrollView>
          </View>
          <View style={styles.secondSection}></View>
          <View style={styles.secondSection}></View>
          <View style={styles.secondSection}></View>
        </ScrollView>
        <View style={styles.footer}>
          <Text>d4d4d4</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const THEME_COLOR = '#285E29';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  statusbar: {
    backgroundColor: THEME_COLOR,
  },
  grayBackground: {
    backgroundColor: '#ebebeb',
  },
  header: {
    marginLeft: '5%',
    marginRight: '5%',
    height: 60,
    flexDirection: 'row',
    borderBottom: '1 solid #f2f2f2',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 56,
    height: 20,
    resizeMode: 'contain',
  },
  headerRightContnet: {
    flexDirection: 'row',
    width: 67,
    alignItems: 'space-between',
    justifyContent: 'space-between',
  },
  searchLogo: {
    width: 26,
    height: 26,
  },
  noticeLogo: {
    width: 26,
    height: 26,
  },
  scrollview: {},
  bar: {
    height: 40,
    backgroundColor: '#6F25D2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  barWrapper: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  barText: {
    color: '#fff',
    fontWeight: '700',
  },
  locationLogo: {
    width: 20,
    height: 20,
  },
  background: {
    height: 160,
    backgroundColor: '#D2D6DB',
  },
  firstSection: {
    marginTop: 10,
    height: 266,
    backgroundColor: '#fff',
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  subTitle: {
    fontSize: 12,
    color: '#6F25D2',
    marginTop: 30,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    marginTop: 6,
  },
  refreshWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  refreshText: {
    fontWeight: '700',
    color: '#CCCDCE',
  },
  refreshLogo: {
    height: 18,
    width: 18,
    marginLeft: 5,
  },
  bold: {
    fontWeight: '700',
  },
  firstSectionScrollView: {
    marginTop: 25,
  },

  item: {
    width: 100,
    height: 145,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#F2F3F5',
    marginRight: 15,
  },
  itemImg: {
    width: 100,
    height: 70,
    resizeMode: 'contain',
  },
  itemTitleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  clinic: {
    fontSize: 10,
    color: '#878B93',
  },
  dentist: {
    fontSize: 14,
    marginTop: 2,
  },
  secondSection: {
    marginTop: 10,
    height: 265,
    backgroundColor: '#fff',
  },
  footer: {
    width: '100%',
    height: 90,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 10,
    borderTopWidth: 1,
    borderColor: '#d4d4d4',
  },
});

export default App;
