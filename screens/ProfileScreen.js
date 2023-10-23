import { View, Text, StyleSheet, Image, SafeAreaView, Pressable, FlatList } from 'react-native'
import React from 'react'
import IconButton from '../components/UI/IconButton'
import { TextInput } from 'react-native'
import Button from '../components/UI/Button'
import { ScrollView } from 'react-native'
import ProjectCard from '../components/UI/ProjectCard'
import TaskCard from '../components/UI/TaskCard'
import ListItem from '../components/UI/ListItem'

const data= ['Health Dashboard', 'Car Rental Dashboard','Hotel Dashboard', 'User Dashboard' ]
const ProfileScreen = ({navigation}) => {
  const onBackHandler = () => {
    navigation.navigate('home');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeftSection}>
          <View>
            <Image source={require('../assets/person2.jpg')}style={styles.profileImage}/>
          </View>
          <View style={styles.headerLeftInnerSection}>
            <Text style={styles.nameText}>Hi John</Text>
            <Text style={styles.text}>Your daily task are here!</Text>
          </View>
        </View>
        <View>
          <IconButton icon="settings-outline" color="black" backgroundColor='white' borderRadius={50} onPress={onBackHandler}/>
        </View>
      </View>

      <View  style={styles.section2}>
        <View style={styles.searchBox}>
          <View>
          <IconButton icon='search-outline' color="black" />
          </View>
          <View>
            <TextInput placeholder='Search your tasks'/>
          </View>
        </View>
        <View style={styles.filterSection}>
          <IconButton icon='options-outline' color="black" backgroundColor='white' borderRadius={6}/>
        </View>
      </View>

      <View style={styles.tabSection}>
        <View style={styles.section3}>
          <Text style={styles.nameText}>Your Task</Text>
          <Pressable style={({pressed}) => [pressed && styles.pressed]}><Text style={styles.text}>View all</Text></Pressable>
        </View>
        <View style={styles.section3}>
          <Button backgroundColor="white" color='black'>Up Coming</Button>
          <Button>Recently</Button>
          <Button backgroundColor="white" color='black'>Complete</Button>
        </View>
      </View>

   <View>
   <ScrollView horizontal={true}>
    <ProjectCard title="Dashboard"/>
    <ProjectCard title="Car Rental"/>
    <ProjectCard title="Hotel"/>
    </ScrollView>
   </View>

    <View style={styles.container2}>
        <View style={styles.container3}>
          <Text style={styles.nameText}>Today Task</Text>
        </View>
       <View >
        <FlatList data={data} renderItem={(dataItem) => <ListItem title={dataItem.item}/>}/>
       </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    marginHorizontal: 8,
     marginTop:36,
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginVertical:20,
    // marginTop:36,
  },
  headerLeftSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImage:{
    width:55,
    height:55,
    borderRadius:27.5,
    marginRight:10,
  },
  headerLeftInnerSection: {
    justifyContent:'space-evenly'
  },
  nameText:{
    fontSize: 18,
    fontWeight:'bold'
  },
  text:{
    fontSize:12,
    color: "#B4BBCF",
  },

  section2:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical:16,
  },
  searchBox:{
    flex:1,
    flexDirection: 'row',
    alignItems:'center',
    borderWidth:1,
    borderRadius:6,
    marginRight:8,
    
    // justifyContent: 'space-between',
  },
  filterSection:{
    elevation:4,
    shadowColor: 'black',
    shadowRadius:4,
    shadowOpacity:0.3,
    shadowOffset:{width:1, height:1}
  },
  tabSection:{
    marginTop:18,
    marginBottom:9,
  },
  section3:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pressed:{
    opacity:0.45,
  },
  list: {
    flex:10,
  },
  container2: {
    flex:1,
    paddingVertical: 8,
    marginTop:26,
    marginBottom:8,
  },
  container3: {
    marginBottom:8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todayText: {
    fontSize: 24,
    fontWeight: "bold",
  },
})
export default ProfileScreen