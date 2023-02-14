import './App.css';
import {dataMovies}from './Data.js';
import Movieliste from './component/movieliste/Movieliste'
import Navbar from './component/navbar/Navbar'
import Add from './component/Add/Add';
import { useState } from 'react';
import Filter from './component/Filter/Filter';




function App() {
  const [rating, setRating] = useState(0)
  const [newList, setNewList] = useState(dataMovies)
  const [input,setInput]=useState("");
  const addNewMovie=(movie)=>{setNewList([...newList,{...movie,id:newList.lenght+1}])}
  const deleteMoviee=(x)=>{
    setNewList(newList.filter((el)=>el.id!=x))
  }
  return (
    <div className="App">
      <Navbar/>
      <Filter setInput={setInput} setRating={setRating}/>
  <Movieliste data={newList.filter((el)=>el.title.toLocaleLowerCase().includes(input.toLocaleLowerCase().trim())&& el.rating>=rating)} deleteMoviee={deleteMoviee}/>
  <Add addNewMovie={addNewMovie}/>
    </div>
  );
}

export default App;
