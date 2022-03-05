import { useSelector } from 'react-redux';

function Home() {
    const session = useSelector(state => state)
    console.log(session)
    return (
        <h1>Session?</h1>
    )
}

export default Home;