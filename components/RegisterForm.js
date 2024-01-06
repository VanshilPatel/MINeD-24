import {
  Box,
  Heading,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { MdPhone, MdEmail } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";
import { BsGithub, BsDiscord, BsPerson, BsLinkedin } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";

export default function contact() {
  const [contactDetails, setContactDetails] = useState({});

  const onChange = (e) => {
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contactDetails);
    alert("sucess");
    const response = await axios.post(
      "http://apis.mined2023.tech:8000/api/registrations",
      contactDetails
    );
    if (response.data) {
      alert("Sucess");
      console.log(response.data);
    }
  };
  return (
    <Box bg="blue.700" borderRadius="lg" py="16" px="5" maxW="5xl" mx="auto">
      <Heading textAlign="center" mb="8" color="white">
        Registration Form
      </Heading>
      <Text textAlign="center" color="white">
        PLEASE NOTE: REGISTRATION FORM IS DIABLED AS OF NOW. PLEASE REFER
        SOMETIME SOON!!
      </Text>
      {/* <Text
        textAlign="center"
        color="white"
        as={"a"}
        href="https://forms.gle/PXhe41oypw6bTxb46"
        target="_blank"
      >
        Link For the registrations
      </Text> */}
      <Box bg="white" color="blue.700" borderRadius="lg" p={8} m={[0, 8]}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={5}>
            <CustomInput
              label="First Name"
              name="firstName"
              type="text"
              isRequired={true}
              Icon={BsPerson}
              onChange={onChange}
            />
            <CustomInput
              label="Last Name"
              name="lastName"
              type="text"
              isRequired={true}
              Icon={BsPerson}
              onChange={onChange}
            />
            <CustomInput
              label="Email"
              name="email"
              type="email"
              isRequired={true}
              Icon={MdEmail}
              onChange={onChange}
            />
            <CustomInput
              label="Mobile No"
              name="mobile"
              type="tel"
              maxLength={10}
              minLength={10}
              isRequired={true}
              Icon={MdPhone}
              onChange={onChange}
            />
            <CustomInput
              label="College City"
              name="collageCity"
              type="text"
              isRequired={true}
              Icon={BiBuildings}
              onChange={onChange}
            />
            <CustomInput
              label="Degree"
              name="degree"
              type="text"
              isRequired={true}
              onChange={onChange}
            />
            <CustomInput
              label="Branch"
              name="branch"
              type="text"
              isRequired={true}
              onChange={onChange}
            />
            <CustomInput
              label="Semester"
              name="semester"
              type="number"
              maxLength={1}
              minLength={1}
              max={8}
              min={1}
              isRequired={true}
              onChange={onChange}
            />
            <CustomInput
              label="Name on certificate"
              name="nameOnCertificate"
              type="text"
              isRequired={true}
              onChange={onChange}
            />
            <CustomInput
              label="discord Id"
              name="discordId"
              type="text"
              Icon={BsDiscord}
              onChange={onChange}
            />
            <CustomInput
              label="Linked In"
              name="linkedin"
              type="text"
              Icon={BsLinkedin}
              onChange={onChange}
            />
            <CustomInput
              label="Github"
              name="githubLink"
              type="text"
              Icon={BsGithub}
              onChange={onChange}
            />
          </VStack>
          <Button
            type="submit"
            my={8}
            variant="solid"
            bg="blue.700"
            color="white"
            _focus={{}}
            _hover={{}}
            disabled="true"
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Box>
  );
}

function CustomInput({
  label,
  Icon,
  type,
  name,
  onChange,
  isRequired,
  ...props
}) {
  return (
    <FormControl isRequired={isRequired} id={name}>
      <FormLabel>{label}</FormLabel>
      <InputGroup borderColor="#E0E1E7">
        {Icon && (
          <InputLeftElement
            pointerEvents="none"
            children={<Icon color="gray.800" />}
          />
        )}
        <Input
          type={type}
          name={name}
          size="md"
          onChange={onChange}
          {...props}
        />
      </InputGroup>
    </FormControl>
  );
}
