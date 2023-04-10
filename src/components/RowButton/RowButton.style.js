import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors/Colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 10,
    gap: 10,
  },
  image: {
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  contextContainer: {
    justifyContent: 'center',
    gap: 5,
  },
  title: {color: COLORS.gray200, fontSize: 15, fontWeight: 'bold'},
  subTitle: {color: COLORS.gray500, fontSize: 12, fontWeight: 'bold'},
});
