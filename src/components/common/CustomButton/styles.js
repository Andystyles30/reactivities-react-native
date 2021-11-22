import colors from 'assets/theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  inputContainer: {
    paddingVertical: 12,
  },
  loaderSection: {
    flexDirection: 'row',
  },

  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
