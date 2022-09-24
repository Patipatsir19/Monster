import { useState, useEffect, ChangeEvent } from 'react';

import './App.css';
import SearchBox from './component/Search-box/Search-box.component';
import Cardlist from './component/card-list/card-list.component';

import { getData } from './utils/data.utils'

export type Monster = {
  id: string;
  name: string;
  email: string;
}


function App() {

  const [searchField, setsearchField] = useState('');
  const [monster, setMonster] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monster)


  useEffect(() => {
    const fetchUser = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonster(users);
    }

    fetchUser();
  }, [] )

  useEffect(() => {
    const newFilteredMonsters = monster.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });
    
    setFilteredMonsters(newFilteredMonsters)
  }, [monster, searchField])



  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setsearchField(searchFieldString)
  }


  return (
    <div className='App'>
        <h1 className='App-title'>oKeviNo Monster</h1>

        <SearchBox
          className='moonster-search-box'
          onChangeHandler={onSearchChange}
          placeholder='search Monster'
        />
        <br/>
        <Cardlist monster={filteredMonsters}/>
    </div>
  );
}

export default App;
