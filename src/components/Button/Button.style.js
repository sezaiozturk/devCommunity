import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors/Colors';

export default StyleSheet.create({
  enableContainer: {
    backgroundColor: COLORS.orange100,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  disableContainer: {
    backgroundColor: COLORS.orange100,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    opacity: 0.5,
  },
  title: {
    color: COLORS.gray200,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
