import * as React from 'react';
import { Text, View, Image, ScrollView, StyleSheet} from 'react-native';
import { Constants } from 'expo';
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems,
  SafeAreaView,
} from 'react-navigation';

import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-home" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.paragraph}
          onPress={() => {
            this.props.navigation.navigate('Profile');
          }}>
          Go to profile
        </Text>

        <Text
          style={styles.paragraph}
          onPress={() => {
            this.props.navigation.toggleDrawer();
          }}>
          Toggle Drawer
        </Text>
      </View>
    );
  }
}

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-person" size={24} color={focused ? 'blue' : 'black'} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.paragraph}
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}>
          Go back home
        </Text>
      </View>
    );
  }
}

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
      <Image
        style={styles.image}
        source={
          require('./assets/seyha.jpg')
        }
      />
    </SafeAreaView>
  </ScrollView>
);

const navigator = createDrawerNavigator(
  {
    Home,
    Profile,
  },
  {
    drawerType: 'back',
    drawerPosition: 'left',
    drawerWidth: 250,
    contentComponent: CustomDrawerContentComponent,
  }
);

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    height: 300,
    width: 250,
  },
});
