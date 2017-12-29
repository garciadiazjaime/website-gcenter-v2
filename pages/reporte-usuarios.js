import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import 'isomorphic-unfetch'

import Layout from '../components/layout/layout'
import { getPort, getEntry, getType, getTime, formatTime} from '../presenter/report'
import { getUserReport } from '../services/report'

const renderReport = (report) => {
  return report.map(item => (
    <div key={item._id}>
      <span>Reporte a las <b>{formatTime(item.created)}</b></span><br />
      Cruzando por <b>{getPort(item.port)}</b><br />
      <b>{getEntry(item.entry)} / {getType(item.type)}</b><br />
      Lleva esperando <b>{getTime(item.time)}</b>
      <style jsx>{`
        div {
          margin-top: 15px;
        }
        span {
          color: #1b8ece;
        }
      `}
      </style>
    </div>
  ))
}

const UserReportPage = ({ url, report }) => (
  <Layout url={url.pathname}>
    <Head>
      <title>GaritaCenter - Reporte de Usuarios para San Ysidro y Otay | Tijuana</title>
      <meta name="description" content="Información reportada por la comunidad de GaritaCenter." />
    </Head>
    <div className="user-reports">
      <Link href="/encuesta">
        <a className="cta">
          <span>¿Cuánto llevas en la línea?</span>
          <span>Repórtalo aquí</span>
        </a>
      </Link>
      <div className="entries">
        {renderReport(report)}
      </div>
    </div>
    <style jsx>{`
      .user-reports {
        padding: 15px 5px;
        background-color: white;
        text-align: center;
      }
      .cta {
        background-color: #1b8ece;
        display: inline-block;
        color: white;
        padding: 15px;
        border-radius: 5px;
      }
      .cta span {
        display: block;
      }
      .entries {
        margin-top: 15px;
        text-align: left;
      }
    `}
    </style>
  </Layout>
)

UserReportPage.getInitialProps = async () => {
  const report = await getUserReport('tijuana')
  return { report }
}

export default UserReportPage
