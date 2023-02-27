import './App.css';
import { useEffect, useState } from 'react';

function App() {

let [data, setData] = useState([])
let [search, setSearch] = useState('')

useEffect(() => {
fetch('https://emoji-api.com/emojis?access_key=dbdc63a3ca5aface144271d45ba7d90b22c8ffad')
.then(res => res.json())
.then(res => setData(res))
}, [])

let handleSearch = (e)=> {
  setSearch(e.target.value)
}

let handleSubmit = ()=> {
if(search !== '') {
  fetch('https://emoji-api.com/emojis?search=food&access_key=dbdc63a3ca5aface144271d45ba7d90b22c8ffad')
.then(res => res.json())
.then(res => { 
  if (res) {
    setData(res)
  }else{
    setData([])
  }
}
)
}
}
  return (
    <div className="App">
      <header className="App-header">
       <h1>Emojix</h1>
       <p className="header-text">A simple emoji search tool</p>
      
       <div className="search">
       <input type="search" placeholder="search for emoji..." className="search-bar"  value={search} onChange={(e)=>handleSearch(e)}/>
       <button className="" onClick={(e)=>handleSubmit()}><ion-icon name="search"></ion-icon></button>
      </div>
      </header>
      <div className="container">

      {
        data.map((e, i) => 
        <div className="card" key={e.slug}>
          <p className="smiley">{e.character}</p>
          <span className="smiley-name">{e.unicodeName}</span>
        </div>
        )
      }

        
       
      </div>
      
    </div>
    
  );
}

export default App;
