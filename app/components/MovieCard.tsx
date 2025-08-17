import { Link } from 'expo-router'
import { Image, Text, TouchableOpacity } from 'react-native'


const MovieCard = ({id,title,poster_path}:Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity>
            <Image source={{
                uri:poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` :`https://placehold.co/600*400/1a1a1a/ffffff.png`
            }}
            className='w-full h-52 rounded-full '
            resizeMode='cover'
            >

            </Image>
            <Text className='text-sm font-bold text-white mt-2'>
                {title}
            </Text>
        </TouchableOpacity>
    </Link>
  )
}

export default MovieCard