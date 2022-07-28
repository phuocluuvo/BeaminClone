import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-2 flex items-center justify-center">
      <Image source={{ uri: imgUrl }} className="w-10 h-10 rounded " />
      <Text className="font-bold text-sm text-center">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
