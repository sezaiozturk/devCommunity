import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors/Colors';

export default StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  headContainer: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headLeftContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.gray200,
  },
  subTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: COLORS.gray500,
  },
  date: {
    fontSize: 11,
    fontWeight: 'bold',
    color: COLORS.gray500,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 600,
    marginVertical: 5,
  },
  commentContainer: {
    margin: 5,
    marginVertical: 10,
  },
  comment: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.gray200,
    lineHeight: 30,
  },
});
