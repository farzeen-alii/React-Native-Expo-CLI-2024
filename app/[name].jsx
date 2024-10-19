import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DynamicScreen = () => {
    const { name } = useLocalSearchParams();
  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      <Text className="text-3xl text-green-600">Hello, {name}</Text>
      <Text className="text-xl mt-4">This is your personalized screen</Text>
    </View>
  )
}

export default DynamicScreen;