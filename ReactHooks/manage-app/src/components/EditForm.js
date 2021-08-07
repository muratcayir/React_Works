import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useContext } from 'react';

const EditForm = () => {

    const { updateEmployee} = useContext(EmployeeContext);

    return (
        <Form>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                   
                    required 
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                  
                    required 
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address *"
                    name="address"
                   
                    rows={3} 
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                  
                />
            </Form.Group>

            <Button variant="success" type="submit" block>
                Edit Employee
            </Button>
        </Form>
    )
}

export default EditForm;