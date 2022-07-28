import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronRightIcon,
  MailIcon,
  SearchIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";
import { LocationMarkerIcon, MenuIcon } from "react-native-heroicons/solid";
const HomeScreen = () => {
  const nav = useNavigation();

  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "feature"]{
          ...,
          restaurants[]->{
            ...,
            dishes[]->
          },
        }
        `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="pt-5 bg-white">
      {/*Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <LocationMarkerIcon
          className="h-7 w-7 bg-slate-300 rounded-full"
          color="#00CCBB"
        />
        <View className="flex-1">
          <Text className="text-gray-700 text-xl font-bold">
            Home <ChevronRightIcon size={20} color="black" />
          </Text>
        </View>
        <View className="flex-row space-x-4">
          <MailIcon size={20} color="black" />
          <MenuIcon
            size={20}
            color="black"
            onPress={() => {
              nav.navigate("MenuScreen");
            }}
          />
        </View>
      </View>

      {/*Search*/}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 bg-slate-100 px-3 py-1 flex-1 rounded-3xl items-center justify-center">
          <SearchIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurant and Cuisines"
            keyboardType="default"
          />
        </View>
      </View>
      {/*Body */}
      {/*Categories */}
      <ScrollView
        className="bg-slate-200"
        contentContainerStyle={{
          paddingBottom: 200,
        }}
      >
        <Categories />
        {/*Feature */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
