import { useLoaderData } from "react-router-dom";
import DetailsCard from "./DetailsCard";
import swal from "sweetalert";

const Details = () => {
    const products = useLoaderData()
    return (

        <div>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item lg:flex items-center relative w-full">
                    <img src="https://i.ibb.co/RPGnFWR/banner-re-2.png" className="w-full " />
                    <div className='lg:-ml-80 md:-ml-56 -ml-40 space-y-5'>
                        <h1 className='md:text-6xl font-extrabold'>IMAC</h1>
                        <p className='text-xl text-red-600'>NEQUE PORO</p>
                        <p className='md:w-60'>Welcome to our DigitalStore shop.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item md:flex items-center relative w-full">
                    <img src="https://i.ibb.co/HhcFytk/bannder-re-1.png" className="w-full" />
                    <div className='lg:-ml-96 md:-ml-64 -ml-48 md:w-full  space-y-5'>
                        <h1 className='md:text-6xl text-2xl font-extrabold'>IMAC</h1>
                        <p className='text-xl text-red-600'>NEQUE PORO</p>
                        <p className='md:w-60'>Welcome to our DigitalStore shop.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item -ml-48 md:-ml-0 lg:-ml-0 justify-between md:flex items-center relative w-full">
                    <img src="https://i.ibb.co/SKj6LZS/7.png" className="w-full" />
                    <div className=' md:w-full  space-y-5'>
                        <h1 className='md:text-6xl text-2xl font-extrabold'>IMAC</h1>
                        <p className='text-xl text-red-600'>NEQUE PORO</p>
                        <p className='md:w-60'>Welcome to our DigitalStore shop.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-3xl text-center font-semibold mt-5 mb-20">Our {products.brand_name} products</h1>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {
                        products.length < 4 ? (
                            swal("Oops!", "It's Product Unavailable", "error")
                        ) : (

                            products.map(product => <DetailsCard key={product.id} product={product}></DetailsCard>)
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default Details;