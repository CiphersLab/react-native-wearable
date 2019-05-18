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
import {
    StyleSheet,
    TouchableHighlight,
    NativeAppEventEmitter,
    NativeEventEmitter,
    NativeModules,
    Platform,
    PermissionsAndroid,
    ListView,
    ScrollView,
    Dimensions
  } from 'react-native';
// import { BleManager } from 'react-native-ble-plx'
//import BleManager from 'react-native-ble-manager';

const window = Dimensions.get('window');
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

//const BleManagerModule = NativeModules.BleManager;
//const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

class DevicesSearch extends Component {
    static navigationOptions = {
        title: 'DevicesSearch'
    };
    constructor(props) {
        super(props);
        //const manager = new BleManager();

        this.state = {
            scanning:false,
            peripherals: new Map(),
            appState: ''
          }

        // this.handleDiscoverPeripheral = this.handleDiscoverPeripheral.bind(this);
        // this.handleStopScan = this.handleStopScan.bind(this);
        // this.handleUpdateValueForCharacteristic = this.handleUpdateValueForCharacteristic.bind(this);
        // this.handleDisconnectedPeripheral = this.handleDisconnectedPeripheral.bind(this);
        // this.handleAppStateChange = this.handleAppStateChange.bind(this);
    }

    componentWillMount() {
    //     BleManager.start({showAlert: false});

    // this.handlerDiscover = bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', this.handleDiscoverPeripheral );
    // this.handlerStop = bleManagerEmitter.addListener('BleManagerStopScan', this.handleStopScan );
    // this.handlerDisconnect = bleManagerEmitter.addListener('BleManagerDisconnectPeripheral', this.handleDisconnectedPeripheral );
    // this.handlerUpdate = bleManagerEmitter.addListener('BleManagerDidUpdateValueForCharacteristic', this.handleUpdateValueForCharacteristic );



    // if (Platform.OS === 'android' && Platform.Version >= 23) {
    //     PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
    //         if (result) {
    //           console.log("Permission is OK");
    //         } else {
    //           PermissionsAndroid.requestPermission(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
    //             if (result) {
    //               console.log("User accept");
    //             } else {
    //               console.log("User refuse");
    //             }
    //           });
    //         }
    //   });
    // }
    }

    // handleAppStateChange(nextAppState) {
    //     if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
    //       console.log('App has come to the foreground!')
    //       BleManager.getConnectedPeripherals([]).then((peripheralsArray) => {
    //         console.log('Connected peripherals: ' + peripheralsArray.length);
    //       });
    //     }
    //     this.setState({appState: nextAppState});
    //   }

    //   componentWillUnmount() {
    //     this.handlerDiscover.remove();
    //     this.handlerStop.remove();
    //     this.handlerDisconnect.remove();
    //     this.handlerUpdate.remove();
    //   }

    //   handleDisconnectedPeripheral(data) {
    //     let peripherals = this.state.peripherals;
    //     let peripheral = peripherals.get(data.peripheral);
    //     if (peripheral) {
    //       peripheral.connected = false;
    //       peripherals.set(peripheral.id, peripheral);
    //       this.setState({peripherals});
    //     }
    //     console.log('Disconnected from ' + data.peripheral);
    //   }

    //   handleUpdateValueForCharacteristic(data) {
    //     console.log('Received data from ' + data.peripheral + ' characteristic ' + data.characteristic, data.value);
    //   }
    
    //   handleStopScan() {
    //     console.log('Scan is stopped');
    //     this.setState({ scanning: false });
    //   }

      startScan() {
  //       BleManager.start({showAlert: false})
  // .then(() => {
  //   // Success code
  //   console.log('Module initialized');
  //   if (!this.state.scanning) {
  //     this.setState({peripherals: new Map()});
  //     BleManager.scan([], 10, true).then((results) => {
  //       console.log('Scanning...');
  //       this.setState({scanning:true});
  //     });
  //   }
  // });
        
      }
    
//       retrieveConnected(){
//         BleManager.getConnectedPeripherals([]).then((results) => {
//           if (results.length == 0) {
//             console.log('No connected peripherals')
//           }
//           console.log(results);
//           var peripherals = this.state.peripherals;
//           for (var i = 0; i < results.length; i++) {
//             var peripheral = results[i];
//             peripheral.connected = true;
//             peripherals.set(peripheral.id, peripheral);
//             this.setState({ peripherals });
//           }
//         });
//       }
    
//       handleDiscoverPeripheral(peripheral){
//         var peripherals = this.state.peripherals;
//         if (!peripherals.has(peripheral.id)){
//           console.log('Got ble peripheral', peripheral);
//           peripherals.set(peripheral.id, peripheral);
//           this.setState({ peripherals })
//         }
//       }
    
//       test(peripheral) {
//         if (peripheral){
//           if (peripheral.connected){
//             BleManager.disconnect(peripheral.id);
//           }else{
//             BleManager.connect(peripheral.id).then(() => {
//               let peripherals = this.state.peripherals;
//               let p = peripherals.get(peripheral.id);
//               if (p) {
//                 p.connected = true;
//                 peripherals.set(peripheral.id, p);
//                 this.setState({peripherals});
//               }
//               console.log('Connected to ' + peripheral.id);
    
    
//               //setTimeout(() => {
    
//                 //  Test read current RSSI value
//                 BleManager.retrieveServices(peripheral.id).then((peripheralData) => {
//                   console.log('Retrieved peripheral services', peripheralData);
//                   BleManager.read(peripheral.id, peripheralData.characteristics[0].service, peripheralData.characteristics[0].characteristic)
//                   .then((readData) => {
//                     // Success code
//                     console.log('Read: ' + readData);

// //                     if (!("TextDecoder" in window))
// //   alert("Sorry, this browser does not support TextDecoder...");

// // var enc = new TextDecoder("utf-8");
// // var arr = new Uint8Array([readData]);
// // console.log(enc.decode(arr));

//                     // let newBuff = new Buffer('New String');
//                     // const buffer = Buffer.Buffer.from(readData);    //https://github.com/feross/buffer#convert-arraybuffer-to-buffer
//                     // const sensorData = buffer.readUInt8(1, true);
//                   })
//                   .catch((error) => {
//                     // Failure code
//                     console.log(error);
//                   });

//                   BleManager.readRSSI(peripheral.id).then((rssi) => {
//                     console.log('Retrieved actual RSSI value', rssi);
//                   });
//                 });
    
    
//              // }, 900);
//             }).catch((error) => {
//               console.log('Connection error', error);
//             });
//           }
//         }
//       }

    render() {
        const list = Array.from(this.state.peripherals.values());
    const dataSource = ds.cloneWithRows(list);
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
                        <Title>DevicesSearch</Title>
                    </Body>
                    <Right />
            </Header>
            <View style={styles.container}>
        <TouchableHighlight style={{marginTop: 40,margin: 20, padding:20, backgroundColor:'#ccc'}}>
          <Text>Scan Bluetooth ({this.state.scanning ? 'on' : 'off'})</Text>
        </TouchableHighlight>
        <TouchableHighlight style={{marginTop: 0,margin: 20, padding:20, backgroundColor:'#ccc'}}  >
          <Text>Retrieve connected peripherals</Text>
        </TouchableHighlight>
        <ScrollView style={styles.scroll}>
          {(list.length == 0) &&
            <View style={{flex:1, margin: 20}}>
              <Text style={{textAlign: 'center'}}>No peripherals</Text>
            </View>
          }
          <ListView
            enableEmptySections={true}
            dataSource={dataSource}
            renderRow={(item) => {
              const color = item.connected ? 'green' : '#fff';
              return (
                <TouchableHighlight onPress={() => this.test(item) }>
                  <View style={[styles.row, {backgroundColor: color}]}>
                    <Text style={{fontSize: 12, textAlign: 'center', color: '#333333', padding: 10}}>{item.name}</Text>
                    <Text style={{fontSize: 8, textAlign: 'center', color: '#333333', padding: 10}}>{item.id}</Text>
                  </View>
                </TouchableHighlight>
              );
            }}
          />
        </ScrollView>
      </View>
            </Container >
        );
    }

    scanAndConnect  = () => {
    
    }
    // scanAndConnect  = () => {
    //     alert('asd')
    //     console.log('cal');
    //     this.manager.startDeviceScan(null, null, (error, device) => {
    //       this.info("Scanning...");
    //       console.log(device);
    
    //       if (error) {
    //         this.error(error.message);
    //         return
    //       }
    
    //       if (device.name ==='MyDevice') {
    //         this.info("Connecting to Tappy");
    //         this.manager.stopDeviceScan();
    
    //         device.connect()
    //           .then((device) => {
    //             this.info("Discovering services and characteristics");
    //             return device.discoverAllServicesAndCharacteristics()
    //           })
    //           .then((device) => {
    //             this.info(device.id);
    //             device.writeCharacteristicWithResponseForService('12ab', '34cd', 'aGVsbG8gbWlzcyB0YXBweQ==')
    //               .then((characteristic) => {
    //                 this.info(characteristic.value);
    //                 return 
    //               })
    //           })
    //           .catch((error) => {
    //             this.error(error.message)
    //           })
    //        }
    //    });
    // }
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      width: window.width,
      height: window.height
    },
    scroll: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      margin: 10,
    },
    row: {
      margin: 10
    },
  });

export default connect(
    mapStateToProps, mapDispatchToProps
)(DevicesSearch);
