import React from "react";
import HeaderElement from "../components/HeaderElement";

const Headers = () => {
  const heading_content = [
    { href: "/", titleName: "Home" },
    { href: "/cards", titleName: "Cards" },
    { href: "/basesets", titleName: "Base Sets" },
    { href: "/leaderboard", titleName: "Leader Board" },
    {href:"/profile",titleName:"Profile"},
    {href:"/daily",titleName:"Daily"}
  ];

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="/" className="flex items-center">
          <span className="text-gray-800 font-bold text-lg">Pokémon</span>
        </a>
        <div className="flex items-center md:space-x-8 text-gray-600">
          {heading_content.map((content) => (
            <HeaderElement key={content.titleName} {...content} />
          ))}
        </div>
        <div className="flex items-center space-x-4" id="search">
          <button className="text-gray-600 hover:text-gray-800">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="text-gray-600 hover:text-gray-800" id="profile">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Headers;