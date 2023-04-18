import Content from "../content/Content";
import Video from "../video/Video";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Information from "../information/Information";
import Columns from "../columns/Columns";
import Image from "../image/Image";

const PageOne = () => {
    return (
        <>
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
