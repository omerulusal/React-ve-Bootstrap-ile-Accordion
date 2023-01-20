import React from 'react'

function Accordion({ title, text, act, setAct }) {
    return (
        <div className="accordion my-4">
            <div className="card bg-warning">
                <div className="card-header ">
                    <h2 className="mb-2 text-center ">
                        <button className="btn w-100 text-white bg-dark text-center" type="button" onClick={() => setAct(title)}>
                            {title}
                        </button>
                    </h2>
                </div>
                <div className={(act === title ? "show" : "") + "collapse"}>
                    <div className="card-body">
                        {text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion