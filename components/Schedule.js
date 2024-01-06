import {
  Box,
  Card,
  CardBody,
  CardHeader,
  CheckboxIcon,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Schedule() {
  return (
    <Box>
      <Heading marginBlock={8}>Tentative Schedule</Heading>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab
            fontSize={"lg"}
            color={"blue.400"}
            fontWeight={"bold"}
            border={"2px"}
          >
            Day 1
          </Tab>
          <Tab
            fontSize={"lg"}
            color={"blue.400"}
            fontWeight={"bold"}
            border={"2px"}
          >
            Day 2
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text fontWeight={"black"} fontSize="xl">
              Declared on Discord
            </Text>
          </TabPanel>
          <TabPanel>
            <Text fontWeight={"black"} fontSize="xl">
              Declared on Discord
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
