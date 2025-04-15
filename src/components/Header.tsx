import trollFace from "../images/troll-face.png"

const Header = () => {
    return (
        <>
            <header className={"header"}>
                <img src={trollFace} alt="trollface"/>
                <h1>Meme generator</h1>
            </header>
        </>
    )
}
export default Header
