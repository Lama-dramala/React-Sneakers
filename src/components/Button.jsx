import React from 'react'

export default function Button({func, content, addClass}) {
  return (
    <button className={"site-btn " + addClass} onClick={func}>
        {content}
    </button>
  )
}
