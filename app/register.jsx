import { View, Text, TextInput, Alert } from 'react-native'
import React from 'react'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { TouchableOpacity } from 'react-native-gesture-handler';

const schema = yup.object().shape({
    email : yup
    .string()
    .required('Email is Required')
    .email('Please enter a valid email'),
    password : yup
    .string()
    .required('Password is Required')
    .min(6, 'Password must be at least 6 characters long'),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Confirm Password is Required')
})

const RegisterForm = () => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
        trigger
    } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        console.log(data);
        Alert.alert('Success', 'Form Submitted Successfully!')
        reset();
    }
  return (
    <View className="flex-1 justify-center bg-gray-100 p-8">
      <Text className="text-4xl text-gray-800 text-center mb-8 font-bold">Create Account</Text>
      <Controller
        control={control}
        name='email'
        render={({ field: {onChange, onBlur, value}}) => (
            <>
                <TextInput
                    className="border border-gray-300 rounded-lg p-4 mb-4 bg-white shadow-lg"
                    placeholder='Enter your email'
                    placeholderTextColor="#A0AEC0"
                    onBlur={() => {
                        onBlur();
                        trigger('email');
                    } 
                    }
                    onChangeText={(text) => {
                        onChange(text);
                        trigger('email');
                    }}
                    value={value}
                    keyboardType='email-address'
                    autoCapitalize='none'
                />
                {
                    errors.email && (
                        <Text className="text-red-600 mb-2">{errors.email.message}</Text>
                    )
                }
            </>
        )}
      />
      <Controller
        control={control}
        name='password'
        render={({ field: {onChange, onBlur, value}}) => (
            <>
                <TextInput
                    className="border border-gray-300 rounded-lg p-4 mb-4 bg-white shadow-lg"
                    placeholder='Enter your password'
                    placeholderTextColor="#A0AEC0"
                    onBlur={() => {
                        onBlur();
                        trigger('password');
                    } 
                    }
                    onChangeText={(text) => {
                        onChange(text);
                        trigger('password');
                    }}
                    value={value}
                    secureTextEntry
                />
                {
                    errors.password && (
                        <Text className="text-red-600 mb-2">{errors.password.message}</Text>
                    )
                }
            </>
        )}
      />
      <Controller
        control={control}
        name='confirmPassword'
        render={({ field: {onChange, onBlur, value}}) => (
            <>
                <TextInput
                    className="border border-gray-300 rounded-lg p-4 mb-4 bg-white shadow-lg"
                    placeholder='Enter your Confirm Password'
                    placeholderTextColor="#A0AEC0"
                    onBlur={() => {
                        onBlur();
                        trigger('confirmPassword');
                    } 
                    }
                    onChangeText={(text) => {
                        onChange(text);
                        trigger('confirmPassword');
                    }}
                    value={value}
                    secureTextEntry
                />
                {
                    errors.confirmPassword && (
                        <Text className="text-red-600 mb-2">{errors.confirmPassword.message}</Text>
                    )
                }
            </>
        )}
      />
      <TouchableOpacity
      className="bg-blue-600 p-4 rounded-lg shadow-lg"
      onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-white text-center text-lg font-semibold">Register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RegisterForm