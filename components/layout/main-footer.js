import React from 'react';

const MainFooter = ({ cities }) => (
  <footer>
    <div className="content">
      <h5>Reporte de Garitas Últimas 24 hrs</h5>
      <ul>
        <li><a href="/reporte-garitas-last-24hrs?city=tijuana" title="Reporte de Garitas para Tijuana - San Diego">Tijuana - San Diego</a></li>
      </ul>

      <h5>Reporte de Garitas para otras ciudades</h5>
      <ul>
        <li><a href="/" title="Reporte de Garitas para Tijuana - San Diego">Tijuana - San Diego</a></li>
        <li><a href="/reporte-garitas-calexico" title="Reporte de Garitas para Mexicali - Calexico">Mexicali - Calexico</a></li>
        <li><a href="/reporte-garitas-el-paso" title="Reporte de Garitas para Ciudad Juarez - El Paso">Ciudad Juarez - El Paso</a></li>
        <li><a href="/reporte-garitas-laredo" title="Reporte de Garitas para Nuevo Laredo - Laredo">Nuevo Laredo - Laredo</a></li>
      </ul>
    </div>
    <div className="content">
      <ul className="social-links">
        <li>
          <a href="https://www.facebook.com/garitacenter/" title="Reporte de Garitas | Facebook" target="_blank" rel="noopener noreferrer">
            <svg width="50" height="50" viewBox="0 0 30 30">
              <circle cx="15" cy="15" r="15" fill="#666" />
              <path d="M16.6 25.1v-9.2h3.2l0.5-3.6h-3.7v-2.3c0-1 0.3-1.7 1.9-1.7l2 0V5.1c-0.3 0-1.5-0.1-2.9-0.1 -2.9 0-4.8 1.7-4.8 4.7v2.6H9.5v3.6h3.2v9.2H16.6z" fill="#fff" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/garita_center" title="Reporte de Garitas | Twitter" target="_blank" rel="noopener noreferrer">
            <svg width="50" height="50" viewBox="0 0 30 30">
              <circle cx="15" cy="15" r="15" fill="#666" />
              <path d="M23.5 9.7c-0.6 0.3-1.3 0.5-2 0.5 0.7-0.4 1.3-1.1 1.5-1.9 -0.7 0.4-1.4 0.7-2.2 0.8 -0.6-0.7-1.5-1.1-2.5-1.1 -1.9 0-3.5 1.6-3.5 3.5 0 0.3 0 0.5 0.1 0.8 -2.9-0.1-5.5-1.5-7.2-3.6 -0.3 0.5-0.5 1.1-0.5 1.8 0 1.2 0.6 2.3 1.6 2.9 -0.6 0-1.1-0.2-1.6-0.4 0 0 0 0 0 0 0 1.7 1.2 3.1 2.8 3.4 -0.3 0.1-0.6 0.1-0.9 0.1 -0.2 0-0.4 0-0.7-0.1 0.4 1.4 1.7 2.4 3.3 2.4 -1.2 0.9-2.7 1.5-4.3 1.5 -0.3 0-0.6 0-0.8 0 1.5 1 3.4 1.6 5.3 1.6 6.4 0 9.9-5.3 9.9-9.9 0-0.1 0-0.3 0-0.4C22.4 11 23 10.4 23.5 9.7z" fill="#fff" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://plus.google.com/102476216230239359040" title="Reporte de Garitas | Google Plus" target="_blank" rel="noopener noreferrer">
            <svg width="50" height="50" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="25" fill="#666" />
              <path d="M23.6 27.9c-0.5-0.7-1-1.3-1.1-2.1 -0.2-0.8 0-1.6 0.3-2.3 -0.3 0-0.7 0-1 0 -2.2 0.1-4.1-0.5-5.7-2.1 -1.2-1.2-1.8-2.6-1.9-4.2 -0.3-2.6 0.8-4.6 2.6-6.4 1.5-1.4 3.4-2.1 5.4-2.4 2-0.2 4-0.2 6-0.2C30 8.2 31.8 8.2 33.5 8.2c0.1 0 0.2 0 0.3 0 0 0 0 0.1 0 0.1 -0.8 0.5-1.5 1-2.4 1.3 -0.9 0.3-1.8 0.4-2.7 0.1 0 0 0 0.1-0.1 0.1 0.1 0.1 0.1 0.2 0.2 0.3 0.7 0.6 1.3 1.3 1.7 2.1 1.5 2.5 1.4 6.4-1.3 8.7 -0.7 0.6-1.3 1.2-2 1.8 -0.9 0.8-0.8 2.2 0.1 3 1.2 1 2.4 2 3.5 3 2.6 2.3 2.7 6.2 0.8 8.7 -1.4 1.9-3.3 3.1-5.5 3.7 -1.8 0.5-3.6 0.7-5.5 0.7 -1.9-0.1-3.8-0.5-5.5-1.4 -1.4-0.7-2.5-1.8-2.9-3.3 -0.6-1.9-0.2-3.6 1-5.1 1-1.3 2.4-2.2 4-2.7 1.2-0.4 2.4-0.6 3.6-0.8C21.8 28.2 22.7 28.1 23.6 27.9zM23.5 39.8c1.5 0.1 2.8-0.1 4-0.8 2.8-1.4 3.3-5 1-7 -0.8-0.7-1.6-1.3-2.4-2 -0.5-0.4-1.1-0.7-1.8-0.7 -0.7 0-1.4 0.1-2.1 0.2 -1.3 0.1-2.6 0.5-3.8 1.1 -3 1.6-3.1 5-1.4 6.9 0.8 0.9 1.9 1.5 3.1 1.9C21.3 39.7 22.4 39.8 23.5 39.8zM18.2 14.3c0 1.3 0.1 2.3 0.5 3.3 0.5 1.4 1.2 2.6 2.3 3.6 2 1.7 4.7 1 6-0.7 0.5-0.7 0.7-1.5 0.7-2.4 0.1-1-0.1-2-0.4-3 -0.4-1.7-1.2-3.2-2.5-4.4 -2-1.8-5.1-1.2-6.2 1.2C18.2 12.8 18.2 13.6 18.2 14.3z" fill="#fff" />
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
        <a href="http://www.noticiasmexico.org" title="Noticias México" target="_blank" rel="noopener noreferrer">Noticias México</a>
        <br />
        <a href="http://www.eventostijuana.org" title="Eventos Tijuana" target="_blank" rel="noopener noreferrer">Eventos Tijuana</a>
        <br />
        <a href="http://www.playami.com/" title="Qué Comer en Playas de Tijuana" target="_blank" rel="noopener noreferrer">Qué Comer en Playas?</a>
        <br />
        <a href="http://www.larutadelvinoensenada.com" title="La Ruta del Vino Ensenada" target="_blank" rel="noopener noreferrer">La Ruta del Vino Ensenada</a>
        <br />
        <a href="https://reporte-garitas.blogspot.com" title="Información de Garitas Tijuana" target="_blank" rel="noopener noreferrer">Información de Garitas Tijuana</a>
      </p>
      <p>
        <small>El <strong>Reporte de Garitas</strong> es extraido de CBP.</small>
      </p>
    </div>
    <div className="powered">
      Todos los derechos reservados © GaritaCenter <br />
      <strong>Reporte de Garitas</strong> para {cities.footer} <br />
      Un proyecto de <a href="http://www.mintitmedia.com" title="Software Development Tijuana" target="_blank" rel="noopener noreferrer">MINT</a>
      <br />
      Diseño de <a href="http://somospool.com" title="Branding Pool" target="_blank" rel="noopener noreferrer">Pool</a>
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
