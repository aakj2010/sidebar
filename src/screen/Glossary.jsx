import React, { useContext } from 'react'
import FontContext from '../context/FontContext'
import './glossary.css'

function Glossary() {
  let context = useContext(FontContext)
  return (
    <div className='glossary-wrapper' style={{ fontSize: `${context.fontSize}px` }}>
      <div className='g-title' style={{ fontSize: `${context.fontSize}px` }}>Glossary</div>
      <div className='explanation' style={{ fontSize: `${context.fontSize}px` }}>
        <div className='e-title' style={{ fontSize: `${context.fontSize}px` }}>Alif Laam Meem (Quran Explanation)</div>
        <div className='e-para' style={{ fontSize: `${context.fontSize}px` }}>On the home screen, you can browse your available textbooks and select one to
          start reading. You can also easily search for specific topics, keywords, or pages, as well as access
          your bookmarked pages and notes.
        </div>
      </div>
      <div className='g-title2' style={{ fontSize: `${context.fontSize}px` }}><p>Alif Laam Leem</p> </div>
      <div className='g-items' style={{ fontSize: `${context.fontSize}px` }}>
        <div className='g-items-title' style={{ fontSize: `${context.fontSize}px` }}><p>Alif-Allah</p></div>
        <div className='g-items-para' style={{ fontSize: `${context.fontSize}px` }}>
          <p>On the home screen, you can browse your available textbooks and select one
            to start reading. </p>
        </div>
      </div>
      <div className='g-items'  style={{ fontSize: `${context.fontSize}px` }}>
        <div className='g-items-title' style={{ fontSize: `${context.fontSize}px` }}><p>Laam - Almighty</p></div>
        <div className='g-items-para' style={{ fontSize: `${context.fontSize}px` }}><p>On the home screen, you can browse your available textbooks and select one
          to start reading. </p></div>
      </div>
      <div className='g-items' style={{ fontSize: `${context.fontSize}px` }}>
        <div className='g-items-title' style={{ fontSize: `${context.fontSize}px` }}><p>Alif-Allah</p></div>
        <div className='g-items-para' style={{ fontSize: `${context.fontSize}px` }}><p>On the home screen, you can browse your available textbooks and select one
          to start reading. </p></div>
      </div>
      <div className='empty'></div>
    </div>
  )
}

export default Glossary