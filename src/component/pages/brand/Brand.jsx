import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const Brand = ({ brandCard }) => {
    const { brand, image } = brandCard;
    return (
        <div>
            <div className="p-5 md:p-0 pt-0">
                <Link to={`/details/${brand}`}>
                    <div className="relative w-full max-h-[500px] flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                        <div className="relative min-h-[350px] w-full mx-4 -mt-6 overflow-hidden text-white rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                            <img className=" py-5 md:w-[200px] md:h-[200px] w-1/2 mx-auto mt-10"
                                src={image}
                                alt="img-blur-shadow"

                            />
                            <h1 className="text-black text-center text-xl font-semibold mb-5">{brand}</h1>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
};
Brand.propTypes = {
    brandCard: PropTypes.object,
}
export default Brand;