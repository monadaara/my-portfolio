import type { MetaFunction } from "@remix-run/node";
import AboutMeSection from "~/components/AboutMeSection";
import Navbar from "~/components/Navbar";
import ProfileSection from "~/components/ProfileSection";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className=" p-4 max-w-6xl mx-auto space-y-14">
      <Navbar />
      <ProfileSection />
      <AboutMeSection />
    </div>
  );
}
