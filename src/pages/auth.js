import React, { useState ,useContext } from 'react';
import AuthContext from '../context/auth-context'
import Spinner from '../components/Spinner/spinner'
import '../scss/auth.css'


function Auth(){
    const context = useContext(AuthContext)
    const [incorrect, setIncorrect] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    
    const emailElement = React.createRef()
    const passwordElement =React.createRef()
    const submitHandler =(event)=>{
        setIncorrect(false)
        setIsLoading(true)
        // we can expect event cause it is called onSubmit
        // on submit default behavior of the browser is to send request to the same url it is on 
        //prevent default
        event.preventDefault();
        const email =emailElement.current.value ;
        const password = passwordElement.current.value
        if(email.trim().length === 0 || password.trim().length ===0 ){
            console.log('no email or password')
            setIsLoading(false)
            return;
            
        } 
        // body is just like query but need to be stringfyed to json
        let requestBody ={
            query :`
                query {
                    login(email : "${email}" , password : "${password}"){
                        adminId 
                        token
                        tokenExpiration
                    }
                }
            `
        }
        
       
        //to send requeset to backend
        fetch('http://localhost:8000/graphql',{
            method : 'POST',
            body : JSON.stringify(requestBody) , 
            // for gql to work we need to tell it in which format we sending so header
            headers :{
                'Content-Type' : 'application/json'
            }

        }).then(res => {
            if(res.status !== 200 && res.status !== 201){
                throw new Error('Connection issue')
            }
           
            return res.json();
        }).then(resData =>{
            //if we are loged in
            console.log(resData)
            if(resData.data.login.token){
                context.login(resData.data.login.token , resData.data.login.adminId , resData.data.login.tokenExpiration )
            
            }
            setIsLoading(false)
        })
        .catch(err=>{ 
            setIncorrect(true)
            console.log(err)
            setIsLoading(false)

        })

    }
        return (
         
     <div className="parentdiv">

             <form className="auth-form" onSubmit={submitHandler}>
                    <div  className="auth-input">
                        <input type="email" placeholder="Email" id="email" ref={emailElement}/>
                    </div>
                    <div className="auth-input">
                        <input type="password" placeholder="Password" id="password" ref={passwordElement}/>
                    </div>

                    <div className="auth-action">
                        <button type="submit" >Submit</button>

                    </div>
             </form>
             {isLoading && <Spinner/>}
             {incorrect && <h2>Someting isn't right, bro</h2>}
    </div>
        );
    
}

export default Auth;