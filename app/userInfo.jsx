import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';

const UserInfo = () => {
    const [name, setName] = useState('');
    const router = useRouter();

    const handleNavigation = () => {
        const username = name.trim();
        if(username){
            router.push(`/${username}`);
        }
    }
  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      <Text className="text-2xl text-blue-600 mb-4">User Info</Text>
      <TextInput
        placeholder='Type Your Name'
        value={name}
        onChangeText={setName}
        className="border border-gray-400 rounded-md w-full p-3 text-lg"
      />
      <Pressable
      onPress={handleNavigation}
      className="bg-blue-700 p-4 rounded-md mt-4 w-full">
        <Text className="text-white text-center text-lg">Go</Text>
      </Pressable>
    </View>
  )
}

export default UserInfo;