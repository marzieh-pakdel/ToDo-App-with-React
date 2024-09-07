import Layout from '../../components/layout/Layout'
import Button from '../../components/common/button/Button';
import { PiSmileySadLight } from "react-icons/pi";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Layout >
      <div className='mt-16 px-52 flex flex-col justify-center items-center gap-6'>
        <div>
          <h1 className='text-6xl font-extrabold flex justify-center items-center text-placeholder'>4{<PiSmileySadLight color='"#1f618d"' size={60} style={{display:"inline", paddingTop:"4px"}} />}4</h1>
          <p className='text-lg font-medium text-placeholder mt-2'>Page Not Found</p>
        </div>
        <Button 
          title={<Link to="/">Go to home page</Link>}
          className="border border-placeholder p-3 rounded-full text-placeholder"
         />
      </div>
    </Layout>
  )
}

export default NotFound