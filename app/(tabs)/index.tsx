import {View, Text, Button} from 'react-native'
import { router } from 'expo-router'

export default function HomeScreen(){
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <Text>Page Home</Text>
            <Button 
                title='Aller details'
                onPress={() => router.push('/details')}
            />
        </View>
    )
}







// import { View, Text, Button} from 'react-native'
// import React, {useState} from 'react'



// function Message({nom}){
//     const [compteur, setCompteur] = useState(0)

//     return(
//         <View style={{ margin: 10 }}>
//             <Text>Bonjour {nom} 👋</Text>
//             <Text>Compteur : {compteur} </Text>
//             <Button title='Augmenter' onPress={() => setCompteur(compteur + 1)}  />
//             <Button title='Reinitialiser' onPress={() => setCompteur(0)}  />
//         </View>
//     )
// }


// export default function App(){
//     return(
//         <View>
//             <Text>Bonjour 👋</Text>
//             <Button title='Clique moi' onPress={() => alert('Ok')} />
//             <Message nom="Natacha"  />
//         </View>
//     )
// }








// import { View, Text, StyleSheet } from "react-native";

// export default function App() {
//     return(
//         <View style={styles.container}>
//             <Text>Hello wold !</Text>
//             <Text>Good !</Text>
//         </View>
//     )
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems:'center'
//     }
// })
