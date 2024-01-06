import NoSSR from "./NoSSR";

function FaqsClientSideRendered() {
  return (
    <NoSSR>
      <Faqs />
    </NoSSR>
  );
}

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Faqs() {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  const FAQS = [
    {
      category: "General",
      questions: [
        {
          q: "What is Hackathon ?",
          a: "Hackathon is an interdisciplinary event where coders team up to solve problems around the world.",
        },
        {
          q: "Why should I participate in hackathon ?",
          type: "HTML",
          a: `Hackathon has plenty of benefits: 
          <ol style="margin-left:12px;">
            <li>
              You will usually meet people with similar skills at hackathon. This will help improve your networking experience. 
            </li>
            
            <li>
              Hackathon participation looks really impressive at your resume or CV. It signals to people that you have expertise in programming, experience performing in intense environments, and find a way to win.
            </li>

            <li>
              Intense problem-solving environments such as hackathons promote the development of new ideas and concepts. You have to collaborate with individuals from diverse fields, with different interests and skills, all working together to solve the same problem. 
            </li>


            <li>
              Opportunities to develop a career as many companies offer a job or internship to the best performers. 
            </li>


            <li>
              Pair programming is awesome if you want to concentrate on getting as much done as possible in a limited time, and you'd love talking to your partner about problems. It's best to find someone with a similar level of ability, and take turns "driving" (typing) and advising. 
            </li>


            <li>
              Increased visibility in this competitive environment 
            </li>


            <li>
              Profile building
            </li>
          </ol>`,
        },
        {
          q: "Is this Hackathon online or offline?",
          a: "This Hackathon is in online mode only.",
        },
      ],
    },
    {
      category: "Eligibility",
      questions: [
        {
          q: "Who can participate in this event?",
          a: "Any student enrolled in any college in India and having the dedication and passion towards building solutions to address challenging real-life problems is eligible to participate.",
        },
        {
          q: "I am working at a company. Am I eligible to participate in the event?",
          a: "Although this event is for students only, you can act as a mentor of a team based on your domain expertise.",
        },
        {
          q: "I am a faculty member associated with an academic institute. Am I eligible to participate in the event?",
          a: "Although this event is for students only, you as a faculty member can act as a mentor of a team based on your domain expertise.",
        },
        {
          q: "Do I need to register for participating in this event?",
          a: "Currently you need to register individually. Later, once the team registration is enabled, you need to register with your team details and the track for which you would be participating.",
        },
        {
          q: "What is the registration fee?",
          a: "There is no registration fee for participating in this event.",
        },
        {
          q: "Is this event limited to students of Gujarat only?",
          a: "No, the event is open to all students from across the country.",
        },
        {
          q: "Can I register for more than one tracks?",
          a: "No, one team can register only for a single track.",
        },
        {
          q: "What is the procedure to cancel the registration?",
          a: "If you feel that you will not be able to participate in the event after registering, just throw an email at sapanmankad@nirmauni.ac.in stating the same.",
        },
      ],
    },
    {
      category: "Team Formation",
      questions: [
        {
          q: "Should I have a team formed prior to registration?",
          a: "No. It's not mandatory but it is good for you if team members are already known to you.",
        },
        {
          q: "What should be the team size?",
          a: "Team Size may be of 3-5 members.",
        },
        {
          q: "What if I don't have a team? ",
          a: "Don't worry! You can send team joining request to public teams and become part of them. If this doesn't work, our team assignment algorithm will assign you a team before the event starts!",
        },
        {
          q: "Only students that belong to same College/ Branch can form a team?",
          a: "No. A team can consist of members belonging to any college as well as any discipline. However, every team member needs to be individually registeblue before forming a team.",
        },
        {
          q: "Can I be part of two teams?",
          a: "No, you can be member of one team only. ",
        },
      ],
    },
    {
      category: "Prizes",
      questions: [
        {
          q: "What is the prize money?",
          type: "HTML",
          a: `
            Grand Prize money sponsoblue by SUNY Binghamton University is as under: 
            <li>1st Prize: $500</li>
            <li>2nd Prize: $300</li>
            <li>3rd Prize: $200</li>`,
        },
        {
          q: "Is there any track specific prize money?",
          a: "Track specific prize money depends on industries sponsoring specific track.",
        },
        {
          q: "Will there be any perks offeblue to me for participating in the event?",
          a: "In addition to gaining experience in working with peers in a competitive environment on real life problems, our sponsor partners are offering exciting perks / complementary product subscriptions to winners and/or participants. ",
        },
        {
          q: "Will I get any certificate of participation?",
          a: "Yes, e-certificates will be issued to all active participants of the event who submit and present their solution on the last day of the event.",
        },
        {
          q: "Will the submission entries be scrutinized?",
          a: "No, there is no scrutiny. All entries will directly be able to work on the problem definitions as long as they follow the eligibility criteria.",
        },
      ],
    },
    {
      category: "No Query?",
      questions: [
        {
          q: "My query is not listed in this FAQs section. What should I do?",
          type: "HTML",
          a: 'Please write to us at <a href="mailto:sapanmankad@nirmauni.ac.in" style="border-bottom:2px solid black;"> sapanmankad@nirmauni.ac.in </a> or join us on our social media platform.',
        },
      ],
    },
  ];
  return (
    <NoSSR>
      <Box marginBlock={16}>
        <Heading marginBlock={"8"}>Have A Question?</Heading>
        <Accordion allowMultiple>
          {FAQS.map((item) => {
            return (
              <Box marginBlock={8} key={item.category}>
                <Heading size={"md"} marginBlock={4} color={"blue.400"}>
                  {item.category}
                </Heading>

                {item.questions.map((questions) => {
                  return (
                    <AccordionItem key={questions.q} paddingBlock={2}>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <Text fontWeight={"bold"}>{questions.q}</Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>

                      {questions?.type == "HTML" ? (
                        <AccordionPanel
                          pb={4}
                          dangerouslySetInnerHTML={{ __html: questions.a }}
                        ></AccordionPanel>
                      ) : (
                        <AccordionPanel pb={4}>{questions.a}</AccordionPanel>
                      )}
                    </AccordionItem>
                  );
                })}
              </Box>
            );
          })}
        </Accordion>
      </Box>
    </NoSSR>
  );
}
