import "../styles/globals.css";
import { ChakraProvider, Text } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Fonts from "../components/Fonts";
import NextNProgress from "nextjs-progressbar";
// import CountDownTimer from "../components/Timer";
const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

export default function App({ Component, pageProps }) {
  // const dateTimeForHackathon = new Date("03/03/2023 09:00:00").getTime();

  return (
    <ChakraProvider theme={theme}>
      <NextNProgress />
      <Fonts />
      <Text align="center" py="4" bgColor="blue.200">
        <b>Hackathon ended!! Go to events page to see the winner's list</b>
      </Text>
      <Component {...pageProps} />
      {/* <CountDownTimer targetDate={dateTimeForHackathon} /> */}
    </ChakraProvider>
  );
}
