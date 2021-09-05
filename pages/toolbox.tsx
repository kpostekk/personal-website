import Head from "next/head";
import styles from '../styles/Messagebox.module.sass'
import Messagebox from "../pageComponents/messagebox";

export default function Toolbox() {
  return (
    <div>
      <Messagebox title={'await for new apis...'} description={'under construction'} titleHead={'🛠'} />
    </div>
  )
}
