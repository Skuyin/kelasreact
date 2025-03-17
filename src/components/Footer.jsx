import React from "react";

const Footer = () => {
  return (
    <footer className="w-full  text-gray-900 py-10 px-6">
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
        {/* Brand & Address */}
        <div>
          <h1 className="text-2xl font-bold text-amber-400">Jelly</h1>
          <p className="mt-2 text-gray-900">Jl. Depok Marggona</p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl text-gray-900 font-semibold">Contact</h2>
          <div className="mt-2 space-y-2">
            <p className="flex items-center gap-2 text-gray-900">
              <Phone className="w-5 h-5 text-amber-400" /> +62 4545 4343
            </p>
            <p className="flex items-center gap-2 text-gray-900">
              <Mail className="w-5 h-5 text-amber-400" /> jelly@gmail.com
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl text-gray-900 font-semibold">Follow Us</h2>
          <div className="mt-2 flex gap-4">
            <a href="#" className="hover:text-amber-400 transition">
              <Instagram className="w-6 h-6 " />
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              <Tiktok className="w-6 h-6 " />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Instagram = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      id="Ins-Line--Streamline-Mingcute"
      height={16}
      width={16}
    >
      <g fill="none" fillRule="evenodd">
        <path
          d="M16 0v16H0V0h16ZM8.395333333333333 15.505333333333333l-0.007333333333333332 0.0013333333333333333 -0.047333333333333324 0.023333333333333334 -0.013333333333333332 0.0026666666666666666 -0.009333333333333332 -0.0026666666666666666 -0.047333333333333324 -0.023333333333333334c-0.006666666666666666 -0.0026666666666666666 -0.012666666666666666 -0.0006666666666666666 -0.016 0.003333333333333333l-0.0026666666666666666 0.006666666666666666 -0.011333333333333334 0.2853333333333333 0.003333333333333333 0.013333333333333332 0.006666666666666666 0.008666666666666666 0.06933333333333333 0.049333333333333326 0.009999999999999998 0.0026666666666666666 0.008 -0.0026666666666666666 0.06933333333333333 -0.049333333333333326 0.008 -0.010666666666666666 0.0026666666666666666 -0.011333333333333334 -0.011333333333333334 -0.2846666666666666c-0.0013333333333333333 -0.006666666666666666 -0.005999999999999999 -0.011333333333333334 -0.011333333333333334 -0.011999999999999999Zm0.17666666666666667 -0.07533333333333334 -0.008666666666666666 0.0013333333333333333 -0.12333333333333332 0.062 -0.006666666666666666 0.006666666666666666 -0.002 0.007333333333333332 0.011999999999999999 0.2866666666666666 0.003333333333333333 0.008 0.005333333333333333 0.004666666666666666 0.134 0.062c0.008 0.0026666666666666666 0.015333333333333332 0 0.019333333333333334 -0.005333333333333333l0.0026666666666666666 -0.009333333333333332 -0.02266666666666667 -0.4093333333333333c-0.002 -0.008 -0.006666666666666666 -0.013333333333333332 -0.013333333333333332 -0.014666666666666665Zm-0.4766666666666666 0.0013333333333333333a0.015333333333333332 0.015333333333333332 0 0 0 -0.018 0.004l-0.004 0.009333333333333332 -0.02266666666666667 0.4093333333333333c0 0.008 0.004666666666666666 0.013333333333333332 0.011333333333333334 0.016l0.009999999999999998 -0.0013333333333333333 0.134 -0.062 0.006666666666666666 -0.005333333333333333 0.0026666666666666666 -0.007333333333333332 0.011333333333333334 -0.2866666666666666 -0.002 -0.008 -0.006666666666666666 -0.006666666666666666 -0.12266666666666666 -0.06133333333333333Z"
          strokeWidth={0.6667}
        />
        <path
          fill="black"
          d="M10.666666666666666 2a3.333333333333333 3.333333333333333 0 0 1 3.333333333333333 3.333333333333333v5.333333333333333a3.333333333333333 3.333333333333333 0 0 1 -3.333333333333333 3.333333333333333H5.333333333333333a3.333333333333333 3.333333333333333 0 0 1 -3.333333333333333 -3.333333333333333V5.333333333333333a3.333333333333333 3.333333333333333 0 0 1 3.333333333333333 -3.333333333333333h5.333333333333333Zm0 1.3333333333333333H5.333333333333333a2 2 0 0 0 -2 2v5.333333333333333a2 2 0 0 0 2 2h5.333333333333333a2 2 0 0 0 2 -2V5.333333333333333a2 2 0 0 0 -2 -2Zm-2.6666666666666665 2a2.6666666666666665 2.6666666666666665 0 1 1 0 5.333333333333333 2.6666666666666665 2.6666666666666665 0 0 1 0 -5.333333333333333Zm0 1.3333333333333333a1.3333333333333333 1.3333333333333333 0 1 0 0 2.6666666666666665 1.3333333333333333 1.3333333333333333 0 0 0 0 -2.6666666666666665Zm3 -2.333333333333333a0.6666666666666666 0.6666666666666666 0 1 1 0 1.3333333333333333 0.6666666666666666 0.6666666666666666 0 0 1 0 -1.3333333333333333Z"
          strokeWidth={0.6667}
        />
      </g>
    </svg>
  );
};

export const Tiktok = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      id="Tiktok-Line--Streamline-Mingcute"
      height={16}
      width={16}
    >
      <desc>{"Tiktok Line Streamline Icon: https://streamlinehq.com"}</desc>
      <g fill="none" fillRule="evenodd">
        <path
          d="M16 0v16H0V0h16ZM8.395333333333333 15.505333333333333l-0.007333333333333332 0.0013333333333333333 -0.047333333333333324 0.023333333333333334 -0.013333333333333332 0.0026666666666666666 -0.009333333333333332 -0.0026666666666666666 -0.047333333333333324 -0.023333333333333334c-0.006666666666666666 -0.0026666666666666666 -0.012666666666666666 -0.0006666666666666666 -0.016 0.003333333333333333l-0.0026666666666666666 0.006666666666666666 -0.011333333333333334 0.2853333333333333 0.003333333333333333 0.013333333333333332 0.006666666666666666 0.008666666666666666 0.06933333333333333 0.049333333333333326 0.009999999999999998 0.0026666666666666666 0.008 -0.0026666666666666666 0.06933333333333333 -0.049333333333333326 0.008 -0.010666666666666666 0.0026666666666666666 -0.011333333333333334 -0.011333333333333334 -0.2846666666666666c-0.0013333333333333333 -0.006666666666666666 -0.005999999999999999 -0.011333333333333334 -0.011333333333333334 -0.011999999999999999Zm0.17666666666666667 -0.07533333333333334 -0.008666666666666666 0.0013333333333333333 -0.12333333333333332 0.062 -0.006666666666666666 0.006666666666666666 -0.002 0.007333333333333332 0.011999999999999999 0.2866666666666666 0.003333333333333333 0.008 0.005333333333333333 0.004666666666666666 0.134 0.062c0.008 0.0026666666666666666 0.015333333333333332 0 0.019333333333333334 -0.005333333333333333l0.0026666666666666666 -0.009333333333333332 -0.02266666666666667 -0.4093333333333333c-0.002 -0.008 -0.006666666666666666 -0.013333333333333332 -0.013333333333333332 -0.014666666666666665Zm-0.4766666666666666 0.0013333333333333333a0.015333333333333332 0.015333333333333332 0 0 0 -0.018 0.004l-0.004 0.009333333333333332 -0.02266666666666667 0.4093333333333333c0 0.008 0.004666666666666666 0.013333333333333332 0.011333333333333334 0.016l0.009999999999999998 -0.0013333333333333333 0.134 -0.062 0.006666666666666666 -0.005333333333333333 0.0026666666666666666 -0.007333333333333332 0.011333333333333334 -0.2866666666666666 -0.002 -0.008 -0.006666666666666666 -0.006666666666666666 -0.12266666666666666 -0.06133333333333333Z"
          strokeWidth={0.6667}
        />
        <path
          fill="black"
          d="M9.333333333333332 2a0.6666666666666666 0.6666666666666666 0 0 1 0.6666666666666666 0.6666666666666666 2.669333333333333 2.669333333333333 0 0 0 2.1333333333333333 2.6133333333333333 0.6666666666666666 0.6666666666666666 0 1 1 -0.26666666666666666 1.3066666666666666A3.9913333333333334 3.9913333333333334 0 0 1 10 5.6466666666666665V11.333333333333332a3.333333333333333 3.333333333333333 0 1 1 -3.333333333333333 -3.333333333333333 0.6666666666666666 0.6666666666666666 0 1 1 0 1.3333333333333333 2 2 0 1 0 2 2V2.6666666666666665a0.6666666666666666 0.6666666666666666 0 0 1 0.6666666666666666 -0.6666666666666666Z"
          strokeWidth={0.6667}
        />
      </g>
    </svg>
  );
};

export const Mail = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      id="Mail-Line--Streamline-Mingcute"
      height={16}
      width={16}
    >
      <desc>{"Mail Line Streamline Icon: https://streamlinehq.com"}</desc>
      <g fill="none" fillRule="nonzero">
        <path
          d="M16 0v16H0V0h16ZM8.395333333333333 15.505333333333333l-0.007333333333333332 0.0013333333333333333 -0.047333333333333324 0.023333333333333334 -0.013333333333333332 0.0026666666666666666 -0.009333333333333332 -0.0026666666666666666 -0.047333333333333324 -0.023333333333333334c-0.006666666666666666 -0.0026666666666666666 -0.012666666666666666 -0.0006666666666666666 -0.016 0.003333333333333333l-0.0026666666666666666 0.006666666666666666 -0.011333333333333334 0.2853333333333333 0.003333333333333333 0.013333333333333332 0.006666666666666666 0.008666666666666666 0.06933333333333333 0.049333333333333326 0.009999999999999998 0.0026666666666666666 0.008 -0.0026666666666666666 0.06933333333333333 -0.049333333333333326 0.008 -0.010666666666666666 0.0026666666666666666 -0.011333333333333334 -0.011333333333333334 -0.2846666666666666c-0.0013333333333333333 -0.006666666666666666 -0.005999999999999999 -0.011333333333333334 -0.011333333333333334 -0.011999999999999999Zm0.17666666666666667 -0.07533333333333334 -0.008666666666666666 0.0013333333333333333 -0.12333333333333332 0.062 -0.006666666666666666 0.006666666666666666 -0.002 0.007333333333333332 0.011999999999999999 0.2866666666666666 0.003333333333333333 0.008 0.005333333333333333 0.004666666666666666 0.134 0.062c0.008 0.0026666666666666666 0.015333333333333332 0 0.019333333333333334 -0.005333333333333333l0.0026666666666666666 -0.009333333333333332 -0.02266666666666667 -0.4093333333333333c-0.002 -0.008 -0.006666666666666666 -0.013333333333333332 -0.013333333333333332 -0.014666666666666665Zm-0.4766666666666666 0.0013333333333333333a0.015333333333333332 0.015333333333333332 0 0 0 -0.018 0.004l-0.004 0.009333333333333332 -0.02266666666666667 0.4093333333333333c0 0.008 0.004666666666666666 0.013333333333333332 0.011333333333333334 0.016l0.009999999999999998 -0.0013333333333333333 0.134 -0.062 0.006666666666666666 -0.005333333333333333 0.0026666666666666666 -0.007333333333333332 0.011333333333333334 -0.2866666666666666 -0.002 -0.008 -0.006666666666666666 -0.006666666666666666 -0.12266666666666666 -0.06133333333333333Z"
          strokeWidth={0.6667}
        />
        <path
          fill="black"
          d="M13.333333333333332 2.6666666666666665a1.3333333333333333 1.3333333333333333 0 0 1 1.33 1.2333333333333334L14.666666666666666 4v8a1.3333333333333333 1.3333333333333333 0 0 1 -1.2333333333333334 1.33L13.333333333333332 13.333333333333332H2.6666666666666665a1.3333333333333333 1.3333333333333333 0 0 1 -1.33 -1.2333333333333334L1.3333333333333333 12V4a1.3333333333333333 1.3333333333333333 0 0 1 1.2333333333333334 -1.33L2.6666666666666665 2.6666666666666665h10.666666666666666Zm0 2.276 -4.626666666666667 4.626666666666667a1 1 0 0 1 -1.4133333333333333 0L2.6666666666666665 4.942666666666666V12h10.666666666666666V4.942666666666666ZM12.390666666666664 4H3.609333333333333L8 8.390666666666666 12.390666666666664 4Z"
          strokeWidth={0.6667}
        />
      </g>
    </svg>
  );
};

export const Phone = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      id="Phone-Line--Streamline-Mingcute"
      height={16}
      width={16}
    >
      <desc>{"Phone Line Streamline Icon: https://streamlinehq.com"}</desc>
      <g fill="none" fillRule="evenodd">
        <path
          d="M16 0v16H0V0h16ZM8.395333333333333 15.505333333333333l-0.007333333333333332 0.0013333333333333333 -0.047333333333333324 0.023333333333333334 -0.013333333333333332 0.0026666666666666666 -0.009333333333333332 -0.0026666666666666666 -0.047333333333333324 -0.023333333333333334c-0.006666666666666666 -0.0026666666666666666 -0.012666666666666666 -0.0006666666666666666 -0.016 0.003333333333333333l-0.0026666666666666666 0.006666666666666666 -0.011333333333333334 0.2853333333333333 0.003333333333333333 0.013333333333333332 0.006666666666666666 0.008666666666666666 0.06933333333333333 0.049333333333333326 0.009999999999999998 0.0026666666666666666 0.008 -0.0026666666666666666 0.06933333333333333 -0.049333333333333326 0.008 -0.010666666666666666 0.0026666666666666666 -0.011333333333333334 -0.011333333333333334 -0.2846666666666666c-0.0013333333333333333 -0.006666666666666666 -0.005999999999999999 -0.011333333333333334 -0.011333333333333334 -0.011999999999999999Zm0.17666666666666667 -0.07533333333333334 -0.008666666666666666 0.0013333333333333333 -0.12333333333333332 0.062 -0.006666666666666666 0.006666666666666666 -0.002 0.007333333333333332 0.011999999999999999 0.2866666666666666 0.003333333333333333 0.008 0.005333333333333333 0.004666666666666666 0.134 0.062c0.008 0.0026666666666666666 0.015333333333333332 0 0.019333333333333334 -0.005333333333333333l0.0026666666666666666 -0.009333333333333332 -0.02266666666666667 -0.4093333333333333c-0.002 -0.008 -0.006666666666666666 -0.013333333333333332 -0.013333333333333332 -0.014666666666666665Zm-0.4766666666666666 0.0013333333333333333a0.015333333333333332 0.015333333333333332 0 0 0 -0.018 0.004l-0.004 0.009333333333333332 -0.02266666666666667 0.4093333333333333c0 0.008 0.004666666666666666 0.013333333333333332 0.011333333333333334 0.016l0.009999999999999998 -0.0013333333333333333 0.134 -0.062 0.006666666666666666 -0.005333333333333333 0.0026666666666666666 -0.007333333333333332 0.011333333333333334 -0.2866666666666666 -0.002 -0.008 -0.006666666666666666 -0.006666666666666666 -0.12266666666666666 -0.06133333333333333Z"
          strokeWidth={0.6667}
        />
        <path
          fill="black"
          d="M5.448 10.552666666666667c2.5633333333333335 2.5633333333333335 4.938666666666666 2.844 5.636 2.8699999999999997 0.8426666666666667 0.030666666666666665 1.7026666666666666 -0.6573333333333333 2.0746666666666664 -1.362 -0.5933333333333333 -0.696 -1.3659999999999999 -1.236 -2.2119999999999997 -1.8213333333333335 -0.4993333333333333 0.49866666666666665 -1.1146666666666665 1.4253333333333331 -1.9339999999999997 1.0933333333333333 -0.46599999999999997 -0.18733333333333335 -1.6166666666666665 -0.7173333333333334 -2.622 -1.7233333333333332C5.384666666666666 8.604 4.855333333333333 7.453333333333333 4.666666666666666 6.9879999999999995c-0.33199999999999996 -0.8206666666666667 0.5973333333333333 -1.4373333333333334 1.0966666666666667 -1.9366666666666665 -0.5853333333333333 -0.86 -1.1159999999999999 -1.6526666666666667 -1.8106666666666666 -2.2159999999999997 -0.7146666666666667 0.37333333333333335 -1.4066666666666665 1.2266666666666666 -1.3753333333333333 2.0806666666666667 0.026 0.6973333333333334 0.30666666666666664 3.0726666666666667 2.8706666666666667 5.636666666666667Zm5.586666666666667 4.2026666666666666c-0.96 -0.03533333333333333 -3.6806666666666663 -0.41133333333333333 -6.529999999999999 -3.26 -2.8486666666666665 -2.849333333333333 -3.224 -5.569333333333333 -3.26 -6.529999999999999 -0.05333333333333333 -1.464 1.068 -2.8859999999999997 2.3633333333333333 -3.441333333333333a0.98 0.98 0 0 1 0.9633333333333334 0.106c1.072 0.782 1.8113333333333332 1.9666666666666668 2.4466666666666663 2.8946666666666663A1.0026666666666666 1.0026666666666666 0 0 1 6.8999999999999995 5.799999999999999l-0.904 0.9046666666666666C6.2059999999999995 7.168 6.633333333333333 7.966666666666666 7.333333333333333 8.666666666666666c0.7 0.7 1.4986666666666668 1.1273333333333333 1.9626666666666666 1.337333333333333l0.9033333333333333 -0.904a1.0019999999999998 1.0019999999999998 0 0 1 1.2786666666666666 -0.114c0.9466666666666665 0.6559999999999999 2.0586666666666664 1.3846666666666665 2.8693333333333335 2.4226666666666663a0.98 0.98 0 0 1 0.126 0.99c-0.5579999999999999 1.302 -1.97 2.4106666666666667 -3.4386666666666668 2.3566666666666665Z"
          strokeWidth={0.6667}
        />
      </g>
    </svg>
  );
};

export default Footer;
