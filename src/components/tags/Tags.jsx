import Button from '../common/button/Button'

const Tags = () => {
    const categories = ["Groceries", "Payments", "College"]
  return (
    <div>
        {categories.map((category) => {
            <Button buttonStyle="bg-primary-color text-white rounded-[4px] py-[5px] px-[32px]">{category}</Button>
        })}
    </div>
  )
}

export default Tags