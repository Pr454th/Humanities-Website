import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState(0);
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);
  return (
    <footer className="accent-bg">
      <div className="container py-3">
        <div>
          <div className="display-6 my-2">
            Applied Sciences &amp; Humanities
          </div>
          <div className="h5">MIT Campus, Anna University</div>
          <div className="h6">Chromepet, Chennai - 600044</div>
          <div className="small">Copyright © {year}. All rights reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
