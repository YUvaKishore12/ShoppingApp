import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import BackIcon from "../../../assets/icons/arrow-back.svg";
import colors from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import CartView from "./CartView";

const HeaderContainer = ({ title, showCartButton, quantity }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.circle}>
            <BackIcon
              style={{
                transform: [{ rotate: "90deg" }],
              }}
              height={13}
              width={13}
              stroke={colors.textPrimary}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      {showCartButton ? <CartView quantity={quantity} type={"dark"} /> : null}
    </View>
  );
};

export default HeaderContainer;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
    marginLeft: "5%",
    marginRight: "5%",
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: colors.textPrimary,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 21,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    color: colors.textSecondary,
    fontFamily: "Manrope-Regular",
  },
});
