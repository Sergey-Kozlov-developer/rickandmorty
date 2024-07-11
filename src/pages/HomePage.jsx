import HeroComponent from "@/components/hero/HeroComponent";
import HomeCharacterComponent from "@/components/home/HomeCharacterComponent";

const HomePage = () => {
    return (
        <>
            <HeroComponent />
            <section className="section">
                <div className="container">
                    <HomeCharacterComponent />
                </div>
            </section>
        </>
    );
};

export default HomePage;
