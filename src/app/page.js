"use client";
import Image from "next/image";
import "./estilos/globales.css";
import "./estilos/secciones/header.css";
import "./estilos/secciones/acerca-de.css";
import "./estilos/secciones/contacto.css";
import "./estilos/secciones/footer.css";
import { useRef, useState } from "react";
import { faCalendar, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import Data from "./componentes/data";
import {
  faArrowLeft,
  faArrowRight,
  faBars,
  faClose,
  faMailBulk,
  faPeopleGroup,
  faPersonArrowDownToLine,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Boton from "./componentes/boton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Servicio from "./componentes/servicio";
import BotonContacto from "./componentes/boton-contacto";

export default function Home() {
  let referenciaAcercaDe = useRef(null);
  let referenciaServicio = useRef(null);
  let referenciaContacto = useRef(null);

  let [seleccionNav, setSeleccionNav] = useState("");
  let [secciones, setSecciones] = useState([
    {
      texto: "NOSOTROS",
      clase: "seleccion-acerca-de",
    },
    {
      texto: "SERVICIOS",
      clase: "seleccion-servicios",
    },
    {
      texto: "CONTACTO",
      clase: "seleccion-contacto",
    },
  ]);
  function hoverMenu(seleccion) {
    console.log("entro");
    setSeleccionNav(seleccion);
  }

  function navegacion(seccionNav) {
    if(mostrarNavegacionResponsive){
      setMostrarNavegacionResponsive(false)
    }
    switch (seccionNav) {
      case "seleccion-acerca-de":
        referenciaAcercaDe.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "seleccion-servicios":
        referenciaServicio.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "seleccion-contacto":
        referenciaContacto.current.scrollIntoView({ behavior: "smooth" });
    }
    
  }

  let [data, setData] = useState([
    { icono: faCalendar, texto: "RESERVAS" },
    { icono: faMoneyBill1, texto: "MERCADO PAGO" },
    { icono: faPeopleGroup, texto: "SALA DE JUEGOS" },
    { icono: faWhatsapp, texto: "AVISOS" },
  ]);

  let [mostrarNavegacionResponsive, setMostrarNavegacionResponsive] =
    useState(true);

  function abrirNavResp() {
    setMostrarNavegacionResponsive(!mostrarNavegacionResponsive);
  }
  return (
    <div className="contenedor-principal">
      <div className="header">
        <div className="cabecera">
          <Image src={"/logo.png"} width={120} height={120} alt="logo" />
          <FontAwesomeIcon
            onClick={abrirNavResp}
            icon={!mostrarNavegacionResponsive ? faBars : faClose}
            size="lg"
            color="#f37957"
            className="icono-menu"
          />
          <div
            className={`${
              mostrarNavegacionResponsive ? "modo-responsive-activo" : ""
            } modo-responsive`}
          >
            {/* <FontAwesomeIcon icon={faClose} size='lg' color="#f37957" className="icono-menu"/> */}
            <div className="contenedor-navegacion">
              <div className="navegacion">
                {secciones.map((e, index) => {
                  return (
                    <div
                      className="nav"
                      key={index}
                      onClick={() => {
                        navegacion(e["clase"]);
                      }}
                      onMouseEnter={() => {
                        hoverMenu(e["clase"]);
                      }}
                      onMouseLeave={() => {
                        hoverMenu("");
                      }}
                    >
                      {e["texto"]}
                    </div>
                  );
                })}
              </div>
              <div className="barra-interna">
                <div className={`${seleccionNav} barra-selectora`}></div>
              </div>
            </div>
            <Boton
              texto={"INICIAR SESION"}
              funcion={() => {
                window.open("https://smashzone.napxtec.com/login", "_blanck");
              }}
            />
          </div>
        </div>
        <div className="difuminado"></div>
        <div className="menu-cabecera">
          <div className="contenedor-textos-cabecera">
            <h1>Gestiona de manera eficiente tu club!</h1>
            <p>
              Con nuestro sistema, dejás atrás el desorden, los mensajes y las
              planillas. Tenés todas las herramientas de tu club en un solo
              lugar, de forma clara, rápida y eficiente.
            </p>
            <div className="boton-contacto" onClick={()=>{
              navegacion('seleccion-contacto')
            }}>
              CONTACTANOS <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          <div className="contenedor-mockop">
            <Image src={"/mockop.png"} fill alt="mockop" />
          </div>
        </div>
        <div className="footer-cabecera">
          {data.map((e, index) => {
            return <Data key={index} icono={e["icono"]} texto={e["texto"]} />;
          })}
        </div>
      </div>
      <main>
        <section ref={referenciaAcercaDe} className="acerca-de">
          <h2>ACERCA DE</h2>
          <p>
            Smashzone es un sistema de gestión diseñado para clubes de pádel que
            buscan organizar sus canchas de forma simple y eficiente. La
            plataforma permite administrar reservas de canchas, crear salas de
            juego para conectar jugadores, y gestionar los cobros mediante
            integración directa con Mercado Pago. Cada reserva puede vincularse
            automáticamente a un pago, brindando mayor orden y control. Además,
            Smashzone incorpora notificaciones por WhatsApp, facilitando la
            comunicación con los jugadores a través de avisos de turnos,
            partidos disponibles y enlaces de pago, sin gestiones manuales. Todo
            el sistema está pensado para optimizar el tiempo del club, reducir
            cancelaciones y mejorar la experiencia de juego.
          </p>
        </section>
        <section ref={referenciaServicio} className="servicios">
          <h2>SERVICIOS</h2>
          <Servicio
            imagen={"/reservas.png"}
            titulo={"GESTION DE RESERVAS"}
            texto={
              "Un sistema pensado para facilitar el trabajo diario del administrador del club. Desde un único panel podés crear, modificar y gestionar reservas en nombre de tus clientes, manteniendo el control total de horarios y disponibilidad de las canchas."
            }
            reverse={false}
          />
          <Servicio
            imagen={"/mercado.png"}
            titulo={"INTEGRACION CON MERCADO PAGO"}
            texto={
              "El sistema se integra con Mercado Pago, permitiendo que cada club conecte su cuenta de forma segura mediante OAuth. Una vez vinculada, el administrador puede generar links de pago asociados a cada reserva, facilitando el cobro y manteniendo cada pago correctamente registrado para una gestión más ordenada y segura."
            }
            reverse={true}
          />
          <Servicio
            imagen={"/sala.png"}
            titulo={"SALA DE JUEGOS"}
            texto={
              "Permite a los clubes facilitar partidos entre jugadores que no tienen grupo armado. A través de las salas de juego, los jugadores pueden encontrar compañeros de su misma categoría, confirmar su lugar con pago y asegurar el turno de forma ordenada. El club reduce cancelaciones, optimiza el uso de las canchas y ofrece una mejor experiencia a sus clientes."
            }
            reverse={false}
          />
          <Servicio
            imagen={"/whatsapp.png"}
            titulo={"NOTIFICACIONES"}
            texto={
              "Permite mantener a jugadores y administradores informados en tiempo real a través de WhatsApp. El sistema envía automáticamente avisos sobre partidos disponibles, confirmaciones de participación y enlaces de pago, evitando gestiones manuales y reduciendo errores. De esta forma, los clubes mejoran la comunicación con sus clientes y agilizan la organización de los partidos."
            }
            reverse={true}
          />
        </section>
        <section ref={referenciaContacto}>
          <h2>CONTACTO</h2>
          <div className="contenedor-contacto">
            <div className="botones-contacto">
              <BotonContacto
                icono={faWhatsapp}
                texto={"2616928286"}
                funcion={() => {}}
              />
              <BotonContacto
                icono={faMailBulk}
                texto={"sistemas@napxtec.com"}
                funcion={() => {}}
              />
              <BotonContacto
                icono={faInstagram}
                texto={"2616928286"}
                funcion={() => {}}
              />
            </div>

            <p>
              Contactanos por el canal que prefieras. Coordinamos una demo,
              respondemos tus consultas y te acompañamos en la implementación.
            </p>
          </div>
        </section>
      </main>
      <footer>
        <p>Todos los derechos reservados. Napxtec 2026.</p>
      </footer>
    </div>
  );
}
