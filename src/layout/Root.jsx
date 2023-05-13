import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Components/header';

const Root = () => {
    const navigation = useNavigation();

        return (
             <>
                <Header/>
                <main>
                    {
                        navigation.state === 'loading :)'
                        ? 'Loading...'
                        : <Outlet/>
                    }
                </main>
                <footer>Footer</footer>
             </>
        );
}

export default Root;