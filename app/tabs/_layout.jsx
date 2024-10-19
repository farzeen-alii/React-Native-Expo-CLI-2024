import { View, Text, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SceneMap, TabView, TabBar } from 'react-native-tab-view';
import FirstTab from './firstTab';
import SecondTab from './secondTab';

const TabsLayout = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const routes = [
    { key: 'first', title: 'First Tab', icon: 'home' },
    { key: 'second', title: 'Second Tab', icon: 'information-circle' }
  ];
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={SceneMap({
        first: FirstTab,
        second: SecondTab
      })}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      tabBarPosition="bottom"
      renderTabBar={props => (
        <TabBar
          {...props}
          renderIcon={({ route }) => (
            <Ionicons
              name={route.icon}
              size={24}
              color={index === routes.findIndex(r => r.key === route.key) ? 'green' : 'gray'}
            />
      )}
          indicatorStyle = {{backgroundColor: 'green'}}
          style={{
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: '#ccc',
          }}
          labelStyle = {{ color: 'black', fontSize: 12}}
        />
      )}
    />
  )
}

export default TabsLayout