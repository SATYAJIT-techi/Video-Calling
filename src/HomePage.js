import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

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
    if (meetingID != '' && meetingID?.length > 12) {
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
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={{
          borderColor: 'black',
          borderWidth: 2,
          marginBottom: 5,
          paddingHorizontal: 20,
        }}
        value={userName}
        onChangeText={text => {
          setUserName(text);
        }}
        placeholder="Tow  Naa  Kana"
      />
      <TextInput
        style={{
          borderColor: 'black',
          borderWidth: 2,
          marginBottom: 5,
          paddingHorizontal: 20,
        }}
        value={meetingID}
        onChangeText={text => {
          setMeetingID(text);
        }}
        placeholder="MeetingId generate Kar.... tale dekh"
      />
      <TouchableOpacity
        style={styles.btnComp}
        onPress={() => {
          handleJoinMeeting();
        }}>
        <View>
          <Text>Join Call</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: 'center', marginTop: 30 }}
        onPress={() => {
          generateMeetingID();
        }}>
        <Text>Generate Meeting ID</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'centers',
  },
  btnComp: {
    paddingVertical: 10,
    margin: 2,
    backgroundColor: 'greenyellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
