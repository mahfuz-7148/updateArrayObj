import  { useState } from 'react';

const UpdateArrays = () => {
    const [foods, setFoods] = useState([]);
    const [input, setInput] = useState('');

    const addFood = () => {
        if (input) setFoods([...foods, input]);
        setInput('');
    };

    const removeFood = (index) => setFoods(foods.filter((item, i) => i !== index));

    return (
        <div>
            <h1 className='text-5xl mt-10'> List</h1>
            <ul className='mt-10 text-2xl'>
                {foods.map((food, index) => (
                    <li key={index} onClick={() => removeFood(index)}>
                        {food}
                    </li>
                ))}
            </ul>
            <input className='placeholder-green-300 p-3 border-2 outline-none mt-10'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Add food'
            />
            <button className='bg-amber-200 text-teal-800 p-3 rounded-2xl ml-5' onClick={addFood}>Add</button>
        </div>
    );
};

export default UpdateArrays;