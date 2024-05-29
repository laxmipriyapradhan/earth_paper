import { createNavigationContainerRef } from '@react-navigation/native';
import { MainRoutes } from '../Routes/Routes';
import { CommonActions } from '@react-navigation/native';

const navigationRef = createNavigationContainerRef<MainRoutes>();

export const useNavigation = () => {
  function navigate(
    name: keyof MainRoutes,
    params: object | undefined,
  ) {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params); // this params still get warning on type check
    }
  }

  const navigateAndReset = (name: string, params?: any) => {
    if (navigationRef.isReady()) {
      navigationRef.resetRoot({
        index: 0,
        routes: [{ name, params }],
      });
    }
  };

  const goBack = () => {
    navigationRef.dispatch(CommonActions.goBack());
  };

  const canGoBack = () => {
    return navigationRef.canGoBack();
  };

  const getCurrentRoute = () => navigationRef.current?.getCurrentRoute();

  return {
    navigate,
    navigateAndReset,
    goBack,
    canGoBack,
    getCurrentRoute,
  };
};

export default useNavigation;