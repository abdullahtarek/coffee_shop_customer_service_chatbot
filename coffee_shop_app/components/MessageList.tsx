import { ScrollView,View} from 'react-native'
import React, { useRef, useEffect } from 'react'
import MessageItem from './MessageItem';
import { MessageInterface } from '@/types/types';
import TypingIndicator from '@/components/TypingIndicator';

interface MessageListProps {
  messages: MessageInterface[];
  isTyping: boolean;
}

const MessageList = ({messages,isTyping = false}:MessageListProps) => {

  const scrollViewRef =  useRef<ScrollView | null>(null)
  // Scroll to bottom when messages change
  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true })
  }, [messages])

  return (
    <ScrollView
      ref={scrollViewRef}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingTop: 10}}
    >
      {
        messages.map((message, index) => (
          <MessageItem key={index} message={message} />
        ))
      }
    
      {isTyping && (
          <View className="w-[80%] ml-3 mb-3">
            <View className="flex self-start p-3 px-4 rounded-2xl bg-indigo-100 border border-indigo-200">
              <TypingIndicator />
            </View>
          </View>
      )}

            
    </ScrollView>
  )
}

export default MessageList