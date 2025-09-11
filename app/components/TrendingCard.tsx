import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'

const TrendingCard = ({index,movie:{movie_id,title,poster_url}}:TrendingCardProps) => {
  return (
          <Link href={`/movies/${movie_id}`} asChild>
      <TouchableOpacity className="mr-4 w-32 items-center">
                            <Image 
                             source={{uri:poster_url}}
                             resizeMode='cover'
                             //className="flex-1  justify-center items-center"
                             className="w-32 h-48 bg-gray-700 rounded-lg mb-2 overflow-hidden">
                              
                             
                                
                              </Image>
                            
                            <Text 
                              className="text-white text-center text-xs" 
                              numberOfLines={1}
                            >
                              {title}
                            </Text>
                          </TouchableOpacity>
                        </Link>
  )
}

export default TrendingCard