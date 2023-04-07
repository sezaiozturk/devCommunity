import {StyleSheet} from 'react-native';
import {COLORS} from '../../colors/Colors';

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 30,
  },
  title: {
    color: COLORS.gray300,
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 14,
  },
  input: {
    borderColor: COLORS.gray,
    color: COLORS.gray200,
    fontWeight: 'bold',
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 14,
    padding: 10,
    maxHeight: 200,
  },
});
