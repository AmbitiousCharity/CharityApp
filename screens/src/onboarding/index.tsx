import { GradientButton, Separator } from '@charity/ui';
import { Text, View } from 'react-native';
import { styles } from './onoarding.styles';

export const Onboarding = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>Make a difference with every step.</Text>
        <View>
          <Text style={styles.content}>
            Your contributions will make a difference, regardless of whether you
            achieve your goal. If you succeed, your money is doubled and donated
            to your chosen charity. And if you don't, your money will still go
            to a worthy cause.
          </Text>
          <Separator />
        </View>
        <View>
          <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <GradientButton />
          </View>
        </View>
      </View>
    </View>
  );
};
