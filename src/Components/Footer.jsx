import React from "react";
import {
  Box,
  Grid,
  InputAdornment,
  Input,
  List,
  Stack,
  Typography
} from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Divider from "@mui/material/Divider";

export default function Footer() {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "black",
          height: {
            lg: "400 px",
            md: "380px",
            xs: "500px",
          },
          width: "100%",
        }}
      >
        <Grid container direction="row" justifyContent="space-between">
          <Grid item xs={6} lg={3}>
            <Stack
              sx={{
                paddingLeft: {
                  lg: "18vh",
                  xs: "20px",
                  sm: "7vh",
                },
                paddingTop: {
                  lg: "50px",
                  xs: "10px",
                },
                color: "white",
                direction: "column",
              }}
            >
              <Typography variant="h6">Account</Typography>
              <List sx={{ fontFamily: "Lucida Sans Unicode" }}>My Account</List>
              <List sx={{ fontFamily: "Lucida Sans Unicode", cursor: "pointer" }}>
                Login / Register
              </List>
              <List sx={{ fontFamily: "Lucida Sans Unicode", cursor: "pointer" }}>Cart</List>
              <List sx={{ fontFamily: "Lucida Sans Unicode", cursor: "pointer" }}>
                Wishlist
              </List>
              <List sx={{ fontFamily: "Lucida Sans Unicode", cursor: "pointer" }}>Shop</List>
            </Stack>
          </Grid>

          <Grid item xs={6} lg={3}>
            <Stack
              sx={{
                paddingLeft: {
                  xs: "20px",
                },
                marginRight: {
                  lg: (
                    <Grid xs={6} lg={3}>
                      <Stack
                        sx={{
                          paddingLeft: {
                            xs: "10px",
                            lg: "30px",
                          },
                          paddingTop: {
                            lg: "50px",
                            xs: "10px",
                          },
                          color: "white",
                          direction: "column",
                        }}
                      >
                        <Typography variant="h6">Exclusive</Typography>
                        <List sx={{ fontFamily: "Lucida Sans Unicode" }}>
                          Subscribe
                        </List>
                        <List sx={{ fontFamily: "Lucida Sans Unicode" }}>
                          Get 10% off your first order
                        </List>
                        <Input
                          placeholder="  Enter your email"
                          sx={{
                            color: "white",
                            width: {
                              lg: "30vh",
                              xs: "23vh",
                            },
                            borderColor: "white",
                            border: "groove",
                            borderRadius: "5px",
                            marginTop: {
                              lg: ".7em",
                            },
                          }}
                          endAdornment={
                            <InputAdornment position="end">
                              <SendOutlinedIcon
                                sx={{
                                  fontSize: {
                                    lg: "large",
                                    xs: "small",
                                  },
                                  color: "white",
                                  marginRight: {
                                    lg: ".5em",
                                  },
                                  cursor: "pointer",
                                }}
                              />
                            </InputAdornment>
                          }
                        />
                      </Stack>
                    </Grid>
                  ),
                },
                paddingTop: {
                  lg: "50px",
                  xs: "10px",
                },
                color: "white",
                direction: "column",
              }}
            >
              <Typography variant="h6">Support</Typography>
              <List sx={{ fontFamily: "Lucida Sans Unicode" }}>
                111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
              </List>
              <List sx={{ fontFamily: "Lucida Sans Unicode", cursor: "pointer" }}>
                exclusive@gmail.com
              </List>
              <List sx={{ fontFamily: "Lucida Sans Unicode" }}>+88015-88888-9999</List>
            </Stack>
          </Grid>

          <Grid xs={6} lg={3}>
            <Stack
              sx={{
                paddingLeft: {
                  lg: "30px",
                  xs: "10px",
                  sm: "7vh",
                },
                paddingTop: {
                  lg: "50px",
                  xs: "10px",
                },
                color: "white",
                direction: "column",
              }}
            >
              <Typography variant="h6">Exclusive</Typography>
              <List sx={{ fontFamily: "Lucida Sans Unicode" }}>Subscribe</List>
              <List sx={{ fontFamily: "Lucida Sans Unicode" }}>
                Get 10% off your first order
              </List>
              <Input
                placeholder="  Enter your email"
                sx={{
                  color: "white",
                  width: {
                    lg: "30vh",
                    xs: "23vh",
                  },
                  borderColor: "white",
                  border: "groove",
                  borderRadius: "5px",
                  marginTop: {
                    lg: ".7em",
                  },
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <SendOutlinedIcon
                      sx={{
                        fontSize: {
                          lg: "large",
                          xs: "small",
                        },
                        color: "white",
                        marginRight: {
                          lg: ".5em",
                        },
                        cursor: "pointer",
                      }}
                    />
                  </InputAdornment>
                }
              />
            </Stack>
          </Grid>

          <Grid item xs={6} lg={2}>
            <Stack
              sx={{
                paddingLeft: {
                  xs: "20px",
                
                },
                paddingTop: {
                  lg: "50px",
                  xs: "10px",
                },
                color: "white",
                direction: "column",
              }}
            >
              <Typography variant="h6">Quick Link</Typography>
              <List sx={{ fontFamily: "Lucida Sans Unicode"}}>Privacy Policy</List>
              <List sx={{ fontFamily: "Lucida Sans Unicode",cursor: "pointer" }}>
                Terms Of Use
              </List>
              <List sx={{ fontFamily: "Lucida Sans Unicode"}}>FAQ</List>
              <List sx={{ fontFamily: "Lucida Sans Unicode", cursor: "pointer"}}>
                Contact
              </List>
            </Stack>
          </Grid>
        </Grid>

        <Divider
          sx={{ marginTop: {lg:"45px",xs:'5px'}, backgroundColor: "rgb(171, 171, 171)" }}
        />
        <Typography
          color={"grey"}
          sx={{ justifyContent: "center", display: "flex" ,marginTop:{lg:"15px",xs:'7px'}}}
        >
          © Copyright Rimel 2024. All right reserved
        </Typography>
      </Box>
    </div>
  );
}
