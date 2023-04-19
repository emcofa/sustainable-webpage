import Content from "../content/Content";
import Video from "../video/Video";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Information from "../information/Information";
import Columns from "../columns/Columns";
import Image from "../image/Image";

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
