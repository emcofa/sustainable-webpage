import React from 'react'
import './columns.css';
import Svg from '../../assets/svg.svg'

function Columns() {
    return (
        <div className='columns-parent'>
            <h2>Heading 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            <div className="columns-container">
                <div className="column">
                    <h3>Column 1</h3>
                    <img className='svg-icon' src={Svg} alt="Svg1" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus.</p>
                    <button>Button 1</button>
                </div>
                <div className="column">
                    <h3>Column 2</h3>
                    <img className='svg-icon' src={Svg} alt="Svg2" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus.</p>
                    <button>Button 2</button>
                </div>
                <div className="column">
                    <h3>Column 3</h3>
                    <img className='svg-icon' src={Svg} alt="Svg3" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus.</p>
                    <button>Button 3</button>
                </div>
            </div>
        </div>
    )
}

export default Columns
