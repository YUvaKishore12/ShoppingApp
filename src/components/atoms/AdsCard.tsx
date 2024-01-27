import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const AdsCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={require("../../../assets/pic.png")}
        style={styles.cardImage}
      />
      <View>
        <Text style={styles.adsTitleText}>Get</Text>
        <Text style={styles.percentText}>50% OFF</Text>
        <Text style={styles.adsDetailText}>On first 03 order</Text>
      </View>
    </View>
  );
};

export default AdsCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: 123,
    width: 269,
    backgroundColor: colors.primaryBackground,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 18,
    paddingHorizontal: 12,
  },
  cardImage: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  adsTitleText: {
    fontFamily: "Manrope-Light",
    fontSize: 20,
    color: colors.white,
  },
  percentText: {
    fontFamily: "Manrope-Bold",
    fontSize: 25,
    color: colors.white,
  },
  adsDetailText: {
    fontFamily: "Manrope-Light",
    fontSize: 12,
    color: colors.white,
  },
});
