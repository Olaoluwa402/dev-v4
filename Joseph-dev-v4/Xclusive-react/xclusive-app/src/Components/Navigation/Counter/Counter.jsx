import React, {useContext} from 'react'
import { GlobalContext } from '../../../context'

import styles from './Counter.module.css'

const Counter = () => {

  const {favouritesTotal} = useContext(GlobalContext)
  return (
    <span className={styles.favourite_count}>{favouritesTotal}</span>
  )
}

export default Counter
