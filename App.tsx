import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native';

export default function App() {

  let c = {
    'USD': '508.60',
    'EUR': '563.05',
    'RUB': '4.73',
    'TG': '1'
  }
  let [val, setVal] = useState("");
  let [selectedVal1, setSelectedVal1] = useState('USD');
  let [selectedVal2, setSelectedVal2] = useState('USD');
  let [res, setRes] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.exchange_container}>
        <TextInput style={styles.input} value={val} onChange={(e) => {
          setVal(e.target.value);
        }}/>
        <Picker selectedValue={selectedVal1}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedVal1(itemValue);
          }}
        >
          <Picker.Item label="Доллар США" value="USD"/>
          <Picker.Item label="Евро" value="EUR"/>
          <Picker.Item label="Рубль" value="RUB"/>
          <Picker.Item label="Тенге" value="TG"/>
        </Picker>
      </View>
      <View style={styles.exchange_container}>
        <Text style={styles.input}>{res}</Text>
        <Picker selectedValue={selectedVal2}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedVal2(itemValue);
          }}
        >
          <Picker.Item label="Доллар США" value="USD"/>
          <Picker.Item label="Евро" value="EUR"/>
          <Picker.Item label="Рубль" value="RUB"/>
          <Picker.Item label="Тенге" value="TG"/>
        </Picker>
      </View>
      <Button title='Конвертировать' onPress={(e) => {
        e.preventDefault();
        if(selectedVal1 == selectedVal2) {
          setRes(val);
        } else {
          if(selectedVal1 != 'TG') {
            console.log('asd');
            let tmp = val*c[selectedVal1];
            setRes(Math.ceil((tmp/c[selectedVal2])*100)/100);
          } else {
            setRes(Math.ceil((val/c[selectedVal2])*100)/100);
          }
        }
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  exchange_container: {
    padding: 10,
    flex: 1,
    flexDirection: 'row'
  }
});
