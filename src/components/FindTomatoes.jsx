import { useEffect, useState } from 'react'

const FindTomatoes = () => {
    const [datos, setDatos] = useState({
        nombre: '',
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre+'')
    }
  return (
    <div>FindTomatoes
        <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
    </div>
  )
}

export default FindTomatoes