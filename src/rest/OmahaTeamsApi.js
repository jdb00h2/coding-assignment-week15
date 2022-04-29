const OMAHATEAMS_ENDPOINT = 'https://crudcrud.com/api/d62fb174a2164aed9989003ebfc3f162/omaha-teams';

class OmahaTeamsApi {
    post = async(team) => {
        try{
            const response = await fetch(OMAHATEAMS_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(team)
            })
            return await response.json()
        } catch(e) {
            console.log('Error creating team.',e);
        }
    }

    get = async() => {
        try{
            const response = await fetch(OMAHATEAMS_ENDPOINT);
            return await response.json();
        } catch(e) {
            console.log('Error getting teams.',e);
        }
    }

    put = async(team) => {
        try{
            const {_id, ...noIdTeam} = team;
            const response = await fetch(`${OMAHATEAMS_ENDPOINT}/${team._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(noIdTeam)
            });
            return response;
        } catch(e) {
            console.log('Error updating teams.', e);
        }
    }

    delete = async(team) => {
        try{
            const response = await fetch(`${OMAHATEAMS_ENDPOINT}/${team._id}`, {
                method: 'DELETE'
            });
            return response
        } catch(e) {
            console.log('Error deleting team.',e);
        }
    }        
}

export const omahaTeamsApi = new OmahaTeamsApi();