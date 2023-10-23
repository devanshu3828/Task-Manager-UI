import { View, Text, StyleSheet, Animated, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Progress from "react-native-progress";
import React from "react";
import Button from "./Button";

const ListItem= ({title}) => {
  return (
    <View style={styles.card}>
        <View style={styles.flexCard}>
          <View>
            <Text style={styles.headerText}>{title}</Text>
            <Text style={styles.text}>Mon 16, October</Text>
          </View>
          <View style={styles.flexCard}>
            <Image source={require('../../assets/person1.jpg')} style={[styles.imageBox, styles.image1]}/>
            <Image source={require('../../assets/person2.jpg')} style={[styles.imageBox, styles.image2]}/>
            <Image source={require('../../assets/person3.jpg')} style={[styles.imageBox, styles.image3]}/>
          </View>
        </View>
        <View style={styles.flexCard}>
          <View style={styles.bar}>
            <Progress.Bar progress={0.86} width={100} color="black" />
            <Text style={styles.barText}>86%</Text>
          </View>
          <Button fontSize={12}>Complete Task</Button>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginTop:15,
    backgroundColor:'white',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  taskCard: {
    borderRadius: 8,
    marginLeft: 75,
    paddingHorizontal: 10,
  },
  flexCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 3,
  },
  headerText: {
    fontSize:16,
    fontWeight: "bold",
    marginBottom:4,
  },
  text: {
    fontWeight: "bold",
    color: "#B4BBCF",
  },
  bar:{
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
  },
  barText:{
    marginHorizontal: 6,
  },
  imageBox:{
    width:36,
    height:36,
    borderRadius:21,
  },
  image1:{ 
    left:12,
  },
  image2:{
    zIndex: 10,
  },
  image3:{
    right:12,
  },
});
export default ListItem;
