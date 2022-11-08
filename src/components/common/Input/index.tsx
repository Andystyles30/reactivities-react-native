import colors from 'assets/theme/colors';
import {MaterialIcon} from 'components/Icon';
import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
interface Props {
  onChangeText: (text: any) => void;
  iconPosition?: string;
  icon?: any;
  value?: string;
  label: string;
  style?: {};
  error?: string;
  secureEntry?: boolean;
  [x: string]: any;
}

const Input = (props: Props) => {
  const [focused, setFocused] = useState(false);
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const {
    onChangeText,
    iconPosition,
    icon,
    style,
    value,
    label,
    error,
    secureEntry,
    ...rest
  } = props;
  const getFlexDirection = () => {
    if ((icon || secureEntry) && iconPosition) {
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
          {borderColor: getBorderColor()},
        ]}>
        <View
          style={(styles.iconContainer, {flexDirection: getFlexDirection()})}>
          {secureEntry ? (
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                setIsSecureEntry(prev => !prev);
              }}>
              <MaterialIcon
                size="large"
                color="grey"
                name={isSecureEntry ? 'eye-off' : 'eye'}
              />
            </TouchableOpacity>
          ) : (
            icon && icon
          )}
          <TextInput
            secureTextEntry={secureEntry ? isSecureEntry : false}
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
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
