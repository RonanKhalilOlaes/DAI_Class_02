import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { bookStore } from '../data/books';
import { useState } from 'react';

export default function About({navigation}) {
    const [data, setData] = useState ();

    const addingData = () => {
        console.log("Started");
        setData(bookStore);
    }
    return (
        <View style={styles.container}>
            <Text>About Page</Text>
            <StatusBar style="auto" />
            <Button title="Show Data" onPress={() => addingData()}/>

            {
                    data && data.books.map((b, index) =>{
                        if(b.category.toLowerCase ()== 'java'){
                            return(
                            <View key={index}>
                                <h1>{b.title}</h1>
                                {
                                    b.authors && b.authors.map ((a, ind) => {
                                        return (
                                        <View key={ind}>
                                            <Text>{a}</Text>
                                        </View>
                                    )
                                    }
                                    
                                    )
                                }
                            </View>
                        )
                        }
                        
                    })
                }
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
