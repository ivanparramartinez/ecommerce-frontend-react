import React from "react";
import logo from "../../assets/img/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 lg:p-8">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex items-center justify-start gap-4 lg:gap-8">
          <a href="#" className="">
            <span className="sr-only">Luxe Couture</span>
            <img alt="" src={logo} className="h-14 lg:h-18 w-auto" />
          </a>
          <p className="text-2xl instrument-sans font-bold text-gray-300">
            Luxe Couture
          </p>
        </div>
        <div className="flex items-center lg:justify-end gap-4 lg:gap-8">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFD74B] p-2 rounded-full aspect-square max-h-10 lg:max-h-12 lg:h-8/12 flex items-center justify-center"
          >
            <svg
              width="29"
              height="21"
              viewBox="0 0 29 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6418 14.8748L19.0592 10.4998L11.6418 6.12484V14.8748ZM28.163 3.45609C28.3488 4.1415 28.4774 5.06025 28.5632 6.22692C28.6632 7.39359 28.7061 8.39984 28.7061 9.27484L28.7918 10.4998C28.7918 13.6936 28.5632 16.0415 28.163 17.5436C27.8057 18.8561 26.9768 19.7019 25.6905 20.0665C25.0188 20.2561 23.7897 20.3873 21.9032 20.4748C20.0453 20.5769 18.3446 20.6207 16.7725 20.6207L14.5002 20.7082C8.51195 20.7082 4.78183 20.4748 3.30979 20.0665C2.02354 19.7019 1.19462 18.8561 0.83733 17.5436C0.651538 16.8582 0.522913 15.9394 0.437163 14.7728C0.337121 13.6061 0.294246 12.5998 0.294246 11.7248L0.208496 10.4998C0.208496 7.30609 0.437163 4.95817 0.83733 3.45609C1.19462 2.14359 2.02354 1.29775 3.30979 0.933171C3.9815 0.743587 5.21058 0.612337 7.09708 0.524837C8.955 0.422754 10.6557 0.379004 12.2278 0.379004L14.5002 0.291504C20.4884 0.291504 24.2185 0.524837 25.6905 0.933171C26.9768 1.29775 27.8057 2.14359 28.163 3.45609Z"
                fill="black"
              />
            </svg>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFD74B] p-2 rounded-full aspect-square max-h-10 lg:max-h-12 lg:h-8/12 flex items-center justify-center"
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5207 0.125C27.1054 0.125 34.8748 7.89445 34.8748 17.4792C34.8748 27.0639 27.1054 34.8333 17.5207 34.8333C14.4538 34.8386 11.4408 34.0269 8.79154 32.4818L0.173472 34.8333L2.51975 26.2118C0.973427 23.5617 0.161156 20.5474 0.16653 17.4792C0.16653 7.89445 7.93599 0.125 17.5207 0.125ZM11.6064 9.3227L11.2593 9.33658C11.0349 9.35205 10.8156 9.41099 10.6137 9.51013C10.4256 9.61687 10.2537 9.75013 10.1035 9.9058C9.89527 10.1019 9.77726 10.272 9.65057 10.4368C9.00868 11.2714 8.66308 12.296 8.66833 13.3489C8.6718 14.1992 8.89393 15.027 9.24102 15.801C9.9508 17.3664 11.1187 19.0237 12.6598 20.5595C13.0312 20.9292 13.3956 21.3005 13.7878 21.6459C15.7027 23.3317 17.9845 24.5474 20.4518 25.1965L21.4375 25.3475C21.7586 25.3649 22.0796 25.3406 22.4024 25.325C22.9077 25.2983 23.4011 25.1615 23.848 24.9241C24.0751 24.8067 24.2969 24.6793 24.5127 24.5423C24.5127 24.5423 24.5861 24.4925 24.7296 24.3861C24.9639 24.2126 25.1079 24.0893 25.3023 23.8863C25.4481 23.7359 25.5695 23.5612 25.6667 23.3622C25.8021 23.0793 25.9374 22.5396 25.993 22.0901C26.0346 21.7465 26.0225 21.5591 26.0173 21.4428C26.0103 21.2572 25.8559 21.0645 25.6875 20.983L24.6775 20.53C24.6775 20.53 23.1677 19.8723 22.2445 19.4523C22.1478 19.4102 22.0443 19.3861 21.9391 19.3812C21.8203 19.3687 21.7003 19.382 21.5871 19.42C21.4739 19.458 21.3702 19.52 21.2831 19.6016C21.2744 19.5981 21.1581 19.697 19.9034 21.2172C19.8314 21.314 19.7322 21.3871 19.6185 21.4273C19.5047 21.4675 19.3816 21.4729 19.2648 21.4428C19.1517 21.4127 19.0409 21.3744 18.9333 21.3283C18.7181 21.2381 18.6435 21.2034 18.496 21.1409C17.4996 20.7069 16.5774 20.1195 15.7627 19.4003C15.544 19.2094 15.341 19.0011 15.1328 18.7998C14.4501 18.1459 13.8551 17.4062 13.3626 16.5993L13.2602 16.4344C13.1878 16.323 13.1284 16.2036 13.0832 16.0787C13.0173 15.8236 13.1891 15.6188 13.1891 15.6188C13.1891 15.6188 13.6108 15.1572 13.8069 14.9073C13.9978 14.6643 14.1592 14.4283 14.2633 14.26C14.4681 13.9302 14.5323 13.5918 14.4247 13.3298C13.9388 12.1428 13.4367 10.9621 12.9184 9.78779C12.816 9.55525 12.5123 9.38865 12.2363 9.35567C12.1426 9.3441 12.0489 9.33485 11.9552 9.32791C11.7222 9.31454 11.4885 9.31686 11.2558 9.33485L11.6064 9.3227Z"
                fill="black"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFD74B] p-2 rounded-full aspect-square max-h-10 lg:max-h-12 lg:h-8/12 flex items-center justify-center"
          >
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.08975 0.166504H21.9522C26.8522 0.166504 30.8335 4.14775 30.8335 9.04775V21.9103C30.8335 24.2657 29.8978 26.5247 28.2322 28.1902C26.5667 29.8558 24.3077 30.7915 21.9522 30.7915H9.08975C4.18975 30.7915 0.208496 26.8103 0.208496 21.9103V9.04775C0.208496 6.6923 1.1442 4.43332 2.80975 2.76776C4.47531 1.1022 6.73429 0.166504 9.08975 0.166504ZM8.7835 3.229C7.32149 3.229 5.91936 3.80978 4.88557 4.84358C3.85178 5.87737 3.271 7.2795 3.271 8.7415V22.2165C3.271 25.2637 5.73631 27.729 8.7835 27.729H22.2585C23.7205 27.729 25.1226 27.1482 26.1564 26.1144C27.1902 25.0806 27.771 23.6785 27.771 22.2165V8.7415C27.771 5.69432 25.3057 3.229 22.2585 3.229H8.7835ZM23.5601 5.52588C24.0677 5.52588 24.5546 5.72754 24.9135 6.08649C25.2725 6.44545 25.4741 6.9323 25.4741 7.43994C25.4741 7.94758 25.2725 8.43443 24.9135 8.79339C24.5546 9.15234 24.0677 9.354 23.5601 9.354C23.0524 9.354 22.5656 9.15234 22.2066 8.79339C21.8477 8.43443 21.646 7.94758 21.646 7.43994C21.646 6.9323 21.8477 6.44545 22.2066 6.08649C22.5656 5.72754 23.0524 5.52588 23.5601 5.52588ZM15.521 7.82275C17.5516 7.82275 19.499 8.62939 20.9348 10.0652C22.3706 11.501 23.1772 13.4484 23.1772 15.479C23.1772 17.5096 22.3706 19.457 20.9348 20.8928C19.499 22.3286 17.5516 23.1353 15.521 23.1353C13.4904 23.1353 11.543 22.3286 10.1072 20.8928C8.67138 19.457 7.86475 17.5096 7.86475 15.479C7.86475 13.4484 8.67138 11.501 10.1072 10.0652C11.543 8.62939 13.4904 7.82275 15.521 7.82275ZM15.521 10.8853C14.3027 10.8853 13.1342 11.3692 12.2727 12.2307C11.4112 13.0922 10.9272 14.2607 10.9272 15.479C10.9272 16.6973 11.4112 17.8658 12.2727 18.7273C13.1342 19.5888 14.3027 20.0728 15.521 20.0728C16.7393 20.0728 17.9078 19.5888 18.7693 18.7273C19.6308 17.8658 20.1147 16.6973 20.1147 15.479C20.1147 14.2607 19.6308 13.0922 18.7693 12.2307C17.9078 11.3692 16.7393 10.8853 15.521 10.8853Z"
                fill="black"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFD74B] p-2 rounded-full aspect-square max-h-10 lg:max-h-12 lg:h-8/12 flex items-center justify-center"
          >
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.8332 16.5408C32.8332 7.50218 25.5158 0.166504 16.4998 0.166504C7.48384 0.166504 0.166504 7.50218 0.166504 16.5408C0.166504 24.4659 5.78517 31.0647 13.2332 32.5876V21.4531H9.96651V16.5408H13.2332V12.4472C13.2332 9.28697 15.7975 6.71621 18.9498 6.71621H23.0332V11.6285H19.7665C18.8682 11.6285 18.1332 12.3653 18.1332 13.2659V16.5408H23.0332V21.4531H18.1332V32.8332C26.3815 32.0145 32.8332 25.039 32.8332 16.5408Z"
                fill="black"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFD74B] p-2 rounded-full aspect-square max-h-10 lg:max-h-12 lg:h-8/12 flex items-center justify-center"
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_29_8937"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="35"
                height="35"
              >
                <path
                  d="M0.166504 0.125H34.8748V34.8333H0.166504V0.125Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_29_8937)">
                <path
                  d="M27.4993 1.75098H32.8221L21.1948 15.074L34.8748 33.2066H24.1648L15.7704 22.2115L6.176 33.2066H0.848275L13.2838 18.9514L0.166504 1.75346H11.1492L18.7255 11.8015L27.4993 1.75098ZM25.6275 30.0135H28.5778L9.53775 4.77804H6.37434L25.6275 30.0135Z"
                  fill="black"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-[8px] md:text-[10px] instrument-sans font-light text-gray-300 mt-4 lg:mt-8">
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
