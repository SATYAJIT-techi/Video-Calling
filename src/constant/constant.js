import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const win = Dimensions.get('screen');
const width = win.width;
const scale = (number) => {
    const a = number + number + number / 2 + 1;
    return (width * a) / 1000;
  };

  export {scale}