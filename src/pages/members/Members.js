import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import RowButton from '../../components/RowButton';
import styles from './Member.style';
import Seperator from '../../components/Seperator';
import auth from '@react-native-firebase/auth';

const Members = ({navigation, route}) => {
  const [member, setMember] = useState([]);
  const [letter, setLetter] = useState('');

  function getMembers() {
    setMember([]);
    firestore()
      .collection('Members')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          setMember(current => [...current, documentSnapshot.data()]);
          firstLetter(documentSnapshot.data());
        });
      });
  }
  function getRequests() {
    setMember([]);
    firestore()
      .collection('Friends')
      .doc(auth().currentUser.uid)
      .get()
      .then(documentSnapshot => {
        const requests = documentSnapshot._data.requestUid;
        requests.forEach(element => {
          firestore()
            .collection('Members')
            .doc(element)
            .get()
            .then(documentSnapshot => {
              setMember(current => [...current, documentSnapshot._data]);
              firstLetter(documentSnapshot._data);
            });
        });
      });
  }
  function firstLetter(member) {
    const memberName = member.fullName.split(' ');
    const length = memberName.length;
    const first = memberName[0][0];
    const second = memberName[length - 1][0];
    setLetter(current => [...current, first + second]);
  }
  useEffect(() => {
    if (route.params.control == 1) {
      getRequests();
    } else {
      getMembers();
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={member}
        renderItem={({item, index}) => (
          <RowButton
            letter={letter[index]}
            title={item.fullName}
            subTitle={'@' + item.userName}
            source={item.downloadUrl}
            image={item.downloadUrl ? true : false}
            control={route.params.control == 1 ? true : false}
            onPress={() =>
              navigation.navigate('ProfileScreen', {uid: item.uid})
            }
            approve={async () => {
              const friends = await firestore()
                .collection('Friends')
                .doc(item.uid)
                .get();
              const friendsList = friends._data.friendsUid;
              friendsList.push(auth().currentUser.uid);
              firestore()
                .collection('Friends')
                .doc(item.uid)
                .update({
                  friendsUid: friendsList,
                })
                .then(() => {});
            }}
          />
        )}
        ItemSeparatorComponent={() => <Seperator />}
      />
    </SafeAreaView>
  );
};

export default Members;
