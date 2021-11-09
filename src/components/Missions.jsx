import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, joinMission } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissions);
    }
  }, []);

  const handleJoin = (id) => dispatch(joinMission(id));

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{'  '}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map(({
            id, name, description, reserved,
          }) => (
            <tr key={id}>
              <td><p className="fw-bold">{name}</p></td>
              <td><p>{description}</p></td>
              <td className="align-middle">
                <Badge bg="secondary">NOT A MEMBER</Badge>
              </td>
              <td className="col-2 align-middle text-center">
                {reserved
                  && (
                  <Button
                    size="sm"
                    variant="outline-danger"
                  >
                    Leave Mission
                  </Button>
                  )}
                {!reserved
                  && (
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
    </Container>
  );
};

export default Missions;
