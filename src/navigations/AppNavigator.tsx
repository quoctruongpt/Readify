import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Intro} from 'src/modules/Onboarding/Intro';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Intro" component={Intro} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export {AppNavigator};
