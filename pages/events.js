import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import ContactComponent from "../components/Contact";
import Sponsors from "../components/Sponsors";
import Tracks from "../components/Tracks";
import About from "../components/About";
import Prizes from "../components/Prizes";
import Schedule from "../components/Schedule";
import Partners from "../components/Partners";
import Mentors from "../components/Mentors";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Events - MINeD 2023 Hackathon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={"container.xl"} marginInline="auto">
        <Navbar />
        <Box marginBlock={16}>
          <About />
          <Prizes />
          <Tracks />
          <Mentors />
          <Schedule />
          <Sponsors />
          <Partners />
        </Box>
        <Footer />
      </Container>
    </>
  );
}
