import React from 'react'
import './DocumenttPage.scss'
import DocumentComponent from '../DocumentComponent/DocumentComponent'

export default function DocumentPage (){
    const documents = [
        {title: 'Proposal Document', desc: 'Our proposal document that answers the Heilmeier Questions presenting our project idea.', documentLocation: '/documents/team150proposal.pdf', type:'pdf'},
        {title: 'Proposal Slides', desc: 'Porposal side deck to accompany our proposal video.', documentLocation: '/documents/team150slides.pdf', type:'pdf'},
        {title: 'Proposal Video', desc: 'MP4 Video of our proposal where we go over our project idea and relevant facts in video form', documentLocation: '/documents/team150proposal.mp4', type:'mp4'},
        {title: 'Progress Report', desc: 'Midterm report that covers all the work done until that point along with updated infromation', documentLocation: '/documents/team150progress.pdf', type:'pdf'}
    ]

    return (
      <div className='document-content-wrapper'>
          <div className='document-content'>
              {documents.map((doc) => {
                  return <DocumentComponent document = {doc}/>
              })}
          </div>
      </div>

  )
}