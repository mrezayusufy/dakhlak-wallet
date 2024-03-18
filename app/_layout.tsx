import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { PaperProvider } from 'react-native-paper';
import { useColorScheme } from '@/components/useColorScheme';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
export {
  ErrorBoundary,
} from 'expo-router';

export const Icon = createIconSetFromIcoMoon(
  require('@/assets/icomoon/selection.json'),
  'IcoMoon',
  'icomoon.ttf'
);
export const unstable_settings = {
  initialRouteName: 'welcome',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    IcoMoon: require('@/assets/icomoon/icomoon.ttf'),
    ...Ionicons.font,
    ...FontAwesome.font,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <PaperProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false}}>
          <Stack.Screen name="welcome" />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          <Stack.Screen name="on-boarding"  options={{headerShown: false}}/>
          <Stack.Screen name="ethereum"  options={{headerShown: false}}/>
          <Stack.Screen name="bitcoin"  options={{headerShown: false}}/>
          <Stack.Screen name="bitcoin2"  options={{headerShown: false}}/>
          <Stack.Screen name="portfolio"  options={{headerShown: false}}/>
          <Stack.Screen name="(auth)/login" options={{headerShown: false}} />
          <Stack.Screen name="(auth)/register" options={{headerShown: false}} />
          <Stack.Screen name="(auth)/phone" options={{headerShown: false}} />
          <Stack.Screen name="(auth)/forgot" options={{headerShown: false}} />
        </Stack>
      </ThemeProvider>
    </PaperProvider>
  );
}
