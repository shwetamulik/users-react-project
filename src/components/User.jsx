export default function User({data}){
    const {name, address, website} = data;
    console.count('USER COMPONENT RENDERED!')
    return(
        <>
        <p>Name: {name}</p>
        <p>url: <a href="website">{website}</a></p>
        </>
    )

}