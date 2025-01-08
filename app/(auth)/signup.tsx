import { TailwindProvider } from 'tailwindcss-react-native';
import { Text, View } from 'react-native';

export default function () {
  return (
    <TailwindProvider platform="android">
        <View className='flex-1 items-center justify-center bg-white'>
            <Text className='text-black font-bold text-3xl'>Signup</Text>
        </View>
    </TailwindProvider>
  );
}
