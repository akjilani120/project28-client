import React from 'react';
import AddCanvas from './AddCanvas';

const AtBoard = ({user}) => {
    return (
        <div className='atboard-header'>
           <h1 className='text-primary text-center py-3'>Artboard</h1>
        
         <AddCanvas user ={user}/>
        </div>
    );
};

export default AtBoard;