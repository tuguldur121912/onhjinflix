import React from 'react';
import {Text, TouchableOpacity, Image, Dimensions, View} from 'react-native';
import {Link} from "expo-router";
import {icons} from "@/constants/icons";

const {width} = Dimensions.get('window');
const cardWidth = (width - 60) / 3;

const MovieCard = ({id, poster_path, title, vote_average, release_date}: Movie) => {
    const imageUrl = poster_path 
        ? `https://image.tmdb.org/t/p/w342${poster_path}` 
        : 'https://placehold.co/600x400/1a1a1a/ffffff.png';

    // Format the rating to show one decimal place
    const formattedRating = (vote_average / 2).toFixed(1);

    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity 
                style={{
                    width: cardWidth,
                }}
                className="mb-4"
            >
                <Image
                    source={{uri: imageUrl}}
                    style={{
                        width: cardWidth,
                        height: cardWidth * 1.5,
                        borderRadius: 8,
                    }}
                    resizeMode="cover"
                />
                <Text 
                    className="text-sm font-bold text-white mt-2" 
                    numberOfLines={1}
                >
                    {title}
                </Text>
                <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center gap-x-1">
                        <Image source={icons.star} className="size-4"/>
                        <Text className="text-xs text-white font-bold uppercase">{formattedRating}</Text>
                    </View>
                    <Text className="text-xs text-light-300 font-medium">
                        {release_date?.split('-')[0]}
                    </Text>
                </View>
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard;