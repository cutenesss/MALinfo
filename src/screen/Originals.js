import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, StatusBar, ActivityIndicator, RefreshControl } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import { FlatGrid } from 'react-native-super-grid';
import { dataOriginal } from '../component/Data';

class Originals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      isLoadmore: false,
      isLoading: true,
    };
  }

  _onRefresh = () => { //bat su kien user muon reload lai data list
    console.log("_onRefresh");
    this.setState({ refreshing: true })
  }

  _onEndReached = () => { //bat su kien khi user keo list xuong cuoi
    console.log("_onEndReached", this.state.isLoadmore);
    if (this.state.isLoadmore) return;
    this.setState({ isLoadmore: true });
  }

  _renderFooter = () => {//hien thi loading o cuoi list view
    if (this.state.isLoadmore) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator color="#fff" size="large" />
        </View>
      )
    }
    return null;
  }

  _renderLoading = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <StatusBar
            backgroundColor='transparent'
            barStyle='dark-content'
            translucent={true}
          />
          <View style={[styles.headerContainer, { flexDirection: 'row' }]}>
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              activeOpacity={1}
              onPress={() => this.props.navigation.navigate("ORIGINALS")}
            >
              <Text style={styles.txtHeader}>Daily</Text>
            </TouchableOpacity>
            <Text style={styles.txtHeader}>   |   </Text>
            <TouchableOpacity
              style={{
                alignItems: 'center'
              }}
              activeOpacity={1}
              onPress={() => this.props.navigation.navigate("GENRES")}
            >
              <Text style={styles.txtHeader}>Genres</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar />}
        >
          <View tabLabel='MON' style={{ flex: 1 }}>
            <View style={styles.txtCounter}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                10 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by interest
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView>
              {
                (this.state.isLoading) ? this._renderLoading() :
                  <FlatGrid
                    itemDimension={110}
                    items={dataOriginal}
                    spacing={7}
                    refreshControl={
                      <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                      />
                    }
                    renderItem={({ item, index }) => (
                      <View style={styles.itemContainer}>
                        <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                        <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                        <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                        <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                      </View>
                    )}
                    onEndReachedThreshold={0.5}
                    onEndReached={this._onEndReached}
                    ListFooterComponent={this._renderFooter}
                  />
              }
            </ScrollView>

          </View>

          <View tabLabel='TUE'>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                4 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by interest
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <FlatGrid
                itemDimension={110}
                items={dataOriginal}
                spacing={7}
                renderItem={({ item, index }) => (
                  <View style={styles.itemContainer}>
                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                  </View>
                )}
              />
            </View>
          </View>

          <View tabLabel='WED'>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                4 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by interest
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <FlatGrid
                itemDimension={110}
                items={dataOriginal}
                spacing={7}
                renderItem={({ item, index }) => (
                  <View style={styles.itemContainer}>
                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                  </View>
                )}
              />
            </View>
          </View>

          <View tabLabel='THU'>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                4 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by interest
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <FlatGrid
                itemDimension={110}
                items={dataOriginal}
                spacing={7}
                renderItem={({ item, index }) => (
                  <View style={styles.itemContainer}>
                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                  </View>
                )}
              />
            </View>
          </View>

          <View tabLabel='FRI'>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                4 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by interest
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <FlatGrid
                itemDimension={110}
                items={dataOriginal}
                spacing={7}
                renderItem={({ item, index }) => (
                  <View style={styles.itemContainer}>
                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                  </View>
                )}
              />
            </View>
          </View>

          <View tabLabel='SAT'>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                4 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by interest
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <FlatGrid
                itemDimension={110}
                items={dataOriginal}
                spacing={7}
                renderItem={({ item, index }) => (
                  <View style={styles.itemContainer}>
                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                  </View>
                )}
              />
            </View>
          </View>

          <View tabLabel='SUN'>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                4 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by interest
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <FlatGrid
                itemDimension={110}
                items={dataOriginal}
                spacing={7}
                renderItem={({ item, index }) => (
                  <View style={styles.itemContainer}>
                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                  </View>
                )}
              />
            </View>
          </View>

          <View tabLabel='COMPLETED'>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, height: 20 }}>
              <Text style={{ color: 'gray', fontSize: 15 }}>
                4 items
              </Text>
              <TouchableOpacity
                activeOpacity={1}
              >
                <Text style={{ color: 'gray', fontSize: 15 }}>
                  Sort by interest
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <FlatGrid
                itemDimension={110}
                items={dataOriginal}
                spacing={7}
                renderItem={({ item, index }) => (
                  <View style={styles.itemContainer}>
                    <Image source={{ uri: item.uri }} style={{ height: 100, width: 100 }} />
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.genre}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.title}</Text>
                    <Text style={{ fontSize: 10, color: 'purple' }}>{item.likes}</Text>
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}

export default Originals;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 30,
    marginTop: 25,

  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    borderRadius: 5,
    width: 100,
    height: 160,
  },
  txtHeader: {
    fontSize: 23,
    fontWeight: '500',
    color: 'black',
    marginLeft: 18
  },
  txtCounter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 12,
    height: 20
  },
  loading: {
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
},
});
