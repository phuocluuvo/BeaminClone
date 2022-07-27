import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
const PrepareOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DeliveryScreen");
    }, 4000);
  }, []);
  return (
    <SafeAreaView className="bg-[#faaf40] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/food-floating.gif")}
        animation="slideInDown"
        iterationCount={1}
        className="h-96 w-full"
      />
      <Animatable.Text
        animation="slideInDown"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Watiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PrepareOrderScreen;
