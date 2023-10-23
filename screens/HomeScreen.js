import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../components/UI/Button";

const HomeScreen = ({navigation}) => {

    const getStartHandler = ()=> {
        navigation.navigate('main');
    }
  return (
    <LinearGradient colors={["#B4FF02", "#DAFD4E"]} style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Manage Your Daily Task</Text>
        <Text style={styles.subHeading}>
          Manage your daily task and perform them on time easily.
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/clock.jpg")} style={styles.image} />
      </View>
      <Button onPress={getStartHandler} fontSize={22} marginHorizontal={44}>Get Started</Button>
      <Pressable onPress={getStartHandler} style={({ pressed }) => [pressed && styles.pressed]}>
        <Text style={styles.skipText}>Skip</Text>
        <View style={styles.skipContainer}></View>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
  },
  headingContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems:'center',
    marginTop: 68,
    marginBottom: 36,
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 24,
    marginHorizontal: 20,
  },
  subHeading: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 24,
    marginHorizontal: 26,
  },
  imageContainer: {
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 48,
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 100,
    // tintColor:'#B4FF02',
  },
  skipContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginHorizontal: 200,
  },
  skipText: {
    textAlign: "center",
  },
  pressed: {
    opacity: 0.45,
  },
});

export default HomeScreen;
