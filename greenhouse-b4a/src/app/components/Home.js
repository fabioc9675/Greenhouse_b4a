import React from "react";
import { Footer } from "react-materialize";
import { FaGithubSquare, FaYoutubeSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Card, Row, Col, Icon, CardTitle } from "react-materialize";

// local imports
import InstButton from "./InstButton";
import { version } from "../../dataConfig/autobuild_version";
const udeaLogo = "resources/logos/UdeALogo.png";

export default function Home() {
  return (
    <div>
      {/** Navigation */}
      <nav className="light-blue darken-4">
        <div className="container" style={{ height: "100px" }}>
          <a className="brand-logo" href="/">
            Huerta 4.0, El Internet de la Huerta
          </a>
        </div>
      </nav>

      <div style={{ height: "10%" }}></div>
      <div className="row">
        <div className="col s6">
          <div className="SimButton">
            <InstButton
              buttonLabel="MUA"
              pathUrl="/MUA"
              imgDir="resources/Icons/IconMUA.png"
              title="IE Manuel Uribe Angel"
              textInfo="Proyecto Huerta 4.0 desarrollado por la I. E. Manuel Uribe Angel"
            />
          </div>
          <div className="SimButton">
            <InstButton
              buttonLabel="JFK"
              pathUrl="/jfk"
              imgDir="resources/Icons/IconJFK.jpg"
              title="Huerta JFK"
              textInfo="Proyecto Huerta 4.0 desarrollado por la escuela John F Kennedy de la I. E. la Paz"
            />
          </div>
          <div className="SimButton">
            <InstButton
              buttonLabel="BMP"
              pathUrl="/BMP"
              imgDir="resources/Icons/IconBMP.jpg"
              title="Colegio Julio Cesar Turbay"
              textInfo="Proyecto Huerta 4.0 apoyado por LIF Community Grant"
            />
          </div>
          <div className="SimButton">
            <InstButton
              buttonLabel="FAA"
              pathUrl="/FAA"
              imgDir="resources/Icons/IconFAA.png"
              title="Huerta Fundación"
              textInfo="Proyecto Huerta 4.0 desarrollado por la Universidad de Antioquia"
            />
          </div>
          <div className="SimButton">
            <InstButton
              buttonLabel="UdeA"
              pathUrl="/udea"
              imgDir="resources/Icons/IconUdeA.jpg"
              title="Huerta UdeA"
              textInfo="Proyecto Huerta 4.0 desarrollado por la Universidad de Antioquia"
            />
          </div>
        </div>
        <div className="col s6">
          {/* Video Frame */}
          <div
            className="title-container"
            style={{
              position: "fixed",
              top: "70px",
              right: "20px",
              width: "48%",
              height: "75px",
              backgroundColor: "#FFFFFF",
              padding: "2px",
              borderRadius: "10px",
              zIndex: 1000,
            }}
          >
            <h4 style={{ color: "#000000", textAlign: "center" }}>
              Huerta 4.0, Escuela John F. Kennedy
            </h4>
          </div>

          <div
            className="video-container"
            style={{
              position: "fixed",
              top: "150px",
              right: "20px",
              width: "48%",
              height: "50%",
              backgroundColor: "#000",
              padding: "15px",
              borderRadius: "10px",
              zIndex: 1000,
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <iframe
              width="100%"
              height="225"
              src="https://www.youtube.com/embed/PZdadrbPttA?autoplay=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <Footer
        className="green darken-4"
        copyrights="Powered by: Instituto de Física"
        moreLinks={
          <div>
            <a
              className="grey-text text-lighten-4"
              href="https://github.com/fabioc9675"
              target="_blank"
            >
              <FaGithubSquare size="3em" />
            </a>
            <a
              className="grey-text text-lighten-4"
              href="https://www.youtube.com/channel/UCWdd0P8N_Ug6H5iSZgOykQg"
              target="_blank"
            >
              <FaYoutubeSquare size="3em" />
            </a>

            <a
              className="grey-text text-lighten-4 right"
              href="https://www.udea.edu.co"
              target="_blank"
            >
              <img width="300px" src={udeaLogo} alt="" />
            </a>
            <div
              style={{
                paddingTop: "1rem",
                paddingLeft: "50%",
                fontSize: "0.8rem",
              }}
            >
              Versión: {version}
            </div>
          </div>
        }
      ></Footer>
    </div>
  );
}
