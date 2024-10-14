import { useState, useEffect } from "react";
import logo from "./../../assets/logo.png";
import logo2 from "./../../assets/logo2.png";

const Header = () => {
  const [gregorianDate, setGregorianDate] = useState("");
  const [hijraDate, setHijraDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setGregorianDate(
        now.toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );

      setHijraDate("الاثنين, 10 ربيع الثاني 1446");
      setCurrentTime(now.toLocaleTimeString());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {" "}
      <div className="header-lower py-4 bg-white shadow">
        <div className="container mx-auto">
          <div className="main-box flex lg:justify-between md:justify-between items-center flex-wrap justify-center">
            {/* Left: Logo */}
            <div className="logo-box">
              <a href="https://haab.com.bd">
                <img src={logo} alt="HAAB Logo" className="h-32" />
              </a>
            </div>

            {/* Center: Middle Logo */}
            <div className="header-middle my-5">
              <a href="https://haab.com.bd">
                <img src={logo2} alt="HAAB Agencies" className="h-28" />
              </a>
            </div>

            {/* Right: Date and Time */}
            <div className="header-right text-right">
              <p className="text-2xl text-[#2e3192] font-semibold">
                {gregorianDate}
              </p>
              <p className="text-green-600 text-2xl my-1">{hijraDate}</p>
              <p className="text-gray-700 text-2xl font-bold">{currentTime}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16 bg-[#0c8d2d] flex items-center justify-center">
        <a
          href="https://haab.com.bd/"
          target="_blank"
          className="text-white text-lg font-semibold hover:underline"
        >
          BACK TO HOME
        </a>
      </div>
    </>
  );
};

export default Header;
