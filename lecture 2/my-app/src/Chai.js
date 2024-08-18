import App from './App';


function Chai() {
    return (
        <>
            <h2>This is chai in react.</h2>
            <h1>This is chai chai in react.</h1>
            <App />
        </>

    )
}


function Note() {
    return (
        <>
            <p> thing to be remember is that the name of function should always starting with uppercase like "Chai" instead of "chai".  </p>
            <p>Another good practice is that the file name should also start with uppercase like "Chai.js" instead of "chai.js". </p>
        </>


    )
}

export { Chai, Note }
