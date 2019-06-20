// lib
import React from 'react'

// styles
import style from './style.module.scss'

const Melody = () => (
  <div className={style.melody}>
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
  </div>
)

const Ellipsis = () => (
  <div className={style.ellipsis}>
    <span />
  </div>
)

function LoadingPage() {
  return (
    <div className={style.loading}>
      <Ellipsis />
    </div>
  )
}

export default {
  Melody,
  Ellipsis,
  LoadingPage,
}
