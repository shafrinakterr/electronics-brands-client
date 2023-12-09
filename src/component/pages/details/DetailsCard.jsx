import { HiCurrencyBangladeshi } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import PrivateRouters from '../../../privateRouters/PrivateRouters';
const DetailsCard = ({ product }) => {
    const { _id, name, photo, price, rating, } = product;

    return (
        <div>
            <div className="relativeflex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                <div className="relative bg-gray-300  h-56 mx-4 -mt-6 overflow-hidden text-white rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                    <img
                        src={photo}
                        alt="img-blur-shadow"

                    />
                </div>
                <div className="p-6">
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {name}
                    </h5>
                    <div className='flex justify-between gap-2 items-center'>
                        <div className="rating rating-sm flex items-center" >
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            {rating}
                        </div>
                        <p className="items-center gap-1 flex ite font-sans antialiased font-semibold leading-relaxed ">
                            <HiCurrencyBangladeshi className='text-black text-xl font-bold'></HiCurrencyBangladeshi>{price}
                        </p>
                    </div>
                </div>
                <div className="p-6 pt-0 ">
                    <div className='flex justify-between'>
                        <Link to={`/productDetails/${_id}`}>
                            <button
                                className="flex mb-3 font-bold justify-center items-center text-red-600 "
                                data-ripple-light="true"
                            >
                                Read More...
                            </button>
                        </Link>

                    </div>
                    <hr />
                    <PrivateRouters>  <Link to={`/update/${_id}`}>
                        <button
                            className="flex mt-5 w-full btn btn-outline font-bold capitalize bg-black justify-center border-2 border-black  items-center text-red-600 "
                            data-ripple-light="true"
                        >
                            Upadate
                        </button>
                    </Link></PrivateRouters>
                </div>
            </div>
        </div>
    );
};
DetailsCard.propTypes = {
    product: PropTypes.object
}
export default DetailsCard;