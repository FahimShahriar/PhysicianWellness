import { StyleSheet } from 'react-native';
import RF from "react-native-responsive-fontsize"

export default StyleSheet.create({
  row:{
    justifyContent: 'space-evenly', 
    flexDirection: 'row', 
    flex:1, 
    alignItems: 'center',
  },
  rowTop:{
    justifyContent: 'space-evenly',  
    flexDirection: 'row', 
    flex:0.25, 
    alignItems: 'flex-start', 
    paddingTop: '5%'
  },
  rowBottom:{
    justifyContent: 'space-evenly',  
    flexDirection: 'row', 
    flex:0.25, 
    alignItems: 'flex-end', 
    paddingBottom: '3%'
  },
  button: {
    flex:1,
    backgroundColor:'rgba(0, 0, 0, 0.05)',
    borderRadius:15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1

  },
  column: {
    flex:1,
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  icon: {
    flex:0.9,
    aspectRatio:1,
    resizeMode: 'contain'
  },
  RectIcon: {
    flex:0.2,
    aspectRatio: 1,
    resizeMode: 'contain',
    alignItems: 'flex-start',
   
  },
  iconText: {
    textAlign: 'center' , 
    fontSize: RF(2),
    
  },
  background:{
    flex: 1,
    resizeMode: 'cover'
 
  },
  descriptionText: {
    fontSize: RF(2),
    textAlign: 'center',
    
    flex:1,  
  },
  description:{
    justifyContent: 'space-evenly',  
    flexDirection: 'row', 
    flex:0.5, 
    alignItems: 'flex-end', 
    paddingBottom: '3%',
    paddingLeft: '2%',
    paddingRight: '2%'
  },
  fill: {
    flex:1, 
  },
  fill1: {
    flex:1, 
    backgroundColor: 'white'
  },
});
