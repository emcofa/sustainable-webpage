import Content from "../webpage-1/content/Content";
import Video from "../webpage-1/video/Video";
import Footer from "../webpage-1/footer/Footer";
import Hero from "../webpage-1/hero/Hero";
import Information from "../webpage-1/information/Information";
import Columns from "../webpage-1/columns/Columns";
import Image from "../webpage-1/image/Image";

const PageOne = () => {
    return (
        <>
            <div className="nav__above">
                <p>This is the template for webpage 1</p>
            </div>
            <Video />
            <Content />
            <Hero />
            <Information />
            <Columns />
            <Image />
            <Footer />
        </>
    );
};

export default PageOne;
