import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import RowButton from '../../components/RowButton';
import styles from './Member.style';
import Seperator from '../../components/Seperator';

const Members = ({navigation}) => {
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
  function firstLetter(member) {
    const memberName = member.fullName.split(' ');
    const length = memberName.length;
    const first = memberName[0][0];
    const second = memberName[length - 1][0];
    setLetter(current => [...current, first + second]);
  }
  useEffect(() => {
    getMembers();
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
            onPress={() =>
              navigation.navigate('ProfileScreen', {uid: item.uid})
            }
          />
        )}
        ItemSeparatorComponent={() => <Seperator />}
      />
    </SafeAreaView>
  );
};

export default Members;
