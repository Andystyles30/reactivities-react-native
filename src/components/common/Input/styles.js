import colors from 'assets/theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginTop: 5,
    justifyContent: 'center',
  },

  touchableOpacity: {
    width: '8%',
    height: '100%',
    justifyContent: 'center',
    paddingRight: 3,
  },

  inputContainer: {
    paddingVertical: 6,
  },

  textInput: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },

  iconContainer: {
    flexDirection: 'row-reverse',
  },
});
