import React , {useState} from 'react'
import Header from '../components/Header.jsx'
import ExploreMenu from '../components/ExploreMenu.jsx'
import FoodDisplay from '../components/FoodDisplay.jsx'
import AppDownload from '../components/AppDownload.jsx'

const Home = () => {

  const [category,setCategory] = useState("all")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
