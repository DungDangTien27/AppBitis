import React from 'react';
import { StyleSheet, Image, View ,Text, StatusBar, ScrollView,FlatList,Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Search1 from '../../assets/Search1.png';
import Cart from '../../assets/Cart.png';
import Trinhchieu from './Trinhchieu';
import Sp from './Sp';

const width = Dimensions.get('window').width / 2 - 30;

const Trangchu = ({navigation}) => {
const Card = ({s}) => {
  return(
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Chitiet', s)}>
      <View style={styles.dssp}>
        <View
          style={{
            height: 100,
            alignItems: 'center',
          }}>
          <Image
            source={s.img}
            style={{flex: 1, resizeMode: 'contain'}}
          />
        </View>

        <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 10}}>
          {s.Tensp}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
            {s.Gia} đ
          </Text>
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: 'red',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

  return (
    <View>
      <StatusBar barStyle="lingt-content" />

      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <Image name={Search1} style={{ width: 30, height: 30 }}></Image>
          <Text style={styles.inputText}>Bạn tìm kiếm gì hôm nay ?</Text>
        </View>
        <View style={styles.cartContainer}>
          <Image source={Cart} style={{ width: 30, height: 30 }}></Image>
        </View>
      </View>
      <View><Trinhchieu></Trinhchieu></View>
      <View style={styles.bodyContainer}>
       <View style={styles.sectionContainer} > 
        <Text style={styles.sectionTile} > Giày Bitis - Thương Hiệu Hàng Đầu </Text>

        <ScrollView horizontal ={true}>
          <View style ={styles.filterContainer}>
            {/* */}
            <View style={styles.filterActiveButtonContainer}>
              <Text style={styles.filterActiveText}> Về Bitis </Text>
              </View>
              {/* */}
            <View style={styles.filterInactiveButtonContainer}>
              <Text style={styles.filterInactiveText}> Giày Nam </Text> 
              </View>
              {/* */}
              <View style={styles.filterInactiveButtonContainer}>
              <Text style={styles.filterInactiveText}> Giày Nữ </Text> 
              </View> 
              {/* */} 
              <View style={styles.filterInactiveButtonContainer}>
              <Text style={styles.filterInactiveText}> Gosto </Text> 
              </View>
              {/* */}
              <View style={styles.filterInactiveButtonContainer}>
              <Text style={styles.filterInactiveText}> Giày Bé Trai </Text> 
              </View>
              <View style={styles.filterInactiveButtonContainer}>
              <Text style={styles.filterInactiveText}> Giày Bé Gái </Text> 
              </View>
              {/* */}
              <View style={styles.filterInactiveButtonContainer}>
              <Text style={styles.filterInactiveText}> Flash sale </Text> 
              </View>
              {/* */}
              <View style={styles.filterInactiveButtonContainer}>
              <Text style={styles.filterInactiveText}> Nông Sản </Text> 
              </View>
          </View>
        </ScrollView>
       </View> 
      </View>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={1}
        data={Sp}
        renderItem={({item}) => {
          return <Card s={item} />;
        }}
      />
    </View>
  );
}
 const styles = StyleSheet.create({
/* phần đầu trang */
headerContainer: {
  flexDirection: 'row',
  paddingTop: 10,
  paddingBottom: 4,
  backgroundColor: '#969696',
},
inputContainer:{
  backgroundColor: '#fff',
  flexDirection: 'row',
  flex: 1,
  marginLeft: 10,
  alignItems: 'center',
  marginBottom: 4,
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderRadius: 2,
},
inputText:{
  color: '#969696',
  fontSize: 14,
  marginLeft: 8,
  fontWeight: '500',
},
filterContainer:{
  flexDirection: 'row',
  marginTop: 10,
},
filterActiveButtonContainer:{
  backgroundColor: '#000000',
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 4,
  marginRight: 10,
},
filterActiveText:{
  color: '#00FF00',
},
filterInactiveButtonContainer:{
  backgroundColor: '#fff',
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 4,
  borderColor: '#5a5a5a',
  borderWidth: 1,
  marginRight: 10,
},
filterInactiveText:{
  color: '#ff0000',
},
dssp: {
  height: 225,
  backgroundColor: '#f2f2f2',
  width,
  marginHorizontal: 2,
  borderRadius: 10,
  marginBottom: 20,
  padding: 15,
},
 
}
  );
export default Trangchu;
