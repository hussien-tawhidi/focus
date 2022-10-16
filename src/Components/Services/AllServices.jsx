import {Link} from "react-router-dom"

const AllServices = () => {
  return (
    <Link to="/all-services" className='all-services'>
        <img src="/Assets/services.jpg" alt="" />
    </Link>
  )
}

export default AllServices