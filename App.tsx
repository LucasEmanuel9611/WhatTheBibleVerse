import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import mobileAds from 'react-native-google-mobile-ads';
import "expo-dev-client"
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    mobileAds()
      .initialize()
      .then(adapterStatuses => {
        console.log("adapters initialized");
      });
  })


  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}
