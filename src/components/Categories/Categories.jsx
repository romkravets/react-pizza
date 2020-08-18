import React, {useState} from 'react'

const Categories = ({items, onClick }) => {
   const [activeItem, setActiveItem] = useState(0);

   const onSelectItem = (index) => {
      setActiveItem(index);
   }
  return (
    <div className="categories">
      <ul>
        {items.map((item, index) => (
          <li
            onClick={() => onSelectItem(index)}
            key={index}
            className={activeItem === index ? 'active' : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
