import { StyleSheet, Text, View,Linking ,Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink : string){
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
    
      <View style={[styles.card, styles.cardElevated]}>
      <Text style={styles.cardTitle}>Tesla Launcing New Feature Soon ! </Text>
        <Image source={{
            uri: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-S/5252/1611840999494/front-left-side-47.jpg'
        }}
        style={styles.cardImages}
        />
        
        <View style={styles.cardBody}>
           
           

            <Text style={styles.cardLabel} numberOfLines={4}> The Mercedes-Benz GLE, formerly Mercedes-Benz M-Class (designated with the "ML" nomenclature), is a mid-size luxury SUV produced by the German manufacturer Mercedes-Benz since 1997. In terms of size, it is slotted in between the smaller GLC and the larger GLS, the latter with which it shares platforms. </Text>
            
            <View style={styles.cardfooter}>
                <TouchableOpacity style={styles.socialLinks} onPress={()=>{
                openWebsite('https://gadiherau.com')
                }}>
                    <Text >Read More</Text>
                </TouchableOpacity>
            </View>


        </View>

        </View>

    </View>


  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:32,
        fontWeight:'bold',
        marginTop:18,
        paddingHorizontal:32,
        

    },
    card:{
        
        borderRadius:6,
        marginHorizontal:12,
        marginVertical:12,
        
        
    },
    cardElevated:{
        backgroundColor:'#031927',
        shadowOffset:{
            width:1,
            height:1,
        }
    },
    cardTitle:{
        fontSize:26,
        fontWeight:'600',
        marginHorizontal:8,
        marginVertical:8,
      
       
    },
    cardLabel:{
       
        fontSize:16,
        marginVertical:22,
        color:'#D8FFDD',
       
        
    },
  
    cardImages:{
        marginTop:18,
        height:180,
        borderRadius:10,
        marginHorizontal:12,
        marginVertical:6,
        
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
        
    },
    socialLinks:{
        fontSize:16,
        fontWeight:'bold',
        backgroundColor:'#9B5094',
        paddingHorizontal:6,
        width:82,
        height:44,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,

    },
    cardfooter:{
        paddingVertical:16,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

})