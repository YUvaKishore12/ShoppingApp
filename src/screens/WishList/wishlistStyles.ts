import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  topContainer: {
    height: 70,
    backgroundColor: colors.primary,
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  titleText: {
    fontFamily: "Manrope-SemiBold",
    includeFontPadding: false,
    fontSize: 22,
    color: colors.textPrimary,
    marginTop: 15,
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
