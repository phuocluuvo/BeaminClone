import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { FlatGrid } from "react-native-super-grid";
import client, { urlFor } from "../sanity";
const Categories = () => {
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
    <FlatGrid
      className="bg-white"
      maxItemsPerRow={4}
      spacing={10}
      itemDimension={50}
      data={categories}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <CategoryCard
          imgUrl={urlFor(item.image).width(200).url()}
          title={item.name}
        />
      )}
    />
  );
};

export default Categories;
