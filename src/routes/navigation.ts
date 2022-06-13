import type { RouteProp } from '@react-navigation/native';
import { ScreenParamList } from './stack.routes'


export type DetailsRouteParams = RouteProp<ScreenParamList, 'Details'>;

declare global {
    namespace ReactNavigation {
      interface RootParamList extends ScreenParamList {}
    }
  }