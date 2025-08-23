import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMovies } from '@/services/api'
import { updateserchCount } from '@/services/appwrite'
import useFetch from '@/services/useFetch'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from 'react-native'
import MovieCard from '../components/MovieCard'
import Searchbar from '../components/searchbar'

const Search = () => {
  const [searchQuery,setSearchQuery]=useState('')
    const { data: movie, loading, error,refech:loadMovie,reset } = useFetch(() => fetchMovies({ query: searchQuery }),false);
    useEffect(()=>{
      const Timeout =setTimeout(async()=>{
        if(searchQuery.trim()){
          await loadMovie()
          if(movie?.length>0 && movie?.[0])
          await updateserchCount(searchQuery,movie[0])
          
      }else{
        reset()
      }}, 900);
      return()=>clearTimeout(Timeout)
    },[searchQuery])
  return (
      <View className="flex-1 bg-primary">
          <Image source={images.bg} className="absolute w-full z-0" />
          
          <ScrollView 
            className="flex-1 px-5" 
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}
          >
            <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
            
              {loading ? (
              <ActivityIndicator size='large' color='#000ff' className="mt-10 self-center" />
            ) : error ? (
              <Text className="text-white">Server Error: {error.message}</Text>
            ) : (
              <View className="flex-1 mt-5 items-center justify-between">
                <Searchbar
                  placeholder="Search Movie"
                  value={searchQuery}
                  onChangeText={(text:string)=>setSearchQuery(text)}
                />
                   {
                      !loading && !error && searchQuery.trim() && movie?.length > 0  &&(
                        <Text className='text-xl text-white font-bold'>search result for:{''} 
                        <Text className='text-accent'>
                         {searchQuery}
                        </Text>
                        </Text>
                      )
                    }
                <>
                   <Text className="text-lg text-white font-bold ">recently Movie</Text>
                    <FlatList keyExtractor={(item)=>item.id.toString()} numColumns={3} columnWrapperStyle={{
                      justifyContent:"flex-start",
                      gap:20,
                      paddingRight:5,
                      marginBottom:10
                    }} className="mt-2 pb-32 " scrollEnabled={false} data={movie} renderItem={({item})=>(
                      <MovieCard
                      {...item}
                      />
                    )}/>
                 
                </>
              </View>
            )}
          </ScrollView>
        </View>
  )
}

export default Search