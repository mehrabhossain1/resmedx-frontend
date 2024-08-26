import img1 from "@/assets/services1.jpg";
import img2 from "@/assets/services2.jpg";
import img3 from "@/assets/services3.jpg";
import img4 from "@/assets/services4.jpg";
import img5 from "@/assets/services5.jpg";
import img6 from "@/assets/services6.jpg";
import img7 from "@/assets/services7.jpg";
import Image from "next/image";

const services = [
  {
    category: "Research Consultancy (Online)",
    image: img1,
    details: [
      {
        description: "One-hour session",
        price: "BDT 2000",
      },
    ],
  },
  {
    category: "Protocol Services",
    image: img2,
    details: [
      {
        description: "Regular package (1 month)",
        price: "BDT 17,000",
      },
      {
        description: "Fast package (2 weeks)",
        price: "BDT 22,000",
      },
      {
        description: "Superfast package (1 week)",
        price: "BDT 30,000",
      },
    ],
  },
  {
    category: "FCPS/MD/MS Thesis Services",
    image: img3,
    details: [
      {
        description: "Regular package (1 month)",
        price: "BDT 33,000",
      },
      {
        description: "Fast package (2 weeks)",
        price: "BDT 38,000",
      },
    ],
  },
  {
    category: "Data Collection Service for Thesis",
    image: img4, // Assuming img4 is imported for this service
    details: [
      {
        description: "Additional charge",
        price: "BDT 15,000",
      },
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          OUR <span className="text-primary">SERVICE</span>
        </h1>
        <p className="text-gray-500 mt-4">
          We offer a variety of services to meet your research and academic
          needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center border-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="md:w-1/2 mb-6 md:mb-0">
              <Image
                src={service.image}
                alt={service.category}
                className="rounded-lg shadow-lg"
                width={500}
                height={300}
                objectFit="cover"
              />
            </div>
            <div className="md:w-1/2 md:pl-6 text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-4">
                {service.category}
              </h2>
              {service.details.map((detail, idx) => (
                <div key={idx} className="mb-2">
                  <p className="text-gray-400">{detail.description}</p>
                  <p className="text-primary font-semibold">{detail.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
