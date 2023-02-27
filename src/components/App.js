import React, {useState, useEffect} from "react";
import Navbar from "./navbar-component/Navbar";
import Search from "./search-component/Search";
import Card from "./card-component/Card";
import { collection, getDocs, doc } from "firebase/firestore";
import {db} from '../firebase';

function App() {
  const [teachers, setTeachers] = useState([]);
  const [query, setQuery] = useState("");
  const [cardsData, setCardsData] = useState([]);
  
  // TO DO with Firebase:
  const getData = async () => {
    const docRef = collection(db, 'teachers');
    const snapshot = await getDocs(docRef);

    let data = []
    snapshot.forEach(doc => {
      data.push(doc.data())
    })
    setTeachers(data)
  };

  useEffect(() => {
    getData();
  }, []);



  const updateQuery = (query) => {
    console.log(query);
    setQuery(query);

    // SEARCH DATA
    
    setCardsData(teachers);
    console.log(teachers);
  }

  return (
    <div>
      <Navbar/>
      <Search
        onSearch={updateQuery}
      />
      {
        teachers.map((card) => {
          return (
            <Card
            name={card.name}
            recommendations={card.recommendations}
            courses={card.courses}
            />
          )
        })
      }
    </div>
  );
}

export default App;
