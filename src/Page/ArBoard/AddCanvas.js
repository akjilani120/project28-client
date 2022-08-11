import React from 'react';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'
const AddCanvas = ({user}) => {
    console.log("add canvas" , user)
    const { editor, onReady } = useFabricJSEditor()
    const onAddCircle = () => {
        editor?.addCircle()
    }
    const onAddRectangle = () => {
        editor?.addRectangle()
    }
    return (
        <div className='canvas-head '>
            <div className='' >
                 <FabricJSCanvas className="sample-canvas " onReady={onReady} />           
           
            <button disabled={!user} className='btn btn-primary px-4 m-3 text-center' onClick={onAddCircle}>Add circle</button>
            <button disabled={!user} className='btn btn-primary px-4 m-3 text-center' onClick={onAddRectangle}>Add Rectangle</button>
            </div>
        </div>
    );
};

export default AddCanvas;