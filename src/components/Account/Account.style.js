import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors/Colors';

export default StyleSheet.create({
  accountContentContainer: {
    alignItems: 'center',
    gap: 15,
  },
  accountTitle: {
    color: COLORS.gray400,
    fontWeight: 'bold',
    fontSize: 13,
  },
  accountIcon: {
    width: 30,
    height: 30,
  },
});
