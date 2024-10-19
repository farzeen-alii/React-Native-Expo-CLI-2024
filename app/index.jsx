import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
import Animated, { FadeOut, SlideInRight, SlideOutLeft, FadeIn, ZoomIn, ZoomOut } from 'react-native-reanimated';
import { useDrawerStatus } from '@react-navigation/drawer';

const Home = () => {
  const router = useRouter();
  const isDrawerOpen = useDrawerStatus() === 'open';
  return (
    <Animated.View
      // entering={SlideInRight.duration(500)}
      // exiting={SlideOutLeft.duration(500)}
      // entering={FadeIn.duration(500)}
      // exiting={FadeOut.duration(500)}

      entering={ZoomIn.duration(500)}
      exiting={ZoomOut.duration(500)}
      className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl text-blue-500">Home</Text>
      {/* <Link href='/about' asChild>
      <Pressable className="bg-blue-600 p-4 rounded-md">
        <Text className="text-white text-center">Go To About</Text>
      </Pressable>
      </Link> */}
      {
        isDrawerOpen ? (
          <Text className="text-green-600 mt-4">Drawer is Open</Text>
        ) : (
          <Text className="text-red-600 mt-4">Drawer is Closed</Text>
        )
      }
      <Pressable
        className="bg-blue-600 p-4 rounded-md"
        onPress={() => router.push('/about')}
      >
        <Text className="text-white text-center">Go to About</Text>
      </Pressable>
      <Pressable
        className="bg-green-600 p-4 rounded-md mt-4"
        onPress={() => router.push('/tabs')}
      >
        <Text className="text-white text-center">Go to Tab Screen</Text>
      </Pressable>
      <Pressable
        className="bg-indigo-600 p-4 rounded-md mt-4"
        onPress={() => router.push('/userInfo')}
      >
        <Text className="text-white text-center">Go to User Screen</Text>
      </Pressable>
      <Pressable
        className="bg-pink-600 p-4 rounded-md mt-4"
        onPress={() => router.push('/profile')}
      >
        <Text className="text-white text-center">Go to Profile Screen</Text>
      </Pressable>
      <Pressable
        className="bg-orange-600 p-4 rounded-md mt-4"
        onPress={() => router.push('/register')}
      >
        <Text className="text-white text-center">Register</Text>
      </Pressable>
    </Animated.View>
  );
};

export default Home;