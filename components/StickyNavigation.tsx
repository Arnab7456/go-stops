"use client";

type TabKey = "Rooms" | "Amenities" | "Location" | "Guidelines";

interface StickyNavigationProps {
  activeTab: TabKey;
  onTabClick: (tab: TabKey) => void;
}

const StickyNavigation = ({ activeTab, onTabClick }: StickyNavigationProps) => {
  const tabs: TabKey[] = ["Rooms", "Amenities", "Location", "Guidelines"];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-8 py-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabClick(tab)}
              className={`text-sm font-medium transition-all duration-300 pb-2 border-b-2 ${
                activeTab === tab
                  ? "text-gray-900 border-gray-900"
                  : "text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyNavigation;
