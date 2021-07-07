import '../css/Legend.css';

const Legend = ({ getStatusColor }) => {
    return (
        <div className='Legend'>
            <div className='Legend-key-cont'>
                <div className='Legend-key' id='incomplete'
                    style={{ backgroundColor:getStatusColor('incomplete') }}>
                    <label className='lbl' htmlFor='incomplete'>Incomplete</label>
                </div>
            </div>
            <div className='Legend-key-cont'>
                <div className='Legend-key' id='late'
                    style={{ backgroundColor:getStatusColor('late') }}>
                    <label className='lbl' htmlFor='late'>Late</label>
                </div>
            </div>
            <div className='Legend-key-cont'>
                <div className='Legend-key' id='delayed'
                    style={{ backgroundColor:getStatusColor('delayed') }}>
                    <label className='lbl' htmlFor='delayed'>Delayed</label>
                </div>
            </div>
            <div className='Legend-key-cont'>
                <div className='Legend-key' id='complete'
                    style={{ backgroundColor:getStatusColor('complete') }}>
                    <label className='lbl' htmlFor='complete'>Complete</label>
                </div>
            </div>
            <div className='Legend-key-cont'>
                <div className='Legend-key' id='cancelled'
                    style={{ backgroundColor:getStatusColor('cancelled') }}>
                    <label className='lbl' htmlFor='cancelled'>Cancelled</label>
                </div>
            </div>
        </div>
    )
}

export default Legend
