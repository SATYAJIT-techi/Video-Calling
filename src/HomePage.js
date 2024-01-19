import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const HomePage = ({ navigation }) => {
  const [meetingID, setMeetingID] = useState(null)
  const generateMeetingID = () => {
    const id = `${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}`
    setMeetingID(id)
    console.log('id', id.length)
  }
  return (
    <View style={styles.mainContainer} >
      <TextInput style={{ borderColor: 'black', borderWidth: 2, marginBottom: 5, paddingHorizontal: 20 }} value={meetingID} onChangeText={(text) => { setMeetingID(text) }} />
      <TouchableOpacity style={styles.btnComp} onPress={() => {
        if(meetingID.length < 5){
          alert("Enter valid MeetingID")
        }else{
          navigation.navigate("VC screen",{meetingID:meetingID})
        }
      }}>
        <View>
          <Text>Join Call</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: "center", marginTop: 30 }} onPress={() => { generateMeetingID()}}>
        <Text>Generate Meeting ID</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'centers'
  },
  btnComp: {
    paddingVertical: 10,
    margin: 2,
    backgroundColor: 'greenyellow',
    alignItems: 'center',
    justifyContent: 'center'
  }
})