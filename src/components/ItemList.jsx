
import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import '../App.css'

const Item = ({ item, index, moveItem }) => {
  const [, ref] = useDrag({
    type: 'ITEM',
    item: { index },
  });

  const [, drop] = useDrop({
    accept: 'ITEM',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index; 
      }
    },
  });

  return (
    <div ref={(node) => drop(ref(node))} className="item">
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: '150px', 
          height: '150px', 
          objectFit: 'cover', 
        }}
      />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p><strong>Price: </strong>${item.price}</p>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  moveItem: PropTypes.func.isRequired,
};

const ItemList = ({ items, setItems }) => {
  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };

  return (
    <div className="item-list">
      {items.map((item, index) => (
        <Item
          key={item.id}
          item={item}
          index={index}
          moveItem={moveItem}
        />
      ))}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  setItems: PropTypes.func.isRequired,
};

export default ItemList;

