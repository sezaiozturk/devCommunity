import {SafeAreaView, FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import PostRow from '../../components/Post';
import {COLORS} from '../../assets/colors/Colors';
import styles from './Post.style';
import Seperator from '../../components/Seperator';

const Post = () => {
  const [posts, setPosts] = useState([]);

  async function getPost() {
    firestore()
      .collection('Posts')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(async documentSnapshot => {
          let community = await convert(documentSnapshot.data().communityId);
          const x = {
            ...documentSnapshot.data(),
            community,
          };
          setPosts(current => [...current, x]);
        });
      });
  }
  async function getPostRealTime() {
    firestore()
      .collection('Posts')
      .onSnapshot(querySnapshot => {
        let x = [];
        querySnapshot.forEach(async documentSnapshot => {
          let community = await convert(documentSnapshot.data().communityId);
          const obj = {
            ...documentSnapshot.data(),
            community,
          };
          x.push(obj);
          x.sort(function (a, b) {
            return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
          });
        });
        setPosts(x);
      });
  }

  async function convert(uid) {
    const community = await firestore()
      .collection('Communities')
      .doc(uid)
      .get();
    return community._data;
  }

  useEffect(() => {
    //setPosts([]);
    getPostRealTime();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({item}) => (
          <PostRow
            logo={item.community.logo}
            title={item.community.name}
            subTitle={item.community.school}
            comment={item.comment}
            source={item.downloadUrl}
            date={item.date}
          />
        )}
        style={styles.flatList}
        ItemSeparatorComponent={Seperator}
      />
    </SafeAreaView>
  );
};

export default Post;
