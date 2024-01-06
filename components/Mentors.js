import { Grid, GridItem } from "@chakra-ui/react";
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

export default function Mentors() {
  const mentors = [
    {
      name: "Parth A.",
      image: "/parthA.jpeg",
      linkedIn: "https://www.linkedin.com/in/htrap94/",
      designation: "AI @ Cactus Labs",
      company: "",
    },
    {
      name: "Dvijesh Bhatt",
      image: "/dvijesh_bhatt.jpeg",
      linkedIn: "https://www.linkedin.com/in/dvijesh-bhatt-76283920/",
      designation: "Senior Product Engineer (AI/ML)",
      company: "Myelin Foundry",
    },
    {
      name: "Amrish Patel",
      image: "/amrish_patel.jpg",
      linkedIn: "https://www.linkedin.com/in/amrish-patel-1139b84/",
      designation: "Founder",
      company: "MLveda",
    },
    {
      name: "Deepak Sharma",
      image: "/deepak_sharma.jpg",
      linkedIn: "https://www.linkedin.com/in/deepak-sharma-a528b015/",
      designation: "Sr. Manager (IT)",
      company: "J K Organisation(Udaipur Cement Works Ltd.)",
    },
    {
      name: "Shrikant Kulkarni",
      image: "/Shrikant_Kulkarni.jpg",
      linkedIn: "https://www.linkedin.com/in/shrikantkulkarni/",
      designation: "",
      company: "Cognizant",
    },
    {
      name: "Sujit Patange",
      image: "/Sujit_Patange.jpg",
      linkedIn: "https://www.linkedin.com/in/sujitpatange/",
      designation: "",
      company: "Cognizant",
    },
    {
      name: "Saktipada Maity",
      image: "/Saktipada_Maity.jpg",
      linkedIn: "https://www.linkedin.com/in/saktipada-maity-10b08330/",
      designation: "",
      company: "Cognizant",
    },
    {
      name: "Hardik Prajapati",
      image: "/hk.jpg",
      linkedIn: "https://www.linkedin.com/in/prajapati-hardik/",
      designation: "R & D Engineer",
      company: "InFoCusp",
    },
    {
      name: "Param Shah",
      image: "/param_shah.jpg",
      linkedIn: "https://www.linkedin.com/in/param-shah-ba281b190/",
      designation: "Intern at D360 Technologies",
      company: "",
    },
    {
      name: "Manil Shah",
      image: "/manil.jpeg",
      linkedIn: "https://www.linkedin.com/in/manilshah913/",
      designation:
        "Student of CSE at Institute of Technology, Nirma University",
      company: "",
    },
    {
      name: "Hardik Maisuria",
      image: "/hardik.jpeg",
      linkedIn: "https://www.linkedin.com/in/hardik-maisuria-675370208/",
      designation:
        "Student of CSE at Institute of Technology, Nirma University",
      company: "",
    },
    {
      name: "Kalp Mepani",
      image: "/kalp.jpeg",
      linkedIn: "https://www.linkedin.com/in/kalp-mepani-5350671a2/",
      designation:
        "Student of CSE at Institute of Technology, Nirma University",
      company: "",
    },
  ];
  return (
    <Box marginBlock={16} id="mentors">
      <Heading marginBlock={"8"}>Mentors</Heading>
      <Grid
        alignItems="center"
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        gap={4}
        marginBottom={8}
      >
        {mentors.map((dev) => (
          <GridItem key={dev.name}>
            <MentorCard
              url={dev.image}
              name={dev.name}
              link={dev.linkedIn}
              designation={dev.designation}
              company={dev.company}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

function MentorCard(props) {
  return (
    <Center>
      <Box boxShadow="md" rounded="lg" p={6} textAlign={"center"} minW="xs">
        <Avatar size={"2xl"} src={props.url} alt={props.name} mb={4} />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {props.name}
        </Heading>
        <Text textAlign={"center"} px={3} mt={4}>
          {props.designation}
        </Text>

        <Text textAlign={"center"}>{props.company}</Text>

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
            href={props.link}
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
