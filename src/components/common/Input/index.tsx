import colors from 'assets/theme/colors';
import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';
interface Props {
  onChangeText: (text: any) => void;
  iconPosition?: string;
  icon?: any;
  value: string;
  label: string;
  style?: {};
  error?: string;
  [x: string]: any;
}

const Input = (props: Props) => {
  const [focused, setFocused] = useState(false);
  const {
    onChangeText,
    iconPosition,
    icon,
    style,
    value,
    label,
    error,
    ...rest
  } = props;
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (focused) {
      return colors.primary;
    }
    if (error) {
      return colors.danger;
    } else {
      return colors.grey;
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {borderColor: getBorderColor(), flexDirection: getFlexDirection()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...rest}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
