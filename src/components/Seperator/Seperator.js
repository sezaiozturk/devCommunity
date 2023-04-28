import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../assets/colors/Colors';

const Seperator = ({vertical}) => {
  return vertical ? (
    <View
      style={{
        backgroundColor: COLORS.gray400,
        width: 1,
        marginHorizontal: 20,
      }}
    />
  ) : (
    <View
      style={{
        height: 1,
        backgroundColor: COLORS.gray400,
        marginHorizontal: 5,
      }}
    />
  );
};

export default Seperator;
