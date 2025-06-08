"use client"

// base imports
import { useState, useEffect } from 'react'

// NextJS imports
import Image from "next/image";

// ChakraUI imports
import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
  textDecoration,
  VisuallyHidden
} from "@chakra-ui/react";

// icons
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  }, []);

  return (
    <Box
      bg='#d0e4b4'
      color='#424242'
      fontFamily='mono'
      height='100vh'
      width='100vw'
    >
      <Container
        paddingY={20}
        maxW='container.md'
        textAlign='center'
      >

        <Center marginTop={4}>
          <Heading as='h1'>
            <VisuallyHidden>
              Queer Elders Podcast
            </VisuallyHidden>
            <Image
              alt="This is the queer elders podcast graphic. On a background of shades of green, it read 'Queer elders podcast' with colored pencil drawings of queer elders towards the bottom."
              height={400}
              src="/queer-elders-pod-graphic.jpg"
              width={400}
            />
          </Heading>
        </Center>
        <Text fontSize={24} marginTop={12}>
          A podcast for anyone who wants to imagine new, queerer futures by learning from queer and trans elders today – because we have always been here, and we always will be.
        </Text>
        <Container>
        {isClient ? (
          <>
            <div id="buzzsprout-player-16998801"></div><script src="https://www.buzzsprout.com/2466418/episodes/16998801-moving-the-ball-down-the-field-susan-s.js?container_id=buzzsprout-player-16998801&player=small" type="text/javascript" charSet="utf-8"></script>
          </>
        ) : (
          <Text fontSize={24} marginTop={12}>
            More coming soon. Stay tuned.
          </Text>
        )}
        </Container>
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
            marginTop={12}
            textAlign='center'
          >
            <FaInstagram />
            <LinkOverlay href='https://www.instagram.com/queer.elders.pod/'>
              <Text as='span' fontSize={18}>
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
