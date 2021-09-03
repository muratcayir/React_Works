import React from 'react'
import initFontAwesome from "../../components/addition/initFontAwesome"
import Header from "../../components/header/Header"
import RecentGames from "../../components/recentGames/RecentGames"
import "./home.scss"

initFontAwesome();

function Home() {
  return (
    <>
    <Header/>
    <RecentGames/>
    </>
  )
}

export default Home;