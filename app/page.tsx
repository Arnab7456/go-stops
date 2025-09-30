import HeroGallery from "@/components/Hero";
import Image from "next/image";



export default function Home() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-6">
      <HeroGallery images={[
        "assets/hero1.webp",
        "assets/hero2.webp",
        "assets/hero3.webp",
        "assets/hero4.webp",
        "assets/hero5.webp",
      ]} />

    </div>
  );
}
