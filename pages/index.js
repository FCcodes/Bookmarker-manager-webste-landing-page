import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

//react
import { useState } from "react"

//components
import TabPanel from "../components/Tabpanel"
import Option1 from "../components/Option1"

//material-ui
import {
  Typography,
  Box,
  Grid,
  AppBar,
  Toolbar,
  Button,
  Paper,
  Tab,
  Tabs,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material"

export default function Home() {
  const [feature, setFeature] = useState("simple-bookmarking")

  function handleChange(event, newValue) {
    setFeature(newValue)
  }

  return (
    <>
      <Head>
        <title>Bookmarker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        component="div"
        sx={{
          p: 3,
        }}
      >
        <Box component="header" sx={{ mb: { tablet: 10 } }}>
          <AppBar
            position="relative"
            sx={{
              mb: { phone: 5, tablet: 10 },
              backgroundColor: "white",
              color: "black",
              boxShadow: "none",
            }}
          >
            <Toolbar sx={{ display: "flex" }}>
              <Typography variant="h4" className="logo" sx={{ flexGrow: 1 }}>
                Bookmarker
              </Typography>

              <Grid
                container
                component="ul"
                sx={{
                  listStyle: "none",
                  display: { phone: "none", laptop: "flex" },
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Grid item component="li">
                  <Typography variant="subtitle2" sx={{ ml: 5 }}>
                    Features
                  </Typography>
                </Grid>

                <Grid item component="li">
                  <Typography variant="subtitle2" sx={{ ml: 5 }}>
                    Prices
                  </Typography>
                </Grid>

                <Grid item component="li">
                  <Typography variant="subtitle2" sx={{ ml: 5 }}>
                    Contact
                  </Typography>
                </Grid>

                <Grid item component="li">
                  <Button variant="contained" sx={{ ml: 5 }}>
                    Login
                  </Button>
                </Grid>
              </Grid>

              <Box
                sx={{
                  display: { phone: "initial", laptop: "none" },
                  width: "5vw",
                  height: "5vw",
                }}
                component="svg"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </Box>
            </Toolbar>
          </AppBar>

          <Grid
            container
            direction="column-reverse"
            className="headerContent"
            sx={{ flexDirection: { phone: "colum-reverse", tablet: "row" } }}
          >
            <Grid
              item
              phone={12}
              tablet={7}
              laptop={6}
              sx={{ mb: { phone: 10 }, my: { tablet: "auto" } }}
            >
              <Paper
                elevation={0}
                sx={{ marginTop: "auto", pl: { laptop: 5 } }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    p: { tablet: 1 },
                    mb: 3,
                    textAlign: { phone: "center", tablet: "initial" },
                    maxWidth: { laptop: "90%" },
                  }}
                >
                  A Simple BookMark Manager
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mx: { phone: "auto", tablet: "0px" },
                    mb: 3,
                    textAlign: { phone: "center", tablet: "initial" },
                    maxWidth: { phone: "70%", tablet: "90%", laptop: "70%" },
                    fontSize: { tablet: "2vw", laptop: "1.3vw" },
                  }}
                >
                  A clean and simple interface to organize your favorite
                  website. Open a new a browser tab and see your sites load
                  instantly, Try it for free
                </Typography>

                <Grid container spacing={2}>
                  <Grid
                    item
                    phone={4}
                    tablet={5}
                    sx={{ ml: { phone: "auto", tablet: "0px" } }}
                  >
                    <Button variant="contained">
                      <Typography
                        variant="subtitle2"
                        sx={{ fontSize: { phone: ".6rem", tablet: ".8rem" } }}
                      >
                        Get it on Chrome
                      </Typography>{" "}
                    </Button>
                  </Grid>
                  <Grid
                    item
                    phone={4}
                    sx={{ mr: { phone: "auto", tablet: "0px" } }}
                  >
                    <Button>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontSize: { phone: ".6rem", tablet: ".8rem" } }}
                      >
                        Get it on Firefox
                      </Typography>{" "}
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid
              item
              phone={12}
              tablet={5}
              laptop={6}
              sx={{
                p: { phone: 2, tablet: 0, laptop: 10 },
                mb: { phone: 5, tablet: 0 },
              }}
            >
              <Box
                component="img"
                src="./undraw_noted_pc9f.svg"
                alt=""
                sx={{
                  p: 3,
                  maxWidth: "100%",
                  boxShadow: "2px 2px 5px rgb(0, 0, 0, .1)",
                  borderRadius: "10px",
                }}
              />
            </Grid>
          </Grid>
        </Box>

        <Box component="main">
          <Grid container component="section" sx={{ mb: 10 }}>
            <Grid item sx={{ mx: "auto" }}>
              <Paper elevation={0} sx={{ mb: { tablet: 10 } }}>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 5,
                    textAlign: "center",
                  }}
                >
                  Features
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    mb: 3,
                    mx: { phone: "auto" },
                    textAlign: { phone: "center", tablet: "initial" },
                    maxWidth: { phone: "75%", tablet: "60%" },
                  }}
                >
                  Our aim is to make it quick and easy for you too access you
                  favorite websites. Your bookmarks sync between your devices
                  son you can access them on the go.
                </Typography>
              </Paper>
            </Grid>

            <Grid item container phone={12}>
              <Box component="div" sx={{ mx: "auto" }}>
                <Tabs
                  value={feature}
                  onChange={handleChange}
                  sx={{ mb: 5, width: "100%" }}
                  variant="scrollable"
                  scrollButtons={false}
                >
                  <Tab
                    value="simple-bookmarking"
                    label="Simple Bookmarking"
                    component="h5"
                    sx={{ ml: { tablet: "auto" } }}
                  />
                  <Tab
                    value="speedy-searching"
                    label="Speedy Searching"
                    component="h5"
                  />
                  <Tab
                    value="easy-sharing"
                    label="easy-sharing"
                    component="h5"
                    sx={{ mr: { tablet: "auto" } }}
                  />
                </Tabs>
              </Box>

              <Grid item>
                <TabPanel value={feature} label="simple-bookmarking">
                  <Option1 />
                </TabPanel>
              </Grid>
            </Grid>
          </Grid>

          <Grid container component="section" sx={{ mb: 10 }}>
            <Grid item phone={12} sx={{ mb: 4 }}>
              <Paper elevation={0}>
                <Typography
                  variant="h2"
                  align="center"
                  sx={{
                    mb: 5,
                  }}
                >
                  Download the extension
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    mb: 3,
                    mx: { phone: "auto" },
                    textAlign: { phone: "center" },
                    maxWidth: { tablet: "50%", laptop: "40%" },
                  }}
                >
                  We&apos;ve got more browser in the pipeline. Please do let us
                  know if you&apos;ve got a favorite you&apos;d like us to
                  prioritize
                </Typography>
              </Paper>
            </Grid>

            <Grid item phone={12} container>
              <Grid item phone={12} tablet={4} sx={{ mb: 5 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    py: 3,
                    px: "auto",
                    mx: "auto",
                    maxWidth: { phone: "60%", tablet: "90%" },
                    boxShadow: "2px 2px 5px rgb(0, 0, 0, .15)",
                    borderRadius: "10px",
                  }}
                >
                  <Typography variant="h3" align="center" sx={{ mb: 3 }}>
                    Add to Chrome
                  </Typography>
                  <Typography variant="body2" align="center" sx={{ mb: 2 }}>
                    Minimum version 6.2
                  </Typography>
                  <Grid container>
                    <Grid item sx={{ mx: "auto" }}>
                      <Button variant="contained">
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontSize: { tablet: ".6rem", laptop: ".8rem" },
                            fontWeight: "700",
                          }}
                        >
                          Add & Install Extension
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid item phone={12} tablet={4} sx={{ mb: 5 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    py: 3,
                    px: "auto",
                    mx: "auto",

                    maxWidth: { phone: "60%", tablet: "90%" },
                    boxShadow: "2px 2px 5px rgb(0, 0, 0, .15)",
                    borderRadius: "10px",
                  }}
                >
                  <Typography variant="h3" align="center" sx={{ mb: 3 }}>
                    Add to Firefox
                  </Typography>
                  <Typography variant="body2" align="center" sx={{ mb: 2 }}>
                    Minimum version 6.5
                  </Typography>
                  <Grid container>
                    <Grid item sx={{ mx: "auto" }}>
                      <Button variant="contained">
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontSize: { tablet: ".6rem", laptop: ".8rem" },
                            fontWeight: "700",
                          }}
                        >
                          Add & Install Extension
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid item phone={12} tablet={4} sx={{ mb: 5 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    py: 3,
                    px: "auto",
                    mx: "auto",
                    maxWidth: { phone: "60%", tablet: "90%" },
                    boxShadow: "2px 2px 5px rgb(0, 0, 0, .15)",
                    borderRadius: "10px",
                  }}
                >
                  <Typography variant="h3" align="center" sx={{ mb: 3 }}>
                    Add to Opera
                  </Typography>
                  <Typography variant="body1" align="center" sx={{ mb: 2 }}>
                    Minimum version 4.6
                  </Typography>
                  <Grid container>
                    <Grid item sx={{ mx: "auto" }}>
                      <Button variant="contained">
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontSize: { tablet: ".6rem", laptop: ".8rem" },
                            fontWeight: "700",
                          }}
                        >
                          Add & Install Extension
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid container component="section" sx={{ mb: 10 }}>
            <Grid item phone={12}>
              <Paper elevation={0}>
                <Typography
                  variant="h2"
                  align="center"
                  sx={{
                    mb: 5,
                  }}
                >
                  Frequently Asked Question
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    mb: 3,
                    mx: { phone: "auto" },
                    textAlign: { phone: "center" },
                    maxWidth: { tablet: "50%", laptop: "40%" },
                  }}
                >
                  Here are some of our FAQs, if you have any other questions you
                  like answered please feel free to email us.
                </Typography>
              </Paper>
            </Grid>

            <Grid item phone={12} tablet={7} sx={{ mx: { tablet: "auto" } }}>
              <Accordion sx={{ mb: 2 }}>
                <AccordionSummary>
                  <Typography variant="h4" sx={{ color: "text.disabled" }}>
                    What is Bookmark?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
              </Accordion>

              <Accordion sx={{ mb: 2 }}>
                <AccordionSummary>
                  <Typography variant="h4" sx={{ color: "text.disabled" }}>
                    How can I request a new browser?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
              </Accordion>

              <Accordion sx={{ mb: 2 }}>
                <AccordionSummary>
                  <Typography variant="h4" sx={{ color: "text.disabled" }}>
                    Is there a mobile app?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
              </Accordion>

              <Accordion sx={{ mb: 1.9 }}>
                <AccordionSummary>
                  <Typography variant="h4" sx={{ color: "text.disabled" }}>
                    What about Chromium browsers?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>

          <Grid
            container
            component="section"
            sx={{ p: 2, backgroundColor: "rgb(83,102,222)" }}
          >
            <Grid item sx={{ mx: "auto" }}>
              <Paper
                elevation={0}
                sx={{
                  mx: "auto",
                  backgroundColor: "rgb(83,102,222)",
                }}
              >
                <Typography
                  variant="h3"
                  align="center"
                  sx={{ mb: 3, letterSpacing: "5px" }}
                >
                  35,000 + ALREADY JOINED
                </Typography>
                <Typography
                  variant="h2"
                  align="center"
                  sx={{
                    mb: 3,
                    mx: "auto",
                    maxWidth: { phone: "80%", tablet: "60%", laptop: "70%" },
                  }}
                >
                  Stay up-to-date with what we&apos;re doing
                </Typography>

                <Box
                  item
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: { phone: "column", tablet: "row" },
                  }}
                >
                  <Box
                    component="input"
                    placeholder="Enter your email address"
                    sx={{
                      my: 1,
                      mx: 1,
                      mb: { phone: 2, laptop: 0 },
                      py: 1,
                      px: 2,
                      outline: "none",
                      border: "1px solid rgb(0, 0, 0, .5)",
                      borderRadius: "5px",
                    }}
                  />

                  <Button variant="contained" sx={{ mx: 1, my: 1 }}>
                    <Typography variant="subtitle2">Contact us</Typography>
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </Box>
    </>
  )
}