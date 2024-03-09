import { useState } from 'react'
import './addFoods.css'

export default function AddFoods({ handleAddFood, matvarer }) {
    const [inputText, setInputText] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
    }
    function handleClick(e) {
        console.log(e)
        const newFood = e
        
        handleAddFood(newFood)

        setInputText('')

        // setAddedList(addedList => [...addedList, newFood])
        // console.log(addedList)
    }

    return(
        <div className='addFoodContainer'>
            <form className='leggTilForm' onSubmit={handleSubmit}>
                <label htmlFor='food'>Legg til matvarer</label>
                <div className='addFood'>
                    <input 
                        onChange={(e) => setInputText(e.target.value)} 
                        type='text' 
                        placeholder='Søk etter vare...' 
                        id='food'
                        autoComplete='off'
                        value={inputText}
                    />
                </div>
            </form>
            <div className='searchResults'>
                {inputText != '' && matvarer.map(matvare => <div className='suggestion' onClick={() => handleClick(matvare.name)} key={matvare.name}>{matvare.name}</div>)}
            </div>
        </div>
    )
}