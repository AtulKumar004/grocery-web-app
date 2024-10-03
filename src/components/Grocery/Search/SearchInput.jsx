import React from 'react'

import styles from "./search.module.scss"

export default function SearchInput({place_holder = ""}) {
  return (
    <div className='w-full'>
        <input className={styles.search_input}  placeholder= {place_holder} />
    </div>
  )
}
