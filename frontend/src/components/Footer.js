import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function HeaderAndFooterExample() {
  return (
    <Card className="text-center back mt-5 " >
      <Card.Header className='back2'><> <FontAwesomeIcon icon={faFacebook} /> <FontAwesomeIcon icon={faTwitter} /> <FontAwesomeIcon icon={faInstagram} /> <FontAwesomeIcon icon={faEnvelope} /></></Card.Header>
      <Card.Body >
        <Card.Title style={{fontFamily:'fantasy'}}>TIMING</Card.Title>
        <Card.Text>
        Mon - Thu: 9 am - 6 pm
Fri:    9 am - 3 pm
        </Card.Text>
        
        <Card.Text>
        the library is located in the basement level 3 (b3) of the ground floor (rez de chasse) building.
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted back2" style={{fontFamily:'fantasy'}}><FontAwesomeIcon icon={faCopyright} />2023 Copyright</Card.Footer>
    </Card>
  );
}

export default HeaderAndFooterExample;