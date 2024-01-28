export default  function Header(){
    const tabList = ['Home', 'About', 'Contact']
    return(
        <div className="flex justify-between">
            <h1>Users</h1>
            <nav>
                <ul className="flex justify-around">
                    {tabList.map((menuItem,i)=>(
                        <li key={i}>
                            {menuItem}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )



}