import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    justifyContent: "flex-start",
    backgroundColor: colors.dark,
    borderRadius: 28,
    width: "100%",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 28,
  },
  searchBar: {
    color: colors.neutral,
    fontFamily: "Manrope-Medium",
    fontSize: 14,
    width: "100%",
    includeFontPadding: false,
  },
  headerContainer: {
    height: 220,
    backgroundColor: colors.primary,
    width: "100%",
    paddingLeft: "5%",
    paddingRight: "5%",
    justifyContent: "space-around",
  },
  titleText: {
    fontFamily: "Manrope-SemiBold",
    includeFontPadding: false,
    fontSize: 22,
    color: colors.textPrimary,
  },
  searchIcon: {
    marginRight: 12,
  },
  titleContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  smallText: {
    fontSize: 11,
    fontFamily: "Manrope-ExtraBold",
    color: colors.textPrimary,
    opacity: 0.5,
  },
  deliveryInfoContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  deliveryOption: {
    flex: 1,
  },
  dropdownContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: 27,
    marginBottom: 250,
  },
  productCardContainer: {
    marginTop: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addressText: {
    fontFamily: "Manrope-Medium",
    fontSize: 14,
    marginRight: 10,
    color: colors.textPrimary,
  },
  lottieImage: {
    height: 200,
    width: 200,
  },
  productNotFoundText: {
    fontFamily: "Manrope-Bold",
    fontSize: 14,
    color: colors.main,
  },
});

export default styles;
