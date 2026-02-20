import {View, Text, Button} from 'react-native'
import { router } from 'expo-router'

export default function DetailsScreen(){
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            <Text>Page details</Text>
            <Button 
                title='Retour'
                onPress={() => router.back()}
            />
        </View>
    )
}