import { View, Text, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../theme/color';

import Login from '../screens/Account/Login';
import Welcome from '../screens/Welcome/Welcome';
import Signup from '../screens/Welcome/Signup';
import Phone from '../screens/Welcome/Phone';
import Otp from '../screens/Welcome/Otp';
import Finger from '../screens/Welcome/Finger';
import Congrats from '../screens/Welcome/Congrats';
import Finger1 from '../screens/Account/Finger1';
import Forgot from '../screens/Account/Forgot';
import IdV from '../screens/Main/IdV';
import CurrencyC from '../screens/Main/CurrencyC';
import ErrorS from '../screens/Main/ErrorS';
import Withdraw from '../screens/Main/Withdraw';
import Home from '../screens/Main/Home';
import Portfolio from '../screens/Main/Portfolio';
import Trending from '../screens/Main/Trending';
import BTC1 from '../screens/Main/BTC1';
import BTC2 from '../screens/Main/BTC2';
import ETH from '../screens/Main/ETH';
import MyWallet from '../screens/Main/MyWallet';
import CDetail from '../screens/Main/CDetail';
import AddCard from '../screens/Main/AddCard';
import Scan from '../screens/Main/Scan';
import Account from '../screens/Main/Account';
import Edit from '../screens/Main/Edit';
import Chat from '../screens/Main/Chat';
import Transfer from '../screens/Main/Transfer';
import Splash from '../screens/Splash/Splash';
import Introduction from '../screens/Splash/Introduction';
import MyTabs from './BottomNavigator';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {

  const [showSplashScreen, setshowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false);
    }, 4000);


  }, [])
  return (

    <NavigationContainer>

      <Stack.Navigator>

        {showSplashScreen?
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }} />:
          null}

          <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }} />
          <Stack.Screen
          name="Introduction"
          component={Introduction}
          options={{ headerShown: false }} />
          <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }} />

           <Stack.Screen
          name="Withdraw"
          component={Withdraw}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Transfer"
          component={Transfer}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Scan"
          component={Scan}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="AddCard"
          component={AddCard}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="CDetail"
          component={CDetail}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="MyWallet"
          component={MyWallet}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="ETH"
          component={ETH}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="BTC2"
          component={BTC2}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="BTC1"
          component={BTC1}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Trending"
          component={Trending}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Portfolio"
          component={Portfolio}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="ErrorS"
          component={ErrorS}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="CurrencyC"
          component={CurrencyC}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="IdV"
          component={IdV}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Finger1"
          component={Finger1}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Congrats"
          component={Congrats}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Finger"
          component={Finger}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Phone"
          component={Phone}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }} />

        

      </Stack.Navigator>
    </NavigationContainer>

  )
}