import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
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
  firstLetterContainer: {
    backgroundColor: COLORS.gray300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 3,
    height: 50,
    width: 50,
  },
  firstLetter: {
    color: COLORS.gray200,
    fontSize: 20,
    fontWeight: 'bold',
  },
  contextContainer: {
    justifyContent: 'center',
    gap: 5,
  },
  title: {color: COLORS.gray200, fontSize: 15, fontWeight: 'bold'},
  subTitle: {color: COLORS.gray500, fontSize: 12, fontWeight: 'bold'},
  approve: {
    color: COLORS.gray200,
    padding: 10,
  },
});
