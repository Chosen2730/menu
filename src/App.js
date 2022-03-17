import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';



function App() {
const allCategories = ['all', ...new Set(items.map((item)=> item.category))];
const [categories, setCategories]=useState(allCategories);
const [menuItems, setMenuItems] = useState(items);

const filteredItems = (category)=>{
  if (category === 'all'){
    setMenuItems(items);
    return;
  }
  const newItems = items.filter((newItem)=> newItem.category === category);
  setMenuItems(newItems);
}

  return<>
    <section className='menu section'>
    <div className='title'>
    <h1>Our Menu</h1>
      <div className="underline"></div>
    </div>
    </section>
    <Categories filteredItems={filteredItems} categories={categories}/>;
    <Menu items={menuItems}/>
  </>
}

export default App;