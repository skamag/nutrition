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
                                <td className='right-cell'>{fiber}</td>
                            </tr>
                            <tr>
                                <td>Stivelse</td>
                                <td className='right-cell'>{stivelse}</td>
                            </tr>
                            <tr>
                                <td>Sukker</td>
                                <td className='right-cell'>{sukker}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='tableContainer'>
                    <h5 className='tableHeader'>Lipider</h5>
                    <table className="foods-table">
                        <tbody>
                            <tr>
                                <td>Fett</td>
                                <td className='right-cell'></td>
                            </tr>
                            <tr>
                                <td className='subList' style={{paddingLeft: '20px'}}>Enumettet</td>
                                <td className='right-cell'>{enumettet}</td>
                            </tr>
                            <tr className='subList'>
                                <td style={{paddingLeft: '20px'}}>Flerumettet</td>
                                <td className='right-cell'></td>
                            </tr>
                            <tr className='subSubList'>
                                <td style={{paddingLeft: '30px'}}>Omega-3</td>
                                <td className='right-cell'>{omega3}</td>
                            </tr>
                            <tr className='subSubList'>
                                <td style={{paddingLeft: '30px'}}>Omega-6</td>
                                <td className='right-cell'>{omega6}</td>
                            </tr>
                            <tr className='subList'>
                                <td style={{paddingLeft: '20px'}}>Mettet</td>
                                <td className='right-cell'>{mettet}</td>
                            </tr>
                            <tr className='subList'>
                                <td style={{paddingLeft: '20px'}}>Transfett</td>
                                <td className='right-cell'>{transfett}</td>
                            </tr>
                            <tr>
                                <td>Kolesterol</td>
                                <td className='right-cell'>{kolesterol}</td>
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
                                <td className='right-cell'>{cystin}</td>
                            </tr>
                            <tr>
                                <td>Histidin</td>
                                <td className='right-cell'>{histidin}</td>
                            </tr>
                            <tr>
                                <td>Isoleucin</td>
                                <td className='right-cell'>{isoleucin}</td>
                            </tr>
                            <tr>
                                <td>Leucin</td>
                                <td className='right-cell'>{leucin}</td>
                            </tr>
                            <tr>
                                <td>Lysin</td>
                                <td className='right-cell'>{lysin}</td>
                            </tr>
                            <tr>
                                <td>Metionin</td>
                                <td className='right-cell'>{metionin}</td>
                            </tr>
                            <tr>
                                <td>Fenylalanin</td>
                                <td className='right-cell'>{fenylalanin}</td>
                            </tr>
                            <tr>
                                <td>Trenonin</td>
                                <td className='right-cell'>{treonin}</td>
                            </tr>
                            <tr>
                                <td>Tryptofan</td>
                                <td className='right-cell'>{tryptofan}</td>
                            </tr>
                            <tr>
                                <td>Tyrosin</td>
                                <td className='right-cell'>{tyrosin}</td>
                            </tr>
                            <tr>
                                <td>Valin</td>
                                <td className='right-cell'>{valin}</td>
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
                                <td className='right-cell'>{b1}</td>
                            </tr>
                            <tr>
                                <td>B2</td>
                                <td className='right-cell'>{b2}</td>
                            </tr>
                            <tr>
                                <td>B3</td>
                                <td className='right-cell'>{b3}</td>
                            </tr>
                            <tr>
                                <td>B5</td>
                                <td className='right-cell'>{b5}</td>
                            </tr>
                            <tr>
                                <td>B6</td>
                                <td className='right-cell'>{b6}</td>
                            </tr>
                            <tr>
                                <td>B12</td>
                                <td className='right-cell'>{b12}</td>
                            </tr>
                            <tr>
                                <td>Folsyre</td>
                                <td className='right-cell'>{folsyre}</td>
                            </tr>
                            <tr>
                                <td>A-vitamin</td>
                                <td className='right-cell'>{aVitamin}</td>
                            </tr>
                            <tr>
                                <td>C-vitamin</td>
                                <td className='right-cell'>{cVitamin}</td>
                            </tr>
                            <tr>
                                <td>D-vitamin</td>
                                <td className='right-cell'>{dVitamin}</td>
                            </tr>
                            <tr>
                                <td>E-vitamin</td>
                                <td className='right-cell'>{eVitamin}</td>
                            </tr>
                            <tr>
                                <td>K-vitamin</td>
                                <td className='right-cell'>{kVitamin}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='tableContainer'>
                    <h5 className='tableHeader'>Mineraler</h5>
                    <table className="foods-table">
                        <tbody>
                            <tr>
                                <td>Kalsium</td>
                                <td className='right-cell'>{kalsium}</td>
                            </tr>
                            <tr>
                                <td>Kobber</td>
                                <td className='right-cell'>{kobber}</td>
                            </tr>
                            <tr>
                                <td>Jern</td>
                                <td className='right-cell'>{jern}</td>
                            </tr>
                            <tr>
                                <td>Magnesium</td>
                                <td className='right-cell'>{magnesium}</td>
                            </tr>
                            <tr>
                                <td>Mangan</td>
                                <td className='right-cell'>{mangan}</td>
                            </tr>
                            <tr>
                                <td>Fosfor</td>
                                <td className='right-cell'>{fosfor}</td>
                            </tr>
                            <tr>
                                <td>Kalium</td>
                                <td className='right-cell'>{kalium}</td>
                            </tr>
                            <tr>
                                <td>Selen</td>
                                <td className='right-cell'>{selen}</td>
                            </tr>
                            <tr>
                                <td>Natrium</td>
                                <td className='right-cell'>{natrium}</td>
                            </tr>
                            <tr>
                                <td>Sink</td>
                                <td className='right-cell'>{sink}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}