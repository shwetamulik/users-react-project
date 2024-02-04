export const CommonList = ({
    items,
    resourceName,
    itemComponent: ItemComponent
}) => {
   
    return(
        <>
        <ul>
            {items.map((item, i) => (
                <li key={i} className="list">{
                    <>
                    <span><h3>{i + 1}</h3></span>
                    <ItemComponent {...{[resourceName]: item}}/>
                    </>
                    }</li>
            ))}
        </ul>
        </>
    )
}