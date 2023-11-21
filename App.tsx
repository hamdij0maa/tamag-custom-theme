import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import { Button, Card, H1, TamaguiProvider } from "tamagui";
import config from "./tamagui.config";

export default function App() {
 const theme = useColorScheme();
 const [loaded] = useFonts({
  Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
  InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
 });

 if (!loaded) {
  return null;
 }
 return (
  <TamaguiProvider defaultTheme={theme} config={config}>
   <Card flex={1} justifyContent="center" padded>
    <H1>Open up App.js to start working on your app!</H1>
    <StatusBar style="auto" />
    <Card padded unstyled={false}>
     <Button>Test</Button>
    </Card>
   </Card>
  </TamaguiProvider>
 );
}
