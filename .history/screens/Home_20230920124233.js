import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function Home({navigation}) {
    const [number, setNumber] = useState(1);

    const check = () => {
        if (number == 1) {
          console.log("One");
        
          setColor("blue");
        } else if (number == 2) {
          console.log("Two");
        
          setColor("green");
    
        } else if (number == 3) {
          router.push('/dashboard');
        }
        setNumber(number + 1);
      }


    return (
        <View style={styles.container}>
            <TouchableOpacity>
                
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
});
