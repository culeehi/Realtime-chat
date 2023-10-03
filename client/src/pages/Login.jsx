import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Alert, Button, Form, Row, Col, Stack } from 'react-bootstrap';

const Login = () => {
   const { loginUser, updateLoginInfo, loginError, isLoginLoading, loginInfo } =
      useContext(AuthContext);
   return (
      <div>
         <Form onSubmit={loginUser}>
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

                     <Form.Control
                        type="email"
                        placeholder="email"
                        onChange={(e) => {
                           updateLoginInfo({ ...loginInfo, email: e.target.value });
                        }}
                     />

                     <Form.Control
                        type="text"
                        placeholder="Password"
                        onChange={(e) => {
                           updateLoginInfo({ ...loginInfo, password: e.target.value });
                        }}
                     />

                     <Button variant="primary" type="submit">
                        Login
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
