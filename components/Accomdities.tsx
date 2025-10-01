import { Headphones, Wind, Users, Coffee, Fan, Gamepad2, Thermometer, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";

const amenities = [
  { icon: Headphones, label: "24/7 Front Desk" },
  { icon: Wind, label: "AC" },
  { icon: Users, label: "Common Area" },
  { icon: Coffee, label: "Ensuite Washroom" },
  { icon: Fan, label: "Fan" },
  { icon: Thermometer, label: "Geyser" },
  { icon: Coffee, label: "Home Theatre" },
  { icon: Gamepad2, label: "Indoor Games" },
  { icon: Shirt, label: "Laundry" },
];

const AmenitiesSection = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Amenities you'll get</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
        {amenities.map((amenity, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <amenity.icon className="h-5 w-5 text-muted-foreground" />
            <span className="text-foreground">{amenity.label}</span>
          </div>
        ))}
      </div>

      <Button variant="outline">View all amenities</Button>
    </section>
  );
};

export default AmenitiesSection;
