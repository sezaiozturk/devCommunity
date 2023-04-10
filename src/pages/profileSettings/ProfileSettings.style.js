import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors/Colors';

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
    borderColor: COLORS.gray300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginBottom: 15,
    borderWidth: 1,
    height: 200,
    width: 200,
  },
});
