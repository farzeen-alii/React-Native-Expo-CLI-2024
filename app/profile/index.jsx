import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const ProfileScreen = () => {
    const router = useRouter();
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl text-pink-500">My Profile</Text>
      <Pressable
      onPress={() => router.push('/profile/settings')}
      className="bg-pink-600 rounded-md p-4 mt-4">
        <Text className="text-white text-center">Go to Setting</Text>
      </Pressable>
    </View>
  )
}

export default ProfileScreen;