import React from 'react';
import { PageHeader } from 'antd';
import 'antd/dist/antd.css';
import './NavTop.scss'

export default function NavTop (){

  return (
      <div className='site-page-header-ghost-wrapper'>
          <PageHeader
            ghost={false}
            avatar={{ size: '64', shape: 'square', src: require('./../../resources/logo.png')}}
            title='PIKA'
            subTitle='Program for Imagining a Klustering Algorithm'
            extra={[
              <a key='1' className='pika-header-anchor' href='/'>Cluster</a>,
              <a key='2' className='pika-header-anchor' href='/document' >Documents</a>,
              <a key='3' className='pika-header-anchor' href='/contacts' >Contacts</a>
            ]}
          >
          </PageHeader>
        </div>
  )
}