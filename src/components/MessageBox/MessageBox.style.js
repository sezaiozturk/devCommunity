import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors/Colors';

const base_style = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginVertical: 8,
  },
  innerContainer: {
    flexDirection: 'row',
    borderRadius: 25,
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 20,
  },
  messageContainer: {
    alignSelf: 'baseline',
  },
  name: {color: COLORS.orange, fontWeight: 'bold'},
  message: {lineHeight: 20, color: COLORS.white},
});
export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      justifyContent: 'flex-end',
    },
    innerContainer: {
      ...base_style.innerContainer,
      borderColor: COLORS.gray,
      marginRight: 10,
      marginLeft: 50,
      backgroundColor: COLORS.gray,
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      justifyContent: 'flex-start',
    },
    innerContainer: {
      ...base_style.innerContainer,
      borderColor: COLORS.gray,
      marginRight: 50,
      marginLeft: 10,
    },
  }),
};
