import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styles from './Profile.style';
import Seperator from '../../components/Seperator';
import RowButton from '../../components/RowButton';
import Account from '../../components/Account/Account';
import {ScrollView} from 'react-native-gesture-handler';

const Profile = () => {
  const currentMember = auth().currentUser.uid;
  const [member, setMember] = useState('');
  const [letter, setLetter] = useState('');
  const [department, setDepartment] = useState('');
  const [communities, setCommunities] = useState([]);
  const arr = [];

  async function getMember() {
    setCommunities([]);
    const request = await firestore()
      .collection('Members')
      .doc(currentMember)
      .get();
    firstLetter(request._data);
    setMember(request._data);
    departmentConvert(request._data.selectedDepartment);
    communityConvert(request._data.selectedCommunities);
  }
  async function departmentConvert(uid) {
    const request = await firestore().collection('Departments').doc(uid).get();
    setDepartment(request._data.department);
  }
  function communityConvert(uid) {
    uid.forEach(async element => {
      const request = await firestore()
        .collection('Communities')
        .doc(element)
        .get();
      setCommunities(current => [...current, request._data]);
    });
  }

  function firstLetter(member) {
    const memberName = member.fullName.split(' ');
    const length = memberName.length;
    const first = memberName[0][0];
    const second = memberName[length - 1][0];
    setLetter(first + second);
  }

  useEffect(() => {
    getMember();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{rowGap: 20}}>
        <View style={styles.headContainer}>
          <View style={styles.firstLetterContainer}>
            <Text style={styles.firstLetter}>{letter}</Text>
          </View>
          <View style={styles.headContentContainer}>
            <Text style={styles.fullName}>{member.fullName}</Text>
            <Text style={styles.userName}>@{member.userName}</Text>
            <Text style={styles.department}>{department}</Text>
          </View>
        </View>
        <View style={styles.accountContainer}>
          <Account
            title={'Twitter'}
            logo={require('../../assets/icons/twitter.png')}
          />
          <Seperator vertical />
          <Account title={'Instagram'} />
          <Seperator vertical />
          <Account title={'Github'} />
          <Seperator vertical />
          <Account title={'Linkedln'} />
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>About me</Text>
          <Seperator />
          <Text style={styles.about}>{member.biography}</Text>
        </View>
        <View>
          <Text style={styles.communityTitle}>Communities</Text>
          <FlatList
            data={communities}
            renderItem={({item}) => (
              <RowButton
                image={'logo.jpeg'}
                title={item.name}
                subTitle={item.school}
              />
            )}
            ItemSeparatorComponent={() => <Seperator />}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
