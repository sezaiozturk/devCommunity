import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.black100,
    flex: 1,
  },
  bottomContainer: {
    padding: 10,
  },
  sendContainer: {
    borderColor: COLORS.gray300,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 0.5,
    paddingTop: 5,
  },
  message: {
    marginHorizontal: 10,
    color: COLORS.white,
    fontSize: 15,
    padding: 10,
    flex: 1,
  },
  send: {
    color: COLORS.orange,
    fontWeight: 'bold',
    fontSize: 15,
    margin: 10,
  },
});
