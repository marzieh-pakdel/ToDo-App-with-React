import { useState } from 'react'
import Button from '../common/button/Button'

const Tags = ({setCategory}) => {
    const categories = ["Groceries", "Payments", "College"]
    const [selectedCategory, setSelectedCategory] = useState("")

    function handleSelectedCategory(category) {
      setSelectedCategory(category);
      setCategory(category);
    }

  return (
    <div className='flex justify-between'>
        {categories.map((category) => {
            return (
                <Button 
                  onClick={() => handleSelectedCategory(category)} 
                  key={category} 
                  title={category} 
                  buttonStyle={
                    `${selectedCategory === category ? 'bg-selected-tag' : 'bg-tag-bg'} 
                    text-white rounded-[4px] py-1 px-8 text-xs font-normal`
                  }
                />
            )
        })}
    </div>
  )
}

export default Tags