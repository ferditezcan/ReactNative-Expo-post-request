import React, { Component } from 'react'
import { Container, Header, Title, Content, ListItem, List, Button, Left, Right, Body, Icon, Text, Footer, Badge, CardItem, Card, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import ProfilCard from '../components/toolbox/ProfilCard';
import { inject, observer } from 'mobx-react';

@inject("UserStore")
@observer
export default class Panel extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        this.postGetir()
    }

    postGetir = async () => {
        const { id } = this.props.UserStore.user
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)
        const result = await response.json()
        this.setState({ posts: result })
    }

    cikisYap = () => {
        Actions.GirisYap()
    }

    render() {

        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Davysoft Proje</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={this.cikisYap}
                        >
                            <Icon name='md-exit' />
                        </Button>
                    </Right>
                </Header>
                <ProfilCard/>
                <Content>
                    <List>
                        {this.state.posts.map((item, index) => (
                            <ListItem
                                key={index}
                                last
                                onPress={() => Actions.PostDetay({ postItem: item })}
                            >
                                <Body>
                                    <Text>{item.title}</Text>
                                    <Text note>{item.body}</Text>
                                </Body>
                                <Right>
                                    <Text note>{item.id}</Text>
                                </Right>
                            </ListItem>
                        ))}
                    </List>
                </Content>
            </Container>
        )
    }
}
