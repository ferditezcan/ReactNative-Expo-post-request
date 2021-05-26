import React, { Component } from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'

import GirisYapScreen from './screens/GirisYap'
import PanelScreen from './screens/Panel'
import PostDetayScreen from './screens/PostDetay'

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack key="root" navigationBarStyle={{ backgroundColor:'#1a73e8'}} titleStyle={{color:'#fff'}}>
                    <Scene key="GirisYap" component={GirisYapScreen} initial  hideNavBar/>
                    <Scene key="Panel"  component={PanelScreen} hideNavBar />
                    <Scene key="PostDetay" component={PostDetayScreen} hideNavBar/>
                </Stack>
            </Router>
        )
    }
}