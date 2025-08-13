import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import { Image, ImageBackground, Text } from 'react-native'


const _layout = () => {
    const TabsIcon=()=>{
        return(
            <ImageBackground
                source={images.highlight}
                className="flex flex-row w-full flex-1 min-h-14 min-w-[112px] mt-4 justify-center items-center rounded-full overflow-hidden"
                >
                    
                    <Image source={icons.home} className="size-5" />
                    <Text className="text-secondary text-base font-semibold ml-2">Home</Text>

                    
                </ImageBackground>
        )
    }
  return (
    <Tabs>
        <Tabs.Screen
        name='index'
        options={{
            title:'Hone',
            headerShown:false,
            tabBarIcon:({focused})=>(
                <TabsIcon/>
            )
        }}
        />
        <Tabs.Screen
        name='search'
        options={{
            title:'Search',
            headerShown:false
        }}
        />
        <Tabs.Screen
        name='saved'
        options={{
            title:'Saved',
            headerShown:false
        }}
        />
        <Tabs.Screen
        name='profile'
        options={{
            title:'Profile',
            headerShown:false
        }}
        />
            
        
    </Tabs>
  )
}

export default _layout