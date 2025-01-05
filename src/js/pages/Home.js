import { UserProvider } from './../context/UserContext.js';
import Intro from '../components/Intro.js';
import Main from '../components/Main.js';

const Home = () => {
    const home = (
        <>
            <UserProvider>
                <Intro />
                <Main />
            </UserProvider>
        </>
    )
    return home;
};

export default Home;