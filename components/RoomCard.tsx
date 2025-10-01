"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Users, Wind, Utensils, Car } from "lucide-react";

interface RoomCardProps {
  image: string;
  title: string;
  price: number;
  originalPrice: number;
  capacity: string;
  amenities: string[];
}

const RoomCard = ({
  image,
  title,
  price,
  originalPrice,
  capacity,
  amenities,
}: RoomCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
      <div className="grid md:grid-cols-[300px_1fr] gap-6">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-[250px] md:h-full object-cover"
          />
          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
            1/8
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Users className="h-4 w-4" />
                {capacity}
              </div>

              <div className="flex flex-wrap gap-2 text-sm">
                {amenities.map((amenity, idx) => (
                  <span
                    key={idx}
                    className="text-muted-foreground flex items-center gap-1"
                  >
                    {amenity.includes("Laundry") &&
                      "Laundry (Subject to Availability)"}
                    {amenity.includes("Bathroom") &&
                      "Shared or Ensuite Bathroom (As per room category reserved)"}
                    {amenity.includes("AC") && (
                      <>
                        <Wind className="h-3 w-3" /> Air Conditioned
                      </>
                    )}
                    {amenity.includes("Breakfast") && (
                      <>
                        <Utensils className="h-3 w-3" /> Free Breakfast (As per
                        rate reserved)
                      </>
                    )}
                    {amenity.includes("Vehicle") && (
                      <>
                        <Car className="h-3 w-3" /> Vehicle on Hire (Extra
                        Charges)
                      </>
                    )}
                  </span>
                ))}
              </div>

              <button className="text-sm text-primary mt-3 hover:underline">
                +15 more
              </button>
            </div>

            <div className="text-right">
              <div className="flex items-baseline justify-end gap-2 mb-1">
                <span className="text-3xl font-bold">₹{price}</span>
              </div>
              <div className="text-sm text-muted-foreground line-through mb-1">
                ₹{originalPrice}/night
              </div>
              <Badge className="bg-accent text-accent-foreground mb-3">
                'GO10' Applied
              </Badge>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <Checkbox id="breakfast" />
              <label htmlFor="breakfast" className="text-sm cursor-pointer">
                Include Breakfast
              </label>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Availability calendar
              </Button>
              <Button
                size="sm"
                className="flex items-center justify-center gap-2 rounded-[12px] border border-[rgba(255,51,102,0.10)] px-3 py-2 shadow-[0_2px_8px_0_rgba(0,0,0,0.10)] text-[14px] text-white h-[32px] bg-[linear-gradient(99deg,#F36_8.96%,#FF1A53_99.91%)]"
              >
                Add Bed
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
