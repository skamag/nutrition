import './foodList.css'

export default function FoodList({ addedList, handleRemove }) {
    return(
        <div className='list'>
            <ul>
                {addedList.map((item) => (
                    <li key={item}>
                        <span>{item}</span>
                        <button onClick={() => handleRemove(item.name)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}