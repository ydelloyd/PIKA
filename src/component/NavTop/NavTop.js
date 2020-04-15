import React, {useState} from 'react';
import { PageHeader, Button, Descriptions } from 'antd';
import 'antd/dist/antd.css';
import './NavTop.scss'
import setSpin from './../MainPage/MainPage.js'

export default function NavTop ({handleClustering, reset}){

  return (
      <div className="site-page-header-ghost-wrapper">
          <PageHeader
            ghost={false}
            avatar={{ size: "60", shape: "square", src: require("./../../resources/logo.png")}}
            title="PIKA"
            subTitle="Program for Imagining a Klustering Algorithm"
            extra={[
              <a key="1" className="pika-header-anchor" href="/">Cluster</a>,
              <a key="2" className="pika-header-anchor" href="/document" onClick={handleClustering}>Documents</a>,
              <a key="3" className="pika-header-anchor" href="/contacts" onClick={reset}>Contacts</a>
            ]}
          >
          </PageHeader>
        </div>
  )
}