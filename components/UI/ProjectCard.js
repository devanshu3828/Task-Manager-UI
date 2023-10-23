import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
// import IconButton from "./IconButton";
import Button from './Button'
const ProjectCard = ({ title }) => {

  return (
    <View style={styles.card}>
      <LinearGradient colors={["#B4FF02", "#DAFD4E"]} style={styles.container}>
        <View style={styles.top}>
          <View>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.titleText}>
              Design<Text style={styles.boldText}> Project</Text>
            </Text>
          </View>
          <Pressable style={styles.icon}>
            <Ionicons name="add-circle" size={32}  />
          </Pressable>
        </View>
        <Text style={styles.date}>16-Oct-2023</Text>

        <View style={styles.middle}>
            <Text style={styles.text}>Project Completed:</Text>
            <View style={styles.bar}>
            <Progress.Bar progress={0.86} width={180} color="black" />
            <Text style={styles.barText}>86%</Text>
          </View>
        </View>

        <View style={styles.end}>
        <View style={styles.flexCard}>
            <Image source={require('../../assets/person1.jpg')} style={[styles.imageBox, styles.image1]}/>
            <Image source={require('../../assets/person2.jpg')} style={[styles.imageBox, styles.image2]}/>
            <Image source={require('../../assets/person3.jpg')} style={[styles.imageBox, styles.image3]}/>
          </View>
            <View>
                <Button marginHorizontal={1}>View Project</Button>
            </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginRight: 12,
    
  },
  container: {
    padding: 6,
    borderRadius:8,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    fontSize: 14,
    marginBottom:4,
  },
  boldText: {
    fontWeight: "bold",
  },
  icon: {
    marginLeft: 36,
    bottom: 3,
  },
  date: {
    fontSize: 10,
    color: "#B4BBCF",
  },
  middle:{
    marginTop:28,
    marginBottom:14,
  },
  bar:{
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
  },
  barText:{
    marginHorizontal: 6,
  },
  text:{
    fontSize:10,
  },
  end:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageBox:{
    width:36,
    height:36,
    borderRadius:21,
  },
  image1:{ 
    left:2,
  },
  image2:{
    right:16,
    zIndex: 10,
  },
  image3:{
    right:26,
  },
});
export default ProjectCard;