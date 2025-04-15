import * as React from "react";

type Meme = {
    topText: string;
    bottomText: string;
    imageUrl: string;
}

const Main: React.FC = () => {

    const [meme, setMeme] = React.useState<Meme>({
        topText: "One does not simply",
        bottomText: "Walk into mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.currentTarget
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <>
            <main>
                <div className={"form"}>
                    <label>Top Text
                        <input type={"text"}
                               placeholder={"One does not simply"}
                               name={"topText"}
                               onChange={handleChange}
                        />
                    </label>
                    <label>Bottom Text
                        <input type={"text"}
                               placeholder={"Walk into mordor"}
                               name={"bottomText"}
                               onChange={handleChange}
                        />
                    </label>
                    <button>Get a new meme image</button>
                </div>
                <div className={"meme"}>
                    <img src={meme.imageUrl} alt={"image of Boromir"}/>
                    <span className={"top"}>{meme.topText}</span>
                    <span className={"bottom"}>{meme.bottomText}</span>
                </div>
            </main>
        </>
    )
}
export default Main