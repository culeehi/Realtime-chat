import { Alert, Button, Form, Row, Col, Stack } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';


const Register = () => {
   const { registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading } =
      useContext(AuthContext);
   return (
      <div>
         <Form onSubmit={registerUser}>
            <Row
               style={{
                  height: '100vh',
                  justifyContent: 'center',
                  paddingTop: '10%',
               }}
            >
               <Col xs={6}>
                  <Stack gap={3}>
                     <h2>Register</h2>

                     <Form.Control
                        type="text"
                        placeholder="Name"
                        onChange={(e) => {
                           updateRegisterInfo({ ...registerInfo, name: e.target.value });
                        }}
                     />
                     <Form.Control
                        type="text"
                        placeholder="Email"
                        onChange={(e) => {
                           updateRegisterInfo({ ...registerInfo, email: e.target.value });
                        }}
                     />

                     <Form.Control
                        type="text"
                        placeholder="Password"
                        onChange={(e) => {
                           updateRegisterInfo({
                              ...registerInfo,
                              password: e.target.value,
                           });
                        }}
                     />

                     <Button variant="primary" type="submit">
                        {isRegisterLoading ? 'Creating your account' : 'Register'}
                     </Button>
                     {registerError?.error && (
                        <Alert variant="danger">
                           <p>{registerError?.message}</p>
                        </Alert>
                     )}
                  </Stack>
               </Col>
            </Row>
         </Form>
      </div>
   );
};

export default Register;
