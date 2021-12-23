import React from 'react';

const CardsList = ({ data, handleDelete, handleEdit }) => {
    // console.log('CardsList: ', data);
    return (
        <div className='todo-cards-container'>
            {data.map((item) => (
                <div key={item.id} className='todo-card'>
                    <div className='todo-card-header'>
                        <h3>{item.question}</h3>
                        <p>{item.answer}</p>
                    </div>
                    <div className='todo-card-footer'>
                        <button onClick={() => handleEdit(item)}>Edit</button>
                        <button onClick={() => handleDelete(item)}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardsList;
