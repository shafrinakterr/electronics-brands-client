import { Link, useLoaderData } from "react-router-dom";
import { BsCartCheckFill } from 'react-icons/bs';
import Swal from "sweetalert2";
import PrivateRouters from "../../../privateRouters/PrivateRouters";


const ProductDetails = () => {
    const productDescription = useLoaderData()
    const { name, brand_name, photo, price, rating, description } = productDescription;
    const handleAddCart = () => {
        Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure you want to add this item to the cart?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, add it!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('ami submit hoichi');
                fetch('https://electronics-server-drab.vercel.app/cart', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(productDescription)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            }
        });
    };

    return (
        <div className="relative justify-center items-center bg-gray-300 flex w-full mt-5 flex-row rounded-xl bg-clip-border text-gray-700 shadow-md">
            <div className="relative  m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                <img
                    src={photo}
                    className="object-cover p-10 w-full h-full"
                />
            </div>
            <div className="p-6">
                <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-red-600 uppercase">
                    {brand_name}
                </h6>
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {name}
                </h4>
                <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    {price}
                </p>
                <div className="rating rating-sm flex items-center" >
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    {rating}
                </div>
                <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    {description}
                </p>
                <div className="flex justify-between" href="#">
                    <button
                        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-red-600 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        <PrivateRouters>
                            <Link to={`/details/${brand_name}`}>
                                Back To Home
                            </Link>
                        </PrivateRouters>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="w-4 h-4"
                        >
                            <path

                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            ></path>
                        </svg>
                    </button>
                    <div>

                        <button onClick={handleAddCart} className="btn text-white capitalize btn-outline bg-[#ff0000a3]">Add to Curt <BsCartCheckFill className='text-2xl'></BsCartCheckFill ></button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;