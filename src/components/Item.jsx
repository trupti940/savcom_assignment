import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import '../App.css';

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

export default Item;
