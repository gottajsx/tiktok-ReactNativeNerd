import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { supabase } from '@/utils/supabase'



export default function () {
    const router = useRouter();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleLogin = async () => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });
      if (error) return console.error(error);
      router.push('/(tabs)')
    }
    
    return (
        <TailwindProvider platform="android">
            <View className='flex-1 items-center justify-center bg-white'>
                <View className='w-full p-4'>
                    <Text className='text-black font-bold text-3xl text-center mb-4'>Login</Text>
                    <TextInput 
                      placeholder='Email'
                      className='bg-white p-4 rounded-lg border border-gray-300 w-full mb-4'
                      value={email}
                      onChangeText={setEmail}
                    />
                    <TextInput 
                      secureTextEntry={true}
                      placeholder='Password'
                      className='bg-white p-4 rounded-lg border border-gray-300 w-full mb-4'
                      value={password}
                      onChangeText={setPassword}
                    />
                    <TouchableOpacity
                      className="bg-black px-4 py-2 rounded-lg"
                      onPress={handleLogin}
                    >
                        <Text className="text-white font-bold text-lg text-center">Login</Text>     
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress= {() => router.push('/signup')}
                    >
                        <Text className="text-black font-semibold text-lg text-center">Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TailwindProvider>
    );
}