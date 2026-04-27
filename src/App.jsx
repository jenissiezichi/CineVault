import "react";
import './App.css'
import './index.css'
import Landing from "./components/Landing.jsx";
import {useState, useEffect} from 'react'

function App() {
const [query , setQuery] = useState('');
 const handleSearch = () => {
     console.log("Searching for: " + query);
 }

  return (


<Landing
query={query}
setQuery={setQuery}
handleSearch={handleSearch}
/>

  )
}

export default App
