import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  ZegoUIKitPrebuiltCall,
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
  GROUP_VIDEO_CALL_CONFIG
} from '@zegocloud/zego-uikit-prebuilt-call-rn'
import { useRoute } from '@react-navigation/native';

const VideoCallPage = ({ navigation }) => {
  const route = useRoute()
  const callID = route.params
  console.log('callID', callID)

  const userID = String(Math.floor(Math.random() * 100000))
  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltCall
        appID={342090315}
        appSign={"42dc09eaa3a851643eec3af433214c14c5ffec55b373f81a8d0499bd80bdaa3f"}
        userID={userID} // userID can be something like a phone number or the user id on your own user system. 
        userName={`${callID?.userName}`}
        callID={callID?.meetingID} // callID can be any unique string. 

        config={{
          // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
          ...GROUP_VIDEO_CALL_CONFIG,
          onOnlySelfInRoom: () => { navigation.navigate('Home Screen') },
          onHangUp: () => { navigation.navigate('Home Screen') },
        }}
      />

    </View>
  );
}
export default VideoCallPage;
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})