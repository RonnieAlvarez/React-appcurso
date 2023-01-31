import React from "react"
import { Item } from "./Item"

export function ItemList({productos},props) {
  return <div className="d-flex flex-column ">
      <div className="content">
        {productos.map(producto => <div className="d-flex flex-column justify-content-center" key={producto.id}>
            <Item producto={producto} key={producto.id} />
          </div>)}
      </div>
    </div>
}
  