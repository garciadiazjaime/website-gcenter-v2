import React, { Component } from 'react'
import Link from 'next/link'
import 'isomorphic-unfetch'

import Layout from '../components/layout/layout'
import { getPort, getEntry, getType, getTime, formatTime} from '../presenter/report'
import { getUserReport } from '../services/report'

class UserReportPage extends Component {

  static async getInitialProps() {
    const report = await getUserReport('tijuana')
    return { report }
  }

  renderReport() {
    const { report } = this.props
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

  render() {
    const { url } = this.props
    return (
      <Layout url={url.pathname}>
        <div className="user-reports">
          <Link href="/encuesta">
            <a className="cta">
              <span>¿Cuánto llevas en la línea?</span>
              <span>Repórtalo aquí</span>
            </a>
          </Link>
          <div className="entries">
            {this.renderReport()}
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
  }
}

export default UserReportPage
