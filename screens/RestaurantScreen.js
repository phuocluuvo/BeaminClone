import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ClockIcon,
  HeartIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
} from "react-native-heroicons/outline";
import {
  BadgeCheckIcon,
  ChevronRightIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";
function RestaurantScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    params: {
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
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, [dispatch]);
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="w-full h-56 bg-gray-500 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 bg-gray-100 rounded-full p-2"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>

          <View className="absolute top-14 right-5 flex-row space-x-4">
            <TouchableOpacity
              onPress={navigation.goBack}
              className="  rounded-full p-2"
            >
              <HeartIcon size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={navigation.goBack}
              className="rounded-full p-2"
            >
              <SearchIcon size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View
            className="px-4 pt-4 
          w-[94%]
          absolute bg-white -bottom-20
          rounded-lg border-solid
          shadow left-3 z-50"
          >
            <View className="flex-1 flex items-center flex-row justify-center space-x-1">
              <BadgeCheckIcon size="20" color="#00CCBB" />
              <Text className="text-md text-center text-[#00CCBB]">
                Beamin's Partner
              </Text>
            </View>
            <Text className="text-3xl font-bold text-center">{title}</Text>

            <View className="flex-1 items-center justify-center space-x-2 my-1">
              <View className="flex-row space-x-1 w-[80%]">
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  className="text-xs text-gray-500"
                >
                  {address}
                </Text>
              </View>
            </View>
            <Text className="mt-2 pb-4 text-gray-500">{short_description}</Text>
          </View>
        </View>

        <View className="bg-white ">
          <TouchableOpacity className="mt-[150px] flex-row items-center p-4 space-x-2 border-y border-gray-300">
            <ClockIcon color={"gray"} opacity={0.6} size={20} />
            <Text className="pl-2 flex-1 text-md text-slate-900 font-semibold">
              Delivery order (ASAP)
            </Text>
            <Text className="text-sm text-[#00CCBB] font-bold">Change</Text>
          </TouchableOpacity>
        </View>
        <View className="bg-white ">
          <TouchableOpacity className="flex-row items-center p-4 space-x-2 border-t border-t-gray-300">
            <View className="flex-row flex-1 items-center space-x-1">
              <Image
                source={{
                  uri: "https://cdn-icons.flaticon.com/png/512/1985/premium/1985836.png?token=exp=1658933984~hmac=450d57d6ea67b9f046566ee07eaffe26",
                }}
                className="w-5 h-5"
              />
              <Text className="text-xs text-gray-500">{rating} (+999)</Text>
            </View>
            <Text className="text-sm text-[#00CCBB] font-bold">
              See reviews
            </Text>
          </TouchableOpacity>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 20,
              paddingHorizontal: 10,
            }}
          >
            <View className="flex-row space-x-2">
              <View className="flex-row bg-slate-200 items-center justify-center rounded-2xl p-2 w-36">
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/3508/3508662.png",
                  }}
                  resizeMode="contain"
                  className="w-5 h-5"
                />
                <Text className="text-gray-500"> Delicious (999+)</Text>
              </View>

              <View className="flex-row bg-slate-200 items-center justify-center rounded-2xl p-2 w-48">
                <Image
                  source={{
                    uri: "https://cdn-icons.flaticon.com/png/512/2847/premium/2847029.png?token=exp=1658934915~hmac=fc16befbef9d487cb1b9c7b80900d2ad",
                  }}
                  resizeMode="contain"
                  className="w-5 h-5"
                />
                <Text className="text-gray-500"> Worth the price (999+)</Text>
              </View>

              <View className="flex-row bg-slate-200 items-center justify-center rounded-2xl p-2 w-48">
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/4689/4689777.png",
                  }}
                  resizeMode="contain"
                  className="w-5 h-5"
                />
                <Text className="text-gray-500"> Worth the price (999+)</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View className="pb-36">
          <Text className="px-4 pt-6 text-xl font-bold mb-3">Menu</Text>
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            ></DishRow>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

export default RestaurantScreen;
