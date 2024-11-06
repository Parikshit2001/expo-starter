import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>index</Text>
      <Link href="/profile" className="text-blue-500">
        Go to Profile
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
