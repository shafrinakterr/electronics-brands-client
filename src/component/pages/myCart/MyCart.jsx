
import { useState } from "react";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
    const myCartdata = useLoaderData();
    const [myCartsdata, setMyCartsData] = useState(myCartdata)
    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://electronics-server-drab.vercel.app/cart/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json)
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            console.log('delete successfully');
                            const remainingcart = myCartsdata.filter(cart => cart._id !== id);
                            setMyCartsData(remainingcart)
                        }
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }
    return (
        <div className="grid grid-cols-1 md:grid:2 lg:grid-cols-4 gap-5 mt-20 mb-5">
            {
                myCartsdata.map(myCart =>
                    <div key={myCart._id} className="mb-5">
                        <div className="relativeflex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                            <div className="relative bg-gray-300  h-56 mx-4 -mt-6 overflow-hidden text-white rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                                <img
                                    src={myCart.photo}
                                    alt="img-blur-shadow"

                                />
                            </div>
                            <div className="p-6">
                                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    {myCart.name}
                                </h5>
                                <div className='flex justify-between gap-2 items-center'>
                                    <div className="rating rating-sm flex items-center" >
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                        {myCart.rating}
                                    </div>
                                    <p className="items-center gap-1 flex ite font-sans antialiased font-semibold leading-relaxed ">
                                        <HiCurrencyBangladeshi className='text-black text-xl font-bold'></HiCurrencyBangladeshi>{myCart.price}
                                    </p>
                                </div>
                                <button onClick={() => handleDelete(myCart._id)} className="btn capitalize mt-5 text-red-600 flex w-20 text-end justify-end">Delete</button>
                            </div>

                        </div>


                    </div>)
            }
        </div>
    );
};

export default MyCart;