import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Cars</Text>
        <View style={[styles.card, styles.cardElevated]}>
        <Image source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Mercedes-Benz_GLE_350_d_4MATIC_AMG_Line_%28V_167%29_%E2%80%93_f_18042021.jpg/420px-Mercedes-Benz_GLE_350_d_4MATIC_AMG_Line_%28V_167%29_%E2%80%93_f_18042021.jpg'
        }}
        style={styles.cardImages}
        />
        
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Mercedes-Benz GLE </Text>
            <Text style={styles.carddescr}> Luxury SUV </Text>

            <Text style={styles.cardLabel}> The Mercedes-Benz GLE, formerly Mercedes-Benz M-Class (designated with the "ML" nomenclature), is a mid-size luxury SUV produced by the German manufacturer Mercedes-Benz since 1997. In terms of size, it is slotted in between the smaller GLC and the larger GLS, the latter with which it shares platforms. </Text>
            <Text style={styles.cardFooter}>$100,000/- </Text>


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
        marginHorizontal:8,
        marginVertical:12,
        
        
    },
    cardElevated:{
        backgroundColor:'#4F5D2F',
        shadowOffset:{
            width:1,
            height:1,
        }
    },
    cardTitle:{
        fontSize:36,
        fontWeight:'600',
      
       
    },
    cardLabel:{
        fontSize:16,
        marginVertical:6,
        color:'#D8FFDD'
    },
    carddescr:{
        fontSize:18,
        marginVertical:18,
        fontWeight:'800',
        flexShrink:1,
        flexWrap:'wrap'

    },
    cardFooter:{
        marginVertical:12,
        fontSize:28,
        color:'#C1DF1F',
        flex:1,
        textAlign:'center'
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

})