import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TouchableHighlight} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import { recentDataScreenMy } from '../component/Data';

class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View>
          <StatusBar
            backgroundColor = 'transparent'
            barStyle = 'dark-content'
          />
        </View>
        <View 
          style = {{
            width: '100%', 
            height: 60, 
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <View>
            <Text 
              style = {{
                fontSize: 23, 
                fontWeight: '500', 
                color: 'black', 
                marginLeft: 18,
                marginTop: 13
              }}
            >My Series</Text>
          </View>
          <View style = {{flexDirection: 'row', marginTop: 13}}>
            <TouchableHighlight
              onPress = {() => alert("btn List")}
              style = {{marginRight: 15, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20}}
              underlayColor = {'gray'}
            >
              <Icon name = 'ios-list' size ={30} color = {'black'}/>
            </TouchableHighlight>
            <TouchableHighlight
              onPress = {() => alert("btn List")}
              style = {{marginRight: 10, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20}}
              underlayColor = {'gray'}
            >
              <Icon1 name = 'coin' size ={30} color = {'black'}/>
            </TouchableHighlight>
          </View>
        </View>
        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar />}
          style={{flex:1}}
        >
          <View tabLabel='Recent'>
            {
              recentDataScreenMy.map(
                (item, index) => {
                  return (
                    <View style={{ flexDirection: 'row', width: "100%" }} key={index}>
                      <Image source={{ uri: item.uri }} style={styles.imgRecent} />
                      <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={styles.txtRecent}> {item.title} </Text>
                        <Text style={styles.txtRecent}> {item.rank} </Text>
                      </View>
                    </View>
                  )
                }
              )
            }
          </View>
          <View tabLabel='Subcribed' style={styles.tabs}>
            <Text style={styles.txtTabs}>
              No subcribed
            </Text>
          </View>
          <View tabLabel='Downloads' style={styles.tabs}>
            <Text style={styles.txtTabs}>
              No downloads
            </Text>
          </View>
          <View tabLabel='Fast Pass' style={styles.tabs}>
            <Text style={styles.txtTabs}>
              Enable fast pass for better experience
            </Text>
          </View>
          <View tabLabel='Comment' style={styles.tabs}>
            <Text style={styles.txtTabs}>
              No comments
            </Text>
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}

export default My;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recentView: {
    flex: 1,
    height: 500
  },
  imgRecent: {
    width: 100,
    height: 100
  },
  txtRecent: {
    color: 'red',
    fontSize: 20,
    margin: 4,
  },
  tabs: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  txtTabs: {
    color: 'red',
    fontSize: 25,
    textAlign: 'center'
  }
});
