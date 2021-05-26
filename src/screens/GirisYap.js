import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Body, Right, Title, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux'
import { inject, observer } from 'mobx-react';

@inject("UserStore")
export default class GirisYap extends Component {

    state = {
        kad: 'Bret',
        pw: '1234',
        kullanicilar: [],
    }

    componentDidMount() {
        this.kullaniciGetir()
    }

    kullaniciGetir = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await response.json()
        this.setState({ kullanicilar: result })
    }

    auth = () => {
        const { kad, pw } = this.state
        const kullaniciVarmi = this.state.kullanicilar.filter(item => item.username == kad)

        if (kullaniciVarmi.length > 0 & pw == "1234") {
            this.props.UserStore.setUser(kullaniciVarmi[0] )
            return Actions.Panel({ type: "reset" })
        }
        else {
            alert("Kulllanıcı adı veya şifre hatalı!")
        }
    }


    render() {
        const { kad, pw } = this.state
        return (
            <Container>
                <Header >
                    <Body >
                        <Title>Giriş Yap</Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={{ paddingHorizontal: 16 }}>
                    <Form>
                        <Item>
                            <Input
                                placeholder="Kullanıcı Adı"
                                value={kad}
                                onChangeText={(text) => this.setState({ kad: text })}
                            />
                        </Item>
                        <Item last>
                            <Input
                                placeholder="Şifre"
                                value={pw}
                                secureTextEntry
                                onChangeText={(text) => this.setState({ pw: text })}
                            />
                        </Item>
                        <Button
                            block
                            style={{ marginTop: 24 }}
                            onPress={this.auth}
                        >
                            <Text>Giriş Yap</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}