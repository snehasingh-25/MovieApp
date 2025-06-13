import { View, Text ,Image, TextInput} from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'
interface Props {
  placeholder: string;
  onPress: () => void;
}
const SearchBar = ({placeholder,onPress}:Props) => {
  return (
    <View className='flex-row items-center rounded-full px-5 py-4'>
      <Image source={icons.search} className='size-5' resizeMode="contain"/>
      <TextInput onPress={onPress}
        placeholder={placeholder}
        value=''
        onChangeText={()=>{}}
        placeholderTextColor='#A8B5D8'
        className='flex-1 ml-2 text-white'
      />
    </View>
  )
} 

export default SearchBar