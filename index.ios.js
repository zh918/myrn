/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  AlertIOS,
  ActivityIndicator,
  Picker,
  TouchableHighlight,
  AppState
} from 'react-native';

export default class mytest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language:'js'
    }
  }

  handleBtnPress() {
    Alert.alert('弹框标题','消息内容',[
      {text:"好的",onPress:()=>Alert.alert('hello1')},
      {text:"不好",onPress:()=>AlertIOS.prompt('input message')}
      ])

  }

  _handleAppStateChange() {
    let msg = '当前状态:' + AppState.currentState;
    Alert.alert(msg);
  }

  componentDidMount() {
    AppState.addEventListener('change',this._handleAppStateChange);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!stephen 
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>

        <ActivityIndicator
          animating={true}
          style={[styles.centering, {height: 80}]}
          size="large"
        /> 

        <Picker
          selectedValue={this.state.language}
          onValueChange={(lang) => this.setState({language: lang})}
          style={[styles.centering, {height: 80}]}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

        <Button 
          onPress={this.handleBtnPress}
          title="Learn More"
          color="#841584" 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('mytest', () => mytest);
