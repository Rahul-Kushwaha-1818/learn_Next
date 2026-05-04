"use client"
const clinetcomp=()=>{
    return(
        <>
        <h1>
            Hello This is client comp
        </h1>
        <button 
        className="bg-red-500 text-white p-2 rounded-md"
        onClick={()=>alert("Button clicked")}
        >Click Me</button>
        </>
    )
}
export default clinetcomp;