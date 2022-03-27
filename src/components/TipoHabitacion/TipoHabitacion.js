import React, { useState, useEffect } from "react"
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/credenciales"
import { useNavigate } from "react-router-dom"
import { CircularProgress } from "@material-ui/core"

function TipoHabitacion(props) {

    const { tipo } = props
    const { id, nombreHotel } = tipo
    const navigate = useNavigate()

    const [tipoHab, setTipoHab] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTipoHab = async () => {

        const snap = await getDoc(doc(db, 'tipohabitaciones', id))

        setTipoHab(snap.data())
        setLoading(false)
    }

    useEffect(() => {
        fetchTipoHab();
    }, []);

    const { nombre, camas, capacidad, comodidades, precioNoche } = tipoHab

    const handleClick = () => {
        navigate("../reservar", {
            state: {
                tipoHabitacion: { ...tipoHab, id: id, nombreHotel: nombreHotel }
            }
        })
    }

    return (
        <div>
            {loading ? <CircularProgress /> :
                <li style={{ margin: "20px" }}>
                    <h3><strong>{nombre}</strong></h3>
                    <h3>$ {precioNoche}</h3>
                    <h3>{camas}</h3>
                    <h3>Capacidad: {capacidad}</h3>
                    <h3>Comodidades: {comodidades.join(", ")}</h3>
                    <button onClick={handleClick}>Reservar</button>
                </li>}
        </div>);
}

export default TipoHabitacion;