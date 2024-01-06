import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Organizers() {
  return (
    <Box>
      <Heading color={"blue.400"} marginBlock={"8"}>
        About Organizers
      </Heading>
      <Box>
        <Box display={{ md: "flex" }} gap={[16, 8]}>
          <Image
            src="/Nirma_logo.jpg"
            alt="Nirma University Logo"
            flex="1"
            marginInline="auto"
            order={[1, 1]}
            display="block"
            width={["7xl", 36]}
          ></Image>
          <Text
            flex="2"
            fontWeight="semibold"
            textAlign="justify"
            order={[2, 2]}
            marginBlock={[16, 0]}
          >
            Nirma University, Ahmedabad is a research-oriented, student-centric,
            multidisciplinary, not-for-profit state private university. Within a
            short period of its existence, it has emerged as a nationally
            renowned higher education institution. The University and its
            constituent institutes are highly ranked by different ranking
            agencies. Institute of Technology, Nirma University is the first
            self-financed engineering college of the State of Gujarat.
            Department of Computer Science and Engineering (CSE), ITNU is known
            for its strength in Theoretical Computer Science, Image Processing
            and Computer Vision, High Performance Computing, Artificial
            Intelligence and Deep Learning, Internet of Things, Data Science,
            Cloud Computing, Networking and Cyber Security. We at the Department
            of Computer Science and Engineering, Institute of Technology, Nirma
            University have established the Centre of Excellence in Data Science
            (CoE - DS) in collaboration with SUNY Binghamton University, USA in
            2020.
          </Text>
        </Box>
      </Box>

      <Box marginBlock={"20"} gap={8} display={{ md: "flex" }}>
        <Image
          src="/Binghamton_University_logo.png"
          alt="Binghamton University Logo"
          flex="1"
          order={[1, 2]}
          marginInline={"auto"}
          display="block"
          width={["7xl", 36]}
        ></Image>
        <Text
          flex="2"
          fontWeight="semibold"
          textAlign="justify"
          order={[2, 1]}
          marginBlock={[16, 0]}
        >
          Binghamton University is a world-class institution that offers
          students a broad, interdisciplinary education with an international
          perspective and one of the most vibrant research programs in the
          nation. The Thomas J. Watson College of Engineering and Applied
          Science provides a top-ranked engineering and computer science
          education in upstate New York. Our exceptional faculty members are
          both innovative researchers and supportive professors. Students come
          to Watson College from all over the world and represent a wide range
          of backgrounds and interests. They graduate with broad-based skills
          and the entrepreneurial spirit to succeed in fields ranging from
          mechanical engineering to hospital operations to the law. We are in
          the high-tech heart of upstate New York state with industry
          partnerships, class projects and internship opportunities that provide
          a wealth of hands-on experience for graduate and undergraduate
          students alike.
        </Text>
      </Box>
    </Box>
  );
}
