import React, { useState } from 'react';

function App() {
  const [itemslist, setItemsList] = useState([]);
  const [newitem, setNewItem] = useState('');
const [alert,setalert]=useState(false)
  const addToList = () => {
    if (newitem!==''){
    setItemsList([...itemslist, newitem])
    setNewItem('')
    setalert(true)
    setTimeout(() => {
      setalert(false);
    }, "2000")
  };
  };

  const deleteItem = (index) => {
    const updatedList = [...itemslist];
    updatedList.splice(index, 1);
    setItemsList(updatedList);
  };

  return (
    <>
      <h2>grocery bud setup</h2>
{      alert ? <p id='alert'>your item has been adeed</p> : ''
}      <div className='layout'>
        <div className='grocery'>
          <h2>enter some items</h2>
          <input
            placeholder='enter some items here'
            value={newitem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button onClick={addToList}>add</button>
          {itemslist.map((item, index) => (
            <div key={index + 1} className='item-list'>
              <p>{item}</p>
              <button className='Btn' onClick={()=>{deleteItem(index)}}>clear</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
