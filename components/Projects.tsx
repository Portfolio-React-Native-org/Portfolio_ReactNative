import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import PrjCardComponent from './PrjCardComponent';
import arrow from '../assets/icons/arrow.png';
import descriptiondata from './Description_data';

export default function Projects() {
  const [clicked, setClick] = useState(0);

  const onClickleft = () => {
    if (clicked === 0) {
      return;
    }
    setClick(prevclick => prevclick - 1);
  };
  const onClickright = () => {
    if (clicked === descriptiondata.projects.length - 1) {
      return;
    }
    setClick(prevclick => prevclick + 1);
  };

  // const data = descriptiondata.projects;
  // data.map((data2: any) => {
  //   console.log(data2);
  // });
  // const projectcards = data.map((carddata: any) => {
  //   return (
  //     <PrjCardComponent
  //       key={carddata.id}
  //       title={carddata.title}
  //       txt={carddata.description}
  //       gif={carddata.gif}
  //     />
  //   );
  // });

  const styles = StyleSheet.create({
    container: {
      height: 750,
      padding: 10,
    },
    projectopic: {
      fontFamily: 'Ubuntu',
      fontWeight: 'bold',
      fontSize: 36,
      textAlign: 'center',
      paddingTop: 30,
      paddingBottom: 30,
    },
    projectcard_containers: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    arrowright: {
      width: 50,
      height: 50,
      rotate: '90deg',
    },
    arrowleft: {
      width: 50,
      height: 50,
      rotate: '-90deg',
    },
    arrowLContainer: {
      alignSelf: 'center',
      width: 50,
      height: 50,
    },
    arrowRContainer: {
      alignSelf: 'center',
      width: 50,
      height: 50,
    },
  });
  return (
    <View style={styles.container}>
      <Pressable>
        <View>
          <Text style={styles.projectopic}>PROJECTS</Text>
        </View>

        <View style={styles.projectcard_containers}>
          <Pressable onPress={onClickleft} style={styles.arrowLContainer}>
            <Image source={arrow} style={styles.arrowleft} />
          </Pressable>
          <PrjCardComponent
            title={descriptiondata.projects[clicked].title}
            txt={descriptiondata.projects[clicked].description}
            gif={descriptiondata.projects[clicked].gif}
            link={descriptiondata.projects[clicked].link}
            tech={descriptiondata.projects[clicked].technologies}
          />

          <Pressable onPress={onClickright} style={styles.arrowRContainer}>
            <Image source={arrow} style={styles.arrowright} />
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
}
