import { UserProvider } from '@/js/context/UserContext.js';
import Intro from '@/js/components/Intro.js';
import Main from '@/js/components/Main.js';

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