import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
// import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  logoImage: {
    width: 150,
    height: 70,
    alignSelf: 'flex-start',
  },

  title: {
    fontSize: 21,
    textAlign: 'center',
    paddingTop: 20,
    fontWeight: '500',
  },

  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: '500',
  },

  form: {
    paddingTop: 20,
  },

  createSection: {},
  linkBtn: {
    paddingLeft: 17,
    color: colors.primary,
    fontSize: 16,
  },

  infoText: {
    fontSize: 17,
  },
});
