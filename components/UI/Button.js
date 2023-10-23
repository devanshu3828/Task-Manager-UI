import { Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const Button = ({children, onPress,marginHorizontal, fontSize, backgroundColor, color }) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => [styles.container,{marginHorizontal:marginHorizontal, backgroundColor: backgroundColor || 'black'} ,pressed && styles.pressed] } >
        <Text style={[styles.title, {fontSize: fontSize, color: color || 'white'}]}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'black',
        padding:12,
        marginVertical:12,
        // marginHorizontal:44,
        borderRadius:8,
        overflow:'hidden'
    },
    title:{
        textAlign:'center',
        // color:'white',
        fontWeight:'400',
    },
    pressed: {
        opacity:0.60,
    }
})
export default Button