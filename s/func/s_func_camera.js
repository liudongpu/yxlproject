
import SFuncTop from '../../s/func/s_func_top';
import SFuncApi from '../../s/func/s_func_api';


import ImagePicker from 'react-native-image-picker';
const options = {
  title: SFuncTop.topLangBase().upLang('camera_select'), // specify null or empty string to remove the title
  cancelButtonTitle: SFuncTop.topLangBase().upLang('camera_cancel'),
  takePhotoButtonTitle: SFuncTop.topLangBase().upLang('camera_photo'), // specify null or empty string to remove this button
  chooseFromLibraryButtonTitle: SFuncTop.topLangBase().upLang('camera_lib'), // specify null or empty string to remove this button
  cameraType: 'back', // 'front' or 'back'
  mediaType: 'photo', // 'photo' or 'video'
  videoQuality: 'medium', // 'low', 'medium', or 'high'
  durationLimit: 10, // video recording max time in seconds
  maxWidth: 1000, // photos only
  maxHeight: 1000, // photos only
  aspectX: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
  aspectY: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
  quality: 1, // 0 to 1, photos only
  angle: 0, // android only, photos only
  allowsEditing: true, // Built in functionality to resize/reposition the image after selection
  noData: true, // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)

};




export default class SFuncCamera
{

  //打开选择相机 fCallBack 选择成功的回调  fLoading 选择文件时的加载动画
  static cammerOpen(fCallBack,fLoading)
  {
    ImagePicker.showImagePicker(options, (response) => {
    //console.log('Response = ', response);

    if (response.didCancel) {
      console.warn('User cancelled image picker');
    }
    else if (response.error) {
      console.warn('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      console.warn('User tapped custom button: ', response.customButton);
    }
    else {
      // uri (on iOS)
      //const source = {uri: response.uri.replace('file://', ''), isStatic: true};
      // uri (on android)
      //const source = {uri: response.uri, isStatic: true};
      fLoading(true);
      SFuncApi.uploadFile(response.uri,(o)=>{fLoading(false);fCallBack(o.resultObject);});
      //fetch('',opt).then((response)=>
    }
    });
  }


}
