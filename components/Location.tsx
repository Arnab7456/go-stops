"use client";

import { Bus, Train, Plane, Car, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import GoogleMapReact from "google-map-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Marker = ({ text }: { text: string }) => (
  <div className="text-2xl">📍 {text}</div>
);

const LocationSection = () => {
  const defaultProps = {
    center: {
      lat: 12.918234, // HSR Silk Board
      lng: 77.621486,
    },
    zoom: 15,
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">Getting Here</h2>
      <p className="text-muted-foreground mb-8">
        754/L-185, HSR Layout, Sector 6, behind Silkboard bus stand, Outer Ring
        road, Bengaluru - 560102
      </p>

      <div className="grid md:grid-cols-[1fr_400px] gap-8">
        {/* Left side: Google Map */}
        <div className="bg-muted rounded-xl overflow-hidden h-[400px] relative">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <Marker {...defaultProps.center} text="goSTOPS Bengaluru" />
          </GoogleMapReact>
        </div>

        {/* Right side: Transport Options */}
        <div className="space-y-3">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
              <Bus className="h-5 w-5 text-primary" /> By Bus
              </div>
              </AccordionTrigger>
              <AccordionContent>
              From Majestic Bus Station, take a BMTC bus heading towards HSR Layout or Silk Board Junction. This will cost your around ₹30-₹50. Once at Silk Board, take a short ride by auto-rickshaw or cab to HSR Layout. 
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
              <Train className="h-5 w-5 text-primary" /> By Train
              </div>
              </AccordionTrigger>
              <AccordionContent>
              From Bengaluru City Railway Station (Majestic), take a taxi or an auto-rickshaw directly to HSR Layout, which is approximately 13 km away. Alternatively, you can use the Bengaluru Metro. Take the Green Line from Majestic to Yelachenahalli, then switch to an auto-rickshaw or cab to reach HSR Layout.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
         
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
              <Plane className="h-5 w-5" /> By Air
                </div>
              </AccordionTrigger>
              <AccordionContent>
              From Kempegowda International Airport, take an airport taxi directly to HSR Layout, which is approximately 45 km away. This will cost you around ₹250. Alternatively, you can use ride-hailing services like Ola or Uber for a more convenient option directly to HSR Layout. This will cost you around ₹1000-1500.              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
              <Car className="h-5 w-5 text-primary" /> By Taxi
                </div>
              </AccordionTrigger>
              <AccordionContent>
              Alternatively, you can use ride-hailing services like Ola or Uber for a more convenient option directly to HSR Layout.
              </AccordionContent>
</AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
