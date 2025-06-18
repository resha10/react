import React from 'react';
import UserProfileCard from './Components/UserProfile.js';
import './Components/UserProfile.css';

import pruthvi from "./assets/images-1.jpg";
import savan from "./assets/images-2.jpg";
import heney from "./assets/images-3.jpg";
import resha from "./assets/images-4.jpg";
import vishal from "./assets/images-5.jpg";
import khushal from "./assets/images-6.jpg";

function App() {
  return (
    <div className="row">
      <UserProfileCard 
        UserId="5942"
        name="Pruthvi Solanki"
        gender="Male"
        dob="20-05-2005"
        address="58, Sanskar Villa Society, Surat"
        photo={pruthvi}
      />

      <UserProfileCard 
        UserId="6814"
        name="Savan Panchani"
        gender="Male"
        dob="17-09-2006"
        address="203, Navkar Palace, Ahmedabad"
        photo={savan}
      />

      <UserProfileCard 
        UserId="4333"
        name="Heney Goyani"
        gender="Female"
        dob="15-01-2006"
        address="304, Sankalp Residency, Surat"
        photo={heney}
      />

      <UserProfileCard 
        UserId="4351"
        name="Resha Nakrani"
        gender="Female"
        dob="12-06-1999"
        address="903, Shivanta Palace, Dubai"
        photo={resha}
      />

      <UserProfileCard 
        UserId="6000"
        name="Vishal Solanki"
        gender="Male"  // Corrected gender to Male
        dob="22-12-2000"
        address="105, Shiv Nagar, Kazakhstan"
        photo={vishal}
      />

      <UserProfileCard 
        UserId="5689"
        name="Khus Vaghasiya"
        gender="Male"
        dob="25-08-2010"
        address="304, Royal Plaza, Ahmedabad"
        photo={khushal}
      />

      <UserProfileCard 
        UserId="5690"  // Corrected UserId
        name="Sahil Savaliya"
        gender="Male"
        dob="11-11-2005"
        address="204, Anand Dhara Soc, Surat"
        photo={pruthvi}
      />
    </div>
  );
}

export default App;
