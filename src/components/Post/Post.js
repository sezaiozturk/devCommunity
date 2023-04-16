import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './Post.style';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';

const Post = ({logo, source, title, subTitle, date, comment}) => {
  const formattedDate = formatDistance(parseISO(date), new Date(), {
    addSuffix: true,
    locale: tr,
  });
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <View style={styles.headLeftContainer}>
          <Image source={{uri: logo}} style={styles.logo} />
          <View style={styles.innerContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        </View>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <Image
        source={{
          uri: source,
        }}
        style={styles.image}
      />
      <View style={styles.commentContainer}>
        <Text style={styles.comment}>{comment}</Text>
      </View>
    </View>
  );
};

export default Post;
