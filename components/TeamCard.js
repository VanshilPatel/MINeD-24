import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";

export default function TeamCard({ url, name, description, link }) {
  return (
    <Center py={6}>
      <Box
        boxShadow={"md"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
        minW={"xs"}
      >
        <Avatar size={"2xl"} src={url} alt={name} mb={4} />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {name}
        </Heading>
        <Text textAlign={"center"} px={3}>
          {description}
        </Text>

        <Stack mt={8} direction={"row"} spacing={4} justifyContent={"center"}>
          <Button
            fontSize={"md"}
            paddingInline={8}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
            as={"a"}
            href={link}
            target="_blank"
            leftIcon={<FaLinkedinIn />}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            Connect
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
