// libs
import React from 'react'
import { Link } from 'react-router-dom'

// components
import Head from '../../layout/Head'
import { useEnv } from '../../context'

// styles
import styles from '../../styles/warn.module.scss'

function Forbidden() {
  const { projectPrefix } = useEnv()
  return (
    <div className={styles.warn}>
      <Head title="403" />
      <h2>403 Forbbiden</h2>
      <p>
        Back <Link to={`${projectPrefix}/`}>Home</Link>
      </p>
    </div>
  )
}

export default Forbidden
