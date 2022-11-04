import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home} from '../screens/Home'
import {Repository} from '../screens/Repository'

const Stack = createNativeStackNavigator()

export const Routes = () => {
    return (
      <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
      initialRouteName="Home"
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Repository' component={Repository} />
      </Stack.Navigator>
    )

}

