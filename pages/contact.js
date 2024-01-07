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

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - MINeD 2024 Hackathon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={"container.xl"} marginInline="auto">
        <Navbar />
        <Box marginBlock={16} maxW={"full"} marginInline={"auto"}>
          <ContactComponent />
        </Box>
        <Footer />
      </Container>
    </>
  );
}
