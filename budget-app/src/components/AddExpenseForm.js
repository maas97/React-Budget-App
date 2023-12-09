import React, {useState, useContext} from 'react';
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';

const AddExpense = ()=>{

    const {dispatch} = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (e)=>{
        e.preventDefault();
        // alert('name: ' + name + ' cost: ' + cost)

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label for='name'>Name</label>
                    <input type='text' value={name} onChange={(event)=>{ setName(event.target.value)}} required='required' className='form-control' id='name'/>
                </div>
                <div className='col-sm'>
                    <label for='cost'>Cost</label>
                    <input required='required' value={cost} onChange={(event)=>{setCost(event.target.value)}} type='text' className='form-control' id='cost'></input>
                </div>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary'>Save</button>
                </div>
            </div>
        </form>
    )
}

export default AddExpense;