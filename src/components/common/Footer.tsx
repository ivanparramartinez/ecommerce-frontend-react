import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-[8px] md:text-[10px] instrument-sans font-light text-gray-300">
        <p>
          1. Privacy Notice: In accordance with the Colombian Personal Data
          Protection Law (Law 1581 of 2012), [Store Name] is committed to
          protecting your privacy and ensuring the security of your personal
          data. The personal data collected through our website will only be
          used to manage your purchases, improve your shopping experience, and
          for other purposes directly related to our services. For more
          information on how we handle your personal data, please read our full
          Privacy Policy.
        </p>
        <p>
          2. Terms and Conditions: By accessing and using this website, you
          agree to be bound by the terms and conditions of use. These terms
          govern your purchase and the use of this website, including pricing,
          shipping, returns, and responsibilities. Please review our full Terms
          and Conditions to understand the rules that apply to your use of the
          site and the purchasing process.
        </p>
        <p>
          3. Cookie Policy: This website uses cookies to enhance the user
          experience and improve the functionality of the site. Cookies are also
          used for analytical purposes and to personalize advertising. By
          continuing to browse this site, you agree to the use of cookies as
          outlined in our Cookie Policy.
        </p>
        <p>
          4. Shipping Policy: We offer nationwide shipping within Colombia.
          Delivery times may vary depending on your location, but typically
          orders are delivered within 3 to 7 business days. For more detailed
          information on shipping options, rates, and delivery times, please
          refer to our Shipping Policy.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
