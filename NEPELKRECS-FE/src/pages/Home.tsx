import { Link ,useNavigate} from "react-router-dom"
import { Button } from '@mantine/core';
function Home() {

    const navigate=useNavigate()
    const handleclick=()=>{
        navigate('/products')
    }
    return <>
        <h1>My Home Page</h1>
        <p>
            Go to <Link to="/products">the list of products</Link>.
        </p>
        <Button mt="md" onClick={handleclick}>Click Me</Button>
    </>
}
export default Home