import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MessageBox from '../../components/MessageBox';
import styles from './Chat.style';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {parseISO} from 'date-fns';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  useEffect(() => {
    firestore()
      .collection('Chat')
      .onSnapshot(querySnapshot => {
        const x = [];
        querySnapshot.forEach(async documentSnapshot => {
          const {message, memberId, date} = documentSnapshot.data();
          firestore()
            .collection('Members')
            .doc(memberId)
            .get()
            .then(async q => {
              let name = await q._data.fullName;
              let uid = await q._data.uid;
              x.push({message, name, uid, date});
              x.sort(function (a, b) {
                return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
              });
              setMessageList(x);
            });
        });
      });
  }, []);
  const handleMessage = text => {
    setMessage(text);
  };
  const sendMessage = () => {
    try {
      firestore()
        .collection('Chat')
        .doc()
        .set({
          message,
          memberId: auth().currentUser.uid,
          date: new Date().toISOString(),
        })
        .then(() => {
          setMessage('');
        });
    } catch (error) {
      console.log(error);
    }
  };
  const renderItem = ({item}) => (
    <MessageBox
      message={item.message}
      name={item.name}
      theme={item.uid === auth().currentUser.uid ? 'primary' : 'secondary'}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={messageList} renderItem={renderItem} />
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.sendContainer} onPress={sendMessage}>
          <TextInput
            style={styles.message}
            multiline
            placeholder="Mesajınız..."
            placeholderTextColor={'gray'}
            onChangeText={handleMessage}
            value={message}
          />
          <Text style={styles.send}>Gönder</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
