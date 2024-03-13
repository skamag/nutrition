import { useState } from 'react'
import './addFoods.css'

export default function AddFoods({ handleAddFood, matvarer }) {
    const [inputText, setInputText] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
    }

    function handleSearch(inputText) {
        // console.log(inputText)
        setInputText(inputText)
    }

    function handleClick(e) {        
        handleAddFood(e)

        setInputText('')
    }

    return(
        <div className='addFoodContainer'>
            <form className='leggTilForm' onSubmit={handleSubmit}>
                {/* <label htmlFor='food'>Legg til matvarer</label> */}
                <div className='addFood'>
                    <input 
                        onChange={(e) => {
                            handleSearch(e.target.value)
                        }}
                        type='text' 
                        placeholder='Søk etter vare...' 
                        id='food'
                        autoComplete='off'
                        value={inputText}
                    />
                </div>
            </form>
            <div className='searchResults'>
                {
                    inputText !== '' &&
                    matvarer.filter(matvare => (matvare.name.toLowerCase().includes(inputText.toLowerCase()))).map(filteredData => (
                        <div
                            className='suggestion' 
                            onClick={() => {
                                handleClick(filteredData)
                            }}
                            key={filteredData.name}>
                                {filteredData.name}
                            </div>
                    ))
                }
            </div>
        </div>
    )
}