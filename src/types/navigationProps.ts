import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

export type NavigationProps = {
  navigation: any & NavigationScreenProp<NavigationState, NavigationParams>;
  route?: any;
};
