import { StatusBar } from '@components';
import { ThemeProvider } from '@shopify/restyle';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { globalState } from '@/lib/state';
import { dark, light } from '@/lib/theme';

export default function Layout() {
  const colorTheme = globalState((state) => state.theme);
  const [fontsLoaded] = useFonts({
    OnestBlack: require('../assets/fonts/Onest-Black.ttf'),
    OnestBold: require('../assets/fonts/Onest-Bold.ttf'),
    OnestExtraBold: require('../assets/fonts/Onest-ExtraBold.ttf'),
    OnestExtraLight: require('../assets/fonts/Onest-ExtraLight.ttf'),
    OnestLight: require('../assets/fonts/Onest-Light.ttf'),
    OnestMedium: require('../assets/fonts/Onest-Medium.ttf'),
    OnesRegular: require('../assets/fonts/Onest-Regular.ttf'),
    OnestSemiBold: require('../assets/fonts/Onest-SemiBold.ttf'),
    OnestThin: require('../assets/fonts/Onest-Thin.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={colorTheme === 'dark' ? dark : light}>
      <StatusBar
        backgroundColor="background"
        style={colorTheme === 'light' ? 'dark' : 'light'}
      />
      <Slot />
    </ThemeProvider>
  );
}
