import { useGlobalContext } from "./Context";

const Memes = () => {
    const context = useGlobalContext();
    const handleContext = () => {
        console.log(context);
    };
    return (
        <section>
            <button onClick={handleContext}>click</button>
        </section>
    );
};

export default Memes;
