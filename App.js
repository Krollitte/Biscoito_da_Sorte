import React, { Component } from 'react';
import { StyleSheet,
   Text,
   View,
   Image,
   TouchableOpacity
} from 'react-native';

const biscoito = require('./assets/biscoito.png');
const biscoitoAberto = require('./assets/biscoitoAberto.png');

class App extends Component {

constructor(props){
  super(props)
  this.state ={
    textofrase:'Alguma frase foda',
    img: require('./assets/biscoito.png')
  };
 this.quebraBiscoito = this.quebraBiscoito.bind(this);
 this.resetar = this.resetar.bind(this)
  this.frases = [
    'Seja sempre foda',
    'Pra cima de moa'
  ];
}
quebraBiscoito(){
  let number = Math.floor(Math.random()*this.frases.length);

  this.setState({
    textofrase: this.frases[number],
    img:require('./assets/biscoitoAberto.png')
  })
}
resetar(){
  this.setState({
    textofrase:'Alguma Frase foda',
    img: require('./assets/biscoito.png')
  })
}

  render(){
    return(
    <View style={styles.container}>
      <Image style={styles.img} source={this.state.img}/>

      <Text style={styles.textofrase}>{'" '+this.state.textofrase+' " ' }</Text>
      <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito }> 
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={this.resetar }> 
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Resetar biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

    img: {
    width:250,
    height:250
    },

    botao:{
      width:230,
      height:50,
      borderWidth:2,
      borderColor:'#dd7b22',
      borderRadius:25
    },

    textofrase: {
      fontSize:20,
      color:'#dd7b22',
      margin:30,
      fontStyle:'italic',
      textAlign:'center'
    },

    btnArea: {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row'
    },

    btnText: {
      fontSize:18,
      fontWeight:'bold',
      color:'#dd7b22'
    }
});
 
export default App;