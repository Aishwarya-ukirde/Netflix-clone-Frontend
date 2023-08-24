import React from 'react'
import requests from '../Request'
import Main from '../components/Main'
import Row from '../components/Row'

const Home = () => {
  return (
    <div>
    <Main/> 
    <Row  rowID='1' title='up coming ' fetchURL={requests.requestsUpcoming}/> 
    <Row  rowID='2' title='Popular' fetchURL={requests.requestsPopular}/>     
    <Row  rowID='3' title='Trending' fetchURL={requests.requestsTrending}/>     
    <Row  rowID='4' title='Top ' fetchURL={requests.requestsTopRated}/>  
    <Row  rowID='5' title='Horror' fetchURL={requests.requestsHorror}/>            
    </div>
  )
}

export default Home
