import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const IconButton = ({ icon, color, onPress, backgroundColor,borderRadius, size }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed , {backgroundColor: backgroundColor && backgroundColor, borderRadius: borderRadius && borderRadius}]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={size || 24} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderRadius: 50,
    padding: 12,
    // backgroundColor: 'white',
  },
  pressed: {
    opacity: 0.5,
  },
});
export default IconButton;
