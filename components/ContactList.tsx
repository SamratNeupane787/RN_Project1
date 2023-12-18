import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const data =[
        {
            "uid":"1",
            "name": "Jèfferson Gonçalves",
            "login": "jeffersonsimaogoncalves",
            "location": "Brasil",
            "language": "",
            "gravatar": "https://avatars.githubusercontent.com/u/411493?v=4",
            "followers": 4500,
            "organizations": "",
            "contributions": 44212
          },
          {
            "uid":"2",
            "name": "Yuri Cunha",
            "login": "isyuricunha",
            "location": "Brazil",
            "language": "my dms",
            "gravatar": "https://avatars.githubusercontent.com/u/115634315?v=4",
            "followers": 5800,
            "organizations": "",
            "contributions": 31248
          },
          {
            "uid":"3",
            "name": "Sarah Vessels",
            "login": "cheshire137",
            "location": "Nashville, Tennessee",
            "language": "",
            "gravatar": "https://avatars.githubusercontent.com/u/82317?v=4",
            "followers": 6500,
            "organizations": "GitHub",
            "contributions": 10978
          },
          {
            "uid":"4",
            "name": "dan",
            "login": "gaearon",
            "location": "",
            "language": "",
            "gravatar": "https://avatars.githubusercontent.com/u/810438?v=4",
            "followers": 84800,
            "organizations": "@bluesky-social",
            "contributions": 10786
          },
          {
            "uid":"5",
            "name": "Franck Nijhof",
            "login": "frenck",
            "location": "Enschede, The Netherlands",
            "language": "",
            "gravatar": "https://avatars.githubusercontent.com/u/195327?v=4",
            "followers": 3700,
            "organizations": "@home-assistant @hassio-addons",
            "contributions": 10121
          },
    ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {data.map((user)=>{
            return(
                <View style={styles.userView} key={user.uid}>
                <Image style={styles.userImage} source={{
                    uri:`${user.gravatar}`
                }}/>
                <View >
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userFollower}>Followers: {user.followers}</Text>
                </View>
                </View>
            )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:32,
        fontWeight:'bold',
        marginTop:18,
        paddingHorizontal:32,
        paddingBottom:22,

    },
    container:{},
    userImage:{
        height:64,
        width:64,
        borderRadius:50,
        marginVertical:16,
        marginHorizontal:24,
    },
    userView:{
        marginHorizontal:16,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#313B72',
        marginBottom:6,
        borderRadius:50,
        
    },
    userName:{
        marginBottom:8,
        fontSize:22,
        fontWeight:'600',
    },
    userFollower:{
        fontSize:16,

    }
})