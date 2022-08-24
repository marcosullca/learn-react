import React, { Component } from 'react'

export default class PaginacionC extends Component {
    
    constructor(props) {
        super(props);
        this.state = {pagina: []};

        this.array_datos = [{
            indice:1,
            nombre:"Marco",
            apellido : "Sullca",
            edad: 21,
            dni : 74446595,
            sueldo: 3500.5
        }];
        this.data = [];
        this.mostrar = this.mostrar.bind(this);

    }


    mostrar(indice){
        this.data = [];

        for(let i=indice*10; i<indice*10+10; i++){

            if(this.array_datos[i] === undefined){
                console.log("Cancelado");
                break;
            }
            this.data.push(this.array_datos[i]);

            this.setState({pagina: [...this.data]});
            // functionPagina([...data]);
        }
        console.log(`array data: ${this.pagina}`);
    }
    
    render() {
       
        for(let i =0; i<100; i++){
            this.array_datos[i+1] = {
                indice:i+1,
                nombre:"Marco",
                apellido : "Sullca",
                edad: 21,
                dni : 74446595,
                sueldo: 3500.5
            }
            console.log(this.array_datos[i].indice);
    
        }

        const IndicePaginacion = []
        for(let i=0; i<Math.trunc(this.array_datos.length/10)+1; i++){
            // console.log("paginas");
            // console.log(Math.trunc(array_datos.length/10));
            
            IndicePaginacion.push(
                    <div className="paginacion_indice" onClick={()=> this.mostrar(i)}>
                        {i+1}
                    </div>
            )
        }
        return (
            <React.Fragment>
            <h2 className="paginacion_title">Paginacion Datos</h2>
            <div className="paginacion_contenedor">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>DNI</th>
                        <th>Sueldo</th>
                    </tr>
                        {
                            this.state.pagina.map((data, indice) => {
                                return <tr key={indice}>
                                    <td>{data.indice}</td>
                                    <td>{data.nombre}</td>
                                    <td>{data.apellido}</td>
                                    <td>{data.edad}</td>
                                    <td>{data.dni}</td>
                                    <td>{data.sueldo}</td>
                                </tr>
                            })
                        }
                </table>

            </div>

            <div className="paginacion_indice_contenedor">
            {IndicePaginacion}
            </div>

        </React.Fragment>
        )
    }
}
