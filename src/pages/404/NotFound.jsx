import MainLayout from "../../layouts/mainLayout/MainLayout"
import Button from '../../components/common/button/Button.jsx';
import { PiSmileySadLight } from "react-icons/pi";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <MainLayout >
      <div className="flex flex-col justify-center items-center my-auto gap-3">
        <div>
          <h1 className='text-6xl font-extrabold flex justify-center items-center text-placeholder'>4{<PiSmileySadLight color='"#1f618d"' size={60} style={{display:"inline", paddingTop:"4px"}} />}4</h1>
          <p className='text-lg font-medium text-placeholder mt-2'>Page Not Found</p>
        </div>
        <Button 
          title={<Link to="/">Go to home page</Link>}
          className="border border-placeholder p-2 rounded-full text-placeholder text-md self-center"
         />
      </div>
    </MainLayout>
  )
}

export default NotFound