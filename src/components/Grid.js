import { useEffect } from 'react'
import './grid.css'

export default function Grid({
        matvarer,
        fiber,
        stivelse,
        sukker,
        enumettet,
        omega3,
        omega6,
        mettet,
        transfett,
        kolesterol,
        cystin,
        histidin,
        isoleucin,
        leucin,
        lysin,
        metionin,
        fenylalanin,
        treonin,
        tryptofan,
        tyrosin,
        valin,
        b1,
        b2,
        b3,
        b5,
        b6,
        b12,
        folsyre,
        aVitamin,
        cVitamin,
        dVitamin,
        eVitamin,
        kVitamin,
        kalsium,
        kobber,
        jern,
        magnesium,
        mangan,
        fosfor,
        kalium,
        selen,
        natrium,
        sink
    }) {

    useEffect(() => {
        console.log(matvarer[0].carbohydrates[1].fiber_recommended)
    })

    return(
        <div className='gridContainer'>
            <div className="grid">
                <div className='tableContainer'>
                    <h5 className='tableHeader'>Karbohydrater</h5>
                    <table className="foods-table">
                        <tbody>
                        <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Fiber</div>
                                    <div className='cellMid'>{Math.abs((((fiber)/(matvarer[0].carbohydrates[1].fiber_recommended))*100).toFixed(2).replace(/\.00$/, ''))}%</div>
                                    <div className='cellRight'>{Math.abs(fiber.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div 
                                        className='percentageBar perc-fiber' 
                                        style={{
                                            width: `${((fiber)/(matvarer[0].carbohydrates[1].fiber_recommended))*100}%`
                                            
                                        }}
                                        // style={{width:`100%`}}
                                    ></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Stivelse</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(stivelse.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Sukker</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(sukker.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar perc-200'></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='tableContainer'>
                    <h5 className='tableHeader'>Lipider</h5>
                    <table className="foods-table">
                        <tbody>
                            {/* <tr>
                                <td>Fett</td>
                                <td className='right-cell'></td>
                            </tr> */}
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Enumettet fett</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(enumettet.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar perc-25'></div>
                                </td>
                            </tr>
                            {/* <tr className='subList'>
                                <td style={{paddingLeft: '20px'}}>Flerumettet</td>
                                <td className='right-cell'></td>
                            </tr> */}
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Kolesterol</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(kolesterol.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar perc-100'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Mettet fett</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(mettet.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Omega-3</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(omega3.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Omega-6</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(omega6.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Transfett</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(transfett.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='tableContainer'>
                    <h5 className='tableHeader'>Proteiner</h5>
                    <table className="foods-table">
                        <tbody>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Cystin</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(cystin.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar perc-100'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Fenylalanin</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(fenylalanin.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar perc-25'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Histidin</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(histidin.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar perc-10'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Isoleucin</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(isoleucin.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Leucin</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(leucin.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar perc-10'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Lysin</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(lysin.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Metionin</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(metionin.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Treonin</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(treonin.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Tryptofan</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(tryptofan.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Tyrosin</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(tyrosin.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Valin</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(valin.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='grid'>
                <div className='tableContainer'>
                    <h5 className='tableHeader'>Vitaminer</h5>
                    <table className="foods-table">
                        <tbody>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>B1</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(b1.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar perc-10'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>B2</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(b2.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>B3</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(b3.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar perc-100'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>B5</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(b5.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>B6</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(b6.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar perc-200'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>B12</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(b12.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Folsyre</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(folsyre.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Vitamin A</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(aVitamin.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Vitamin C</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(cVitamin.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Vitamin D</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(dVitamin.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Vitamin E</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(eVitamin.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Vitamin K</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(kVitamin.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='tableContainer'>
                    <h5 className='tableHeader'>Mineraler</h5>
                    <table className="foods-table">
                        <tbody>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Fosfor</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(fosfor.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar perc-100'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Jern</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(jern.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Kalium</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(kalium.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Kalsium</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(kalsium.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>kobber</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(kobber.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Magnesium</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(magnesium.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar perc-100'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Mangan</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(mangan.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Natrium</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(natrium.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Selen</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(selen.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar perc-100'></div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tableCell'>
                                    <div className='cellLeft'>Sink</div>
                                    <div className='cellMid'>0%</div>
                                    <div className='cellRight'>{Math.abs(sink.toFixed(2).replace(/\.00$/, ''))}</div>
                                    <div className='percentageBar'></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}