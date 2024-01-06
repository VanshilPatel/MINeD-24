import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Center,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { useState } from "react";

export default function contact() {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    mail: "",
    desc: "",
  });

  return (
    <Center>
      <Flex>
        <Box bg={["#02054B"]} color="white" borderRadius="lg" p={[0, 5, 16]}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 5, md: 5, lg: 20 }}>
              <WrapItem>
                <Box paddingInline={[2, 0]}>
                  <Heading paddingBlock={[2, 0]}>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        justifyContent={"start"}
                        size="md"
                        variant="ghost"
                        color="#DCE2FF"
                        as={"a"}
                        href={"mailto:sapanmankad@nirmauni.ac.in"}
                        _hover={{ bgColor: "blue.900" }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}
                      >
                        sapanmankad@nirmauni.ac.in
                      </Button>
                      <Button
                        justifyContent={"start"}
                        size="md"
                        variant="ghost"
                        color="#DCE2FF"
                        as={"a"}
                        href={"mailto:coe.ds@nirmauni.ac.in"}
                        _hover={{ bgColor: "blue.900" }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}
                      >
                        coe.ds@nirmauni.ac.in
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <form>
                      <VStack spacing={5}>
                        <FormControl isRequired id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input
                              type="text"
                              name="name"
                              size="md"
                              onChange={(e) => {
                                setContactDetails({
                                  ...contactDetails,
                                  [e.target.name]: e.target.value,
                                });
                              }}
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl isRequired id="name">
                          <FormLabel>Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input
                              type="email"
                              name="mail"
                              size="md"
                              onChange={(e) => {
                                setContactDetails({
                                  ...contactDetails,
                                  [e.target.name]: e.target.value,
                                });
                              }}
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl isRequired id="desc">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            placeholder="message"
                            name="desc"
                            onChange={(e) => {
                              setContactDetails({
                                ...contactDetails,
                                [e.target.name]: e.target.value,
                              });
                            }}
                          />
                        </FormControl>
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                          as={"a"}
                          href={`mailto:sapanmankad@nirmauni.ac.in?subject=${encodeURI(
                            contactDetails.name
                          )}&body=${encodeURI(contactDetails.desc)}`}
                        >
                          Send Message
                        </Button>
                      </VStack>
                    </form>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Center>
  );
}
