import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../colors/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.black100,
  },
  scrollView: {
    backgroundColor: COLORS.black100,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  imageCircle: {
    backgroundColor: COLORS.gray200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 15,
    height: 100,
    width: 100,
  },
});
