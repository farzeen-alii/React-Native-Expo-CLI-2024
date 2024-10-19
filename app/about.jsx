import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
import Animated, { SlideInRight, SlideInLeft, SlideOutRight, FadeIn, FadeOut, ZoomOut, ZoomIn } from 'react-native-reanimated';

const About = () => {
  const router = useRouter();
  return (
    <Animated.View
      entering={ZoomIn.duration(500)}
      exiting={ZoomOut.duration(500)}
      className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl text-red-500">About</Text>
      {/* <Link href='/about' asChild>
      <Pressable className="bg-blue-600 p-4 rounded-md">
        <Text className="text-white text-center">Go To About</Text>
      </Pressable>
      </Link> */}
      <Pressable
        className="bg-red-600 p-4 rounded-md"
        onPress={() => router.push('/')}
      >
        <Text className="text-white text-center">Go to Home</Text>
      </Pressable>

    </Animated.View>
  );
};

export default About;