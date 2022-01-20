import React from 'react';
import { StyleSheet, View ,Text, StatusBar} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const canhan = () => {
  return(
      <View style={styles.screenContainer}>
        <StatusBar barStyle="lingt-content" />
        {/* */}
        <View style={styles.headerContainer}>
        {/* */}
        <View style={styles.cartContainer}>
        <View style={styles.carIcon}/>
        </View>
        {/* */}
        <Text> Cá Nhân </Text>
        {/* */}
        <View style={styles.cartContainer}>
            <FontAwesome
            name="shopping-cart"
            size ={HEADER_ICON_SIZE}
            color="#fff"
            />
        </View>
        </View>
        {/* */}
    <View style={styles.bodyContainer}>
     <View style={styles.userContainer}>
        <View style={styles.avartaContainer}>
            <MaterialIcons name="person" size={26} color="#fff"></MaterialIcons>
        </View>
        <View style={styles.textContainer} >
            <Text style={styles.welcomText}> Chào Mừng Bạn Đến Với Bitis</Text>
            <Text style={styles.authText}> Đăng Nhập/Đăng Ký</Text>
        </View>
        <FontAwesome name="angle-right" size ={26} color="#1e88e5"/>
         </View>   
         {/* */}
         <View style={styles.itemContainer}>
             <MaterialIcons name="format-list-bulleted"
             size ={26} color="#1e1e1e"/>
             <Text style={styles.itemText}> Quản Lý Đơn Hàng </Text>
             <FontAwesome name="angle-right" size={25} color="1e1e1e"/>
         </View>
         <View style={styles.itemContainer}>
             <MaterialIcons name="cart-outline"
             size ={26} color="#1e1e1e"/>
             <Text style={styles.itemText}> Sản Phẩm Đã Mua </Text>
             <FontAwesome name="angle-right" size={25} color="1e1e1e"/>
         </View>
         <View style={styles.itemContainer}>
             <MaterialIcons name="eye-outline"
             size ={26} color="#1e1e1e"/>
             <Text style={styles.itemText}> Sản Phẩm Đã Xem </Text>
             <FontAwesome name="angle-right" size={25} color="1e1e1e"/>
         </View>
         <View style={styles.itemContainer}>
             <MaterialIcons name="heart-outline"
             size ={26} color="#1e1e1e"/>
             <Text style={styles.itemText}> Sản Phẩm Yêu Thích </Text>
             <FontAwesome name="angle-right" size={25} color="1e1e1e"/>
         </View>
         <View style={styles.itemContainer}>
             <MaterialIcons name="bookmark-oyutline"
             size ={26} color="#1e1e1e"/>
             <Text style={styles.itemText}> Sản Phẩm Mua Sau </Text>
             <FontAwesome name="angle-right" size={25} color="1e1e1e"/>
         </View>
         <View style={styles.itemContainer}>
             <MaterialIcons name="star-outline"
             size ={26} color="#1e1e1e"/>
             <Text style={styles.itemText}> Sản Phẩm Đánh Giá </Text>
             <FontAwesome name="angle-right" size={25} color="1e1e1e"/>
         </View>
         <View style={styles.itemContainer}>
             <Text style={styles.itemText}> Ưu Đãi cho chủ thẻ ngân hàng </Text>
             <FontAwesome name="angle-right" size={25} color="1e1e1e"/>
         </View>
         <View style={styles.itemContainer}>
             <Text style={styles.itemText}> Cài Đặt </Text>
             <FontAwesome name="angle-right" size={25} color="1e1e1e"/>
         </View>
         <View style={styles.itemContainer}>
             <MaterialIcons name="headphones"
             size ={26} color="#1e1e1e"/>
             <Text style={styles.itemText}> SHỗ Trợ </Text>
             <FontAwesome name="angle-right" size={25} color="1e1e1e"/>
         </View>
    </View>
      </View>
  );
};

const HEADER_ICON_SIZE =24;

const styles =StyleSheet.create({
    screenContainer:{
    flex:1,

    },
    headerContainer: {
        flexDirection: 'row',
        paddingTop: 50,
        backgroundColor: '#1e88e5',
        justifyContent: 'space-between',
        paddingBottom: 12,
      },
      cartContainer: {
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      cartIcon: {
        width: HEADER_ICON_SIZE,
      },
      headerText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
      },
    itemContainer:{
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 22,
    alignItems: 'center',

    },
userContainer:{
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 22,
    alignItems: 'center',
},
avartaContainer:{
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#1e88e5',
},
textContainer:{
    flex:1,
    marginLeft: 20,
},
welcomText:{
    color: '#828282',
},
authText: {
    color: '#1e88e5',
    fontSize: 18,
    fontWeight: '500',
},

}
);
export default canhan;     
