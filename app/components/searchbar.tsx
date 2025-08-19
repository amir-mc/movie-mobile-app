import React from 'react'
import { TextInput, View } from 'react-native'
interface type{
  placeholder:string,
  onPress?:()=>void,
  value?:string,
  onChangeText ?:(text:string)=>void
}
const Searchbar = ({placeholder,onPress,value,onChangeText}:type) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <TextInput placeholder={placeholder} value={value} onPress={onPress} onChangeText={onChangeText} placeholderTextColor='#a8b5db'  className='flex-1 ml-2 text-white '></TextInput>
    </View>
  )
}

export default Searchbar