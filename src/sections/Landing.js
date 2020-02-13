import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Button } from 'rebass';
import TextLoop from 'react-text-loop';
import { SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';

const Background = () => (
  <div>
    {/* //   <Triangle
  //     color="backgroundDark"
  //     height={['30vh', '80vh']}
  //     width={['95vw', '60vw']}
  //   />

  //   <Triangle
  //     color="secondary"
  //     height={['38vh', '80vh']}
  //     width={['50vw', '35vw']}
  //   />

  //   <Triangle
  //     color="primaryDark"
  //     height={['30vh', '35vh']}
  //     width={['75vw', '60vw']}
  //     invertX
  //   />

  //   <Triangle
  //     color="backgroundDark"
  //     height={['20vh', '20vh']}
  //     width={['100vw', '100vw']}
  //     invertX
  //     invertY
  //   /> */}
  </div>
);

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
          site {
            siteMetadata {
              deterministicBehaviour
            }
          }
        }
      `}
      render={({ contentfulAbout, site }) => {
        const { name, socialLinks } = contentfulAbout;
        const { deterministicBehaviour } = site.siteMetadata;

        return (
          <Fragment>
            <Heading
              textAlign="left"
              as="h1"
              color="#36506a"
              fontSize={[5, 6, 8]}
              mb={[1, 2, 3]}
              ml={[2, 3, 4]}
            >
              {`${name}`}
            </Heading>

            <Heading
              textAlign="left"
              as="h2"
              color="primary"
              fontSize={[3, 4, 5]}
              mb={[4, 5, 6]}
              ml={[2, 3, 4]}
            >
              Full Stack Web Developer and Lifelong Learner
            </Heading>

            <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
              {socialLinks.map(({ id, ...rest }) => (
                <Box mx={3} fontSize={[5, 6, 6]} key={id}>
                  <SocialLink {...rest} />
                </Box>
              ))}
            </Flex>

            <SectionLink section="about">
              {({ onClick }) => <MouseIcon onClick={onClick} />}
            </SectionLink>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
