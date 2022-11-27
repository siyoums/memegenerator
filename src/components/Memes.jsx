import { useGlobalContext } from "./Context";

const Memes = () => {
    const { allMemes } = useGlobalContext();
    const randomMeme = allMemes[Math.floor(Math.random() * allMemes.length)];

    const handleCardClick = (boxCount) => {};

    return (
        <section className="">
            <div className="border-2 border-green-500    relative">
                <img
                    src={randomMeme && randomMeme.url}
                    alt="Meme image"
                    className="border-2 border-blue-700 object-cover "
                />
            </div>
        </section>
    );
};

export default Memes;
