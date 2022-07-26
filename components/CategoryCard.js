import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image source={{ uri: imgUrl }} className="w-20 h-20 rounded" />
      <Text className="absolute bottom-0 left-0 text-white font-bold text-lg">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
