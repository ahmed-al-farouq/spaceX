import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const err = useSelector((state) => state.missions.error);

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissions);
    }
  }, []);

  const handleJoin = (id) => dispatch(joinMission(id));
  const handleLeave = (id) => dispatch(leaveMission(id));

  const MissionTable = () => (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {missions.map(({
          id, name, description, reserved,
        }) => (
          <tr key={id}>
            <td>
              <p className="fw-bold">{name}</p>
            </td>
            <td>
              <p>{description}</p>
            </td>
            <td className="align-middle">
              {reserved && <Badge bg="info">Active Member</Badge>}
              {!reserved && <Badge bg="secondary">NOT A MEMBER</Badge>}
            </td>
            <td className="col-2 align-middle text-center">
              {reserved && (
                <Button
                  size="sm"
                  variant="outline-danger"
                  onClick={() => handleLeave(id)}
                >
                  Leave Mission
                </Button>
              )}
              {!reserved && (
                <Button
                  size="sm"
                  variant="outline-secondary"
                  onClick={() => handleJoin(id)}
                >
                  Join Mission
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <Container style={{ overflowX: 'auto' }}>
      {
        err === ''
          ? <MissionTable />
          : err
      }
    </Container>
  );
};

export default Missions;
