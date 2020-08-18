import React from 'react'

const Categories = ({ activeItem, items, onClick }) => {
  return (
    <div className="categories">
      <ul>
        {items.map((item, index) => (
          <li
            // onClick={onClick.bind(this, index)}
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
