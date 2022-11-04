import {StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#02040A',
    paddingHorizontal:10,
  },
  title:{
    fontSize:18,
    color:'#ffffff',
    textAlign:'center'
  },
  inputContainer:{
    backgroundColor:'#161B22',
    paddingVertical:10,
    borderRadius:10,
    width:'80%'
  },
  contentSearch:{
    flexDirection:'row', 
    width:'100%', 
    alignItems:'center', 
    justifyContent:'space-evenly',
    marginVertical:15,
  },
  button:{
     height:100,
      backgroundColor:'#161B22',
      borderRadius:10,
      padding:10,
     justifyContent:'center'}
})