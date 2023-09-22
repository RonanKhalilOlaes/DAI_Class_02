import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function About({navigation}) {
    return (
        <View style={styles.container}>
            <Text>About Page</Text>
            <StatusBar style="auto" />
            <Button title="Go Back" onPress={() => navigation.goBack()}/>

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
                                        {a}
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
