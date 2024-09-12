import Image from 'next/image';
import ecoShopLogo from '@/assets/eco.png'

const AboutUsPage = () => {
  return (
    <div className='bg-gray-100'>
    <div className="container mx-auto px-4 py-8 ">
      <header className="text-center mb-8">
        <Image src={ecoShopLogo} alt="Eco Shop Logo" width={200} height={100} className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">About Us</h1>
        <p className="text-lg text-gray-600">
          Discover our mission and values that drive us to create a more sustainable world.
        </p>
      </header>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          At Eco Shop, our mission is to provide eco-friendly products that help our customers make sustainable choices. 
          We believe in reducing environmental impact and promoting a greener lifestyle through our carefully curated selection of products.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Sustainability:</strong> We are committed to reducing our carbon footprint and promoting environmental stewardship.</li>
          <li><strong>Transparency:</strong> We believe in being open about our sourcing and manufacturing processes.</li>
          <li><strong>Quality:</strong> We prioritize high-quality, durable products that are both eco-friendly and effective.</li>
          <li><strong>Community:</strong> We support local communities and partner with organizations that share our values.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <Image src="/path-to-team-member-photo.jpg" alt="Team Member Name" width={150} height={150} className="rounded-full mb-4" />
            <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
            <p className="text-gray-700 mt-2 text-center">
              Jane is passionate about sustainability and founded Eco Shop to make eco-friendly products accessible to everyone. 
              She leads our team with a vision for a greener future.
            </p>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-semibold mb-4">Our Sustainable Practices</h2>
        <p className="text-gray-700 mb-4">
          We are dedicated to implementing sustainable practices in every aspect of our business. From reducing waste in packaging 
          to sourcing materials responsibly, we strive to minimize our environmental impact.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Eco-Friendly Packaging:</strong> We use recyclable and compostable materials for our packaging.</li>
          <li><strong>Ethical Sourcing:</strong> Our products are sourced from suppliers who adhere to fair trade practices.</li>
          <li><strong>Carbon Offset:</strong> We invest in carbon offset programs to neutralize our emissions.</li>
          <li><strong>Community Initiatives:</strong> We support local environmental projects and initiatives.</li>
        </ul>
      </section>
    </div>
    </div>
  );
};

export default AboutUsPage;
