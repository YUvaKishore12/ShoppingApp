import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectFavouriteData } from "../../redux/slices/favouriteSlice";
import ProductCard from "../../components/molecules/ProductCard";
import Lottie from "lottie-react-native";
import styles from "./wishlistStyles";

const WishListScreen = () => {
  const favourites = useSelector(selectFavouriteData);
  return (
    <View>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Your Wishlist</Text>
      </View>
      <View style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        {favourites?.length !== 0 ? (
          <ProductCard allProducts={favourites} />
        ) : (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: "90%",
            }}
          >
            <Lottie
              style={styles.lottieImage}
              source={require("../../../assets/lotties/wishlistanime.json")}
              autoPlay
            />
            <Text style={styles.productNotFoundText}>
              Your Wishlist is empty
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default WishListScreen;
