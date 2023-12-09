
const Footer = () => {
    return (
        <div >
            <footer className="footer md:flex justify-around text-white p-10 bg-black mt-5">
                <nav>
                    <header className="footer-title">Our Brand</header>
                    <a className="link link-hover">Apple</a>
                    <a className="link link-hover">SamSung</a>
                    <a className="link link-hover">Google</a>
                    <a className="link link-hover">OnePlus</a>
                    <a className="link link-hover">OnePlus</a>
                    <a className="link link-hover">Huawei</a>
                    <a className="link link-hover">LG</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <header className="footer-title">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-white">Enter your email address</span>
                        </label>
                        <div className="relative border-2 border-red-600 rounded-lg">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn bg-red-600 absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;