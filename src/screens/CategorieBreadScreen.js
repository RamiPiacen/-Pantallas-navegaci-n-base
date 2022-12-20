import { FlatList } from "react-native";
import React, { useEffect } from "react";
import BreadItem from "../components/BreadItem";
import { BREADS } from "../data/Bread.js";

import { useSelector, useDispatch, connect } from "react-redux";
import { filteredBread, selectedBread } from "../store/actions/bread.action";

const CategorieBreadScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories.selected);
  const categoryBreads = useSelector((state) => state.categories.filteredBread);

  useEffect(() => {
    dispatch(filteredBread(category.id));
  }, []);

  const handleSelectedCategory = (item) => {
    dispatch(selectedBread(item.id));
    navigation.navigate("Details", {
      name: item.name,
    });
  };

  const renderBreadItem = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelectedCategory} />
  );
  return (
    <FlatList
      data={categoryBreads}
      keyExtractor={(item) => item.id}
      renderItem={renderBreadItem}
    />
  );
};

export default connect() (CategorieBreadScreen);
