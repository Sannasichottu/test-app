import { useEffect, useState } from "react";
import {  fetchRecipes } from "./utils/Api";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";


function App() {

  const [recipes, setRecipes] = useState([])
  const [loading, setLoading]=useState(true)

  useEffect(() =>  {
    const fetchRecipesData = async () => {
      try{
        const data = await fetchRecipes()
      // const data = await fetchRecipesById(22)
      setRecipes(data)
      setLoading(false)
      }catch{
        setLoading(false)
      }
      
    }
    fetchRecipesData()
  },[])


  return (
    <div className="App">
     <Header title={'Recie App'} />
     {loading ? <Loader name="My data is loading" /> :  recipes.map((obj, index) => <div key={index} >  {obj.title} </div> ) }

      {/* {recipes.title} */}
    </div>
  );
}

export default App;

