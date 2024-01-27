import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SearchIcon from "../../../assets/icons/search.svg";
import ProductCard from "../../components/molecules/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import ArrowDownIcon from "../../../assets/icons/arrow-down.svg";
import DropDown from "../../components/molecules/CustomDropDown";
import Lottie from "lottie-react-native";
import { selectCartData } from "../../redux/slices/cartSlice";
import styles from "./allProductStyles";
import {
  fetchProducts,
  selectProducts,
  selectProductsError,
  selectProductsLoading,
} from "../../redux/slices/productSlice";
import colors from "../../constants/colors";
import AdsCard from "../../components/atoms/AdsCard";
import CartView from "../../components/atoms/CartView";

const ProductListScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const allProductsList = useSelector(selectProducts);
  const isLoadingProducts = useSelector(selectProductsLoading);
  const [filteredProductsList, setFilteredProductsList] =
    useState(allProductsList);
  const [isAddressDropdownVisible, setIsAddressDropdownVisible] =
    useState(false);
  const [isTimeDropdownVisible, setIsTimeDropdownVisible] = useState(false);
  const deliveryAddresses = ["Bangalore", "Vizag", "Mumbai"];
  const deliveryTimings = ["1 Hour", "2 Hour", "3 Hour"];
  const [selectedAddress, setSelectedAddress] = useState(deliveryAddresses[0]);
  const [selectedTiming, setSelectedTiming] = useState(deliveryTimings[0]);
  const cartItemsList = useSelector(selectCartData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts() as any);
    setFilteredProductsList(allProductsList);
  }, []);

  useEffect(() => {
    setFilteredProductsList(allProductsList);
  }, [allProductsList.length !== 0]);

  const toggleAddressDropdown = () => {
    setIsAddressDropdownVisible(!isAddressDropdownVisible);
  };

  const toggleTimingDropdown = () => {
    setIsTimeDropdownVisible(!isTimeDropdownVisible);
  };

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
    setIsAddressDropdownVisible(false);
  };

  const handleTimingSelect = (timing) => {
    setSelectedTiming(timing);
    setIsTimeDropdownVisible(false);
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);

    const filtered = allProductsList.filter((product) => {
      const { title, description, brand, category } = product;
      const searchItem = text.toLowerCase();

      const searchableFields = [title, description, brand, category];

      return searchableFields.some((field) =>
        field.toLowerCase().includes(searchItem)
      );
    });

    setFilteredProductsList(filtered);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle={"light-content"} />
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Hey, Kishore</Text>
          <CartView quantity={cartItemsList?.length} type={"light"} />
        </View>

        <View style={styles.searchBarContainer}>
          <SearchIcon height={18} width={18} style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Search Products or Store"
            value={searchQuery}
            onChangeText={handleSearch}
            placeholderTextColor={colors.lightGray}
          />
        </View>

        <View style={styles.deliveryInfoContainer}>
          <View style={styles.deliveryOption}>
            <Text style={styles.smallText}>DELIVERY TO</Text>
            <TouchableOpacity onPress={toggleAddressDropdown}>
              <View style={styles.dropdownContainer}>
                <Text style={styles.addressText}>{selectedAddress}</Text>
                <ArrowDownIcon />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.deliveryOption}>
            <Text style={styles.smallText}>WITHIN</Text>
            <TouchableOpacity onPress={toggleTimingDropdown}>
              <View style={styles.dropdownContainer}>
                <Text style={styles.addressText}>{selectedTiming}</Text>
                <ArrowDownIcon />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView>
        <View style={styles.scrollContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <AdsCard />
            <AdsCard />
          </ScrollView>

          <Text
            style={[
              styles.titleText,
              { color: colors.textSecondary, marginTop: 27 },
            ]}
          >
            Recommended
          </Text>

          {isLoadingProducts ? (
            <View style={{ flex: 1 }}>
              <Lottie
                style={styles.lottieImage}
                source={require("../../../assets/lotties/loading.json")}
                autoPlay
              />
              <Text style={styles.productNotFoundText}>
                Products are Loading
              </Text>
            </View>
          ) : filteredProductsList?.length !== 0 ? (
            <ProductCard allProducts={filteredProductsList} />
          ) : (
            <View style={{ flex: 1 }}>
              <Lottie
                style={styles.lottieImage}
                source={require("../../../assets/lotties/productsEmpty.json")}
                autoPlay
                testID="lottie-image"
              />
              <Text style={styles.productNotFoundText}>No Product Found</Text>
            </View>
          )}
        </View>
      </ScrollView>

      <DropDown
        isDropdownVisible={isAddressDropdownVisible}
        setIsDropdownVisible={() => setIsAddressDropdownVisible(false)}
        data={deliveryAddresses}
        handleSelectItem={handleAddressSelect}
        type={"Address"}
      />

      <DropDown
        isDropdownVisible={isTimeDropdownVisible}
        setIsDropdownVisible={() => setIsTimeDropdownVisible(false)}
        data={deliveryTimings}
        handleSelectItem={handleTimingSelect}
        type={"Timing"}
      />
    </View>
  );
};

export default ProductListScreen;
