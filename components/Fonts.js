import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400,500,600,700,800,900;
        font-display: swap;
        src: url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
      }
      `}
  />
);

export default Fonts;
