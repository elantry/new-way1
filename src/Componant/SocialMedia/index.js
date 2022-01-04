import React from "react";
import axios from "axios";
import {
  Social,
  Socialmedia,
  Socialp,
  Socialpspan,
  Spaninfo2,
  Icon,
} from "./style";
class SocialMedia extends React.Component {
  state = {
    social: [],
  };

  componentDidMount() {
    axios.get("data.json").then((res) => {
      return (
        this.setState({ social: res.data.social }), console.log(res.data.social)
      );
    });
  }

  render() {
    const { social } = this.state;
    const socialitems = social.map((socialitem1) => (
      <Social key={socialitem1.id} items={socialitem1.id}>
        <Icon className={socialitem1.icon}></Icon>
        <Socialp>
          <Socialpspan>{socialitem1.title}</Socialpspan>
          <Spaninfo2>{socialitem1.body}</Spaninfo2>
        </Socialp>
      </Social>
    ));
    return <Socialmedia>{socialitems}</Socialmedia>;
  }
}

export default SocialMedia;
