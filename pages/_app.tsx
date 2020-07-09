import RecoilPersist from '../utils/RecoilPersist'
import Header from '../components/header';
import cartAtom from '../atoms/cart';

function App({ Component, pageProps }) {
    return (
        <RecoilPersist persistAtoms={[cartAtom]}>
            <Header />
            <Component {...pageProps} />
        </RecoilPersist>
    )
}

export default App;