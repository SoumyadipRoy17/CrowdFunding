import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, Target, Share2 } from 'lucide-react';

const mockCampaign = {
  id: '1',
  title: 'Innovative Tech Gadget',
  description: 'A revolutionary device that will change the way we interact with technology. Our team of engineers and designers has been working tirelessly to create a product that combines cutting-edge technology with intuitive user experience.',
  category: 'Technology',
  goal: 50000,
  raised: 35000,
  backers: 150,
  daysLeft: 15,
  creator: {
    name: 'John Doe',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
  updates: [
    {
      id: 1,
      date: '2024-03-15',
      title: 'Production Update',
      content: 'We\'ve completed the first prototype and are moving into testing phase.'
    }
  ]
};

const CampaignDetails = () => {
  const { id } = useParams();
  const campaign = mockCampaign; // In a real app, fetch campaign by id

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <img
            src={campaign.image}
            alt={campaign.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{campaign.title}</h1>
          
          <div className="flex items-center mb-6">
            <img
              src={campaign.creator.image}
              alt={campaign.creator.name}
              className="h-10 w-10 rounded-full"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Created by</p>
              <p className="text-sm text-gray-500">{campaign.creator.name}</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600">{campaign.description}</p>
          </div>

          {/* Updates Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Campaign Updates</h2>
            {campaign.updates.map(update => (
              <div key={update.id} className="bg-white rounded-lg shadow p-6 mb-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">{update.title}</h3>
                  <span className="text-sm text-gray-500">{update.date}</span>
                </div>
                <p className="text-gray-600">{update.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6 sticky top-8">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-2xl font-bold">${campaign.raised.toLocaleString()}</span>
                <span className="text-gray-500">of ${campaign.goal.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                ></div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <Users className="h-5 w-5 mx-auto text-gray-400 mb-1" />
                  <div className="text-lg font-semibold">{campaign.backers}</div>
                  <div className="text-sm text-gray-500">Backers</div>
                </div>
                <div>
                  <Target className="h-5 w-5 mx-auto text-gray-400 mb-1" />
                  <div className="text-lg font-semibold">{((campaign.raised / campaign.goal) * 100).toFixed(0)}%</div>
                  <div className="text-sm text-gray-500">Funded</div>
                </div>
                <div>
                  <Clock className="h-5 w-5 mx-auto text-gray-400 mb-1" />
                  <div className="text-lg font-semibold">{campaign.daysLeft}</div>
                  <div className="text-sm text-gray-500">Days Left</div>
                </div>
              </div>
            </div>

            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 mb-4">
              Back this project
            </button>

            <button className="w-full flex items-center justify-center text-gray-700 px-4 py-2 border rounded-md hover:bg-gray-50">
              <Share2 className="h-5 w-5 mr-2" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;