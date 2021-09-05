import styles from '../styles/Messagebox.module.sass'
import Messagebox from "../pageComponents/messagebox";

export default function Custom404() {
  return (
    <div>
      <Messagebox title={'404'} titleHead={'404'} description={'Not found'} />
    </div>
  )
}
