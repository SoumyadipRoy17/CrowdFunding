import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, TrendingUp, Clock, Filter } from "lucide-react";

const mockCampaigns = [
  {
    id: "1",
    title: "Innovative Tech Gadget",
    description:
      "A revolutionary device that will change the way we interact with technology.",
    category: "Technology",
    goal: 50000,
    raised: 35000,
    daysLeft: 15,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    title: "Educational Platform",
    description:
      "Making quality education accessible to everyone around the world.",
    category: "Education",
    goal: 30000,
    raised: 25000,
    daysLeft: 20,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    title: "Demo Platform",
    description: "demo.",
    category: "Education",
    goal: 30000,
    raised: 25000,
    daysLeft: 20,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
  },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col space-y-8">
        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search campaigns..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-4">
            <select
              className="border rounded-lg px-4 py-2"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="technology">Technology</option>
              <option value="education">Education</option>
              <option value="health">Health</option>
            </select>
            <button className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg">
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCampaigns.map((campaign) => (
            <Link
              key={campaign.id}
              to={`/campaign/${campaign.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-indigo-600">
                    {campaign.category}
                  </span>
                  <span className="text-sm text-gray-500">•</span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {campaign.daysLeft} days left
                  </div>
                </div>
                <h3 className="mt-2 text-xl font-semibold">{campaign.title}</h3>
                <p className="mt-2 text-gray-600 line-clamp-2">
                  {campaign.description}
                </p>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{
                        width: `${(campaign.raised / campaign.goal) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <div className="mt-2 flex justify-between text-sm">
                    <span className="font-semibold">
                      ${campaign.raised.toLocaleString()}
                    </span>
                    <span className="text-gray-500">
                      {((campaign.raised / campaign.goal) * 100).toFixed(0)}% of
                      ${campaign.goal.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
