import { View, Text, StyleSheet, ScrollView, Pressable, FlatList, SafeAreaView } from "react-native";
import React from "react";
import IconButton from "../components/UI/IconButton";
import DayCard from "../components/UI/DayCard";
import Button from "../components/UI/Button";
import TaskCard from "../components/UI/TaskCard";

const data= ['Health Dashboard', 'Car Rental Dashboard','Hotel Dashboard', 'User Dashboard' ]
const MainScreen = ({navigation}) => {
  const onBackHandler = () => {
    navigation.navigate('home');
  }
  const onProfileHandler = () => {
    navigation.navigate('profile');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <IconButton icon="arrow-back-sharp" color="black"  onPress={onBackHandler} backgroundColor='white' borderRadius={50}/>
        <IconButton icon="settings-outline" color="black" onPress={onProfileHandler} backgroundColor='white' borderRadius={50} />
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.todayDate}>
          16 October, <Text style={styles.highlightText}>2023</Text>
        </Text>
        <Text style={styles.pendingText}>21 Task Pending</Text>
      </View>
      <View style={styles.dayList}>
        <ScrollView horizontal={true}>
          <DayCard />
          <DayCard />
          <DayCard />
          <DayCard />
          <DayCard />
          <DayCard />
        </ScrollView>
      </View>
      <View style={styles.container2}>
        <View style={styles.container3}>
          <Text style={styles.todayText}>Today Task</Text>
          <Pressable style={({ pressed }) => [pressed && styles.pressed]}>
            <Text style={styles.pendingText}>View all</Text>
          </Pressable>
        </View>
       <View >
        <FlatList data={data} renderItem={(dataItem) => <TaskCard title={dataItem.item}/>}/>
       </View>
      </View>
      
     <View style={styles.button}>
     <Button fontSize={16}marginHorizontal={104}>+ Add New Task</Button>
     </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    marginHorizontal: 5,
    marginTop:36,
  },
  header: {
    marginBottom:10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    // marginHorizontal: 15,
  },
  dateContainer: {
    marginHorizontal: 10,
  },
  todayDate: {
    fontSize: 28,
    fontWeight: "bold",
  },
  highlightText: {
    color: "#B4FF02",
  },
  pendingText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#C1C7D7",
  },
  dayList: {
    paddingVertical: 16,
    marginVertical: 16,
  },
  container2: {
    flex:1,
    marginHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 8,
  },
  container3: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todayText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.5,
  },
  button:{
    marginVertical:12,
    // paddingBottom:20,
  }
});
export default MainScreen;
