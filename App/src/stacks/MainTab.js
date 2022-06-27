import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Procedimentos from '../screens/Procedimentos';
import Agendados from '../screens/Agendados';
import Perfil from '../screens/Perfil';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name="Procedimentos" component={Procedimentos} />
        <Tab.Screen name="Agendados" component={Agendados} />
        <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
);