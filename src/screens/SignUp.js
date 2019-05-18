import React, { Component } from 'react';
import { LoginStyles } from './styles/login';

import { connect } from 'react-redux'; //to pass functions
import { bindActionCreators } from 'redux';
import { loginRequest } from '../actions'; //for use the Rest_API
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Left, Icon, Body, Title, Right } from 'native-base';

class SignUp extends Component {
    // static navigationOptions = {
    //     title: 'SignUp',


    // };
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentWillMount() {

    }

    render() {
        let { user } = this.props.auth;
        return (
            <Container>                
                <Header>
                    {/* <Left>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                        <Icon name="menu" />
                        </Button>
                    </Left> */}
                    <Body>
                        <Title>SignUp</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Re-Password</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Button block primary onPress={() => this.props.navigation.replace('Home')}
                        style={LoginStyles.loginBtn}>
                        <Text>
                        SignUp
                        </Text>
                    </Button>
                    <Button block primary onPress={() => this.props.navigation.replace('Login')}
                        style={LoginStyles.loginBtn}>
                        <Text>
                            Login
                        </Text>
                    </Button>

                    {/* <Button block primary onPress={() => this.props.navigation.replace('Tabs')}
                        style={LoginStyles.loginBtn}>
                        <Text>
                            Tabs
                        </Text>
                    </Button> */}
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    //pass the providers
    return {
        auth: state.auth
    }
}

/* Map Actions to Props */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            loginRequest
        }, dispatch)
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(SignUp);
