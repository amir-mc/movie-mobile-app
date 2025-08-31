import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import { gettrendMovie } from "@/services/appwrite";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native"; // Text از react-native ایمپورت شده
import MovieCard from "../components/MovieCard";
import Searchbar from "../components/searchbar";

export default function Index() {
  const router = useRouter();
  const {data:tradingMov , loading:loadingTrend, error:errorTrend }=useFetch(gettrendMovie)
  const { data: movie, loading, error } = useFetch(() => fetchMovies({ query: '' }));


  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      
      <ScrollView 
        className="flex-1 px-5" 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        
        {loading || loadingTrend ? (
          <ActivityIndicator size='large' color='#000ff' className="mt-10 self-center" />
        ) : error || errorTrend ? (
          <Text className="text-white">Server Error: {error?.message || errorTrend?.message}</Text>
        ) : (
          <View className="flex-1 mt-5 items-center justify-between">
            <Searchbar
              onPress={() => router.push("/(tabs)/search")}
              placeholder="search for mooov"
            />
            {tradingMov &&(

              <View className="mt-10 ">
                <Text className="text-lg text-white font-bold mb-3">
                  Trending Movies
                </Text>

                <FlatList keyExtractor={(item)=>item.movie_id.toString()} numColumns={3} columnWrapperStyle={{
                  justifyContent:"flex-start",
                  gap:20,
                  paddingRight:5,
                  marginBottom:10
                }} className="mt-2 pb-32 " data={tradingMov} renderItem={({item ,index})=>(
                  <Text className="text-white">{item.title}</Text>
                )}/>
              </View> 
             
             )}
            <>
            {/* FIND trouble  */}
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
  );
}