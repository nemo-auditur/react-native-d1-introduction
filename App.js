import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Project from './components/Project/Project';

export default function App() {
  
  const myProject = {
    nom : 'Formation',
    framework : 'React Native'
  }

  return (
    <View style={styles.container}>
      <Text style={styles.parent}>Mes projets</Text>
      <Project project={myProject}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parent: {
    color: 'red'
  }
  
});
