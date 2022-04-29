import React, {useState} from 'react';
import '../styles/NewPlayerForm.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const NewPlayerForm = (props) => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [team, setTeam] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(name && position && team) {
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            let id = getRandomInt(1000000000);
            props.addNewPlayer({name, position, team, id});
            setName('');
            setPosition('');
            setTeam('');
        } else {
            console.log('Invalid input.');
        }
    };

    return(
        <div id='new-player'>
            <h4 id='playerTitle'>New Player</h4>
            <Form>
                <Row>
                    <Col>    
                        <input type='text' className='form-control' placeholder='Name' onChange={(e) => setName(e.target.value)} value={name}/>
                    </Col>
                    <Col>
                        <Form.Select className='form-control' onChange={(e) => setPosition(e.target.value)} value={position}>
                            <option>Choose Position</option>
                            <option value="QB">QB</option>
                            <option value="RB">RB</option>
                            <option value="WR">WR</option>
                            <option value="TE">TE</option>
                            <option value="D/ST">D/ST</option>
                            <option value="K">K</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select onChange={(e) => setTeam(e.target.value)} value={team}>
                            <option>Choose Team</option>
                            <option value="Ari">Arizona Cardinals</option>
                            <option value="Atl">Atlanta Falcons</option>
                            <option value="Bal">Baltimore Ravens</option>
                            <option value="Buf">Buffalo Bills</option>
                            <option value="Car">Carolina Panthers</option>
                            <option value="Chi">Chicago Bears</option>
                            <option value="Cin">Cincinnati Bengals</option>
                            <option value="Cle">Cleveland Browns</option>
                            <option value="Dal">Dallas Cowboys</option>
                            <option value="Den">Denver Broncos</option>
                            <option value="Det">Detroit Lions</option>
                            <option value="GB">Green Bay Packers</option>
                            <option value="Hou">Houston Texans</option>
                            <option value="Ind">Indianapolis Colts</option>
                            <option value="Jax">Jacksonville Jaguars</option>
                            <option value="KC">Kansas City Chiefs</option>
                            <option value="LV">Las Vegas Raiders</option>
                            <option value="LAC">Los Angeles Chargers</option>
                            <option value="LAR">Los Angeles Rams</option>
                            <option value="Mia">Miami Dolphins</option>
                            <option value="Min">Minnesota Vikings</option>
                            <option value="NE">New England Patriots</option>
                            <option value="NO">New Orleans Saints</option>
                            <option value="NYG">New York Giants</option>
                            <option value="NYJ">New York Jets</option>
                            <option value="Phi">Philadelphia Eagles</option>
                            <option value="Pit">Pittsburg Steelers</option>
                            <option value="SF">San Francisco 49ers</option>
                            <option value="Sea">Seattle Seahawks</option>
                            <option value="TB">Tampa Bay Buccaneers</option>
                            <option value="Ten">Tennessee Titans</option>
                            <option value="Wsh">Washington Commanders</option>
                            <option value="FA">Free Agent</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <button className='btn btn-primary form-control' type='submit' onClick={onSubmit}>Add Player</button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}