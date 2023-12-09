import { Link, useLoaderData } from "react-router-dom";
import Brand from "../brand/Brand";

const OurBrand = () => {
    const brands = useLoaderData();
    console.log(brands)
    return (
      <Link to='/details'>
          <div >
            <h1 className="text-5xl text-center mt-20 mb-5 font-semibold">Our all brands</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">

                {
                    brands.map(brandCard => <Brand key={brandCard._id} brandCard={brandCard}></Brand>)
                }
            </div>
        </div>
      </Link>
    );
};

export default OurBrand;