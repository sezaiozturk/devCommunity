import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors/Colors';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.black100,
    flex: 1,
    gap: 20,
  },
  headContainer: {
    flexDirection: 'row',
  },
  firstLetterContainer: {
    backgroundColor: COLORS.gray300,
    borderColor: COLORS.purple,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 55,
    borderWidth: 3,
    height: 110,
    width: 110,
    margin: 25,
  },
  firstLetter: {
    color: COLORS.gray200,
    fontSize: 40,
  },
  headContentContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 15,
  },
  fullName: {
    color: COLORS.gray200,
    fontWeight: 'bold',
    fontSize: 16,
  },
  userName: {
    color: COLORS.gray200,
    fontWeight: 'bold',
    fontSize: 12,
  },
  department: {
    color: COLORS.gray400,
    fontWeight: 'bold',
    fontSize: 15,
  },
  aboutContainer: {
    gap: 10,
  },
  aboutTitle: {
    paddingHorizontal: 10,
    color: COLORS.gray500,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
  },
  about: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    lineHeight: 19,
    color: 'white',
    fontSize: 12,
  },
  communityTitle: {
    color: COLORS.gray500,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: 'white',
    fontSize: 15,
  },
  accountContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});
