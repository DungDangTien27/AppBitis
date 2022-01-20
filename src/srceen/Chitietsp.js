import React from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Chitietsp = ({navigation,route}) => {

    const s = route.params;

    return(
        <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={style.header}>
        <MaterialIcons name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <MaterialIcons name="shopping-cart" size={28} />
      </View>
      <View style={style.images}>
        <Image source={s.img} style={{resizeMode: 'contain', flex: 1}} />
      </View>
      <View style={style.ttsp}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={style.line} />
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Shop bán hàng Bitis's</Text>
        </View>

        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{s.Tensp}</Text>
          <View style={style.gia}>
            <Text
              style={{
                marginLeft: 15,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 10,
              }}>
              {s.Gia} đ
              </Text>
          </View>
        </View>

        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Chi tiết:</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}>
            {s.Thongtin}
          </Text>
          </View>
          </View>
          </SafeAreaView>
    );
}

const style = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      images: {
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      ttsp: {
        flex: 0.55,
        backgroundColor: '#f2f2f2',
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 30,
      },
      line: {
        width: 25,
        height: 2,
        backgroundColor: 'gray',
        marginBottom: 5,
        marginRight: 3,
      },
      gia: {
        backgroundColor: 'red',
        width: 100,
        height: 40,
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
      },
})

export default Chitietsp;
