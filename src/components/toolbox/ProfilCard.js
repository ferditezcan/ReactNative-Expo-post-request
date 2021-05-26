import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

@inject("UserStore")
@observer
export default class ProfilCard extends Component {
    render() {
        const { name, email, phone } = this.props.UserStore.user

        return (
            <View style={{
                width:'100%',
                backgroundColor:'#009688',
                paddingVertical:36,
                alignItems:'center',
                justifyContent:'center',
                }}>
                <Text style={{ color: '#fff', fontSize: 18 }}> {name} </Text>
                <Text style={{ color: '#fff', fontSize: 15 }}>{email}</Text>
                <Text style={{ color: '#fff', fontSize: 15 }}> {phone} </Text>
            </View>
        )
    }
}
