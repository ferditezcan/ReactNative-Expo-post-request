import { Text, ListItem, Left, Body } from 'native-base'
import React, { Component } from 'react'

export default class Yorumlar extends Component {
    state = {
        yorumlar: [],
        loaded: false,
    }

     componentDidMount() {
         this.yorumGetir()
    }

    yorumGetir = async () => {
        try {
            const postId = this.props.postId
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            const result = await response.json();
            this.setState({ yorumlar: result })
        }
        catch (err) {
            alert(err.message)
        }
    }

    render() {
        return (
            <>
                <ListItem itemDivider>
                    <Text>Yorumlar</Text>
                </ListItem>
                {this.state.yorumlar.map((item, index) => (
                    <ListItem thumbnail key={index}>
                        <Left />
                        <Body>
                            <Text>{item.email}</Text>
                            <Text note numberOfLines={1}>{item.body}</Text>
                        </Body>
                    </ListItem>
                ))}
            </>
        )
    }
}
