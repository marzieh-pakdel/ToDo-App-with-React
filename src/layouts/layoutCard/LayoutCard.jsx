import Sidebar from './sidebar/Sidebar'
import Content from './content/Content'

const LayoutCard = ({children}) => {
  return (
    <section className="bg-white flex shadow-card-box-shadow rounded-[8px] w-full h-[95%] mx-72">
      <Sidebar />
      <div className="border border-light-blue border-solid"></div>
      <Content>{children}</Content>
    </section>
  )
}

export default LayoutCard