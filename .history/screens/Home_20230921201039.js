import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Home({navigation}) {
    const [number, setNumber] = useState(1);
    const [color, setColor0 = useState(1); ]

    const check = () => {
        if (number == 1) {
          console.log("One");
        
          setColor("blue");
        } else if (number == 2) {
          console.log("Two");
        
          setColor("green");
    
        } else if (number == 3) {
          navigation.push('About');
        }
        setNumber(number + 1);
      }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => check ()}>
                <Text>Click Me T_T</Text>
            </TouchableOpacity>
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
    btnBLUE: {
        alignItems: 'cener',
        backgroundColor: '#63cda',
        borderWidth: 10,
        borderWidth: 1,
        padding: 10
    },
    btnRED: {
        alignItems: 'cener',
        backgroundColor: '#63cda',
        borderWidth: 10,
        borderWidth: 1,
        padding: 10
    }
});
