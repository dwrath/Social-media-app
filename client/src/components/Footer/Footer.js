import { TextField, Button } from "@material-ui/core";
import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footerStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "white", textAlign: "center", marginTop: "-50px" }}>
        Copyright © Memories {new Date().getFullYear()}
      </h1>
      <Container>
        <h3 style={{ color: "white", textAlign: "center", marginTop: "10px" }}>
          Sign up for our email list to recieve update notifications
        </h3>
        <Container style={{ display: "inline" }}>
          <TextField
            id="email"
            label="Email Address"
            variant="filled"
            color="primary"
            size="small"
            style={{
              maxWidth: "600px",
              marginRight: "20px",
              maxHeight: "100px",
            }}
          />
          <Button variant="contained" size="large">
            Submit
          </Button>
        </Container>
      </Container>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
          </Column>

          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Phone</FooterLink>
            <FooterLink href="#">Email</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
