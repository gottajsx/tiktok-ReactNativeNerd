import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { supabase } from '@/utils/supabase'; 

export default function () {
    const router = useRouter();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [username, setUsername] = React.useState('')

    const  handleSignup = async () => {
      console.log(email, password);
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) return console.error(data, error);

      const {data: userData, error: userError} = await supabase.from('User').insert({
        id: data.user.id,
        username: username,
        email: email,
      });
      if (userError) return console.error(userError);
      router.back()
      router.push('/(tabs)');
    }
    
    return (
        <TailwindProvider platform="android">
            <View className='flex-1 items-center justify-center bg-white'>
                <View className='w-full p-4'>
                    <Text className='text-black font-bold text-3xl text-center mb-4'>Signup</Text>
                    <TextInput 
                      placeholder='Username'
                      className='bg-white p-4 rounded-lg border border-gray-300 w-full mb-4'
                      value={username}
                      onChangeText={setUsername}
                    />
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
                      onPress={handleSignup}
                    >
                        <Text className="text-white font-bold text-lg text-center">Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TailwindProvider>
    );
}