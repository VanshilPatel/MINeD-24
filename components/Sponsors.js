import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Sponsors() {
  return (
    <Box marginBlock={16} id="sponsors">
      <Heading marginBlock={"8"}>Sponsors</Heading>
      <Grid
        h="min-content"
        templateRows={{ sm: "repeat(8, 1fr)", md: "repeat(1, 1fr)" }}
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        gap={4}
        justifyContent="center"
        alignItems="center"
      >
        <GridItem
          cursor={"pointer"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height="48"
        >
          <Link href={"https://cactusglobal.com/"} target="_blank">
            <Image src="/cactus.png" scale={1.5} />
          </Link>
        </GridItem>

        <GridItem
          cursor={"pointer"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height="48"
        >
          <Link href={"https://d360.tech/"} target="_blank">
            <Image src="/d360.png" />
          </Link>
        </GridItem>

        <GridItem
          cursor={"pointer"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height="48"
        >
          <Link href={"https://www.jklakshmicement.com/"} target="_blank">
            <Image src="/jk.png" />
          </Link>
        </GridItem>
        <GridItem
          cursor={"pointer"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height="48"
        >
          <Link href={"#"} target="_blank">
            <Image src="/ucwl.jpg" />
          </Link>
        </GridItem>

        <GridItem
          cursor={"pointer"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height="48"
        >
          <Link href={"https://www.infocusp.com/home"} target="_blank">
            <Image src="/infocusp.png" />
          </Link>
        </GridItem>
        <GridItem
          cursor={"pointer"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height="48"
        >
          <Link href={"https://theintechgroup.com/"} target="_blank">
            <Image src="/intech.png" />
          </Link>
        </GridItem>
        <GridItem
          cursor={"pointer"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link href={"#"} target="">
            <Image src="/ai_city.png" height="56" />
          </Link>
        </GridItem>
      </Grid>
    </Box>
  );
}
