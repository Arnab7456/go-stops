"use client"
import HeroGallery from "@/components/Hero";
import RoomCard from "@/components/RoomCard";
import BookingSummary from "@/components/Booking";
import LocationSection from "@/components/Location";
import FAQSection from "@/components/Faq";
import GuidelinesSection from "@/components/Guidelines";
import AmenitiesSection from "@/components/Accomdities";
import StickyNavigation from "@/components/StickyNavigation";
import { useEffect, useMemo, useRef, useState } from "react";
type TabKey = "Rooms" | "Amenities" | "Location" | "Guidelines"

const rooms = [
  {
    image: "https://static.ipms247.com/uploads/44913_20250317071142_0217849001742195502_896_1.jpg",
    title: "Bed in 4 Bed Mixed AC Dormitory Room with Ensuite Bathroom",
    price: 517.86,
    originalPrice: 575,
    capacity: "× 1 Adult",
    amenities: ["Laundry", "Bathroom", "AC", "Breakfast", "Vehicle"],
  },
  {
    image: "https://static.ipms247.com/uploads/44913_20250317070818_0774822001742195298_951_1.jpg",
    title: "Deluxe Private AC Room with Ensuite Bathroom",
    price: 1423.98,
    originalPrice: 2637,
    capacity: "× 2 Adults",
    amenities: ["Laundry", "Bathroom", "AC", "Breakfast", "Vehicle"],
  }
];



export default function Home() {
  const [activeTab, setActive] = useState<TabKey>("Rooms");
  const [selectedBed, setSelectedBed] = useState<string | null>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const sectionIds = useMemo(
    () => ({
      Rooms: "section-rooms",
      Amenities: "section-amenities",
      Location: "section-location",
      Guidelines: "section-guidelines",
    }),
    [],
  )
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => {
            // Sort by how much of the element is visible
            const aRatio = a.intersectionRatio;
            const bRatio = b.intersectionRatio;
            if (aRatio !== bRatio) return bRatio - aRatio;
            // If ratios are equal, sort by position
            return a.boundingClientRect.top - b.boundingClientRect.top;
          })
        
        if (visible[0]) {
          const id = visible[0].target.id
          const found = (Object.entries(sectionIds).find(([, v]) => v === id)?.[0] || "Rooms") as TabKey
          setActive(found)
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
        rootMargin: "-100px 0px -100px 0px"
      },
    )
    
    // Observe all sections
    Object.values(sectionIds).forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    
    return () => observer.disconnect()
  }, [sectionIds])

  const handleTabClick = (tab: TabKey) => {
    setActive(tab)
    const target = document.getElementById(sectionIds[tab])
    if (target) {
      const offset = 100; // Account for navigation bar height
      const elementPosition = target.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  }

  return (
    <div className="overflow-x-hidden max-w-7xl mx-auto">
     
      <HeroGallery
        images={[
          "assets/hero1.webp",
          "assets/hero2.webp",
          "assets/hero3.webp",
          "assets/hero4.webp",
          "assets/hero5.webp",
        ]}
      />
      <div className="grid lg:grid-cols-[1fr_400px] gap-8 max-w-[1400px] mx-auto">
        <div ref={leftRef}>
        <StickyNavigation activeTab={activeTab} onTabClick={handleTabClick} />
          <section id="section-rooms" className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-6">Room types & Pricing</h2>
            <div className="space-y-6">
              {rooms.map((room, idx) => (
                <RoomCard key={idx} {...room} />
              ))}
            </div>
          </section>
          <div id="section-amenities">
            <AmenitiesSection/>
          </div>
          <div id="section-location">
            <LocationSection/>
          </div>
          <div id="section-guidelines">
            <GuidelinesSection/>
          </div>
          <FAQSection />
        </div>
        <div className="hidden lg:block px-4 py-6">
          <BookingSummary />
        </div>
      </div>
    </div>
  );
}
