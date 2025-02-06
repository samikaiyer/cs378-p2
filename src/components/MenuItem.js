import React from 'react';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
import './MenuItem.css';

const MenuItem = ({ title, description, src, price }) => {
  return (
    <div className="flex-container">
      <img src={"/images/" + src} alt="Gyoza" />
      <div className="text-content-container">
        <div className="title">{title}</div>
        <div>{description}</div>
        <div className="bottom-row">
          <span className="menu-item-price">${price}</span>
          <button className="btn btn-primary rounded-pill">Add</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;