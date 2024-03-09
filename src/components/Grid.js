import './grid.css'

export default function Grid() {
    return(
        <div className='gridContainer'>
            <div className="grid">
                <table className="foods-table">
                    <tbody>
                        <tr>
                            <td>Fiber</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Stivelse</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Sukker</td>
                            <td className='right-cell'>test</td>
                        </tr>
                    </tbody>
                </table>
                <table className="foods-table">
                    <tbody>
                        <tr>
                            <td>Fett</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td className='subList' style={{paddingLeft: '10px'}}>Enumettet</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr className='subList'>
                            <td style={{paddingLeft: '10px'}}>Flerumettet</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr className='subSubList'>
                            <td style={{paddingLeft: '20px'}}>Omega-3</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr className='subSubList'>
                            <td style={{paddingLeft: '20px'}}>Omega-6</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr className='subList'>
                            <td style={{paddingLeft: '10px'}}>Mettet</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr className='subList'>
                            <td style={{paddingLeft: '10px'}}>Transfett</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Kolesterol</td>
                            <td className='right-cell'>test</td>
                        </tr>
                    </tbody>
                </table>
                <table className="foods-table">
                    <tbody>
                        <tr>
                            <td>Cystin</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Histidin</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Isoleucin</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Leucin</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Lysin</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Metionin</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Fenylalanin</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Trenonin</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Tryptofan</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Tyrosin</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Valin</td>
                            <td className='right-cell'>test</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='grid'>
                <table className="foods-table">
                    <tbody>
                        <tr>
                            <td>B1</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>B2</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>B3</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>B5</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>B6</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>B12</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Folsyre</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>A-vitamin</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>C-vitamin</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>D-vitamin</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>E-vitamin</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>K-vitamin</td>
                            <td className='right-cell'>test</td>
                        </tr>
                    </tbody>
                </table>
                <table className="foods-table">
                    <tbody>
                        <tr>
                            <td>Kalsium</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Kobber</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Jern</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Magnesium</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Mangan</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Fosfor</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Kalium</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Selen</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Natrium</td>
                            <td className='right-cell'>test</td>
                        </tr>
                        <tr>
                            <td>Sink</td>
                            <td className='right-cell'>test</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}