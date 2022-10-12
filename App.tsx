import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { LogBox, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Chat from "./components/Chat";
import PersonalInfo from "./components/PersonalInfo";
import Styles from "./components/Styles";
// import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";
LogBox.ignoreLogs(["Setting a timer"]);

export default function App() {
  const storageUserNameKey = "chatapp-username";
  const storageImageKey = "chatapp-image";
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [appIsReady, setAppIsReady] = useState(false);

  const fetchPersonalData = async () => {
    let fetchedUsername = await AsyncStorage.getItem(storageUserNameKey);
    let userName = fetchedUsername == null ? "" : fetchedUsername;
    let fetchedImage = await AsyncStorage.getItem(storageImageKey);
    let image = fetchedImage == null ? "" : fetchedImage;
    setUsername(userName);
    setImage(image);
  };

  useEffect(() => {
    async function prepare() {
      try {
        await fetchPersonalData();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onPersonalInfoClosed = async (name: string, image: string) => {
    setUsername(name);
    await AsyncStorage.setItem(storageUserNameKey, name);
    setImage(image);
    await AsyncStorage.setItem(storageImageKey, image);
  };

  // if (isLoading) {
  //   return (
  //     //     <AppLoading
  //     //       startAsync={fetchPersonalData}
  //     //       onFinish={() => setIsLoading(false)}
  //     //     />
  //     <AppLoading
  //       startAsync={fetchPersonalData}
  //       onFinish={() => setIsLoading(false)}
  //       onError={console.warn}
  //     />
  //   );
  // }
  // console.log("AppLoading..........", AppLoading);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  let activeComponent =
    username != "" ? (
      <Chat username={username} image={image} />
    ) : (
      <PersonalInfo onClosed={onPersonalInfoClosed} />
    );

  return (
    <SafeAreaView style={Styles.container}>
      {activeComponent}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
