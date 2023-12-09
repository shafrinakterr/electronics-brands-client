import bannerSidebar from '../../../assets/img/banner-img/banner-sidebar.png'
const Banner = () => {
    return (
        <div className=" md:flex mt-5">
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item lg:flex items-center relative w-full">
                    <img src="https://i.ibb.co/RPGnFWR/banner-re-2.png" className="w-full " />
                    <div className='lg:-ml-80 md:-ml-56 -ml-40 space-y-5'>
                        <h1 className='md:text-6xl font-extrabold'>IMAC</h1>
                        <p className='text-xl text-red-600'>NEQUE PORO</p>
                        <p className='md:w-60'>Welcome to our DigitalStore shop.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
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
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
            <div>
                <img className='md:h-[450px]  w-full mx-auto' src={bannerSidebar} alt="" />
            </div>
        </div>
    );
};

export default Banner;