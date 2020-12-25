import React from 'react';

const MainFooter = ({ cities }) => (
  <footer>
    <div className="content">
      <ul className="social-links">
        <li>
          <a href="https://www.facebook.com/garitacenter/" title="Reporte de Garitas | Facebook">
            <svg width="50" height="50" viewBox="0 0 30 30">
              <circle cx="15" cy="15" r="15" fill="#666" />
              <path d="M16.6 25.1v-9.2h3.2l0.5-3.6h-3.7v-2.3c0-1 0.3-1.7 1.9-1.7l2 0V5.1c-0.3 0-1.5-0.1-2.9-0.1 -2.9 0-4.8 1.7-4.8 4.7v2.6H9.5v3.6h3.2v9.2H16.6z" fill="#fff" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/garita_center" title="Reporte de Garitas | Twitter">
            <svg width="50" height="50" viewBox="0 0 30 30">
              <circle cx="15" cy="15" r="15" fill="#666" />
              <path d="M23.5 9.7c-0.6 0.3-1.3 0.5-2 0.5 0.7-0.4 1.3-1.1 1.5-1.9 -0.7 0.4-1.4 0.7-2.2 0.8 -0.6-0.7-1.5-1.1-2.5-1.1 -1.9 0-3.5 1.6-3.5 3.5 0 0.3 0 0.5 0.1 0.8 -2.9-0.1-5.5-1.5-7.2-3.6 -0.3 0.5-0.5 1.1-0.5 1.8 0 1.2 0.6 2.3 1.6 2.9 -0.6 0-1.1-0.2-1.6-0.4 0 0 0 0 0 0 0 1.7 1.2 3.1 2.8 3.4 -0.3 0.1-0.6 0.1-0.9 0.1 -0.2 0-0.4 0-0.7-0.1 0.4 1.4 1.7 2.4 3.3 2.4 -1.2 0.9-2.7 1.5-4.3 1.5 -0.3 0-0.6 0-0.8 0 1.5 1 3.4 1.6 5.3 1.6 6.4 0 9.9-5.3 9.9-9.9 0-0.1 0-0.3 0-0.4C22.4 11 23 10.4 23.5 9.7z" fill="#fff" />
            </svg>
          </a>
        </li>
      </ul>
      <p>
        <strong>GaritaCenter</strong> es un servicio para brindar el <strong>Reporte de Garitas</strong> entre México ({cities.from}) y Estados Unidos ({cities.to}), en un formato amigable.
      </p>
      <p>
        El <strong>Reporte de Garitas</strong> es patrocinado por:
        <br />
        <a href="http://www.noticiasmexico.org" title="Noticias México">Noticias México</a>
        <br />
        <a href="http://www.eventostijuana.org" title="Eventos Tijuana">Eventos Tijuana</a>
        <br />
        <a href="http://www.playami.com/" title="Qué Comer en Playas de Tijuana">Qué Comer en Playas?</a>
        <br />
        <a href="http://www.larutadelvinoensenada.com" title="La Ruta del Vino Ensenada">La Ruta del Vino Ensenada</a>
        <br />
        <a href="https://reporte-garitas.blogspot.com" title="Información de Garitas Tijuana">Información de Garitas Tijuana</a>
      </p>
      <p>
        <small>El <strong>Reporte de Garitas</strong> es extraido de CBP.</small>
      </p>
    </div>
    <div className="powered">
      Todos los derechos reservados © GaritaCenter <br />
      <strong>Reporte de Garitas</strong> para {cities.footer} <br />
      Un proyecto de <a href="http://www.mintitmedia.com" title="Software Development Tijuana">MINT</a>
      <br />
      Diseño de <a href="http://somospool.com" title="Branding Pool">Pool</a>
    </div>
    <style jsx>{`
      footer {
        color: white;
      }

      .content {
        padding: 5px;
      }

      ul {
        list-style-type: none;
        padding-left: 0;
      }

      small {
        opacity: 0.8;
      }

      a {
        color: white;
      }

      .social-links {
        display: flex;
      }

      .social-links li {
        margin-right: 10px;
      }

      .powered {
        background-color: black;
        padding: 10px 5px;
        font-size: 0.7em;
        opacity: 0.7;
      }
    `}
    </style>
  </footer>);

export default MainFooter;
