import React, { Component } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Yorumlar from '../components/postDetay/Yorumlar';

export default class PostDetay extends Component {

    render() {
        const { title, body ,id} = this.props.postItem

        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => Actions.pop()}
                        >
                            <Icon name='md-arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Post Detay</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginVertical: 16,
                        paddingHorizontal: 8
                    }}
                    >
                        {title}
                    </Text>
                    <Text style={{ paddingHorizontal: 12, marginBottom: 16 }}>
                        {body}
                    </Text>
                    <Yorumlar postId={id}/>
                </Content>
            </Container>
        )
    }
}
