import Button from '../common/button/Button'

const Tags = () => {
    const categories = ["Groceries", "Payments", "College"]
  return (
    <div className='flex gap-4'>
        {categories.map((category) => {
            return (
                <Button key={category} title={category} buttonStyle="bg-primary-color text-white rounded-[4px] py-1 px-8 font-xs font-normal" />
            )
        })}
    </div>
  )
}

export default Tags