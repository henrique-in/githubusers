import { useRoute } from '@react-navigation/native';
import React,{useEffect, useState} from 'react';
import { View, Text, SafeAreaView, Alert, FlatList,ActivityIndicator } from 'react-native';
import { UserRequest } from '../../models/requests';

import { styles } from './styles';

export const Repository = () => {
  const route = useRoute()
  const {params} = route.params
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
   

  const loadRepositories = async() => {
    setIsLoading(true)
    try {
      const response = await UserRequest.getRepository(params)
      setData(response.data)
    } catch (error) {
      Alert.alert('','Ocorreu um erro ao tentar carregar repositorios')
    }
    setIsLoading(false)
  }

  useEffect(() => {
    loadRepositories()
  }, [])
  
  const renderItem = ({ item }) => (

    <View style={{ height:70, backgroundColor:'#161B22', marginVertical:10,borderRadius:10,padding:10}}>
      <Text style={styles.titleCard}>{item.name}</Text>
      <Text style={{color:'white'}}>{item.full_name}</Text>
    </View>

  );

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Repositorios de {params} </Text>
        {
        isLoading && <ActivityIndicator size={'large'} color={'white'} />
      }
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          /> 
    </SafeAreaView>
    );
}

