import { View, Text } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import Ionicons from 'react-native-vector-icons/Ionicons';

const SecondTab = () => {
  return (
    <Animated.View
        entering={FadeIn.duration(500)}
        exiting={FadeOut.duration(500)}
        className="flex-1 justify-center items-center bg-white"
    >
        <Ionicons name="information-circle" size={50} color={"red"} />
        <Text className="text-2xl text-red-500 mt-4">Second Tab Content</Text>
    </Animated.View>
  )
}

export default SecondTab