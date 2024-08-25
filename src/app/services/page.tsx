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
    title: "Research Consultancy (Online)",
    price: "BDT 2,000",
    duration: "One-hour session",
    icon: img1, // Image for this service
  },
  {
    title: "Protocol Services - Regular Package",
    price: "BDT 17,000",
    duration: "1 month",
    icon: img2, // Image for this service
  },
  {
    title: "Protocol Services - Fast Package",
    price: "BDT 22,000",
    duration: "2 weeks",
    icon: img3, // Image for this service
  },
  {
    title: "Protocol Services - Superfast Package",
    price: "BDT 30,000",
    duration: "1 week",
    icon: img4, // Image for this service
  },
  {
    title: "FCPS/MD/MS Thesis Services - Regular Package",
    price: "BDT 33,000",
    duration: "1 month",
    icon: img5, // Image for this service
  },
  {
    title: "FCPS/MD/MS Thesis Services - Fast Package",
    price: "BDT 38,000",
    duration: "2 weeks",
    icon: img6, // Image for this service
  },
  {
    title: "Data Collection Service for Thesis",
    price: "Additional BDT 15,000",
    duration: "",
    icon: img7, // Image for this service
  },
];

const ServicesPage = () => {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          OUR <span className="text-blue-500">SERVICE</span>
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
            className="flex items-center bg-white border border-gray-200 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex-shrink-0">
              <Image
                src={service.icon}
                alt={`${service.title} icon`}
                className="w-32 h-32 rounded-lg"
              />
            </div>
            <div className="ml-8">
              <h2 className="text-4xl font-semibold mb-2 text-gray-600">
                {service.title}
              </h2>
              <p className="text-gray-800 mb-1 text-2xl font-semibold">
                {service.price}
              </p>
              {service.duration && (
                <p className="text-gray-500">Duration: {service.duration}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
