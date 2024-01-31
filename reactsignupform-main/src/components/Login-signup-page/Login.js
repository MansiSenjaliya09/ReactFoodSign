import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SIgn_img from './SIgn_img';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return email.trim() !== '' && emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.trim() !== '' && password.length >= 6;
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem('userto');

    const { email, password } = inpval;

    if (email === '') {
      toast.error('Email field is required', {
        position: 'top-center',
      });
    } else if (!validateEmail(email)) {
      toast.error('Please enter a valid email address', {
        position: 'top-center',
      });
    } else if (password === '') {
      toast.error('Password field is required', {
        position: 'top-center',
      });
    } else if (password.length < 6) {
      toast.error('Password length should be greater than or equal to 6', {
        position: 'top-center',
      });
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          toast.error('Invalid login details', {
            position: 'top-center',
          });
        } else {
          console.log('User login successful');
          localStorage.setItem('user_login', JSON.stringify(userlogin));
          history('/aboutdetail');
        }
      }
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: '100%' }}>
            <h3 className="text-center col-lg-6">Sign in</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" name="email" onChange={getdata} placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
                <Form.Check
                  type="checkbox"
                  label="Show Password"
                  onChange={() => setShowPassword(!showPassword)}
                  className="mt-2"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{ background: 'rgb(67, 185, 127)' }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            {/* <p className="mt-3">
              Don't Have an Account? <span>SignUp</span>{' '}
            </p> */}
             <p className="mt-3">
             Don't Have an Account? <span><NavLink to="/login">Sign up</NavLink></span>{' '}
            </p>
          </div>
          <SIgn_img />
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;




// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";

// const Createuseform = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const history = useNavigate();

//   const validateName = (name) => {
//     const nameRegex = /^[a-zA-Z\s]+$/;
//     return name.trim() !== "" && nameRegex.test(name);
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     return email.trim() !== "" && emailRegex.test(email);
//   };
  

//   const validatePassword = (password) => {
//     return password.trim() !== "" && password.length >= 6;
//   };


//   const validationsitem = ()=>{
//    const newErrors = {};

//     if (!validateName(name)) {
//       newErrors.name = "Name is required and should contain only letters.";
//     }
//     if (!validateEmail(email)) {
//       newErrors.email = "Invalid email address.";
//     }
//     if (!validatePassword(password)) {
//       newErrors.password = "Password is required and should be at least 6 characters.";
//     }
//     return newErrors;

//   }

//   const handleSubmit = (e,name,email,password) => {
//     e.preventDefault();
//     const err = validationsitem()
//   console.log(err)
//     // if (!validationsitem()) {
//     //   return;
//     // }

//     // const newErrors = {};
//     // if (!validateName(name)) {
//     //   newErrors.name = "Name is required and should contain only letters.";
//     // }
//     // if (!validateEmail(email)) {
//     //   newErrors.email = "Invalid email address.";
//     // }
//     // if (!validatePassword(password)) {
//     //   newErrors.password = "Password is required and should be at least 6 characters.";
//     // }
//     if (Object.keys(err).length > 0) {
//       setErrors(err);
//       return;
//     }

//     axios
//       .post("https://65b68428da3a3c16ab00d20e.mockapi.io/curdApp/curd-datato", {
//         name: name,
//         email: email,
//         password: password,
//       })
//       .then(() => {
//         history("/read");
//       })
//       .catch((error) => {
//         console.error("Error creating user:", error);
//         setErrors({ general: "Error creating user. Please try again." });
//       });
//   };

//   return (
//     <>
//       <div className="d-flex justify-content-between m-2">
//         <h2>Create</h2>
//         <Link to="/read">
//           <button className="btn btn-primary">Show Data</button>
//         </Link>
//       </div>
//       <form>
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             onChange={(e) => setName(e.target.value)}
//           />
//           {errors.name && <div className="text-danger">{errors.name}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             aria-describedby="emailHelp"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {errors.email && <div className="text-danger">{errors.email}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {errors.password && <div className="text-danger">{errors.password}</div>}
//         </div>

//         {errors.general && <div className="alert alert-danger">{errors.general}</div>}

//         <button
//           type="submit"
//           className="btn btn-primary"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };

// export default Createuseform;




















