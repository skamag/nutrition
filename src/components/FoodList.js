import './foodList.css'

export default function FoodList({ addedList, handleRemove, matvarer }) {
    return(
        <div className='list'>
            <ul>
                {matvarer.map((item) => (
                    <li className={addedList.includes(item.name) ? 'display-block' : 'display-none'} key={item.id}>
                        <span>{item.name}</span>
                        <button onClick={() => {
                            handleRemove(item)
                        }}>✖️</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}