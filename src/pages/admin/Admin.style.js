import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black100,
  },
  image: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
    height: 500,
    alignSelf: 'baseline',
  },
  imageContainer: {
    padding: 25,
  },
  flatIcon: {
    backgroundColor: COLORS.gray400,
    padding: 15,
    borderRadius: 30,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 15,
  },
});
