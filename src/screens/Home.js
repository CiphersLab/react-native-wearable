import React, { Component } from 'react';
import {
    View,
    Image
} from 'react-native';

import { connect } from 'react-redux'; //to pass functions
import { bindActionCreators } from 'redux';
import { } from '../actions'; //for use the Rest_API
import colors from '../constants/colors';
import images from '../constants/images';
import { Button, Icon, Text, Container, Header, Left, Body, Title, Right } from 'native-base';
import { HomeStyle } from './styles/home';
import  {Data}  from "./DataWearable";

class Home extends Component {
    static navigationOptions = {
        title: 'Home'
    };
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentWillMount() {
    }
    render() {
        return (
            <Container style={HomeStyle.constainer}>
            <Header>
                    <Left>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                        <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                    <Right />
            </Header>
                <View style={HomeStyle.textContainer}>        
                    <Button block primary onPress={() => this.getSleepData(Data.Types.HeartRate) }
                        >
                        <Text>
                        Get Heart Rate
                        </Text>
                    </Button>
                    <Button block primary onPress={() => this.getSleepData(Data.Types.SleepAnalysis) }
                        >
                        <Text>
                        Get Sleep Analysis
                        </Text>
                    </Button>
                    <Button block primary onPress={() => this.getSleepData(Data.Types.HeightSamples) }
                        >
                        <Text>
                        Get Blood Pressure Samples
                        </Text>
                    </Button>
                    <Button block primary onPress={() => this.getSleepData(Data.Types.Height,'s') }
                        >
                        <Text>
                        Get Height
                        </Text>
                    </Button>
                </View>
            </Container >
        );
    }

    getSleepData  = (dataType,key) => {   
        Data.authorize([dataType])
        .then(() =>
          Data.read(dataType, {
            startDate: new Date("2019-05-01"),
            endDate: new Date("2019-05-05")
          },key)
        )
        .then(samples => {
            alert(samples);
        })
        .catch(error => console.error(error));
    }
}

function mapStateToProps(state) {
    //pass the providers
    return {
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
)(Home);
