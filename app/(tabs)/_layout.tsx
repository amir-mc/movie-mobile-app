import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import { Image, ImageBackground, Text } from 'react-native'


const _layout = () => {
    const TabsIcon=({iconss}:any)=>{
        return(
            <ImageBackground
                source={images.highlight}
                className="flex flex-row w-full flex-1 min-h-14 min-w-[112px] mt-4 justify-center items-center rounded-full overflow-hidden"
                >
                    
                    <Image source={iconss} className="size-5" />
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
                <TabsIcon iconss={icons.home}/>
            )
        }}
        />
        <Tabs.Screen
        name='search'
        options={{
            title:'Search',
            headerShown:false,
              tabBarIcon:({focused})=>(
               <TabsIcon iconss={icons.search}/>
            )
       
        }}
        />
        <Tabs.Screen
        name='saved'
        options={{
            title:'Saved',
            headerShown:false,
              tabBarIcon:({focused})=>(
                <TabsIcon iconss={icons.save}/>
            )
       
        }}
        />
        <Tabs.Screen
        name='profile'
        options={{
            title:'Profile',
            headerShown:false,
              tabBarIcon:({focused})=>(
                <TabsIcon iconss={icons.person}/>
            )
       
        }}
        />
            
        
    </Tabs>
  )
}

export default _layout