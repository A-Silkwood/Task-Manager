const Manager = ({ onClick, isClicked }) => {
    return (
        <div className='Manager'>
            <label className='lbl-head'>Sort By</label>:
            <select className='Manager-sort'>
                <option value='last'>Last Added</option>
                <option value='name'>Task Name</option>
                <option value='time'>Date & Time</option>
                <option value='status'>Status</option>
            </select>
            
            { !isClicked && <button onClick={ onClick }>Add Task</button> }
        </div>
    )
}

export default Manager
