import * as Yup from 'yup'

export const signup = Yup.object({
    Name: Yup.string().min(4).max(20).required("Please enter your name"),
    Email: Yup.string().email().required("Please enter your email"),
    Password: Yup.string().min(8).max(15).required("Please enter your password"),
    Repassword: Yup.string().required().oneOf([Yup.ref('Password'),null],"Password must match")
})