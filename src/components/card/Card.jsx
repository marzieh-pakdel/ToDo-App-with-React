import Sidebar from '../sidebar/Sidebar'
import Content from '../content/Content'

const Card = ({children}) => {
  return (
    <section className="bg-white flex shadow-card-box-shadow rounded-[8px]">
      <Sidebar />
      <div className="border border-light-blue border-solid h-" ></div>
      <Content>{children}</Content>
    </section>
  )
}

export default Card