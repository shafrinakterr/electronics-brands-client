
const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="py-10 text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">About Our Electronic Brand</h1>
                <p className="text-lg text-gray-600">Your source for high-quality electronics.</p>
            </div>

            <div className="container mx-auto px-4">
                <div className="py-10">
                    <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
                    <p className="text-lg text-gray-800">
                        We are a leading electronic brand committed to delivering top-quality products and innovation in the world of electronics.
                    </p>
                </div>

                <div className="py-10">
                    <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-800">
                        Our mission is to provide cutting-edge electronic devices and solutions that make life easier and more enjoyable for our customers.
                    </p>
                </div>

                <div className="py-10">
                    <h2 className="text-3xl font-semibold mb-4">Why Choose Us</h2>
                    <ul className="text-lg text-gray-800 list-disc pl-6">
                        <li>High-quality products</li>
                        <li>Innovative technology</li>
                        <li>Excellent customer service</li>
                        <li>Years of experience</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;