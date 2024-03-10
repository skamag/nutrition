import matvarer from './matvarer.json'
import { useState } from 'react'
import Header from './components/Header'
import AddFoods from './components/AddFoods';
import Grid from './components/Grid'
import FoodList from './components/FoodList';
import './App.css';

function App() {
  // const url = 'https://www.matvaretabellen.no/api/nb/foods.json'

  const [addedList, setAddedList] = useState([])

  const [fiber, setFiber] = useState(0)
  const [stivelse, setStivelse] = useState(0)
  const [sukker, setSukker] = useState(0)
  
  const [enumettet, setEnumettet] = useState(0)
  const [omega3, setOmega3] = useState(0)
  const [omega6, setOmega6] = useState(0)
  const [mettet, setMettet] = useState(0)
  const [transfett, setTransfett] = useState(0)
  const [kolesterol, setKolesterol] = useState(0)
  
  const [cystin, setCystin] = useState(0)
  const [histidin, setHistidin] = useState(0)
  const [isoleucin, setIsoleucin] = useState(0)
  const [leucin, setLeucin] = useState(0)
  const [lysin, setLysin] = useState(0)
  const [metionin, setMetionin] = useState(0)
  const [fenylalanin, setFenylalanin] = useState(0)
  const [treonin, setTreonin] = useState(0)
  const [tryptofan, setTryptofan] = useState(0)
  const [tyrosin, setTyrosin] = useState(0)
  const [valin, setValin] = useState(0)
  
  const [b1, setB1] = useState(0)
  const [b2, setB2] = useState(0)
  const [b3, setB3] = useState(0)
  const [b5, setB5] = useState(0)
  const [b6, setB6] = useState(0)
  const [b12, setB12] = useState(0)
  const [folsyre, setFolsyre] = useState(0)
  const [aVitamin, setAVitamin] = useState(0)
  const [cVitamin, setCVitamin] = useState(0)
  const [dVitamin, setDVitamin] = useState(0)
  const [eVitamin, setEVitamin] = useState(0)
  const [kVitamin, setKVitamin] = useState(0)
  
  const [kalsium, setKalsium] = useState(0)
  const [kobber, setKobber] = useState(0)
  const [jern, setJern] = useState(0)
  const [magnesium, setMagnesium] = useState(0)
  const [mangan, setMangan] = useState(0)
  const [fosfor, setFosfor] = useState(0)
  const [kalium, setKalium] = useState(0)
  const [selen, setSelen] = useState(0)
  const [natrium, setNatrium] = useState(0)
  const [sink, setSink] = useState(0)

  function handleAddFood(newFood) {
    if(!addedList.includes(newFood.name)){
      setAddedList((addedList) => [...addedList, newFood.name])

      setFiber((fiber) => fiber + newFood.carbohydrates[0].fiber)
      setStivelse((stivelse) => stivelse + newFood.carbohydrates[0].starch)
      setSukker((sukker) => sukker + newFood.carbohydrates[0].sugars)

      setEnumettet((enumettet) => enumettet + newFood.lipids[0].fat[0].monounsaturated)
      setOmega3((omega3) => omega3 + newFood.lipids[0].fat[0].polyunsaturated[0].omega3)
      setOmega6((omega6) => omega6 + newFood.lipids[0].fat[0].polyunsaturated[0].omega6)
      setMettet((mettet) => mettet + newFood.lipids[0].fat[0].saturated)
      setTransfett((transfett) => transfett + newFood.lipids[0].fat[0].transFats)
      setKolesterol((kolesterol) => kolesterol + newFood.lipids[0].cholesterol)
      
      setCystin((cystin) => cystin + newFood.protein[0].cystine)
      setHistidin((histidin) => histidin + newFood.protein[0].histidine)
      setIsoleucin((isoleucin) => isoleucin + newFood.protein[0].isoleucine)
      setLeucin((leucin) => leucin + newFood.protein[0].leucine)
      setLysin((lysin) => lysin + newFood.protein[0].lysine)
      setMetionin((metionin) => metionin + newFood.protein[0].methionine)
      setFenylalanin((fenylalanin) => fenylalanin + newFood.protein[0].phenylalanine)
      setTreonin((treonin) => treonin + newFood.protein[0].threonine)
      setTryptofan((tryptofan) => tryptofan + newFood.protein[0].tryptophan)
      setTyrosin((tyrosin) => tyrosin + newFood.protein[0].tyrosine)
      setValin((valin) => valin + newFood.protein[0].valine)

      setB1((b1) => b1 + newFood.vitamins[0].b1)
      setB2((b2) => b2 + newFood.vitamins[0].b2)
      setB3((b3) => b3 + newFood.vitamins[0].b3)
      setB5((b5) => b5 + newFood.vitamins[0].b5)
      setB6((b6) => b6 + newFood.vitamins[0].b6)
      setB12((b12) => b12 + newFood.vitamins[0].b12)
      setFolsyre((folsyre) => folsyre + newFood.vitamins[0].folate)
      setAVitamin((aVitamin) => aVitamin + newFood.vitamins[0].vitamin_a)
      setCVitamin((cVitamin) => cVitamin + newFood.vitamins[0].vitamin_c)
      setDVitamin((dVitamin) => dVitamin + newFood.vitamins[0].vitamin_d)
      setEVitamin((eVitamin) => eVitamin + newFood.vitamins[0].vitamin_e)
      setKVitamin((kVitamin) => kVitamin + newFood.vitamins[0].vitamin_k)

      setKalsium((kalsium) => kalsium + newFood.minerals[0].calcium)
      setKobber((kobber) => kobber + newFood.minerals[0].copper)
      setJern((jern) => jern + newFood.minerals[0].iron)
      setMagnesium((magnesium) => magnesium + newFood.minerals[0].magnesium)
      setMangan((mangan) => mangan + newFood.minerals[0].manganese)
      setFosfor((fosfor) => fosfor + newFood.minerals[0].phosphorus)
      setKalium((kalium) => kalium + newFood.minerals[0].potassium)
      setSelen((selen) => selen + newFood.minerals[0].selenium)
      setNatrium((natrium) => natrium + newFood.minerals[0].sodium)
      setSink((sink) => sink + newFood.minerals[0].zinc)
    }
  }

  function handleRemove(newFood) {
    setAddedList((addedList) => addedList.filter((item) => item !== newFood.name))

    setFiber((fiber) => fiber - newFood.carbohydrates[0].fiber)
    setStivelse((stivelse) => stivelse - newFood.carbohydrates[0].starch)
    setSukker((sukker) => sukker - newFood.carbohydrates[0].sugars)

    setEnumettet((enumettet) => enumettet - newFood.lipids[0].fat[0].monounsaturated)
    setOmega3((omega3) => omega3 - newFood.lipids[0].fat[0].polyunsaturated[0].omega3)
    setOmega6((omega6) => omega6 - newFood.lipids[0].fat[0].polyunsaturated[0].omega6)
    setMettet((mettet) => mettet - newFood.lipids[0].fat[0].saturated)
    setTransfett((transfett) => transfett - newFood.lipids[0].fat[0].transFats)
    setKolesterol((kolesterol) => kolesterol - newFood.lipids[0].cholesterol)
    
    setCystin((cystin) => cystin - newFood.protein[0].cystine)
    setHistidin((histidin) => histidin - newFood.protein[0].histidine)
    setIsoleucin((isoleucin) => isoleucin - newFood.protein[0].isoleucine)
    setLeucin((leucin) => leucin - newFood.protein[0].leucine)
    setLysin((lysin) => lysin - newFood.protein[0].lysine)
    setMetionin((metionin) => metionin - newFood.protein[0].methionine)
    setFenylalanin((fenylalanin) => fenylalanin - newFood.protein[0].phenylalanine)
    setTreonin((treonin) => treonin - newFood.protein[0].threonine)
    setTryptofan((tryptofan) => tryptofan - newFood.protein[0].tryptophan)
    setTyrosin((tyrosin) => tyrosin - newFood.protein[0].tyrosine)
    setValin((valin) => valin - newFood.protein[0].valine)

    setB1((b1) => b1 - newFood.vitamins[0].b1)
    setB2((b2) => b2 - newFood.vitamins[0].b2)
    setB3((b3) => b3 - newFood.vitamins[0].b3)
    setB5((b5) => b5 - newFood.vitamins[0].b5)
    setB6((b6) => b6 - newFood.vitamins[0].b6)
    setB12((b12) => b12 - newFood.vitamins[0].b12)
    setFolsyre((folsyre) => folsyre - newFood.vitamins[0].folate)
    setAVitamin((aVitamin) => aVitamin - newFood.vitamins[0].vitamin_a)
    setCVitamin((cVitamin) => cVitamin - newFood.vitamins[0].vitamin_c)
    setDVitamin((dVitamin) => dVitamin - newFood.vitamins[0].vitamin_d)
    setEVitamin((eVitamin) => eVitamin - newFood.vitamins[0].vitamin_e)
    setKVitamin((kVitamin) => kVitamin - newFood.vitamins[0].vitamin_k)

    setKalsium((kalsium) => kalsium - newFood.minerals[0].calcium)
    setKobber((kobber) => kobber - newFood.minerals[0].copper)
    setJern((jern) => jern - newFood.minerals[0].iron)
    setMagnesium((magnesium) => magnesium - newFood.minerals[0].magnesium)
    setMangan((mangan) => mangan - newFood.minerals[0].manganese)
    setFosfor((fosfor) => fosfor - newFood.minerals[0].phosphorus)
    setKalium((kalium) => kalium - newFood.minerals[0].potassium)
    setSelen((selen) => selen - newFood.minerals[0].selenium)
    setNatrium((natrium) => natrium - newFood.minerals[0].sodium)
    setSink((sink) => sink - newFood.minerals[0].zinc)
  }

  // useEffect(() => {
  //   fetch(matvarer)
  //     .then((matvarer) => {
  //       console.log(matvarer.name)
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <div>
          <AddFoods handleAddFood={handleAddFood} matvarer={matvarer} />
          <FoodList addedList={addedList} handleRemove={handleRemove} matvarer={matvarer} />
        </div>
        <Grid 
          fiber={fiber} 
          stivelse={stivelse}
          sukker={sukker}
          enumettet={enumettet}
          omega3={omega3}
          omega6={omega6}
          mettet={mettet}
          transfett={transfett}
          kolesterol={kolesterol}
          cystin={cystin}
          histidin={histidin}
          isoleucin={isoleucin}
          leucin={leucin}
          lysin={lysin}
          metionin={metionin}
          fenylalanin={fenylalanin}
          treonin={treonin}
          tryptofan={tryptofan}
          tyrosin={tyrosin}
          valin={valin}
          b1={b1}
          b2={b2}
          b3={b3}
          b5={b5}
          b6={b6}
          b12={b12}
          folsyre={folsyre}
          aVitamin={aVitamin}
          cVitamin={cVitamin}
          dVitamin={dVitamin}
          eVitamin={eVitamin}
          kVitamin={kVitamin}
          kalsium={kalsium}
          kobber={kobber}
          jern={jern}
          magnesium={magnesium}
          mangan={mangan}
          fosfor={fosfor}
          kalium={kalium}
          selen={selen}
          natrium={natrium}
          sink={sink}
        />
      </main>
    </div>
  );
}

export default App;