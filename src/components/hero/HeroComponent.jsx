import heroImage from "@/assets/img/logo.svg";

const HeroComponent = () => {
    return (
        <>
            <div className="hero">
                <h1 className="hero__title">The Rick and Morty API</h1>
                <img className="hero__img" src={heroImage} alt="" />
            </div>
            <div className="divider"></div>
        </>
    );
};

export default HeroComponent;
