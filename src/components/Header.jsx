import {Link} from 'react-router-dom';
import useState from 'react';
export default  function Header(){
    // const [isOpen, setIsOpen] = useState(false)
    const tabList = ['About', 'Contact']
    // const openModal = () => setIsOpen(true);
    return(
        <div className="flex justify-between p-5">
            <h1>Users</h1>
            <nav>
                <ul className="flex justify-around">
                    <li className="mx-2">
                        <Link  className="border p-2" >Add new user</Link>
                    </li>
                    {tabList.map((menuItem,i)=>(
                        <li key={i} className="mx-2">
                            <Link  to={`${menuItem.toLowerCase()}`} className="border p-2" >
                            {menuItem}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )



}