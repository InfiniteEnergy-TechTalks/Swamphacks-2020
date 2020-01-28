import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default ({ teamId, setTeamId, onReload }) => (
    <div className='input-group team-id-bar'>
        <input type='text' className='form-control' value={teamId} onChange={(event) => setTeamId(event.target.value)} placeholder='Enter a team id if you have one...' />
        <div className='input-group-append'>
            <button className='btn btn-outline-primary' type='button' onClick={onReload}><i className="fa fa-refresh" aria-hidden="true"></i></button>
        </div>
    </div>
);