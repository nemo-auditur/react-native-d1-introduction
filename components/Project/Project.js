import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const Project = ({project}) => {
  const {name, framework} = project
    return (
        <>
          <Text style={styles.children1}>Mon project : {name}</Text>
          <Text style={styles.children2}>Framework : {framework}</Text>
        </>
    )
}

const styles = StyleSheet.create({
  children1 : {
    color: 'blue',
    flex: 0.1,
    padding: 5,
    margin: 5,
    borderColor:'blue',
    borderWidth: 1
  },
  children2: {
    color: 'green',
    flex: 0.5,
    padding: 5,
    margin: 5,
    borderColor:'green',
    borderWidth: 1
  }

})

export default Project;