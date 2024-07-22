import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { IoTrashBinOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

const Container = () => {
    const [isComplete, setIsComplete] = useState(false);
    const [allTodos, setTodos] = useState([]);
    const [allTitles, setTitles] = useState('');
    const [allDesc, setAllDesc] = useState('');

    const handleButtonClick = () => {
        setIsComplete(!isComplete);
    };

    return (
        <div className='w-2/3 bg-neutral-700 flex flex-col p-6 m-auto mt-20'>
            <div className='w-full flex space-x-20 '>
                <Input text1='Title' name="what's the title of your task" ></Input>
                <Input text1='Description' name="write a brief description on the task"></Input>
                <button className='w-32 h-14  mt-12 bg-green-600 text-white'>Add</button>
            </div>
            <hr className='mt-10 bg-gray-800' />
            <div className='flex'>
                <Button 
                    title='To Do' 
                    className={`w-32 p-4 mt-12 ${!isComplete ? 'bg-green-700' : 'bg-neutral-700'} text-white`}
                    onClick={handleButtonClick}
                />
                <Button 
                    title='Completed' 
                    className={`w-32 p-4 mt-12 ${isComplete ? 'bg-green-700' : 'bg-neutral-700'} text-white`} 
                    onClick={handleButtonClick}
                />
            </div>
            <div className='text-white p-4 flex w-full h-32 bg-neutral-600 shadow-md mt-10'>
                <div className='flex flex-col'>
                <h1 className='text-xl font-bold text-green-600' >Task 1</h1>
                <div className='flex w-full space-x-44' class="box">
                    <div>
                <p className='pt-4 '>Description is the most wonderful thing</p>
                    </div>
                <div className='flex mt-5 tems-center'>
                    <IoTrashBinOutline style={{width:108, fontSize:25}} className='hover:text-red-700 cursor-pointer'/>
                    <FaCheck style={{color: 'green',  fontSize:25}} className='cursor-pointer' />
                </div>
            </div>
                </div>
                
            </div>
        </div>
    );
};

export default Container;
