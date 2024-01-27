import React from "react";
import { View, StyleSheet } from "react-native";
import Star from "../../../assets/icons/star.svg";
import StarHalf from "../../../assets/icons/star-half.svg";
import StarOutline from "../../../assets/icons/star-outline.svg";

const Stars = ({ rating }) => {
  const MAX_STARS = 5;
  const starIcons = [];

  for (let i = 1; i <= MAX_STARS; i++) {
    if (rating >= i) {
      starIcons.push(<Star key={i} width={16.93} height={16.93} />);
    } else if (rating >= i - 0.5) {
      starIcons.push(<StarHalf key={i} width={16.93} height={16.93} />);
    } else {
      starIcons.push(<StarOutline key={i} width={16.93} height={16.93} />);
    }
  }

  return <View style={styles.container}>{starIcons}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Stars;
