
import React, { Component } from 'react';
import { connect } from 'react-redux'; //to pass functions
import { bindActionCreators } from 'redux';
import { } from './actions'; //for use the Rest_API

import colors from './constants/colors';

import Sidebar from './components/sidebar';
import Tabs from './components/tabs';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import DevicesSearch from './screens/DevicesSearch';


import { createStackNavigator, createDrawerNavigator, createAppContainer  } from 'react-navigation';
import { Button, Icon, Text, Container } from 'native-base';



const RootStack = createAppContainer (createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                title: 'Login1'
            }
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: {
                title: 'SignUp'
            }
        },
        Home: {
            screen: Home,
        },
        DevicesSearch: {
            screen: DevicesSearch,
        },
        Tabs: {
            screen: ({ navigation }) => <Tabs screenProps={{ rootNavigation: navigation }} />,
            navigationOptions: {
                header: false
            }
        }
        
        
        
    },
     {headerMode: 'none'},
    {
        initialRouteName: 'Login',
        navigationOptions: ({ navigation }) => {
            return {
                // headerStyle: {
                //     backgroundColor: colors.white,
                // },
                // headerLeft: (
                //     <Button transparent onPress={() => { navigation.navigate('DrawerOpen') }}>
                //         <Icon name='menu' />
                //     </Button>
                // )
            }

        },

    }
));

const Drawer = createAppContainer( createDrawerNavigator(
    {
        Main: {
            screen: RootStack,
        },
    },
    {
        contentComponent: props => <Sidebar {...props} />,
    }
));

class Routes extends Component {
    render() {

        return (
            <Drawer />
        );
    }
}


function mapStateToProps(state) {
    //pass the providers
    return {
        auth: state.auth,
    }
}

/* Map Actions to Props */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
        }, dispatch)
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Routes);
