import React, { Component } from 'react'
import { View } from 'react-native'
import Routes from './src/Routes'
import * as Font from 'expo-font';

//mobx
import { Provider } from 'mobx-react'
import UserStore from './src/stores/UserStore';

export default class App extends Component {

  state = {
    loading: true
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    })

    this.setState({ loading: false })
  }

  render() {
    if (this.state.loading == true) {
      return (<View></View>)
    }
    else {
      return (
        <Provider
         UserStore={UserStore}
         >
          <Routes />
        </Provider>
      )
    }
  }
}
