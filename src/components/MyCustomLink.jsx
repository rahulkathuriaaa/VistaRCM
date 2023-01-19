import { Link } from "react-router-dom";

const MyCustomLink = (props) => {
    let { href, children,onClick,...rest } = props
    return (
        
      <Link to={href}>
       <button {...rest}
       className=' text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm'
       onClick={onClick}
       >
        {children}
       </button>
      </Link>
    
    )
  }
export default MyCustomLink;