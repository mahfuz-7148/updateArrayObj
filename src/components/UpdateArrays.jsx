import {useState} from "react";
const UpdateArrays = () => {
    const [lists, setLists] = useState([])
    const [input, setInput] = useState('')
    const deleteList = index => {
        setLists(lists.filter((item, i) => i !== index))
    }
    return (
    <>
        <h1>
            List
        </h1>
        <ul>
            {lists.map((list, index) => (
                <li key={index} onClick={()=>deleteList(index)}>{list}</li>
            ))}
        </ul>

        <input  value={input} onChange={e => setInput(e.target.value)}   />
        <button className='bg-amber-200 text-teal-800 p-3 rounded-2xl ml-5' onClick={()=> {
            setLists([...lists, input]), setInput('')}}>Add</button>
    </>
    );
};
export default UpdateArrays;