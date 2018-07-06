import { StyleSheet } from 'react-native';

export default  StyleSheet.create({
    //Global
    FirstScreen:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    button: {
      width: 160,
      height: 26,
      backgroundColor: '#70BE70',
      borderRadius: 2,
      margin: 10,
    },
    text:{
      textAlign: 'center',
      color: '#ffffff',
      fontSize: 18,
    },
    //ScreenA
    container_ScreenA: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#D33232',
    },
    //ScreenB
    container_ScreenB: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4D98EC',
    },
  });