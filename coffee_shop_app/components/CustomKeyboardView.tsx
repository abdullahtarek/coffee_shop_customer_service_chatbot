import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const ios = Platform.OS === 'ios'

import { ReactNode } from 'react';

const CustomKeyboardView = ({children}: {children: ReactNode}) => {
  return (
    <KeyboardAvoidingView
        behavior={ios ? 'padding':'height'}
        style={{flex:1 }}
    >
        <ScrollView
            style={{flex:1}}
            contentContainerStyle={{flex: 1}}
            bounces={false}
            showsVerticalScrollIndicator={false}
        >
            {
                children
            }
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default CustomKeyboardView