import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import { Image, ImageBackground, Text, View } from 'react-native'


const _layout = () => {
    const TabsIcon=({iconss,focused}:any)=>{
        if(focused){ 

            return(
                <ImageBackground
                source={images.highlight}
                className="flex flex-row w-full flex-1 min-h-16 min-w-[112px] mt-4 justify-center items-center rounded-full overflow-hidden"
                >
                    
                    <Image source={iconss} className="size-5" />
                    <Text className="text-secondary text-base font-semibold ml-2">Home</Text>

                    
                </ImageBackground>
        )
    }
    return(
    <View className='size-full justify-center items-center mt-4 rounded-full'>

  
    <Image source={iconss} tintColor="#A8B5DB" className='size-5'/>
    
     </View>
)
}

  return (
    <Tabs
    screenOptions={{
        tabBarShowLabel:false,
        tabBarItemStyle:{
            width:'100%',
            height:'100%',
            justifyContent:'center',
            alignItems:'center'
        },
        tabBarStyle:{
            backgroundColor:'#0f0D23',
            borderRadius:50,
            marginHorizontal:20,
            marginBottom:36,
            height:52,
            position:'absolute',
            overflow:"hidden",
            borderWidth:1,
            borderColor:'#0F0D23'
        }
    }}
    >
        <Tabs.Screen
        name='index'
        options={{
            title:'Hone',
            headerShown:false,
            tabBarIcon:({focused})=>(
                <TabsIcon focused={focused} iconss={icons.home}/>
            )
        }}
        />
        <Tabs.Screen
        name='search'
        options={{
            title:'Search',
            headerShown:false,
              tabBarIcon:({focused})=>(
               <TabsIcon focused={focused} iconss={icons.search}/>
            )
       
        }}
        />
        <Tabs.Screen
        name='saved'
        options={{
            title:'Saved',
            headerShown:false,
              tabBarIcon:({focused})=>(
                <TabsIcon focused={focused} iconss={icons.save}/>
            )
       
        }}
        />
        <Tabs.Screen
        name='profile'
        options={{
            title:'Profile',
            headerShown:false,
              tabBarIcon:({focused})=>( 
                <TabsIcon focused={focused} iconss={icons.person}/>
            ) 
       
        }}
        />
            
        
    </Tabs>
  )
}

export default _layout