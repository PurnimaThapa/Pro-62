import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';


export default class HomeScreen extends React.Component {
 sofia1Pressed(){
  var sofia1 = db.ref('Sofia/' + '/')
  sofia1.update({
    'absent': 'true'
  })
}

 sofia2Pressed(){
  var sofia2 = db.ref('Sofia/' + '/')
  sofia2.update({
    'present': 'true'
  })
}
lori1Pressed(){
  var lori1 = db.ref('Lori/' + '/')
  lori1.update({
    'absent': 'true'
  })
}

lori2Pressed(){
  var lori2 = db.ref('Lori/' + '/')
  lori2.update({
    'present': 'true'
  })
}
josephse1Pressed(){
  var joseph1 = db.ref('Joseph/' + '/')
  joseph1.update({
    'absent': 'true'
  })
}

joseph2Pressed(){
  var joseph2 = db.ref('Joeseph/' + '/')
  joseph2.update({
    'present': 'true'
  })
}
 jeffrey1Pressed(){
  var jeffrey1 = db.ref('Jeffrey/' + '/')
 jeffrey1.update({
    'absent': 'true'
  })
}

jeffrey2Pressed(){
  var jeffrey2 = db.ref('Jeffrey/' + '/')
  jeffrey2.update({
    'present': 'true'
  })
}

  goToBuzzerScreen = (buzzercolor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };
  render() {
    return (
      <View>
        <AppHeader />

        <Text style={styles.studenChartContainer}>Sofia</Text>
        <Text style={styles.studenChartContainer}>Lori</Text>
        <Text style={styles.studenChartContainer}>Joseph</Text>
        <Text style={styles.studenChartContainer}>Jeffrey</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.sofia1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button }
          onPress={() => {
            this.lori1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
               this.joseph1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
             this.jeffrey1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>
           <TouchableOpacity
          style={styles.button2}
          onPress={() => {
           this.sofia2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
             this.lori2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
              this.joseph2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
              this.jeffrey2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button3}
          onPress={() => {
            this.goToBuzzerScreen('yellow');
          }}>
          <Text style={styles.button3Text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  studenChartContainer: {
     flexDirection: 'row',
     padding: 10,
     alignItems: 'center',
     margin: 20
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: -95,
    //marginBottom: 30,
    marginLeft: 200,
    width: 100,
    height: 30,
    backgroundColor: 'red'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  button2: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 30,
   // marginTop: 10,
    marginLeft: -30,
    width: 100,
    height: 30,
    backgroundColor: 'green'
  },
  button2Text: {
    textAlign: 'center',
    color: 'white',
  },
  button3: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    //marginBottom: 10,
   marginTop: 90,
    marginLeft: 40,
    width: 200,
    height: 50,
    backgroundColor: 'yellow',
  },
   button3Text: {
    textAlign: 'center',
    color: 'black',
  },
 
});