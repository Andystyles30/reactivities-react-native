import colors from 'assets/theme/colors';
import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
// import styles from './styles';

interface Props {
  title: string;
  onPress?: any;
  secondary?: boolean;
  primary?: boolean;
  danger?: boolean;
  rose?: boolean;
  sucesss?: boolean;
  disabled?: boolean;
  loading: boolean;
}

const CustomButton = (props: Props) => {
  const {
    title,
    onPress,
    disabled,
    primary,
    secondary,
    danger,
    sucesss,
    rose,
    loading,
  } = props;

  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (secondary) {
      return colors.secondary;
    }
    if (danger) {
      return colors.danger;
    }
    if (sucesss) {
      return colors.sucesss;
    }
    if (rose) {
      return colors.pink;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.wrapper, {backgroundColor: getBgColor()}]}
      disabled={disabled}
      onPress={onPress}>
      <View style={[styles.loaderSection]}>
        {loading ? (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        ) : (
          title && (
            <Text style={{color: disabled ? 'black' : colors.white}}>
              {title}
            </Text>
          )
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
