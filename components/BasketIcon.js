import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { selectBasketItem, selectBasketTotal } from "../features/basketSlice";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";
const BasketIcon = () => {
  const items = useSelector(selectBasketItem);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  if (items.length === 0) return null;
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1"
        onPress={() => {
          navigation.navigate("BasketScreen");
        }}
      >
        <Text className="text-white font-extrabold text-lg py-1 px-2 bg-[#00857a]">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center ">
          View Basket
        </Text>
        <Text className="text-white font-extrabold text-lg text-center">
          <Currency quantity={basketTotal} currency="GBP" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
