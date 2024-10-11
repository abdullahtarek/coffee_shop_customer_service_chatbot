import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DeliveryToggle: React.FC = () => {
  const [isDelivery, setIsDelivery] = useState(true); // State to manage the selected option

  return (
    <View className="flex-row justify-between bg-[#EDEDED] mx-7 p-1 rounded-xl mt-7">
      <TouchableOpacity
        className={`py-1 px-[15%] font-[Sora-SemiBold] rounded-xl ${isDelivery ? 'bg-[#C67C4E]' : ''}`} // Dynamic classes
        onPress={() => setIsDelivery(true)}
      >
        <Text className={`text-lg ${isDelivery ? 'text-white' : 'text-black'}`}>
          Deliver
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className={`py-1 px-[15%] font-[Sora-SemiBold] rounded-xl ${!isDelivery ? 'bg-[#C67C4E]' : ''}`} // Dynamic classes
        onPress={() => setIsDelivery(false)}
      >
        <Text className={`text-lg ${!isDelivery ? 'text-white' : 'text-black'}`}>
          Pick Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeliveryToggle;