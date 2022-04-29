import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const NewTeamForm = (props) => {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const players = [];

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && owner) {
            props.addNewTeam({name, owner, players});
            setName('');
            setOwner('');
        } else {
            console.log('Invalid input.');
        }
    };

    return(
        <div className='card'>
            <div className='card-header'>
            <h3>Add New Team</h3>
            <form onSubmit={onSubmit}>
                <Row>
                    <Col>
                        <input type='text' placeholder='Name' className='form-control' onChange={(e) => setName(e.target.value)} value = {name} />
                    </Col>
                    <Col>
                        <input type='text' placeholder='Owner' className='form-control' onChange={(e) => setOwner(e.target.value)} value = {owner} />
                    </Col>
                    <Col>
                    <button className='btn btn-primary form-control' type='submit'>Create Team</button>
                    </Col>
                </Row>
            </form>
            <br />
        </div></div>
    )
}