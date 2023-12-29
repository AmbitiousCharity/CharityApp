import { Pressable, Text } from 'react-native';

import { StyleSheet } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 80,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export const GradientButton = ({ onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <LinearGradient
        colors={['red', 'orange']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.buttonText}>Click Me</Text>
      </LinearGradient>
    </Pressable>
  );
};
