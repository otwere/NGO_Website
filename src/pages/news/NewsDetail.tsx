import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { useNavigate, useParams, Link } from "react-router-dom";
const newsData = {
  "community-center": {
    title: "New Community Center Opens",
    date: "Aug 15, 2023",
    author: "Sarah Johnson",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1572025442646-866d16c84a54",
    content: `We are thrilled to announce the opening of our newest community center in the heart of East Village. This state-of-the-art facility represents a significant milestone in our mission to create lasting positive change in underserved communities.
The 15,000-square-foot center features:
• Modern educational facilities and classrooms
• A fully-equipped computer lab
• Multi-purpose rooms for community events
• Health screening facilities
• Recreation areas for youth programs
Impact and Reach:
The center is expected to serve over 5,000 community members annually through various programs including:
• After-school tutoring
• Adult education classes
• Job training workshops
• Health and wellness programs
• Youth mentorship initiatives
Community Response:
Local residents have expressed overwhelming support for the new center. "This is exactly what our community needed," says Maria Rodriguez, a local parent. "The programs and resources available here will make a real difference in people's lives."
Future Plans:
This center serves as a model for future facilities we plan to develop in other communities. Our goal is to establish similar centers in five more locations by 2025.
Get Involved:
We invite community members to participate in our programs and welcome volunteers who wish to contribute their time and skills. Visit the center or contact us to learn more about how you can get involved.`,
    category: "Community Development"
  },
  "fundraising-goal": {
    title: "Annual Fundraising Goal Reached",
    date: "Aug 10, 2023",
    author: "Michael Chen",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1579208575657-c595a05383b7",
    content: `We are excited to announce that we have exceeded our annual fundraising goal of $2 million, thanks to the tremendous support of our donors and partners.
Key Achievements:
• Surpassed target by 15%
• Record number of individual donors
• Significant increase in corporate partnerships
• Successful online campaign reaching global supporters
Impact Overview:
The funds raised will support:
• Education initiatives in 50 schools
• Clean water projects in 20 communities
• Healthcare access for 10,000 individuals
• Emergency relief programs
Donor Recognition:
We extend our heartfelt gratitude to:
• Our corporate partners
• Individual donors
• Community fundraisers
• Volunteer organizers
Fund Allocation:
• 70% Direct program costs
• 20% Program development
• 10% Administrative costs
Looking Forward:
With this success, we're setting even more ambitious goals for the coming year, aiming to expand our reach and impact in communities that need it most.
Join Our Mission:
Your support makes our work possible. Learn how you can contribute to our next campaign and help us create lasting change.`,
    category: "Fundraising"
  },
  "volunteer-expansion": {
    title: "Volunteer Program Expansion",
    date: "Aug 5, 2023",
    author: "Emma Williams",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    content: `We're excited to announce the expansion of our volunteer program, introducing new opportunities and initiatives to make an even greater impact in our communities.
New Volunteer Opportunities:
• Remote mentoring programs
• Virtual skill-sharing workshops
• Weekend community projects
• International volunteer positions
• Corporate volunteer partnerships
Program Highlights:
Our expanded program now includes:
• Flexible scheduling options
• Online training modules
• Skills-based matching
• Impact tracking system
• Volunteer recognition program
Impact Metrics:
In the past year, our volunteers have:
• Contributed 50,000+ hours
• Served 100+ communities
• Supported 25+ projects
• Mentored 500+ individuals
Training and Support:
We've enhanced our volunteer support with:
• Comprehensive orientation
• Ongoing skill development
• Regular feedback sessions
• Peer support networks
• Professional development opportunities
Get Involved:
Whether you have a few hours or want to make a long-term commitment, there's a place for you in our volunteer family. Join us in making a difference.`,
    category: "Volunteering"
  }
};
export function NewsDetail() {
  const navigate = useNavigate();
  const {
    id
  } = useParams();
  const news = newsData[id as keyof typeof newsData];
  if (!news) {
    return <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          News article not found
        </h1>
        <button onClick={() => navigate(-1)} className="mt-4 text-blue-600 hover:text-blue-700">
          Go back
        </button>
      </div>;
  }
  return <motion.article initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0
  }} className="max-w-4xl mx-auto px-4 py-12">
      <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-gray-900 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to News
      </button>
      <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
        <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-4">
            {news.category}
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">{news.title}</h1>
          <div className="flex items-center text-white/90 space-x-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {news.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {news.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {news.readTime}
            </div>
          </div>
        </div>
      </div>
      <div className="prose prose-lg max-w-none">
        {news.content.split("\n").map((paragraph, index) => <p key={index} className="mb-4 text-gray-700 leading-relaxed">
            {paragraph}
          </p>)}
      </div>
      <div className="mt-8 flex justify-between items-center border-t pt-8">
        <button className="flex items-center text-gray-600 hover:text-gray-900">
          <Share2 className="w-5 h-5 mr-2" />
          Share this article
        </button>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Follow our updates
          </button>
          <Link to="/donate" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Support our cause
          </Link>
        </div>
      </div>
    </motion.article>;
}