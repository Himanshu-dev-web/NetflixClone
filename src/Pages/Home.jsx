import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'
const Home = () => {
    return (
        <div>
            <Main/>
            <Row RowId='1' title='UpComing' fetchURL={requests.requestUpcoming}/> 
            <Row RowId='2' title='Popular' fetchURL={requests.requestPopular}/> 
            <Row RowId='3' title='Horror' fetchURL={requests.requestHorror}/> 
            <Row RowId='4' title='Trending' fetchURL={requests.requestTrending}/> 
            <Row RowId='5' title='TopRated' fetchURL={requests.requestTopRated}/> 

        </div>
    )
}

export default Home
