import { Link } from "@remix-run/react";

// app/components/ProfileSection.jsx
export default function ProfileSection() {
  return (
    <div className="  flex items-center justify-center ">
      <div className="text-center  max-w-xl">
        <div className="flex justify-center mb-6">
          <img
            src="/me.jpg"
            alt="Profile Avatar"
            className="w-24 h-24 rounded-full"
          />
        </div>
        <h1 className="text-3xl font-bold">
          Hello 👋 I'm{" "}
          <span className="block ">Mohamed Abdirahman</span>
        </h1>
        <p className=" text-lg text-primary">A passionate Full-Stack Developer</p>
        <p className=" mt-2">
          As a passionate data scientist, with expertise in machine learning,
          AI, and data analytics, I thrive on the challenges of exploring
          complex data landscapes and uncovering meaningful patterns that drive
          innovation
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <Link
            to="#contact"
            className="bg-accent text-gray-900 font-bold py-2 px-5 rounded-full hover:bg-helper"
          >
            Get In Touch
          </Link>
          <Link
            to="/CV.pdf"
            className="font-bold py-2 px-5 rounded-full border border-gray-900 text-gray-900 hover:border-primary hover:text-primary"
            download
          >
            Download CV
          </Link>
        </div>
      </div>
    </div>
  );
}
