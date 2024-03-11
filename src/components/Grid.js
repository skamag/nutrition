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
                                <td className='right-cell'>{fiber.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Stivelse</td>
                                <td className='right-cell'>{stivelse.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Sukker</td>
                                <td className='right-cell'>{sukker.toFixed(2).replace(/\.00$/, '')}</td>
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
                                <td className='right-cell'>{enumettet.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            {/* <tr className='subList'>
                                <td style={{paddingLeft: '20px'}}>Flerumettet</td>
                                <td className='right-cell'></td>
                            </tr> */}
                            <tr>
                                <td>Kolesterol</td>
                                <td className='right-cell'>{kolesterol.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr className='subList'>
                                <td style={{paddingLeft: '10px'}}>Mettet fett</td>
                                <td className='right-cell'>{mettet.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr className='subSubList'>
                                <td style={{paddingLeft: '10px'}}>Omega-3</td>
                                <td className='right-cell'>{omega3.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr className='subSubList'>
                                <td style={{paddingLeft: '10px'}}>Omega-6</td>
                                <td className='right-cell'>{omega6.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr className='subList'>
                                <td style={{paddingLeft: '10px'}}>Transfett</td>
                                <td className='right-cell'>{transfett.toFixed(2).replace(/\.00$/, '')}</td>
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
                                <td className='right-cell'>{cystin.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Fenylalanin</td>
                                <td className='right-cell'>{fenylalanin.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Histidin</td>
                                <td className='right-cell'>{histidin.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Isoleucin</td>
                                <td className='right-cell'>{isoleucin.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Leucin</td>
                                <td className='right-cell'>{leucin.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Lysin</td>
                                <td className='right-cell'>{lysin.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Metionin</td>
                                <td className='right-cell'>{metionin.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Trenonin</td>
                                <td className='right-cell'>{treonin.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Tryptofan</td>
                                <td className='right-cell'>{tryptofan.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Tyrosin</td>
                                <td className='right-cell'>{tyrosin.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Valin</td>
                                <td className='right-cell'>{valin.toFixed(2).replace(/\.00$/, '')}</td>
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
                                <td className='right-cell'>{b1.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>B2</td>
                                <td className='right-cell'>{b2.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>B3</td>
                                <td className='right-cell'>{b3.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>B5</td>
                                <td className='right-cell'>{b5.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>B6</td>
                                <td className='right-cell'>{b6.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>B12</td>
                                <td className='right-cell'>{b12.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Folsyre</td>
                                <td className='right-cell'>{folsyre.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Vitamin A</td>
                                <td className='right-cell'>{aVitamin.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Vitamin C</td>
                                <td className='right-cell'>{cVitamin.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Vitamin D</td>
                                <td className='right-cell'>{dVitamin.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Vitamin E</td>
                                <td className='right-cell'>{eVitamin.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Vitamin K</td>
                                <td className='right-cell'>{kVitamin.toFixed(2).replace(/\.00$/, '')}</td>
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
                                <td className='right-cell'>{fosfor.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Jern</td>
                                <td className='right-cell'>{jern.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Kalium</td>
                                <td className='right-cell'>{kalium.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Kalsium</td>
                                <td className='right-cell'>{kalsium.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Kobber</td>
                                <td className='right-cell'>{kobber.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Magnesium</td>
                                <td className='right-cell'>{magnesium.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Mangan</td>
                                <td className='right-cell'>{mangan.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Natrium</td>
                                <td className='right-cell'>{natrium.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Selen</td>
                                <td className='right-cell'>{selen.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                            <tr>
                                <td>Sink</td>
                                <td className='right-cell'>{sink.toFixed(2).replace(/\.00$/, '')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}