import React from 'react';
import '../styles/Team.css';
import {NewPlayerForm} from './NewPlayerForm';

export const Team = ({team, updateTeam, deleteTeam}) => {

    const deletePlayer = (playerId) => {
        const updatedTeam = {
            ...team,
            players: team.players.filter((x) => x.id !== playerId)
        };
        updateTeam(updatedTeam)
    }

    const addNewPlayer = (player) => {
        updateTeam({...team, players: [...team.players, player]})};

    const players = () => (
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Team</th>
                    <th>Delete?</th>
                </tr>
            </thead>
            <tbody>
            {team.players.map((player, index) => (
                
                <tr key={index}>
                    <td width="25%">{player.name}</td> 
                    <td width="25%">{player.position}</td>
                    <td width="25%">{player.team}</td>
                    <td width="25%"><button className='btn btn-danger form-control' onClick={(e) => deletePlayer(player.id)}>Delete Player</button></td>
                </tr>
            ))}
            </tbody>
        </table>
    );

    return (
        <div className='card'>
            <div id='header'>
            <h2>{team.name}</h2>
            <h3>{team.owner}</h3>
            <button className='btn btn-danger form-control' onClick={(e) => deleteTeam(team)}>Delete Team</button>
            </div>
            <NewPlayerForm addNewPlayer={addNewPlayer} />
            <h4 id='title'>Roster</h4>
            {players({players, teamId: team._id, deletePlayer})}
        </div>
    );
}