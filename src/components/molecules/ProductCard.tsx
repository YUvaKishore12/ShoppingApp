import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import LikeIcon from "../../../assets/icons/like-outline.svg";
import MinusIcon from "../../../assets/icons/minus.svg";
import PlusIcon from "../../../assets/icons/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  selectCartData,
} from "../../redux/slices/cartSlice";
import {
  addToFavourite,
  removeFromFavourite,
  selectFavouriteData,
} from "../../redux/slices/favouriteSlice";
import colors from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ allProducts }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartData);
  const favourites = useSelector(selectFavouriteData);
  console.log("first", favourites);

  const isAddedToCart = (productId) =>
    cartItems.some((item) => item.id === productId);
  const isFavourite = (productId) =>
    favourites.some((item) => item.id === productId);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ item: product }));
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity({ id: productId }));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity({ id: productId }));
  };

  const handleToggleFavourite = (product) => {
    if (isFavourite(product.id)) {
      dispatch(removeFromFavourite({ id: product.id }));
    } else {
      dispatch(addToFavourite({ item: product }));
    }
  };

  return (
    <View style={styles.container}>
      {allProducts?.map((product) => (
        <View style={styles.productCard} key={product.id}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProductDetailsScreen", {
                productId: product.id,
              })
            }
          >
            <Image
              source={{ uri: product.thumbnail }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={[styles.productPriceText, { marginTop: 5 }]}>
                  ${product.price}
                </Text>
                <Text style={styles.productTitleText}>{product.title}</Text>
              </View>
            </View>
            {isAddedToCart(product.id) ? (
              <View
                style={{
                  backgroundColor: colors.primaryBackground,
                  flexDirection: "row",
                  borderRadius: 10,
                  justifyContent: "space-between",
                  marginTop: 5,
                }}
              >
                <TouchableOpacity
                  onPress={() => handleDecreaseQuantity(product.id)}
                  style={styles.circle}
                >
                  <MinusIcon height={20} width={20} />
                </TouchableOpacity>
                <Text style={styles.text}>
                  {cartItems.find((item) => item.id === product.id)?.quantity ||
                    0}
                </Text>
                <TouchableOpacity
                  onPress={() => handleIncreaseQuantity(product.id)}
                  style={styles.circle}
                >
                  <PlusIcon height={20} width={20} />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{ marginTop: 5, alignSelf: "flex-start" }}>
                <TouchableOpacity
                  onPress={() => handleAddToCart(product)}
                  style={styles.circle}
                >
                  <PlusIcon height={20} width={20} />
                </TouchableOpacity>
              </View>
            )}
            <TouchableOpacity
              onPress={() => handleToggleFavourite(product)}
              style={styles.heartIcon}
            >
              {isFavourite(product.id) ? (
                <LikeIcon height={15} width={16} fill={colors.mutedAccent} />
              ) : (
                <LikeIcon height={15} width={16} />
              )}
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 12,
  },
  productCard: {
    height: 194,
    width: "48%",
    backgroundColor: colors.textPrimary,
    borderRadius: 12,
    marginBottom: 10,
    marginRight: 5,
    padding: 17,
    justifyContent: "space-evenly",
  },
  cardImage: {
    height: 100,
    width: "100%",
    borderRadius: 12,
  },
  productPriceText: {
    fontFamily: "Manrope-SemiBold",
    includeFontPadding: false,
    fontSize: 14,
    color: colors.textSecondary,
  },
  productTitleText: {
    fontFamily: "Manrope-Regular",
    fontSize: 12,
    color: colors.muted,
  },
  heartIcon: {
    position: "absolute",
    left: -10,
    top: -2,
    zIndex: 1,
  },
  circle: {
    height: 20,
    width: 20,
    backgroundColor: colors.primaryBackground,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Manrope-Medium",
    fontSize: 14,
    color: colors.textSecondary,
  },
});
