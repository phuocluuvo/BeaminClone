import { View, Text, SafeAreaView, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  XIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import client from "../sanity";

export default function SearchScreen() {
  const nav = useNavigation();
  const [searches, setSearches] = useState([]);
  let [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    client
      .fetch(
        `
       *[_type == "searchHistory"]
        `
      )
      .then((data) => {
        setSearches(data);
      });
  }, []);

  const [categories, setCategores] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "category"]
      `
      )
      .then((data) => setCategores(data));
  }, []);
  return (
    <SafeAreaView className="mt-10 ">
      <View className="flex flex-row border-b-[1px] py-2 border-slate-200 bg-white">
        <View className="mx-3 ">
          <ArrowLeftIcon
            color="black"
            size={30}
            onPress={() => {
              nav.goBack();
            }}
          />
        </View>
        <TextInput
          placeholder="Search for a restaurant or a menu"
          color="black"
          value={searchInput}
          onChange={(e) => {
            // temp = searchInput;
            // setSearchInput(e.target.value);
            return setSearchInput(e.target.value);
          }}
        />
      </View>
      <View className="p-2 mb-3 bg-white">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-gray-500 font-bold">Recent searches</Text>
          <Text className="text-[#00CCBB] font-bold">Clear all</Text>
        </View>
        <View className="my-2 flex flex-row flex-wrap bg-white">
          {searches?.map((search, index) => (
            <View
              key={index}
              className="mr-4 text-gray-300 items-center justify-center bg-gray-200 rounded-2xl px-2 py-1 flex flex-row"
            >
              <Text
                onPress={() => {
                  searchInput += search.name;
                  setSearchInput(searchInput);
                }}
              >
                {search.name}
              </Text>
              <XIcon size="18" color="black" />
            </View>
          ))}
        </View>
      </View>

      <View className="p-2  bg-white">
        <Text className="text-gray-500 font-bold">
          What's fire dish 🔥🔥🔥?
        </Text>

        <View className="py-2 flex flex-row flex-wrap space-y-3">
          {categories?.map((category, index) => (
            <View
              key={index}
              className="mx-1 text-gray-300 items-center justify-center bg-gray-200 rounded-2xl px-2 py-1 flex flex-row"
            >
              <Text onPress={() => {}}>{category.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
