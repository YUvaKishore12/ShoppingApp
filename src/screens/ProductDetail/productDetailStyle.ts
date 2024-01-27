import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    height: "100%",
  },
  topContainer: {
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: 21,
  },
  titleText: {
    fontSize: 50,
    fontFamily: "Manrope-ExtraBold",
    color: colors.textSecondary,
  },
  productImage: {
    width: "100%",
    height: 207,
    marginTop: 15,
  },
  paginationContainer: {
    position: "absolute",
    bottom: -18,
    left: -10,
  },
  paginationDot: {
    width: 18,
    height: 5,
    borderRadius: 4,
    marginRight: -10,
    backgroundColor: colors.primaryBackground,
  },
  paginationInactiveDot: {
    width: 12,
    height: 5,
    borderRadius: 4,
    marginRight: -10,
    backgroundColor: colors.textPrimary,
  },
  heartContainer: {
    width: 58,
    zIndex: 1,
    height: 58,
    backgroundColor: colors.white,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 10,
    right: 5,
  },
  productDetailsContainer: {
    marginTop: 26,
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  priceText: {
    fontFamily: "Manrope-Bold",
    fontSize: 16,
    color: colors.primary,
  },
  promotionText: {
    fontFamily: "Manrope-Regular",
    fontSize: 12,
    color: colors.offWhite,
  },
  promotionContainer: {
    backgroundColor: colors.primary,
    borderRadius: 70,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginLeft: 14,
  },
  addButton: {
    height: 56,
    width: 143,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  plusButton: {
    height: 56,
    width: 56,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buyButton: {
    height: 56,
    width: 169,
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cartText: {
    fontSize: 14,
    fontFamily: "Manrope-SemiBold",
    includeFontPadding: false,
    color: colors.primary,
  },
  detailTitleText: {
    fontSize: 16,
    fontFamily: "Manrope-Regular",
    color: colors.textSecondary,
    lineHeight: 24,
  },
  reviewText: {
    marginLeft: 5,
    color: colors.offGray,
    fontSize: 14,
    fontFamily: "Manrope-Regular",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },
});

export default styles;
