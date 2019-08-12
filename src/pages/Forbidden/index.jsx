// libs
import React from 'react'
import { Link } from 'react-router-dom'

// components
import { useEnv, useTitle } from '../../context'

// styles
import styles from '../../styles/warn.module.scss'

function Forbidden() {
  const { projectPrefix } = useEnv()
  useTitle('403')
  return (
    <div className={styles.warn}>
      <h2>403 Forbbiden</h2>
      <p>
        Back <Link to={`${projectPrefix}/`}>Home</Link>
      </p>
    </div>
  )
}

export default Forbidden
