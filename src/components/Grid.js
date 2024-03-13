import './grid.css'

export default function Grid({
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
    return(
        <div className='gridContainer'>
            <div className="grid">
                <div className='tableContainer'>
                    <h5 className='tableHeader'>Karbohydrater</h5>
                    <table className="foods-table">
                        <tbody>
                            <tr>
                                <td>Fiber</td>
                                <td className='right-cell'>{Math.abs(fiber.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Stivelse</td>
                                <td className='right-cell'>{Math.abs(stivelse.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Sukker</td>
                                <td className='right-cell'>{Math.abs(sukker.toFixed(2).replace(/\.00$/, ''))}</td>
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
                                <td className='subList' style={{paddingLeft: '10px'}}>Enumettet fett</td>
                                <td className='right-cell'>{Math.abs(enumettet.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            {/* <tr className='subList'>
                                <td style={{paddingLeft: '20px'}}>Flerumettet</td>
                                <td className='right-cell'></td>
                            </tr> */}
                            <tr>
                                <td>Kolesterol</td>
                                <td className='right-cell'>{Math.abs(kolesterol.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr className='subList'>
                                <td style={{paddingLeft: '10px'}}>Mettet fett</td>
                                <td className='right-cell'>{Math.abs(mettet.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr className='subSubList'>
                                <td style={{paddingLeft: '10px'}}>Omega-3</td>
                                <td className='right-cell'>{Math.abs(omega3.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr className='subSubList'>
                                <td style={{paddingLeft: '10px'}}>Omega-6</td>
                                <td className='right-cell'>{Math.abs(omega6.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr className='subList'>
                                <td style={{paddingLeft: '10px'}}>Transfett</td>
                                <td className='right-cell'>{Math.abs(transfett.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='tableContainer'>
                    <h5 className='tableHeader'>Proteiner</h5>
                    <table className="foods-table">
                        <tbody>
                            <tr>
                                <td>Cystin</td>
                                <td className='right-cell'>{Math.abs(cystin.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Fenylalanin</td>
                                <td className='right-cell'>{Math.abs(fenylalanin.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Histidin</td>
                                <td className='right-cell'>{Math.abs(histidin.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Isoleucin</td>
                                <td className='right-cell'>{Math.abs(isoleucin.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Leucin</td>
                                <td className='right-cell'>{Math.abs(leucin.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Lysin</td>
                                <td className='right-cell'>{Math.abs(lysin.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Metionin</td>
                                <td className='right-cell'>{Math.abs(metionin.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Trenonin</td>
                                <td className='right-cell'>{Math.abs(treonin.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Tryptofan</td>
                                <td className='right-cell'>{Math.abs(tryptofan.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Tyrosin</td>
                                <td className='right-cell'>{Math.abs(tyrosin.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Valin</td>
                                <td className='right-cell'>{Math.abs(valin.toFixed(2).replace(/\.00$/, ''))}</td>
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
                                <td>B1</td>
                                <td className='right-cell'>{Math.abs(b1.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>B2</td>
                                <td className='right-cell'>{Math.abs(b2.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>B3</td>
                                <td className='right-cell'>{Math.abs(b3.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>B5</td>
                                <td className='right-cell'>{Math.abs(b5.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>B6</td>
                                <td className='right-cell'>{Math.abs(b6.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>B12</td>
                                <td className='right-cell'>{Math.abs(b12.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Folsyre</td>
                                <td className='right-cell'>{Math.abs(folsyre.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Vitamin A</td>
                                <td className='right-cell'>{Math.abs(aVitamin.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Vitamin C</td>
                                <td className='right-cell'>{Math.abs(cVitamin.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Vitamin D</td>
                                <td className='right-cell'>{Math.abs(dVitamin.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Vitamin E</td>
                                <td className='right-cell'>{Math.abs(eVitamin.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Vitamin K</td>
                                <td className='right-cell'>{Math.abs(kVitamin.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='tableContainer'>
                    <h5 className='tableHeader'>Mineraler</h5>
                    <table className="foods-table">
                        <tbody>
                            <tr>
                                <td>Fosfor</td>
                                <td className='right-cell'>{Math.abs(fosfor.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Jern</td>
                                <td className='right-cell'>{Math.abs(jern.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Kalium</td>
                                <td className='right-cell'>{Math.abs(kalium.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Kalsium</td>
                                <td className='right-cell'>{Math.abs(kalsium.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Kobber</td>
                                <td className='right-cell'>{Math.abs(kobber.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Magnesium</td>
                                <td className='right-cell'>{Math.abs(magnesium.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Mangan</td>
                                <td className='right-cell'>{Math.abs(mangan.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Natrium</td>
                                <td className='right-cell'>{Math.abs(natrium.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Selen</td>
                                <td className='right-cell'>{Math.abs(selen.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                            <tr>
                                <td>Sink</td>
                                <td className='right-cell'>{Math.abs(sink.toFixed(2).replace(/\.00$/, ''))}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}