import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';

interface Props {
  style?: any;
  children: React.ReactNode;
}

const Container = ({style, children}: Props) => {
  return (
    <ScrollView>
      <View style={style ? style : styles.wrapper}>{children}</View>
    </ScrollView>
  );
};

export default Container;
