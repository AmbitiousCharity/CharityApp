import { GradientButton } from '@charity/ui';
import { Text, View } from 'react-native';

export const Profile = ({ navigation }) => {
  return (
    <View>
      <Text>Profile view</Text>
      <GradientButton
        onPress={() => {
          navigation.navigate('Onboarding');
        }}
      />
    </View>
  );
};
