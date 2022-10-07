import react from 'react';
import { card } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

const Tweet = ({ text, author, date }) => {
    return <div>
    <Card style={{ width: '50rem', margin: 'auto', marginBottom:'30px' }}>
      <Card.Body>
        <Card.Title>{author}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>
          {text}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
}

export default Tweet;