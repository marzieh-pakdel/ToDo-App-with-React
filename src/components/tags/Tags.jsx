import { useEffect, useState } from 'react';
import Button from '../common/button/Button';

const Tags = ({ isAdded ,setCategory }) => {
    const categories = ["Groceries", "Payments", "College"];
    const [selectedCategory, setSelectedCategory] = useState("");

    function handleSelectedCategory(category) {
        if (selectedCategory === category) {
            setSelectedCategory(null);
            setCategory("")
          } else {
            setSelectedCategory(category);
            setCategory(category);
            
          }
    }

    useEffect(() => {
        if(isAdded === true) {
            setSelectedCategory(null)
        }
    },[isAdded])

    return (
        <div className='flex justify-between w-full'>
            {categories.map((category) => (
                <Button
                    onClick={() => handleSelectedCategory(category)}
                    key={category}
                    title={category}
                    buttonStyle={`${selectedCategory === category ? 'bg-selected-tag' : 'bg-tag-bg'}
                    text-white rounded-[4px] py-1 px-8 text-xs font-normal`}
                />
            ))}
        </div>
    );
};

export default Tags;