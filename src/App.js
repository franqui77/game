import React, { useState, useEffect } from 'react';
import { TextInput, Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { loadData } from './functions';
import { validWord } from './functions';
import Icon from './Icon';
import { LinearGradient } from 'expo-linear-gradient';
import colors from './colors';

const Item = ({ item }) => (
  <LinearGradient colors={[ item.touch ? colors.greenLight : colors.orangeLight, 
                            item.touch ? colors.green : colors.orange  ]} 
                  style={[styles.item, item.touch ? { borderColor: 'transparent' } : {}]}>
    <Text style={ styles.textItem }>{item.value}</Text>
  </LinearGradient>
);

export default function App() {
  const [dataArray, setDataArray] = useState([]);
  const [lastTouched, setLastTouched] = useState({});
  const [load1or2, setLoad1or2] = useState(false);
  const [word, setWord] = useState('');
  const [validate, setValidate] = useState('invalid');

  const clear = () => {    
    setLoad1or2(!load1or2);
    setDataArray(loadData(load1or2));
    setLastTouched({});
    setWord('');
  }

  const onTouch = (item, index) => {    
    var temp = dataArray;
    
    if (!temp[index].touch) {
      if ((temp[index].ii >= lastTouched.ii - 1 &&
        temp[index].ii <= lastTouched.ii + 1 &&
        temp[index].jj >= lastTouched.jj - 1 &&
        temp[index].jj <= lastTouched.jj + 1) || word == '') {

        let newWord = word + temp[index].value;
        temp[index].touch = true;
        setLastTouched(temp[index]);
        setDataArray(temp);
        setWord(newWord);
        setValidate(validWord(newWord));
      }
    }
  }

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => onTouch(item, index)} >
      <Item item={item} />
    </TouchableOpacity>
  );

  useEffect(() => {
    (async () => {
      setDataArray(loadData(load1or2));
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => clear()} >
        <View style={styles.menuRight}>
          <Text style={styles.textMenu}>clear word</Text>
          <Icon />
        </View>
      </TouchableOpacity>

      <FlatList
        data={dataArray}
        renderItem={renderItem}
        keyExtractor={item => item.ii + '-' + item.jj}
        numColumns={4}
        contentContainerStyle={styles.centerContainer}
        extraData={lastTouched}
      />

      <View style={styles.bottomContainer}>
        <Text style={styles.word}>{word}</Text>
        {word != '' && <Text style={[styles.validate, validate == 'valid' ? { color: colors.greyLight } : {}]}>{validate}</Text>}
      </View>

    </SafeAreaView>
  );
}
