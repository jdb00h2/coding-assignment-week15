import React from 'react';
import '../styles/TeamsList.css';
import { Team } from './Team';
import { NewTeamForm} from './NewTeamForm'
import { lincolnTeamsApi } from '../rest/LincolnTeamsApi';
import { omahaTeamsApi } from '../rest/OmahaTeamsApi';

export class TeamsList extends React.Component {
    state = {
        lincolnTeams: [],
        omahaTeams: []
    };

    componentDidMount() {
        this.fetchLincolnTeams();
        this.fetchOmahaTeams();
    }

    fetchLincolnTeams = async() => {
        const lincolnTeams = await lincolnTeamsApi.get();
        this.setState({ lincolnTeams });
    };

    fetchOmahaTeams = async() => {
        const omahaTeams = await omahaTeamsApi.get();
        this.setState({ omahaTeams });
    }

    updateLincolnTeam = async (updatedLincolnTeam) => {
        await lincolnTeamsApi.put(updatedLincolnTeam);
        this.fetchLincolnTeams();
    }

    updateOmahaTeam = async (updatedOmahaTeam) => {
        await omahaTeamsApi.put(updatedOmahaTeam);
        this.fetchOmahaTeams();
    }

    postLincolnTeam = async (newTeam) => {
        await lincolnTeamsApi.post(newTeam);
        this.fetchLincolnTeams();
    }
    
    postOmahaTeam = async (newTeam) => {
        await omahaTeamsApi.post(newTeam);
        this.fetchOmahaTeams();
    }

    deleteLincolnTeam = async (team) => {
        await lincolnTeamsApi.delete(team);
        this.fetchLincolnTeams();
    }

    deleteOmahaTeam = async (teamid) => {
        await omahaTeamsApi.delete(teamid);
        this.fetchOmahaTeams();
    }

    render() {
        return (
            <div>
                
            <h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-trophy-fill" viewBox="0 0 16 16">
                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"/>
                </svg>
                Young Money League 
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-trophy-fill" viewBox="0 0 16 16">
                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"/>
                </svg>
            </h1>
            <div className='container'>
                
                <br />
                <h2 id='teamTitle'>Lincoln Division</h2>
                <NewTeamForm addNewTeam = {this.postLincolnTeam} />


                {this.state.lincolnTeams.map((lincolnTeam) => (
                    <Team
                    team = {lincolnTeam}
                    key = {lincolnTeam._id}
                    updateTeam = {this.updateLincolnTeam}
                    deleteTeam = {this.deleteLincolnTeam}
                    />
                ))}
                <br />
                <h2 id='teamTitle'>Omaha Division</h2>
                <NewTeamForm addNewTeam = {this.postOmahaTeam} />
                {this.state.omahaTeams.map((omahaTeam) => (
                    <Team
                    team = {omahaTeam}
                    key = {omahaTeam._id}
                    updateTeam = {this.updateOmahaTeam}
                    deleteTeam = {this.deleteOmahaTeam}
                    />
                ))}
            </div>
            </div>
        )
    }
}