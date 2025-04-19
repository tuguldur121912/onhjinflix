import React, {Component} from 'react';
import {Tabs} from "expo-router";
import {Image, ImageBackground, View} from "react-native";
import {images} from "@/constants/images";
import {Text} from "react-native";
import {icons} from "@/constants/icons";
const TabIcon = ({focused, icon, title}:any) => {
    if(focused) {
    return (
        <ImageBackground
            source={images.highlight}
            className="flex flex-row w-auto min-w-[120px] h-12 px-4 justify-center items-center rounded-3xl overflow-hidden"
        >
            <Image source={icon} tintColor="#151312" className="size-5"/>
            <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
        </ImageBackground>
    )}
    return(
        <View className="size-full justify-center items-center mt-4 rounded-full">
            <Image source={icon} tintColor="#A8B5DB" className="size-5"/>
        </View>
    )}
const _Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                },
                tabBarStyle: {
                    backgroundColor: "#0f0d23",
                    borderRadius: 60,
                    marginHorizontal: 15,
                    marginBottom: 25,
                    height: 41,
                    position: "absolute",
                    overflow: "hidden",
                    borderWidth: 1,
                    borderColor: "0f0d23",
                },
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.home}
                            title="Цэс"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.search}
                            title="Хайх"
                        />
                    )
                }} />
            <Tabs.Screen
                name="saved"
                options={{
                    title: "Saved",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.save}
                            title="Хадгалах"
                        />
                    )
                }} />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={icons.person}
                            title="Профайл"
                        />
                    )
                }} />
        </Tabs>
    )
}

export default _Layout;
