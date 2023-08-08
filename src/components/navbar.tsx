/* eslint-disable react-hooks/rules-of-hooks */

import { useNavigate } from "react-router-dom";

const navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full h-20 shadow-md fixed z-10 bg-[#e8e8e8] p-10 flex flex-row justify-between items-center">
      <figure>
        <img src="https://cdn-icons-png.flaticon.com/512/21/21601.png" alt="logo-news" className="w-12"  />
      </figure>
      <div>
        <a className="cursor-pointer font-semibold" onClick={() => navigate('/')}>Home</a>
      </div>
    </div>
  );
};

export default navbar;
