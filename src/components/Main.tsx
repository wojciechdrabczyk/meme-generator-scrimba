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

    const handleChange = (field: keyof Meme, event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget
        setMeme((prevState: Meme) => ({
            ...prevState,
            [field]: value
        }))
    }
    return (
            <main>
                <div className={"form"}>
                    <label>Top Text
                        <input type={"text"}
                               placeholder={"One does not simply"}
                               onChange={(evt) => handleChange("topText", evt)}                        />
                    </label>
                    <label>Bottom Text
                        <input type={"text"}
                               placeholder={"Walk into mordor"}
                               onChange={(evt) => handleChange("bottomText", evt)}                        />
                    </label>
                    <button>Get a new meme image</button>
                </div>
                <div className={"meme"}>
                    <img src={meme.imageUrl} alt={"image of Boromir"}/>
                    <span className={"top"}>{meme.topText}</span>
                    <span className={"bottom"}>{meme.bottomText}</span>
                </div>
            </main>
    )
}
export default Main