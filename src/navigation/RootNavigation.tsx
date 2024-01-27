import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import Home from "../../assets/icons/home.svg";
import Category from "../../assets/icons/category.svg";
import Like from "../../assets/icons/like-outline.svg";
import Other from "../../assets/icons/dots.svg";
import CategoryScreen from "../screens/Others/CategoryScreen";
import WishListScreen from "../screens/WishList/WishListScreen";
import OtherScreen from "../screens/Others/OtherScreen";
import ProductDetailsScreen from "../screens/ProductDetail/ProductDetailsScreen";
import CartScreen from "../screens/Cart/CartScreen";
import AllProductScreen from "../screens/AllProducts/AllProductScreen";
import colors from "../constants/colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabBarIcon = ({ route, focused, icon, label }) => {
  return (
    <View style={styles.iconContainer}>
      <View style={focused ? styles.iconCircle : null}>
        {React.cloneElement(icon, {
          fill: focused ? colors.highlight : null,
        })}
      </View>
      {label && <Text style={styles.iconText}>{label}</Text>}
    </View>
  );
};

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.textPrimary,
          height: 75,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
      }}
    >
      <Tab.Screen
        name="AllProductScreen"
        component={AllProductScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              route="HomeScreen"
              focused={focused}
              icon={<Home />}
              label="Home"
            />
          ),
        }}
      />
      <Tab.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              route="CategoryScreen"
              focused={focused}
              icon={<Category />}
              label="Categories"
            />
          ),
        }}
      />
      <Tab.Screen
        name="WishListScreen"
        component={WishListScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              route="FavouriteScreen"
              focused={focused}
              icon={<Like />}
              label="Favourite"
            />
          ),
        }}
      />
      <Tab.Screen
        name="OtherScreen"
        component={OtherScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              route="MoreScreen"
              focused={focused}
              icon={<Other />}
              label="More"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({
  iconText: {
    fontSize: 12,
    fontFamily: "Manrope-Medium",
    color: colors.lightGray,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconCircle: {
    backgroundColor: colors.textSecondary,
    height: 56,
    width: 56,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 15,
  },
});
