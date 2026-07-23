import { StatusBar } from '@components';
import { ThemeProvider } from '@shopify/restyle';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { globalState } from '@/lib/state';
import { dark, light } from '@/lib/theme';

export default function Layout() {
  const colorTheme = globalState((state) => state.theme);
  const [fontsLoaded] = useFonts({
    SFProRoundedBlack: require('../assets/fonts/SF-Pro-Rounded-Black.otf'),
    SFProRoundedBold: require('../assets/fonts/SF-Pro-Rounded-Bold.otf'),
    SFProRoundedHeavy: require('../assets/fonts/SF-Pro-Rounded-Heavy.otf'),
    SFProRoundedLight: require('../assets/fonts/SF-Pro-Rounded-Light.otf'),
    SFProRoundedMedium: require('../assets/fonts/SF-Pro-Rounded-Medium.otf'),
    SFProRoundedRegular: require('../assets/fonts/SF-Pro-Rounded-Regular.otf'),
    SFProRoundedSemiBold: require('../assets/fonts/SF-Pro-Rounded-Semibold.otf'),
    SFProRoundedThin: require('../assets/fonts/SF-Pro-Rounded-Thin.otf'),
    SFProRoundedUltraLight: require('../assets/fonts/SF-Pro-Rounded-Ultralight.otf'),
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
