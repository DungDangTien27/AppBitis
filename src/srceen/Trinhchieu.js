import React,{Component} from "react";
import {View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {FastImage} from 'react-native-fast-image';

export default class Trinhchieu extends Component{

    constructor(props){
      super(props);
      this.state ={
        images:[
          "https://file.hstatic.net/1000230642/collection/banner_1_d29c9bc4b7d648c5892a946dc5d87c7f_master.jpg",
          "https://file.hstatic.net/1000230642/collection/artboard_5-100_8ffdb4f65d454d3b817d9d6e2eaec1a7_master.jpg",
          "https://file.hstatic.net/1000230642/file/banner_giam_50__f6b5b387fa2a475982bbc15b7c724ef8.jpg",
          "https://file.hstatic.net/1000230642/file/bannerklara1_d39aeaaeb1c449a9893dd1485a65cc52.png",
          "https://file.hstatic.net/1000230642/collection/banner-kid_528d8f14866f4e498e2c3a5f73bf9761_master.jpg",
          "https://file.hstatic.net/1000230642/file/banner-be-trai_d4d5c86d3b7845e5876752376099a6af_master.jpg",
          "https://file.hstatic.net/1000230642/collection/artboard_1_copy_2_681d9abb347d49d7a0cab3a6e6471027_master.png",
          "https://file.hstatic.net/1000230642/collection/banner_2_5bb1ad24c8614286a924e55e5d04ee5c_master.jpg",
  
        ] 
      };
    }
    render(){
    return(
        <View>
        <SliderBox
ImageComponent={FastImage}
images={this.state.images}
sliderBoxHeight={80}
onCurrentImagePressed={index => console.warn('image ${index} pressed' )}
dotColor ="#FFEE58"
inactiveDotColor="#90A4AE"
paginationBoxVerticalPadding={20}
autoplay
circleLoop
resizeMethod={'resize'}
resizeMode={'cover'}
paginationBoxStyle={{
  position: "absolute",
  bottom: 0,
  padding: 0,
  alignItems:"center",
  alignSelf:"center",
  justifyContent: "center",  
  paddingVertical: 10,
}}
dotStyle={{
width: 10,
height: 10,
borderRadius: 5,
marginHorizontal: 0,
padding: 0,
margin: 0,
backgroundColor: "rgba(128, 128, 128, 0.92)"
}}
ImageComponentStyle={{borderRadius:15, width: '97%', marginTop: 5}}
imageLoadingColor="#2196F3"
/>
</View>
    )}
}