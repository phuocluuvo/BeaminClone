import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { BadgeCheckIcon, StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  title,
  imgUrl,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      className=" mr-5 "
      onPress={() => {
        nav.navigate("RestaurantScreen", {
          id,
          title,
          imgUrl,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="w-32 h-32 rounded-md"
      />
      <View className=" pb-4 w-32 ">
        <View className="flex-row items-center pt-2">
          <BadgeCheckIcon size="20" color="#00CCBB" />
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className=" text-lg flex-1 "
          >
            {title}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="#fa9840" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text>{rating}</Text> • {genre}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
