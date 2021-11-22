import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

export default function Producto() {
  const {
    query:  { producto },
  } = useRouter()
  console.log(producto)
  return (
    <div className={styles.container}>
      <Link href="/">
      <a>
      <motion.h1
      animate={{scale:0.9}}
      layoutId={"header"}>{producto}</motion.h1>
      </a>
      </Link>
      <div 
      className={styles["contenedor-producto"]}>
      <motion.img 
      layoutId={producto}
      className={styles.contenedorImagen} src={producto + ".jpg"} />
        
      </div>
    </div>
  )
}
