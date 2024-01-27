import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import MinusIcon from "../../../assets/icons/minus.svg";
import PlusIcon from "../../../assets/icons/plus.svg";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/slices/cartSlice";
import colors from "../../constants/colors";

const CartList = ({ cartItems }) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity({ id: productId }));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity({ id: productId }));
  };

  const renderItem = ({ item }) => (
    <View key={item.id}>
      <View style={cartStyles.container}>
        <View style={cartStyles.imageContainer}>
          <Image
            source={{
              uri: item.thumbnail,
            }}
            style={cartStyles.image}
          />
          <View>
            <Text style={cartStyles.title}>{item.title}</Text>
            <Text style={[cartStyles.price, { fontFamily: "Manrope-Regular" }]}>
              $ {item.price}
            </Text>
          </View>
        </View>
        <View style={cartStyles.quantityContainer}>
          <TouchableOpacity
            style={[cartStyles.iconContainer, { marginRight: 11 }]}
            onPress={() => handleDecreaseQuantity(item.id)}
          >
            <MinusIcon height={20} width={20} />
          </TouchableOpacity>
          <Text style={[cartStyles.quantity, { marginRight: 11 }]}>
            {item.quantity}
          </Text>
          <TouchableOpacity
            style={cartStyles.iconContainer}
            onPress={() => handleIncreaseQuantity(item.id)}
          >
            <PlusIcon height={20} width={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={cartStyles.separator} />
    </View>
  );

  return (
    <FlatList
      data={cartItems}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={cartStyles.flatListContainer}
    />
  );
};

export default CartList;

const cartStyles = StyleSheet.create({
  image: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "Manrope-Medium",
    fontSize: 14,
    color: colors.textSecondary,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: colors.textPrimary,
    height: 40,
    width: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    backgroundColor: colors.mutedWhite,
    width: "100%",
    marginTop: 10,
    height: 1,
    marginBottom: 10,
  },
  flatListContainer: {
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: 30,
  },
  price: {
    fontFamily: "Manrope-Medium",
    fontSize: 14,
    color: colors.textSecondary,
  },
  quantity: {
    fontFamily: "Manrope-Medium",
    fontSize: 14,
    color: colors.textSecondary,
  },
});
