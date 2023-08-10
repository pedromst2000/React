import { useEffect, useState } from "react"

function App() {

  const [resourceType, setResourceType] = useState("");
  const [items, setItems] = useState([]);

  const search = async () => {
    const response = await fetch(`https://dummyjson.com/${resourceType}`);
    const data = await response.json();

    console.log(data.products);
    setItems(data.products);
  }

  useEffect(() => {
    search();
  }, [resourceType])
  

  return (
    <div>
    
      <button onClick={() => setResourceType("products")}>products</button>

      <ul>
        {
          items.map((item)=> {
            return <li key={item.id}>{item.title}</li>
          })
        }
      </ul>


    </div>
    )
}

export default App
