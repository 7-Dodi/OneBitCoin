import { StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';

import { CurrentPrice } from './src/components/CurrentPrice';
import { HistoryGraphic } from './src/components/HistoryGraphic';
import { QuotationList } from './src/components/QuotationsList';

//Função para formartar as datas
function addZero(number){
  if (number <= 9) {
      return "0" + number
  }
  return number
}

//Função para formatar a url para a pesquisa de informações
function url(qtdDays){
  const data = new Date();
  const listLastDays = qtdDays;
  const end_date = `${data.getFullYear()}-${addZero(data.getMonth() + 1)}-${addZero(data.getDate())}`;
  data.setDate(data.getDate() - listLastDays)
  const start_date = `${data.getFullYear()}-${addZero(data.getMonth() + 1)}-${addZero(data.getDate())}`;
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;
}

//Função para a pesquisa de dados
async function getListCoins(url){
  let response = await fetch(url);
  let returnApi = await response.json();
  let selectionListQuotations = returnApi.bpi;
  const queryCoinsList = Object.keys(selectionListQuotations).map((key) => { 
    return { 
      data: key.split("-").reverse().join("/"), 
      valor: selectionListQuotations[key]
    }
  })
  let data = queryCoinsList.reverse();
  return data;
}

//Função para listar os dados para o grafico
async function getPriceCoinsGraphic(url){
  let responseG = await fetch(url);
  let returnApiG = await responseG.json();
  let selectionListQuotationsG = returnApiG.bpi;
  const queryCoinsList = Object.keys(selectionListQuotationsG).map((key) => { 
    return {  
      valor: selectionListQuotationsG[key]
    }
  })
  let dataG = queryCoinsList.reverse();
  return dataG;
}

export default function App() {
  const [coinsList, setCoinsList] = useState([]);
  const [coinsGraphcList, setCoinsGraphicList] = useState([0]);
  const [days, setDays] = useState(30);
  const [updateData, setUpdateData] = useState(true);
  const [price, setPrice] = useState();

  function updateDay(number){
    setDays(number);
    setUpdateData(true);
  }

  function priceCotation () {
    setPrice(coinsGraphcList.pop());
  } 

  useEffect(()=> {

    getListCoins(url(days)).then((data) => {
      setCoinsList(data);
    });

    getPriceCoinsGraphic(url(days)).then((dataG) => {
      setCoinsGraphicList(dataG);
    });
    priceCotation();
    if (updateData) {
      setUpdateData(false);
    }

    console.log(coinsGraphcList)

  }, [updateData])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor='#fff'
        barStyle="dark-content"
      />
      
      <CurrentPrice price={price}/>
      <HistoryGraphic infoDataGraphic={coinsGraphcList}/>
      <QuotationList filterDay={updateDay} listTransactions={coinsList}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 0
  },
});
