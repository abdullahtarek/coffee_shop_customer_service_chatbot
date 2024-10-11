import { Text, View,TouchableOpacity } from 'react-native'
import { useState } from 'react';
import React from 'react'

interface DetailsInterface {
    description: string;
}

const DescriptionSection = ({description}:DetailsInterface) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
        <Text
            className="text-[#242424] text-lg font-[Sora-SemiBold] ml-1 "
            >Description
        </Text>

        <View 
            className='p-2'
        >
            <Text numberOfLines={expanded ? undefined : 3}
            className='text-[#A2A2A2] text-xs font-[Sora-Regular]'
            >
                {expanded ? description : `${description.slice(0, 100)}...`}

                <TouchableOpacity onPress={() => setExpanded(!expanded)}>
                    <Text 
                        className='text-app_orange_color text-xs font-[Sora-Regular]'
                    >
                        {expanded ? ' Read Less' : 'Read More'}
                    </Text>
                </TouchableOpacity>
            </Text>
            
        </View>
    </View>
  )
}

export default DescriptionSection