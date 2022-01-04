import React from "react";
import {
  Contactdrop,
  Form,
  Forminput,
  Emailinput,
  Textarea,
  Textinput,
  Title,
  Span,
  Subinput,
  Submitinput,
} from "./style";
import Footer from "../Footer";
const Contact = () => {
  return (
    <React.Fragment>
      <Contactdrop>
        <div class="container">
          <Title>
            <Span>Drop </Span>Me A line
          </Title>
          <Form action="">
            <Forminput>
              <Textinput type="text" placeholder="Your Name" />
              <Emailinput type="email" placeholder="Your Email" />
            </Forminput>
            <Subinput type="text" class="sub" placeholder="Your Subject" />
            <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
            <Submitinput type="submit" value="Send Message" />
          </Form>
        </div>
      </Contactdrop>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
