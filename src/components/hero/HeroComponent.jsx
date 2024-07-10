import heroImage from "@/assets/img/bg/Asset.png";

const HeroComponent = () => {
    return (
        <>
            <div className="hero">
                <h1 className="hero__title">The Rick and Morty API</h1>
                <img className="hero__img" src={heroImage} alt="" />
            </div>
        </>
    );
};

export default HeroComponent;
