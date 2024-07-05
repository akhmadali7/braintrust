import Header from "@/components/Header";
import JobSuggest from "@/components/dashboard/JobSuggest";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Blog from "@/components/dashboard/blog";
import ThirdSection from "@/components/dashboard/thirdsection";
import DiscordBanner from "@/components/dashboard/discordbanner";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <JobSuggest />
      <ThirdSection />
      <Blog />
      <DiscordBanner />

    </main>
  );
}
