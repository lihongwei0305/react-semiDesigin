import { getUser } from '@/api/user'
import {useEffect,useRef} from "react";
const About =  () => {
    const renderRef = useRef(true)

    async function getFileList() {
        const res = await getUser()
        console.log(res)
    }

    useEffect(()=>{
        if (renderRef.current) {
            renderRef.current = false
            return
        }
        getFileList()
    },[])


    return (
        <div>
            <h1>User</h1>
        </div>
    )

}

export default About