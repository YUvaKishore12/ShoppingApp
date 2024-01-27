import React from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../constants/colors";

const CustomDropDown = ({
  isDropdownVisible,
  setIsDropdownVisible,
  data,
  handleSelectItem,
  type,
}) => {
  return (
    <Modal
      transparent={true}
      visible={isDropdownVisible}
      animationType="fade"
      onRequestClose={() => setIsDropdownVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalInnerContainer}>
          <View style={styles.innerDropDownContainer}>
            <Text style={styles.dropdownTitleText}>Choose your {type}</Text>
            <FlatList
              data={data}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelectItem(item)}
                  style={styles.dropdownItemContainer}
                >
                  <Text style={styles.dropdownItemText}>{item}</Text>
                </TouchableOpacity>
              )}
              style={styles.dropdownList}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  dropdownItemText: {
    fontFamily: "Manrope-Medium",
    color: colors.main,
  },
  modalInnerContainer: {
    width: "100%",
    alignItems: "center",
  },
  innerDropDownContainer: {
    backgroundColor: colors.white,
    height: 170,
    width: "80%",
    borderRadius: 8,
    paddingTop: 5,
    padding: 12,
  },
  dropdownTitleText: {
    fontFamily: "Manrope-SemiBold",
    includeFontPadding: false,
    color: colors.main,
    fontSize: 18,
    marginTop: 10,
  },
  dropdownItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
  dropdownList: {
    marginTop: 10,
  },
});
