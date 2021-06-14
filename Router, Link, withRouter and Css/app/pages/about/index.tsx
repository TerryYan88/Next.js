import Link from "next/link"
const About = ()=>{

    return (
        <div>
            about page
            <Link href="/">
                <a style={{"fontSize":"25px","color":"pink"}}>go home</a>
            </Link>
        </div>
    )
}

export default About;