import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <>
        <Link to= '/'>Home Page</Link>
        <Link to= '/cart'>Shopping cart</Link>
        </>
        
    );
}