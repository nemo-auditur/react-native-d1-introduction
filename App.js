// import react
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import composants
import Project from './components/Project/Project';

export default function App() {
  
  const myProject = {
    nom : 'Formation',
    framework : 'React Native'
  }

  return (
    <>
    {/* Ici, on utilise une View avec un inline style */}
      <View style={{
        flex: "1",
        flexDirection:'column-reverse',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={styles.parent}>Mes projets</Text>
        <Project project={myProject}/>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  parent: {
    color: 'red'
  }
});
