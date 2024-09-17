// NextJS imports
import Image from "next/image";

// ChakraUI imports
import {
  Box,
  Container,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Text,
  textDecoration,
  VisuallyHidden
} from "@chakra-ui/react";

// icons
import { FaInstagram } from "react-icons/fa";

//styles
// import styles from "./page.module.css";


export default function Home() {
  return (
    <Box bg='purple.700' color='white' height='100vh' width='100vw'>
      <Container
        paddingY={20}
        maxW='container.md'
        textAlign='center'
      >
        <Heading as='h1'>
          Queer Elders Podcast
        </Heading>
        <Text fontSize={18} marginTop={12}>
          A podcast for anyone who wants to imagine new, queerer futures by learning from queer and trans elders today – because we have always been here, and we always will be.
        </Text>
        <Text fontSize={18} marginTop={6}>
          More coming soon. Stay tuned.
        </Text>
        <LinkBox
          sx={{
            '_hover': {
              textDecoration: 'underline',
            }
          }}
        >
          <HStack
          alignItems='center'
          justifyContent='center'
          marginY={12}
          textAlign='center'
        >
            <FaInstagram />
            <LinkOverlay href='https://www.instagram.com/queer.elders.pod/'>
            <Text as='span'>
              queer.elders.pod
            </Text>
            <VisuallyHidden>
              <Text as='span'>
                {' '}on Instagram
              </Text>
            </VisuallyHidden>
            </LinkOverlay>
        </HStack>
      </LinkBox>
      </Container>
    </Box>
  );
}
