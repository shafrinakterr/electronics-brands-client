import Swal from "sweetalert2";

const AddProduct = () => {
    const haddleSubmitForm = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const newProdcut = { brand_name, name, photo, rating, category, price, description }
        console.log(newProdcut);
        fetch('https://electronics-server-drab.vercel.app/product', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProdcut)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-center',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'success',
                        title: 'Product Add successfully'
                    })
                }
            })
        form.reset()
    }
    return (
        <div>
            <div className="mt-10 max-w-6xl mx-auto">
                <div className="bg-red-200 mt-10 p-4 md:p-24">
                    <div className="text-center md:w-8/12 mx-auto space-y-5">
                        <h1 className="font-ranco font-semibold text-6xl ">Add Product</h1>

                    </div>
                    <form onSubmit={haddleSubmitForm} className="space-y-3">
                        {/* form row */}
                        <div className="md:flex gap-6 mt-10">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Name</span>
                                </label>
                                <label>
                                    <input required type="text" placeholder="Enter name" name="name" className="input w-full" />
                                </label>
                            </div>
                            <div className="form-control rounded-lg md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Brand Name</span>
                                </label>
                                <label className=" ">
                                    <input required type="text" name="brand_name" placeholder="Enter brand name" className="input  w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form row */}
                        <div className="md:flex gap-6 ">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Category</span>
                                </label>
                                <label>
                                    <input required type="text" placeholder="Enter  category" name="category" className="input w-full" />
                                </label>
                            </div>
                            <div className="form-control rounded-lg md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Price</span>
                                </label>
                                <label className=" ">
                                    <input required type="text" name="price" placeholder="Enter  price" className="input  w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form row */}
                        <div className="md:flex gap-6 ">
                            <div className="form-control rounded-lg md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Photo</span>
                                </label>
                                <label className=" ">
                                    <input required type="text" name="photo" placeholder="Enter photo Url" className="input w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Rating</span>
                                </label>
                                <label>
                                    <input required type="text" placeholder="Enter rating" name="rating" className="input w-full" />
                                </label>
                            </div>

                        </div>
                        <div className="md:flex gap-6 ">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Short desctrion</span>
                                </label>
                                <label>
                                    <textarea required className="w-full rounded-lg p-2" name="description" id="" placeholder="Enter description" cols="30" rows="3"></textarea>
                                </label>
                            </div>
                        </div>
                        <div className="md:flex gap-6">
                            <div className="form-control w-full" >
                                <input className="bg-red-600 mt-5 cursor-pointer text-white p-3 font-ranco font-semibold text-lg rounded-lg" type="submit" value="Add Product" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;