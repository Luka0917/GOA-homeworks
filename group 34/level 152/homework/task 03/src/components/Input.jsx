import { useState } from 'react'
import Text from './Text';

export default function Input(){
    const [value, setValue] = useState('');
    return (
        <>
            <div className='flex justify-center items-center flex-col h-screen'>
                <input type="text" placeholder="Enter text" value={value} onChange={(e) => setValue(e.target.value)} className='border-2 rounded-[5px]' />
                <Text inputText={value} />
            </div>
        </>
    )
}