import React from 'react';
import {Dimensions, StyleSheet, View,} from 'react-native';
// import devgif from "./assets/gifs/developer-activity-animate.svg"
// import Hero from './components/Hero';
import Intro from './components/Intro';
import Body from './components/Body';
import Projects from './components/Projects';
const {height} = Dimensions.get('screen')

const App = () => {
  console.log(Dimensions.get('screen'));
  return (
    <View style={styles.container}>
        {/* <Image source={devgif} style={styles.dev_gif}/> */}
        {/* <Hero /> */}
         <Intro />
         < Body />
         <Projects/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dev_gif: {
    borderWidth: 1,
    borderColor:"black",
    flexDirection:"column",
    width: 200,
    height: 200
  }

});

export default App;