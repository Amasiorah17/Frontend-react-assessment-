import { useState } from "react";

const GreetingForm = () => {
    const [name, setName] = useState("");
    const [greeting, setGreeting]= useState("");

    const handleSubmit =(e) =>{
        e.preventDefault();
        setGreeting(`Hello, ${name}!`);
    };

    return (
    <div className ="greeting-form">
     <h2>Greeting Form</h2>
     <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
      <input 
        type="text"
        value={name}
        onChange={(e)=> setName(e.target.value)} />
     </label>
     <button type="submit">Greet</button>
     <p>{greeting}</p>
    </form>
    </div>
    )

}

export default GreetingForm;