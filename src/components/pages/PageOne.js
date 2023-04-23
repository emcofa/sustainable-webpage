import styles from "../../css/indexOne.module.css";
import Content from "../content/Content";
import Video from "../video/Video";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Information from "../information/Information";
import Columns from "../columns/Columns";
import Image from "../image/Image";


const PageOne = () => {
    return (
        <div className={styles.pageOne}>
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
        </div>
    );
};

export default PageOne;
