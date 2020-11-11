import React from 'react';


function Login () {
      return(
        <div align ="center" className="log">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" defaultValue={email} onChange={EmailInput} className="form-control" id="exampleInputEmail1" placeholder="Email" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" defaultValue={password} onChange={PasswordInput} className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <p>Forgot password?...<a> Click here</a></p>
          <button type="submit" className="btn btn-block btn-success">Login</button>
  
          <br />
          <p>Don't have an account? Please Sign up here</p>
        </form>
  
        {/* This is the Modal for sign */}
  
        <Button variant="primary" onClick={handleShow}>
          Sign Up
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleLogin}>
              <div >
              <label for="exampleInputEmail1">Username</label>
                    <input type="email" defaultValue={username} onChange={UsernameInput} className="form-control" id="exampleInputEmail1" placeholder="Username" />
                  </div>
                  <div>
                  <label for="exampleInputEmail1">Email address</label>
                    <input type="email" defaultValue={username} onChange={UsernameInput} className="form-control" id="exampleInputEmail1" placeholder="Email" />
                  </div>
                  <div >
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" defaultValue={pass} onChange={PassInput} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div >
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input type="password" defaultValue={confirmpassword} onChange={ConfirmPasswordInput} className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                  </div>
                  <br />
              <button type="submit" className="btn btn-block btn-success">Sign Up</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
  
      </div>










      );

}
export default Login;