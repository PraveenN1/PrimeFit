import React from 'react';
import Logo from '../../assets/images/Logo-1.png';

const Footer = () => (
  <div className="mt-20 bg-[#FFF3F4]">
    <div className="flex flex-col items-center gap-10 px-10 pt-6">
      <img src={Logo} alt="logo" className="w-52 h-10" />
    </div>
    <p className="text-xl lg:text-2xl mt-10 text-center pb-10">
      Copyright@2024 PRIMEFIT
    </p>
  </div>
);

export default Footer;
