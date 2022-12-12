import {FaSignInAlt} from "react-icons/fa";
import {useState} from "react";

function LoginScreen(props) {
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    })
    const {email,password} = formData
    const onChange = (e) => {
        setFormData((prevState) =>({
            ...prevState,
            [e.target.name] : e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt/> Login
                </h1>
                <p>Login and start setting goals</p>
                <section className="form">
                    <form onSubmit={onSubmit}>

                        <div className="form-group">
                            <input
                                type='email'
                                className='form-control'
                                id='email'
                                name='email'
                                value={email}
                                placeholder='Please enter your email'
                                onChange={onChange}
                                required/>
                        </div>
                        <div className="form-group">
                            <input
                                type='password'
                                className='form-control'
                                id='password'
                                name='password'
                                value={password}
                                placeholder='Please enter your password'
                                onChange={onChange}
                                required/>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-block">Register</button>
                        </div>
                    </form>
                </section>
            </section>
        </>
    );
}

export default LoginScreen;