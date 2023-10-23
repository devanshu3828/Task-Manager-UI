import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

const DayCard = () => {
    const [isClicked, setIsClicked] = useState(false);
    const onClickHandler = (event) => {
        setIsClicked(!isClicked);
    }
  return (
    <Pressable style={[styles.dayContainer, isClicked && styles.highlightContainer]} onPress={onClickHandler}>
      <Text style={[styles.dayText, isClicked && styles.highlightText]}>16</Text>
      <Text style={[styles.day, isClicked && styles.highlightDayText]}>Mon</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    dayContainer:{
        width: 50,
        height: 85,
        marginHorizontal: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
      },
      highlightContainer:{
        backgroundColor: 'black',
      },
      highlightText: {
        color: 'white',
        fontSize: 36,
        fontWeight:'bold',
      },
      highlightDayText: {
        color: 'white',
        fontSize: 18,
      },
      dayText: {
    fontSize: 24,
    color: '#B4BBCF'
      },
      day:{
        fontSize: 16,
        color: '#DDDDDD'
      }
})
export default DayCard;
