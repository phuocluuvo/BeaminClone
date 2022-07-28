import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import PrepareOrderScreen from "./screens/PrepareOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import BasketScreen from "./screens/BasketScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import MenuScreen from "./screens/MenuScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
              name="RestaurantScreen"
              component={RestaurantScreen}
            />
            <Stack.Screen
              name="BasketScreen"
              component={BasketScreen}
              options={{ presentation: "modal", headerShown: false }}
            />
            <Stack.Screen
              name="PrepareOrderScreen"
              component={PrepareOrderScreen}
              options={{ presentation: "fullScreenModal", headerShown: false }}
            />
            <Stack.Screen
              name="DeliveryScreen"
              component={DeliveryScreen}
              options={{ presentation: "fullScreenModal", headerShown: false }}
            />
            <Stack.Screen
              name="MenuScreen"
              component={MenuScreen}
              options={{ presentation: "fullScreenModal", headerShown: false }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
