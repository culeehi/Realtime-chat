import { Alert, Button, Form, Row, Col, Stack } from 'react-bootstrap';

const Login = () => {
   return (
      <div>
         <Form>
            <Row
               style={{
                  height: '100vh',
                  justifyContent: 'center',
                  paddingTop: '10%',
               }}
            >
               <Col xs={6}>
                  <Stack gap={3}>
                     <h2>Login</h2>

                     <Form.Control type="text" placeholder="Name" />

                     <Form.Control type="text" placeholder="Password" />
                     <Button variant="primary" type="submit">
                        Register
                     </Button>
                     <Alert variant="danger">
                        <p>An error occured</p>
                     </Alert>
                  </Stack>
               </Col>
            </Row>
         </Form>
      </div>
   );
};

export default Login;
