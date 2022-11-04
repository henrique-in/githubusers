import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert, FlatList, Image, ActivityIndicator } from 'react-native';
import { FontAwesome,Entypo } from '@expo/vector-icons';

import { styles } from './styles';
import { UserRequest } from '../../models/requests';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
  const [data, setData] = useState()
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation()


  const searchUser = async(name) =>{
    setIsLoading(true)
    try {
      const response = await UserRequest.getUsers(name)
      setData(response.data)
      console.log(response)
    } catch (error) {
      Alert.alert("", "Usuario não encontrado")
    }
    setIsLoading(false)
  }

  const handleNavigation = () => {
    navigation.navigate('Repository',{params: data.login})
  }


 
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>GitHub Users</Text>

        <View style={styles.contentSearch}>
        <View style={styles.inputContainer}>
         <TextInput
         placeholder='Digite o nome do usuario'
         autoCapitalize='none'
         placeholderTextColor={'white'}
         style={{paddingVertical:5, paddingHorizontal:5,color:'white', fontSize:16}}
         onChangeText={t=> setText(t)}
         />
        </View>
        <TouchableOpacity onPress={()=> searchUser(text)} >
          <FontAwesome name="search" size={24} color="white" />
        </TouchableOpacity>
        </View>

      {
        isLoading && <ActivityIndicator size={'large'} color={'white'} />
      }
      

      {data &&
          <TouchableOpacity 
          activeOpacity={0.7} style={styles.button}
          onPress={()=> handleNavigation()}
          >
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
               <View style={{flexDirection:'row',alignItems:'center'}}>
              <Image source={{uri: data.avatar_url }} style={{width:70, height:70,borderRadius:50}} />
              <Text style={{color:'white', fontSize:20, marginLeft:10}}>{data.name}</Text>
              </View>
              <Entypo name="chevron-right" size={24} color="white" />
            </View>
          </TouchableOpacity>
      }
    

       
    
    </SafeAreaView>
  );
}

