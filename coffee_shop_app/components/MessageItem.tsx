import { Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { MessageInterface } from '@/types/types';

interface Message {
    message: MessageInterface;
}

const MessageItem = ({message}:Message) => {
  if (message?.role == 'user') {
    return (
        <View
            className='flex-row justify-end  mb-3 mr-3'
        >
            <View className='w-80%'>
                <View className='self-end p-3 rounded-2xl bg-white border border-neutral-200'>
                    <Text 
                        style = {{fontSize: heightPercentageToDP(1.9)}}>
                        {message?.content}
                    </Text>
                </View>
            </View>

        </View>
    )
  } else {
    return (
        <View
            className='w-[80%] ml-3 mb-3'
        >
            <View className='flex self-start p-3 px-4 rounded-2xl bg-indigo-100 border border-indigo-200'>
                <Text
                    style = {{fontSize: heightPercentageToDP(1.9)}}
                >
                    {message?.content}
                </Text>
            </View>

        </View>
    )
  }
}

export default MessageItem