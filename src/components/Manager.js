import '../css/Manager.css';

const Manager = ({ onClick, isClicked }) => {
    return (
        <div className='Manager'>
            <label className='lbl-head Manager-lbl'>Sort By:</label>
            <select className='Manager-sort'>
                <option value='last'>Last Added</option>
                <option value='name'>Task Name</option>
                <option value='time'>Date & Time</option>
                <option value='status'>Status</option>
            </select>
            
            { !isClicked && <button className='Manager-add' onClick={ onClick }>Add Task</button> }
        </div>
    )
}

export default Manager
