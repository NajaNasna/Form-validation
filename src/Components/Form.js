import React from 'react'
import { useFormik } from 'formik'
import { signup } from './Yup'

function Form() {

    const initialValues = {
        Name: "",
        Email: "",
        Password: "",
        Repassword: ""
    }


    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({

        initialValues: initialValues,
        validationSchema: signup,               // to connect the signup
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm()                // to refresh the form on submission.

        }
    })

    console.log(errors);
    // console.log(store);

    return (

        <div className="main">
            <h2>Login</h2>
        <div className='container'>
            
            <div className="row">

                <div className="left col-md-4" >
                    <img src="./images/desola-lanre-ologun-zYgV-NGZtlA-unsplash.jpg" alt="" />
                </div>

                <div className="right col-md-8" >
                    <form action="" onSubmit={handleSubmit}>
                        <label class="form-label">Name</label>
                        <input type="text" id="name" name='Name' value={values.Name} class="form-control" onChange={handleChange} onBlur={handleBlur} />
                        {errors.Name && touched.Name ? (<p className="error-text">{errors.Name}</p>) : null}

                        <label class="form-label">Email</label>
                        <input type="email" id="email" name='Email' value={values.Email} class="form-control" onChange={handleChange} onBlur={handleBlur} />
                        {errors.Email && touched.Email ? (<p className="error-text">{errors.Email}</p>) : null}

                        <label class="form-label">Password</label>
                        <input type="text" id="password" name='Password' value={values.Password} class="form-control" onChange={handleChange} onBlur={handleBlur} />
                        {errors.Password && touched.Password ? (<p className="error-text">{errors.Password}</p>) : null}

                        <label class="form-label">Re-Password</label>
                        <input type="text" id="repassword" name='Repassword' value={values.Repassword} class="form-control" onChange={handleChange} onBlur={handleBlur} />
                        {errors.Repassword && touched.Repassword ? (<p className="error-text">{errors.Repassword}</p>) : null}

                        <button className='btn btn-primary my-3'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Form