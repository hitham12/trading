import React, { useEffect, useState } from "react";
const Trade = ({ resultsCount }) => {
    const [show, setShow] = useState(null)
    const [currency, setCurrency] = useState(null)

    useEffect(() => {
        console.log('show=', show);
        setCurrency(resultsCount.find(val => (val.T === show)))
    }, [show])


    return (
        <div>
            <label htmlFor="cars">choose a share :</label><br />
            <select className='Selector' name="tName" id="tName" onChange={(e) => { setShow(e.target.value); }}>
                {
                    resultsCount ? resultsCount.map((i, index) => {
                        return (
                            <option key={index} value={i.T} >{i.T}</option>
                        )
                    }) : ''
                }
            </select>
            <div className="d1">
                {
                    currency ? (<div>
                        <div class="numbers">
                            <div class="totalCases box">
                                <div class="one">
                                    <p>VW</p>
                                </div>
                                <div class="two"><span id='totalCasesText'>{currency.vw}$</span></div>
                            </div>
                            <div class="totaldeath box">
                                <div class="one">
                                    <p>Open</p>
                                </div>
                                <div class="two"><span id='totalDeathText'>{currency.o}$</span></div>
                            </div>
                            <div class="totalrecoverd box">
                                <div class="one">
                                    <p>Close</p>
                                </div>
                                <div class="two"><span id='totalRecoveredText'>{currency.c}$</span></div>
                            </div>
                            <div class="criticalcondition box">
                                <div class="one">
                                    <p>hight</p>
                                </div>
                                <div class="two"> <span id='totalCriticalText'>{currency.h} $</span></div>
                            </div>
                            <div class="criticalcondition box">
                                <div class="one">
                                    <p>LOW</p>
                                </div>
                                <div class="two"> <span id='totalCriticalText'>{currency.l}$</span></div>
                            </div>
                        </div>
                   
                    </div>) : ''
                }

            </div>
            
        </div>
    )
}


export default Trade