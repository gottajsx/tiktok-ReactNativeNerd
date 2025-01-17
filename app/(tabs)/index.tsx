import { TailwindProvider } from 'tailwindcss-react-native';
import { Text, View } from 'react-native';
import { useAuth } from '@/providers/AuthProvider';

export default function HomeScreen() {
  const { user } = useAuth();
  return (
    <TailwindProvider platform="android">
      <View className='flex-1 items-center justify-center bg-white'>
        <Text className='text-black font-bold text-3xl'>Home</Text>
        <Text>{JSON.stringify(user)}</Text>
      </View>
    </TailwindProvider>
  );
}

