import Image from "next/image";

const service =()=>{
    return (
        <>
        <h1>hello service</h1>
        <div className="h-screen w-full bg-red-500" >
            <p>hello</p>
            <Image src="/rahulimage.png" alt="thapa" width={100} height={100} />
        </div>
        </>
    )
}
export default service;