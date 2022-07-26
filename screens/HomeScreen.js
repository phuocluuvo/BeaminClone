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
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";
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
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 rounded-full"
        />

        <View className="flex-1">
          <Text className="text-gray-400 text-xs font-bold">Deliver Now!</Text>
          <Text className="text-gray-700 text-xl font-bold">
            Current Location! <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/*Search*/}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 bg-gray-200 p-3 flex-1 rounded-md items-center">
          <SearchIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurant and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>
      {/*Body */}
      {/*Categories */}
      <ScrollView
        className="bg-gray-100"
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
