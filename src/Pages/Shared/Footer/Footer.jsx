import { FaSlackHash } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 text-white bg-black">
      <aside>
        <FaSlackHash className="text-7xl"></FaSlackHash>
        <p className="font-bold">
          Istiuqe Ahmed Bhuiyan Portfolio
          <br />
           Since 2003
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
