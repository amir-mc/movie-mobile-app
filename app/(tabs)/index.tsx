import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import { gettrendMovie } from "@/services/appwrite";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, Dimensions, FlatList, Image, ScrollView, Text, View } from "react-native";
import MovieCard from "../components/MovieCard";
import Searchbar from "../components/searchbar";

const { width } = Dimensions.get('window');

export default function Index() {
  const router = useRouter();
  const { data: tradingMov, loading: loadingTrend, error: errorTrend } = useFetch(gettrendMovie);
  const { data: movie, loading, error } = useFetch(() => fetchMovies({ query: '' }));

  // Function to generate unique keys by combining ID and index
  const getUniqueKey = (item:any, index:any) => {
    return `${item.movie_id || item.id}_${index}`;
  };

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full h-full z-0" />
      
      <ScrollView 
        className="flex-1 px-5" 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        
        {loading || loadingTrend ? (
          <ActivityIndicator size='large' color='#0000ff' className="mt-10 self-center" />
        ) : error || errorTrend ? (
          <Text className="text-white">Server Error: {error?.message || errorTrend?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <Searchbar
              onPress={() => router.push("/(tabs)/search")}
              placeholder="search for mooov"
            />
            
            {tradingMov && (
              <View className="mt-10">
                <Text className="text-lg text-white font-bold mb-3">
                  Trending Movies
                </Text>

                {/* Horizontal FlatList for Trending Movies */}
                <FlatList 
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => getUniqueKey(item, index)}
                  data={tradingMov}
                  className="mt-2"
                  contentContainerStyle={{ paddingRight: 20 }}
                  renderItem={({ item, index }) => (
                    <View className="mr-4 w-32 items-center">
                      <View className="w-32 h-48 bg-gray-700 rounded-lg mb-2 overflow-hidden">
                        <View className="flex-1 bg-gray-600 justify-center items-center">
                          <Text className="text-white text-center text-xs p-2">{item.title}</Text>
                        </View>
                      </View>
                      <Text 
                        className="text-white text-center text-xs" 
                        numberOfLines={1}
                      >
                        {item.title}
                      </Text>
                    </View>
                  )}
                />
              </View> 
            )}
            
            <View className="mt-10">
              <Text className="text-lg text-white font-bold mb-3">
                Recently Movie
              </Text>
              <FlatList 
                keyExtractor={(item, index) => getUniqueKey(item, index)}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10
                }}
                scrollEnabled={false}
                data={movie}
                renderItem={({ item }) => (
                  <MovieCard {...item} />
                )}
              />
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}