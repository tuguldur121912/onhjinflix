import {ActivityIndicator, Image, Text, View} from "react-native";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import {useRouter} from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import useFetch from "@/services/useFetch";
import {fetchMovies} from "@/services/api";
import MovieCard from "@/components/MovieCard";
import { FlatList } from "react-native";

export default function Index() {
    const router = useRouter();

    const{
        data:movies,
        loading: moviesLoading,
        error: moviesError
    } = useFetch(() => fetchMovies({query: ''}));


    const renderHeader = () => (
        <>
            <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>
            <View className="flex-1 mt-5">
                <SearchBar
                    onPress={() => router.push("/search")}
                    placeholder="Кино хайх..."
                />
                <Text className='text-lg text-white font-bold mt-5 mb-3'>Сүүлд гарсан кинонууд</Text>
            </View>
        </>
    );

    if (moviesLoading) {
        return (
            <SafeAreaView className="flex-1 bg-primary" style={{ paddingTop: 0 }}>
                <Image source={images.bg} className="absolute w-full h-full z-0"/>
                {renderHeader()}
                <ActivityIndicator
                    size='large'
                    color='#0000ff'
                    className="mt-10 self-center"
                />
            </SafeAreaView>
        );
    }

    if (moviesError) {
        return (
            <SafeAreaView className="flex-1 bg-primary" style={{ paddingTop: 0 }}>
                <Image source={images.bg} className="absolute w-full h-full z-0"/>
                {renderHeader()}
                <Text className="text-white">Error: {moviesError?.message}</Text>
            </SafeAreaView>
        );
    }

    return (
        <>
            <StatusBar style="light" backgroundColor="transparent" translucent />
            <SafeAreaView className="flex-1 bg-primary" style={{ paddingTop: 0 }}>
                <Image source={images.bg} className="absolute w-full h-full z-0"/>
                <FlatList
                    ListHeaderComponent={renderHeader}
                    data={movies}
                    renderItem={({ item }) => (
                        <MovieCard {...item} />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    columnWrapperStyle={{
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                    }}
                    contentContainerStyle={{
                        paddingBottom: 32
                    }}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                />
            </SafeAreaView>
        </>
    );
}