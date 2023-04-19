import Content from "../webpage-2/content/Content";
import Video from "../webpage-2/video/Video";
import Footer from "../webpage-2/footer/Footer";
import Hero from "../webpage-2/hero/Hero";
import Information from "../webpage-2/information/Information";
import Columns from "../webpage-2/columns/Columns";
import Image from "../webpage-2/image/Image";

const PageTwo = () => {
    return (
        <>
            <div className="nav__above">
                <p>This is the template for webpage 2</p>
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

export default PageTwo;
