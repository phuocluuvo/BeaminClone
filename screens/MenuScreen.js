import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import client from "../sanity";
import { ArrowLeftIcon, ChevronRightIcon } from "react-native-heroicons/solid";
const MenuScreen = () => {
  const nav = useNavigation();

  const [appfunctions, setAppFunction] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
       *[_type == "appfunction"]
        `
      )
      .then((data) => {
        setAppFunction(data);
      });
  }, []);
  return (
    <SafeAreaView className="pt-10 bg-[#00CCBB]">
      <View className="py-3 px-5 flex-1  flex-row items-center justify-between">
        <ArrowLeftIcon
          size={30}
          color="white"
          onPress={() => {
            nav.goBack();
          }}
        />
      </View>
      <View className=" border-b-[1px] border-b-slate-400 py-3 px-5 flex-1  flex-row items-center justify-between">
        <Text className="text-2xl font-bold text-white ">Louis Vincent</Text>
        <ChevronRightIcon size={30} color="white" />
      </View>
      <ScrollView className="bg-gray-1-00 pt-10 border-b-slate-400">
        {appfunctions?.map((appfunction) => (
          <TouchableOpacity className="border-y-[1px] bg-white border-y-slate-200 py-3 px-5 flex-1  flex-row items-center justify-between">
            <Text className="text-lg ">{appfunction.functionName}</Text>
            <ChevronRightIcon size={30} color="lightgray" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;
