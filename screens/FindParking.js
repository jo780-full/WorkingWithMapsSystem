import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";
import Map from "../Components/Map";
import {useEffect} from "react"
import { useState } from 'react';

const FindParking = () => {
  const [timeLeft, setTimeLeft]=useState(20)
  useEffect(() =>
  {
    if (timeLeft == 0) 
    {
      return setTimeLeft(timeLeft);
    
    
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft])
  return (
    <View style={tw`h-full`}>
      <View style={tw`h-2/3`}>
        <Map/>
      </View>
      <View style={tw`h-1/3`}>
        <Text>FindParking</Text>
        <Text>{timeLeft}</Text>
      </View>
    </View>
  )


} 
export default FindParking
const styles = StyleSheet.create({})