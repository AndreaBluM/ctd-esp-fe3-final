
import React, {useContext} from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context'
import '../Styles/contact.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {state} = useContext(ContextGlobal);
  return (
    <div className={`${state.theme} contact-container`}>
      <h2 className="contact-title">Want to know more?</h2>
      <p className="contact-description" >Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact