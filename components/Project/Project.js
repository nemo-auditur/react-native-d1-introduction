import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

const Project = ({project}) => {
  const {name, framework} = project
    return (
        <View style={styles.container}>
          <Text style={styles.children}>Mon project : {name}</Text>
          <Text style={styles.children}>framework : {framework}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container : {
    flexDirection : 'column',
    height: 100,
    padding : 5,
  },
  children : {
    color: 'blue'
  }

})

export default Project;