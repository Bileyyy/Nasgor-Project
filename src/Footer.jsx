const Footer = () => {
    return (
      <footer className="bg-black text-white py-6">
        <div className="max-w-[90%] md:max-w-[70%] lg:max-w-[50%] mx-auto text-center">
          <p className="text-xs md:text-sm lg:text-base mb-2 text-white">
            &copy; {new Date().getFullYear()} NASI GORENG D'JONGKO. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  