import React from "react";
import {
  Parentspan,
  Profilesection,
  Profileskills,
  Skills,
  Skillsbar,
  Skillsdesc,
  Skillstitle,
  Skillstitlespan,
  Listprofile,
  Itemprofile,
  Itemspan,
  Itemspanweb,
  Barparent,
  Barperc,
  Bartitle,
} from "./style";

const Profile = () => {
  return (
    <Profileskills>
      <div class="container">
        <Profilesection>
          <Skillstitle>
            <Itemspan>My </Itemspan>Profile
          </Skillstitle>
          <Listprofile>
            <Itemprofile class="profile-item">
              <Itemspan>Name</Itemspan>
              Hamza Nabil
            </Itemprofile>
            <Itemprofile class="profile-item">
              <Itemspan>Birthday</Itemspan>
              21/1/1996
            </Itemprofile>
            <Itemprofile class="profile-item">
              <Itemspan>Address</Itemspan>
              Ain shams
            </Itemprofile>
            <Itemprofile class="profile-item">
              <Itemspan>Phone</Itemspan>
              4444 5555 6666
            </Itemprofile>
            <Itemprofile class="profile-item">
              <Itemspan>Email</Itemspan>
              hamza@hamza.com
            </Itemprofile>
            <Itemprofile class="profile-item">
              <Itemspan>Website</Itemspan>
              <Itemspanweb class="web">www.google.com</Itemspanweb>
            </Itemprofile>
          </Listprofile>
        </Profilesection>

        <Skills>
          <Skillstitle>
            Some <Skillstitlespan>skills</Skillstitlespan>
          </Skillstitle>
          <Skillsdesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </Skillsdesc>
          <Skillsbar>
            <Bartitle>Bootstrap</Bartitle>
            <Barperc>100%</Barperc>
            <Barparent>
              <Parentspan></Parentspan>
            </Barparent>
          </Skillsbar>

          <Skillsbar>
            <Bartitle>CSS3</Bartitle>
            <Barperc>90%</Barperc>
            <Barparent>
              <Parentspan sp2></Parentspan>
            </Barparent>
          </Skillsbar>

          <Skillsbar>
            <Bartitle>Photoshop</Bartitle>
            <Barperc>80%</Barperc>
            <Barparent>
              <Parentspan sp3></Parentspan>
            </Barparent>
          </Skillsbar>
        </Skills>
      </div>
    </Profileskills>
  );
};

export default Profile;
