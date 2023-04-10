import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {COLORS} from '../../assets/colors/Colors';
import {MultipleSelectList} from 'react-native-dropdown-select-list';

const MultipleDropdown = ({title, data, placeholder, setSelected}) => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        marginBottom: 30,
      }}>
      <Text
        style={{
          color: COLORS.gray300,
          fontWeight: 'bold',
          marginBottom: 10,
          fontSize: 14,
        }}>
        {title}
      </Text>
      <MultipleSelectList
        setSelected={setSelected}
        data={data}
        save="value"
        placeholder={placeholder}
        inputStyles={{
          color: COLORS.gray200,
          fontSize: 14,
          fontWeight: 'bold',
        }}
        dropdownTextStyles={{color: COLORS.gray200}}
        boxStyles={{
          borderColor: COLORS.gray,
        }}
        dropdownStyles={{
          borderColor: COLORS.gray,
        }}
      />
    </View>
  );
};

export default MultipleDropdown;
