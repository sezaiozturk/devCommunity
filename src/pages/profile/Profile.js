import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styles from './Profile.style';
import Seperator from '../../components/Seperator';
import RowButton from '../../components/RowButton';
import Account from '../../components/Account/Account';
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {COLORS} from '../../assets/colors/Colors';
import Button from '../../components/Button';

const Profile = ({navigation, route}) => {
  const [currentMember, setCurrentMember] = useState('');
  const [primary, setPrimary] = useState(true);
  const [security, setSecurity] = useState(false);
  const [member, setMember] = useState('');
  const [letter, setLetter] = useState('');
  const [department, setDepartment] = useState('');
  const [communities, setCommunities] = useState([]);
  const [status, setStatus] = useState('Follow');
  const [active, setActive] = useState(false);

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
  async function securityControl() {
    const request = await firestore()
      .collection('Friends')
      .doc(auth().currentUser.uid)
      .get();
    request._data.friendsUid.forEach(element => {
      console.log(element);
      if (!primary && currentMember == element) {
        setSecurity(true);
      }
    });
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

  async function friendRequest() {
    const request = await firestore()
      .collection('Friends')
      .doc(currentMember)
      .get();

    const friendsUid = request._data.friendsUid;
    const requestUid = request._data.requestUid;

    friendsUid.push();
    requestUid.push(auth().currentUser.uid);

    firestore()
      .collection('Friends')
      .doc(currentMember)
      .update({
        friendsUid,
        requestUid,
      })
      .then(() => {
        setStatus('Requested');
        setActive(true);
      });

    //console.log(list);
  }

  useEffect(() => {
    if (route.params) {
      setCurrentMember(route.params.uid);
      setPrimary(false);
      securityControl();
      if (route.params.uid == auth().currentUser.uid) {
        setCurrentMember(auth().currentUser.uid);
        setPrimary(true);
        setSecurity(true);
      }
    } else {
      setCurrentMember(auth().currentUser.uid);
      setPrimary(true);
      setSecurity(true);
    }

    getMember();
  }, [currentMember]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{rowGap: 20}}>
        <View>
          <View style={styles.headContainer}>
            <View style={styles.headLeftContainer}>
              <View style={styles.firstLetterContainer}>
                {member.downloadUrl == null ? (
                  <Text style={styles.firstLetter}>{letter}</Text>
                ) : (
                  <Image
                    style={styles.image}
                    source={{uri: member.downloadUrl}}
                  />
                )}
              </View>
              <View style={styles.headContentContainer}>
                <Text style={styles.fullName}>{member.fullName}</Text>
                <Text style={styles.userName}>@{member.userName}</Text>
                <Text style={styles.department}>{department}</Text>
              </View>
            </View>
            {primary && (
              <View style={styles.option}>
                <MenuProvider>
                  <Menu>
                    <MenuTrigger
                      text="        ==        "
                      customStyles={{
                        triggerText: {
                          color: COLORS.gray200,
                        },
                      }}
                    />
                    <MenuOptions>
                      <MenuOption
                        onSelect={() =>
                          navigation.navigate('MemberScreen', {control: 1})
                        }
                        text="Requests"
                      />
                      <MenuOption onSelect={() => alert(`Save`)} text="Save" />
                      <MenuOption onSelect={() => alert(`Save`)} text="Save" />
                    </MenuOptions>
                  </Menu>
                </MenuProvider>
              </View>
            )}
          </View>
          {!primary && !security && (
            <Button title={status} onPress={friendRequest} disabled={active} />
          )}
        </View>
        {security && (
          <View style={{gap: 20}}>
            <View style={styles.accountContainer}>
              <Account
                title={'Twitter'}
                source={require('../../assets/icons/twitter.png')}
              />
              <Seperator vertical />
              <Account
                title={'Instagram'}
                source={require('../../assets/icons/instagram.png')}
              />
              <Seperator vertical />
              <Account
                title={'Github'}
                source={require('../../assets/icons/github.png')}
              />
              <Seperator vertical />
              <Account
                title={'Linkedln'}
                source={require('../../assets/icons/linkedln.png')}
              />
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
                    image
                    source={item.logo}
                    title={item.name}
                    subTitle={item.school}
                  />
                )}
                ItemSeparatorComponent={() => <Seperator />}
                scrollEnabled={false}
              />
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
