import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Categoria } from './types/Categoria';
import { Item } from './types/Item';
import { categorias } from './data/categorias';
import { items } from './data/items';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
          <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
      
        <InfoArea currentMonth={currentMonth}/>

        {/* Área de cadastro */}

        <TableArea list={filteredList}/>
      </C.Body>
    </C.Container>
  );
}

export default App;