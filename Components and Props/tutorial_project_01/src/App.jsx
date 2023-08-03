// import ListData from "./Components/ListData";

import TableData from "./Components/TableData";

export default function App() {
  
  const countries = [
    {
      id:1, country: 'USA', capital: 'Washington DC',
    },
    {
      id:2, country: 'Canada', capital: 'Ottawa',
    }
  ];
  
  return (
    <div>
      App
      {/* <ListData countriesArray={countries} /> */}
      <TableData countriesArray={countries} />
    </div>
    
  )
}

