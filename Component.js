import {useState,createContext,useContext} from "react";
const usercontext=createContext();
function component1(){
    const[user,setuser]=useState("deepu");
    return(
        <usercontext.provider value={user}>
            <h1>{'Hello ${user}!'}</h1>
            <component2/>
            </usercontext.provider>
    );
}
function component2(){
    return(
        <>
        <h1>component2</h1>
        <component3/>
        </>
    );
}
function component3(){
    return(
        <>
        <h1>component3</h1>
        <component4/>
        </>
    );
}
function component4(){
    return(
        <>
        <h1>component4</h1>
        <component5/>
        </>
    );
}
function component5(){
    const user=useContext(userContext);
    return(
        <>
        <h1>component5</h1>
        <h2>{'Hello ${user}again !'}</h2>
        </>
    );
}
export default component1;
