import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import MainScreen from './screens/MainScreen';
import ProfileScreen from './screens/ProfileScreen'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <>
   <StatusBar />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            title:'',
            headerShown: false,
          }}
        />
        <Stack.Screen name="main" component={MainScreen}  options={{
            title:'',
            headerShown: false,
          }}/>
          <Stack.Screen name="profile" component={ProfileScreen}  options={{
            title:'',
            headerShown: false,
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
   </>
    // <HomeScreen/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });
