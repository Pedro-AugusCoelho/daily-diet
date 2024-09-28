import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import theme from './src/theme';


import { Loading } from '@screens/Loading';
import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold})

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded 
        ? 
        <>
          <StatusBar barStyle={'light-content'} backgroundColor={theme.COLORS.GRAY_100} />
          <Routes /> 
        </>
        : 
        <Loading /> 
      }
    </ThemeProvider>
  );
}
