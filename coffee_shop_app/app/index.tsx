/// <reference types="nativewind/types" />
import { Text, View,SafeAreaView, ImageBackground  } from "react-native";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import {router} from "expo-router";


export default function Index() {

  return (
    <GestureHandlerRootView>
      <SafeAreaView className="w-full h-full">
      
        <ImageBackground 
          className="w-full h-full items-center"
          source={require('../assets/images/index_bg_image.png')}
        >
          <View className="flex h-[60%]" />
          <View className="flex w-[80%]">
            <Text 
            className="text-white text-3xl text-center font-[Sora-SemiBold]"
            >
              Fall in Love with Coffee in Blissful Delight!
            </Text>

            <Text 
            className="pt-3 text-[#A2A2A2] text-center font-[Sora-Regular]" 
            >
            
            Welcome to our cozy coffee corner, where every cup is a delightful for you.
            </Text>
              <TouchableOpacity 
                className="bg-[#C57C3E] mt-10 p-3 rounded-lg items-center" 
                onPress = {() => router.push("/(tabs)/home")}
              >
                <Text className="text-xl color-white font-[Sora-SemiBold]">Get Started</Text> 
              </TouchableOpacity> 
          </View>
        </ImageBackground>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}