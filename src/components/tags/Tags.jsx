import { useState, forwardRef, useImperativeHandle } from 'react';
import Button from '../common/button/Button';

const Tags = forwardRef(({ setCategory }, ref) => {
    const categories = ["Groceries", "Payments", "College"];
    const [selectedCategory, setSelectedCategory] = useState("");

    function handleSelectedCategory(category) {
        setCategory(category);
        setSelectedCategory(category);
    }

    useImperativeHandle(ref, () => ({
        resetCategory() {
            setSelectedCategory("");
        }
    }));

    return (
        <div className='flex justify-between'>
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
});

Tags.displayName = "Tags";

export default Tags;
