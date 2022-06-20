import type { RouteProp } from '@react-navigation/native';
import { ScreenParamList } from './stack.routes'


export type DetailsRouteParams = RouteProp<ScreenParamList, 'Details'>;
export type SchedulingRouteParams = RouteProp<ScreenParamList, 'Scheduling'>;
export type SchedulingDetailsRouteParams = RouteProp<ScreenParamList, 'SchedulingDetails'>;

declare global {
    namespace ReactNavigation {
      interface RootParamList extends ScreenParamList {}
    }
  }