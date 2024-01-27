import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CartOutlineIcon from "../../../assets/icons/cart-outline.svg";
import CartIcon from "../../../assets/icons/cart.svg";
import colors from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

const CartView = ({ quantity, type }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
      {type === "light" ? (
        <CartOutlineIcon height={20} width={20} />
      ) : (
        <CartIcon height={20} width={20} />
      )}
      {quantity === 0 ? null : (
        <View style={styles.circle}>
          <Text style={styles.bagQuantityText}>{quantity}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartView;

const styles = StyleSheet.create({
  circle: {
    width: 24,
    height: 24,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.primaryBackground,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 6,
    top: -8,
  },
  bagQuantityText: {
    fontFamily: "Manrope-SemiBold",
    includeFontPadding: false,
    fontSize: 14,
    color: colors.white,
  },
});
