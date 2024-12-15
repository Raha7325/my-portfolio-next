import Header from '../components/Header'
import Footer from '../components/Footer'
import '../app/globals.css'
const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow"> 
                <h2>Home Page 22</h2>
            </main>
            <Footer />
        </div>
    )
}

export default Home;