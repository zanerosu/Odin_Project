{/* HTML CODE:

<h1>Test title</h1>
<svg>
  <circle cx="25" cy="75" r="20" stroke="green" stroke-width="2" />
</svg>
<form>
  <input type="text">
</form> 

*/}


export function MyJSX(){
    return(
    <div>
        <h1>Test title</h1>
        <svg>
            {/* Stroke width must use Camel case */}
            <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
        </svg>
        <form>
            {/* Close the input tag */}
            <input type="text"/>
        </form> 
    </div>
    )
    // Wrap the entire thing in a div container
    
}

export function Todo(){
    return(
    <>
        <h1>Hedy Lamarr's Todos</h1>
        <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        className="photo"
        />
        <ul>
            <li>Invent new traffic lights</li>
            <li>Rehearse a movie scene</li>
            <li>Improve the spectrum technology</li>
        </ul>
    </>
    )
}


