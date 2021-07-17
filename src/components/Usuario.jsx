import React from 'react'

const Usuario = () => {
    return (
        <div className="contratos">
            <div className="line"></div>
            {/* Timeline item */}
            <div className="item">
                <div className="avatar">
                    <img
                        alt="Doug"
                        src="http://www.croop.cl/UI/twitter/images/doug.jpg"
                    />
                    Doug
                </div>

                <div class="input-group mb-3">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1">Contrato de Instalaciones Eléctricas</button>
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1">Proyecto:</button>
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1">Edificio Milenio III </button>



                    <input type="text" class="form-control" placeholder="" aria-label="Example text with button  addon" aria-describedby="button-addon1"></input>
                </div>
                <span className="time">An hour ago</span>
                    <p>Ate lunch</p>          

                    





                    
                    <div className="commentCount">2</div>
                </div>
                {/* ... */}
            </div>
            )
}

export default Usuario