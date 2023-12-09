import { useLoaderData } from "react-router-dom";
import Banner from "../../headers/banner/Banner";
import Brand from "../brand/Brand";
import BannerBottom from "../../headers/banner/BannerBottom"

const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <BannerBottom></BannerBottom>
            <div>
                <h1 className="text-5xl text-center mt-20 mb-5 font-semibold">Our all brands</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">

                    {
                        brands.map(brandCard => <Brand key={brandCard._id} brandCard={brandCard}></Brand>)
                    }
                </div>
            </div>
            <div className="mt-5 mb-5">
                <img src="https://i.ibb.co/6mGPn5b/download.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;