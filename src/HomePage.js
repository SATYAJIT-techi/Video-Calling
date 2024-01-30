import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ToastAndroid,
  Image
} from 'react-native';
import React, { useState } from 'react';
import { scale } from './constant/constant';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import fontDesign from './assets/fontDesign';
import Clipboard from '@react-native-clipboard/clipboard';


const HomePage = ({ navigation }) => {
  const [meetingID, setMeetingID] = useState(null);
  const [userName, setUserName] = useState('');
  const generateMeetingID = () => {
    const id = `${Math.floor(Math.random() * 10000)}-${Math.floor(
      Math.random() * 10000,
    )}-${Math.floor(Math.random() * 10000)}`;
    setMeetingID(id);
  };

  const handleJoinMeeting = () => {
    if (meetingID != '' && meetingID?.length > 12 && userName) {
      navigation.navigate('VC screen', {
        meetingID: meetingID,
        userName: userName,
      });
    } else if (userName == '') {
      alert('Give me your name');
    } else {
      alert('Enter valid MeetingID');
    }
  };
  const copyToClipboard = async () => {
    Clipboard.setString(meetingID);
    const copiedText = await Clipboard.getString()
    console.log('copiedText', copiedText)
  };
  return (
    <LinearGradient colors={['#ffffff', '#ade8f4', '#023e8a']} style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" animated={true} backgroundColor="#ffffff" />
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            height: scale(390),
            backgroundColor: '#ade8f4',
            width: scale(390),
            borderRadius: scale(250)
          }}>
          <LottieView source={require('../src/assets/landingAnim.json')} style={{ width: "100%", height: "100%" }} autoPlay loop />
        </View>
      </View>
      <View style={styles.inputArea}>
        <TextInput
          style={{ ...fontDesign.span_14_b, ...styles.inputText }}
          value={userName}
          onChangeText={text => {
            setUserName(text);
          }}
          placeholder="Please enter your name"
          placeholderTextColor={'black'}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            // style={{ ...fontStyles.span_18_b, ...styles.inputText, flex: 1 }}
            style={{ ...fontDesign.span_14, ...styles.inputText, flex: 1 }}
            value={meetingID}
            onChangeText={text => {
              setMeetingID(text);
            }}
            placeholder="MeetingID required"
            placeholderTextColor={'black'}
          />
          <TouchableOpacity
            style={{ position: 'absolute', right: scale(20) }}
            onPress={() => {
              ToastAndroid.show('MeetingID copied!', ToastAndroid.SHORT);
              copyToClipboard()
            }}>
            <Image source={require('./assets/copy.png')} style={{ height: scale(20), width: scale(20) }} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.btnComp}
          onPress={() => {
            handleJoinMeeting();
          }}>
          <View>
            <Text style={fontDesign.span_18_b}>JOIN CALL</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.btnComp }}
          onPress={() => {

            generateMeetingID();
          }}>
          <Text style={fontDesign.span_20_b}>Generate Meeting ID</Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'centers',
    backgroundColor: '#6c757d'
  },
  btnComp: {
    paddingVertical: scale(10),
    marginVertical: scale(10),
    marginHorizontal: scale(40),
    borderRadius: scale(30),
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {

    marginBottom: 5,
    paddingHorizontal: scale(20),
    borderRadius: scale(5),
    marginHorizontal: scale(10),
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'white',
    marginBottom: scale(5)

  },
  inputArea: {
    flex: 1,
    backgroundColor: '#495057 ',
    paddingTop: scale(50),
    borderTopRightRadius: scale(30),
    borderTopLeftRadius: scale(30),
    paddingHorizontal: scale(10)

  }
});
