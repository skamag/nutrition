import './addFoods.css'

export default function AddFoods() {
    return(
        <form>
            <label for='food'>Add food</label>
            <div className='addFood'>
                <input type='text' placeholder='Search...' id='food'></input>
                <button>Add</button>
            </div>
        </form>
    )
}