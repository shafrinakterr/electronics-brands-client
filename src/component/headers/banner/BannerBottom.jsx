
const BannerBottom = () => {
    return (
        <div className="md:flex gap-10 bg-[#F5F6F7] p-5 mt-5">
            <div className="bg-[#F5F6F7] rounded shadow py-10 px-5 flex gap-5">
                <div>
                    <h1 className="hover:text-red-600 text-3xl font-semibold">Ipad in education</h1>
                    <p>Nulla vel metus scelerisque ante sollicitudin commodo sit amet nibh libero itudin commodoturpis</p>
                    <a className="text-red-600" href="">Read More..</a>
                </div>
                <div>
                    <img className="w-[300px]" src="https://i.ibb.co/JxPRLkM/banner3.png" alt="" />
                </div>
            </div>
            <div className="bg-[#F5F6F7] shadow rounded py-10 px-5  flex gap-5">
                <div>
                    <h1 className="hover:text-red-600 text-3xl font-semibold">Ipad in education</h1>
                    <p>Nulla vel metus scelerisque ante sollicitudin commodo sit amet nibh libero itudin commodoturpis</p>
                    <a className="text-red-600" href="">Read More..</a>
                </div>
                <div>
                    <img className="w-[300px]" src="https://i.ibb.co/JxPRLkM/banner3.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default BannerBottom;