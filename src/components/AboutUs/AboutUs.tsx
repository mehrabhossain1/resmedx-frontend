import Image from "next/image";
import img from "@/assets/aboutus.jpg";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-20 max-w-7xl mx-auto">
      <div className="md:w-1/2 text-center md:text-left p-4">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-gray-500">
          Resmedx is dedicated to providing unparalleled support to medical
          professionals in their academic and research endeavors. With a team of
          experienced doctors currently in training and residency across various
          medical departments, Resmedx brings years of expertise in research and
          project management to the table.
          <br />
          <br />
          The mission is clear: empower medical clients by offering
          comprehensive assistance with thesis and dissertation work, protocol
          development, data collection, analysis, literature review, results
          preparation, report writing, and precise referencing and bibliography
          services. Understanding the unique challenges within the medical
          field, Resmedx offers tailored services designed to ensure a seamless
          and successful research journey. Client satisfaction is at the core of
          every project, with a steadfast commitment to meeting deadlines and
          exceeding expectations. With a strong track record of delivering
          high-quality results, Resmedx stands as a trusted partner in academic
          success.
          <br />
          <br />
          Resmedx—a venture for the medics, of the medics, by the medics—is here
          to help medical professionals achieve their academic and research
          goals with precision and dedication.
        </p>
      </div>
      <div className="md:w-1/2 p-4">
        <Image
          src={img}
          alt="About Us"
          className="rounded-lg shadow-lg"
          width={600} // Set desired width
          height={400} // Set desired height
          quality={100}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default AboutUs;
