import React from 'react';
import './styles.scss';
import AvatarJeanne from 'src/assets/avatar-jeanne.png';
import AvatarThibaut from 'src/assets/avatar-thibaut.png';
import AvatarAbdoula from 'src/assets/avatar-abdoula.png';
import AvatarDjabrail from 'src/assets/avatar-djabrail.png';
import LogoGithub from 'src/assets/github.svg'
import LogoLinkedin from 'src/assets/linkedin.svg'


const AboutUs = () => (
  <div className="about-us">
    <div className="about-us__cards">

      <div className="about-us__card">
        <div>
          <img src={AvatarJeanne}></img>
        </div>
        <p className="about-us__card-name">Jeanne Lemière</p> 
        <p className="about-us__card-role">Git master, Product Owner</p>
        <div className="about-us__card-links">
        <a href="https://github.com/jeanne-lemiere" target="_blank"><img src={LogoGithub}></img></a>
        <a href="https://fr.linkedin.com/in/jeanne-lemi%C3%A8re-a4b36a1bb" target="_blank"><img src={LogoLinkedin}></img></a>
        </div>
      </div>
      <div className="about-us__card">
        <div>
          <img src={AvatarAbdoula}></img>
        </div>
        <p className="about-us__card-name">Abdoula Voraev</p> 
        <p className="about-us__card-role">Lead dev Back</p>
        <div className="about-us__card-links">
        <a href="https://github.com/Apollon-Mite" target="_blank"><img src={LogoGithub}></img></a>
        <a href="https://fr.linkedin.com/in/abdoula-voraev-306a51171" target="_blank"><img src={LogoLinkedin}></img></a>
        </div>
      </div>
      <div className="about-us__card">   
        <div>
          <img src={AvatarThibaut}></img>
        </div> 
        <p className="about-us__card-name">Thibaut Jouet</p>  
        <p className="about-us__card-role">Scrum Master</p>
        <div className="about-us__card-links">
        <a href="https://github.com/Red-system" target="_blank"><img src={LogoGithub}></img></a>
        <a href="https://fr.linkedin.com/in/thibaut-jouet-18793219b" target="_blank"><img src={LogoLinkedin}></img></a>
        </div>
      </div>
      <div className="about-us__card">
        <div>
          <img src={AvatarDjabrail}></img>
        </div>
        <p className="about-us__card-name">Djabrail Voraev</p> 
        <p className="about-us__card-role">Lead dev Front</p>
        <div className="about-us__card-links">
        <a href="https://github.com/Djab06" target="_blank"><img src={LogoGithub}></img></a>
        <a href="https://fr.linkedin.com/in/djabrail-voraev-22b8b6207" target="_blank"><img src={LogoLinkedin}></img></a>
        </div>
      </div>
      
    </div>
  </div>
);

export default AboutUs;