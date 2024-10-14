import logo from "./../../assets/footer_logo.png";
import bgFooter from "./../../assets/haab-bg-footer.jpg";

const Footer = () => {
  return (
    <footer
      className="text-white bg-cover bg-center"
      style={{
        backgroundImage: `url('${bgFooter}')`,
      }}
    >
      {/* Widgets Section */}
      <div className="container mx-auto py-12">
        <div className="px-12">
          <img src={logo} alt="HAAB Logo" className="mb-12" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Head Office */}
          <div className="p-12">
            <h2 className="text-2xl font-semibold mb-4">Head Office</h2>
            <ul>
              <li className="flex items-center mb-2">
                <i className="flaticon-smartphone "></i>
                58317030, 222228867, 222220868
              </li>
              <li className="flex items-center mb-2">
                <i className="flaticon-email-1 "></i>
                <a href="mailto:haab01bd@gmail.com" className="font-semibold">
                  haab01bd@gmail.com
                </a>
              </li>
              <li className="flex items-center mb-2">
                <i className="flaticon-location "></i>
                Sattara Centre, 15th Floor, 30/A, Nayapaltan, VIP Road,
                Dhaka-1000
              </li>
            </ul>
          </div>

          {/* Chattogram Zonal Office */}
          <div className="p-12">
            <h2 className="text-2xl font-semibold mb-4">
              Chattogram Zonal Office
            </h2>
            <ul>
              <li className="flex items-center mb-2">
                <i className="flaticon-smartphone"></i>
                031-612336
              </li>
              <li className="flex items-center mb-2">
                <i className="flaticon-email-1"></i>
                <a href="mailto:info@haabbd.com" className="font-semibold">
                  info@haabbd.com
                </a>
              </li>
              <li className="flex items-center mb-2">
                <i className="flaticon-location"></i>
                Moshruj Heights, 42, CDA Avenue, M.M Ali Road, Lalkhan Bazar,
                Chattagram.
              </li>
            </ul>
          </div>

          {/* Sylhet Zonal Office */}
          <div className="p-12">
            <h2 className="text-2xl font-semibold mb-4">Sylhet Zonal Office</h2>
            <ul>
              <li className="flex items-center mb-2">
                <i className="flaticon-smartphone"></i>
                01939778866, 01730073610
              </li>
              <li className="flex items-center mb-2">
                <i className="flaticon-email-1"></i>
                <a href="mailto:info@haabbd.com" className="font-semibold">
                  info@haabbd.com
                </a>
              </li>
              <li className="flex items-center mb-2">
                <i className="flaticon-location"></i>
                9th Floor, Ananda Tower, Jail Road, Sylhet.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#03160b] py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-base px-12">
            Copyright © 2024 All Rights Reserved by{" "}
            <a href="https://haab.com.bd" target="_blank" className="font-bold">
              HAAB
            </a>
          </p>
          <p className="text-base px-16">
            Technology Partner{" "}
            <a href="https://m360ict.com" target="_blank" className="font-bold">
              M360 ICT
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
