import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Layout = () => {
  return (
    <GestureHandlerRootView className="flex-1">
        <Drawer>
            <Drawer.Screen
                name="index"
                options={{
                    drawerLabel: "Home",
                    title: "Home Screen",
                    drawerIcon: ({color} ) => (
                        <Ionicons name='home' size={24} color={color} />
                    )
                }}
            />
            <Drawer.Screen
                name="about"
                options={{
                    drawerLabel: "About",
                    title: "About Screen",
                    drawerIcon: ({color} ) => (
                        <Ionicons name='information-circle' size={24} color={color} />
                    )
                }}
            />
            <Drawer.Screen
                name="tabs"
                options={{
                    drawerLabel: "Setting",
                    title: "Tab Screen",
                    drawerIcon: ({color} ) => (
                        <Ionicons name='settings' size={24} color={color} />
                    )
                }}
            />
        </Drawer>
    </GestureHandlerRootView>
  )
}

export default Layout;