import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className={styles.container}>
      <motion.h1 layoutId={"header"} animate={{scale:1}} >Transiciones</motion.h1>
      <div className={styles["contenedor-producto"]}>
        {
          ["tenis","celular","audifonos"]
          .map(productos => (
            <Link key={productos} href={productos}>
            <a>
            <motion.img 
            layoutId={productos}
            className={styles.contenedorImagen} src={productos + ".jpg"}
            whileHover={{scale:1.1}}
            animate={{scale:1}}
            />
            </a>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
