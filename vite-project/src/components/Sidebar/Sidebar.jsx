// src/components/Sidebar/Sidebar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

const menuItems = [
  { english: "Home", chinese: "主页", link: "/" },
  { english: "About", chinese: "关于", link: "/about" },
  { english: "Projects", chinese: "项目", link: "/projects" },
  { english: "Testimonials", chinese: "评价", link: "/testimonials" },
  { english: "Awards", chinese: "奖项", link: "/awards" },
  { english: "Contact", chinese: "联系", link: "/contact" },
];

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-5 fixed top-0 left-0 z-10">
      <ul className="space-y-4">
        {menuItems.map((item, index) => (
          <SidebarItem key={index} english={item.english} chinese={item.chinese} link={item.link} />
        ))}
      </ul>
    </div>
  );
};

const SidebarItem = ({ english, chinese, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={link} className="flex items-center space-x-2 text-lg">
        <span className={`transition-all duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'} text-3xl`}>
          {english}
        </span>
        <span
          className={`transition-all duration-300 absolute ${isHovered ? 'opacity-100' : 'opacity-0'} text-3xl`}
          style={{ left: 0 }}
        >
          {chinese}
        </span>
      </Link>
    </li>
  );
};
console.error("This website is an example and shouldnt be taken real ")
export default Sidebar;
