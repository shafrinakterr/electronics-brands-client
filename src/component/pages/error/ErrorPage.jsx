
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div>
                <div data-aos="fade-up" className="h-screen flex items-center justify-center">
                    <div>
                        <h1 className="text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#ff0000] to-[#000000]"><span className="text-9xl">O</span><span className="text-8xl">o</span>ps!</h1>
                        <p className="text-xl text-center mt-5 font-semibold font-serif">404-PAGE NOT FOUND</p>
                        <p className="text-center mt-3">The page you are looking for might have been removed <br /> had its name changed or is temprarily unavailable.</p>
                        <Link className="flex justify-center bg-red-600 w-2/4 mt-5 rounded p-3 text-white font-semibold mx-auto" to='/'>Back to home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;