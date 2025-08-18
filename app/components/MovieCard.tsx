import { icons } from '@/constants/icons'
import { Link } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'


const MovieCard = ({id,title,poster_path,vote_average}:Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity className='w-[30%]'>
            <Image source={{
                uri:poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` :`https://placehold.co/600*400/1a1a1a/ffffff.png`
            }}
            className='w-full h-52 rounded-lg '
            resizeMode='cover'
            >

            </Image>
            <Text className='text-sm font-bold text-white mt-2' numberOfLines={1}>
                {title}
            </Text>
            <View className='flex-row items-center'>
              <Image source={icons.star}></Image>
              <Text className='text-xs text-white font-bold uppercase'>{Math.round(vote_average)}</Text>
            </View>
        </TouchableOpacity>
    </Link>
  )
}

export default MovieCard