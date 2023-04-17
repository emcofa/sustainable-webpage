import React from 'react'
import './columns.css';

function Columns() {
    return (
        <div className='columns-parent'>
            <h2>Heading 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            <div className="columns-container">
                <div className="column">
                    <h3>Column 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus.</p>
                    <button>Button 1</button>
                </div>
                <div className="column">
                    <h3>Column 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus.</p>
                    <button>Button 2</button>
                </div>
                <div className="column">
                    <h3>Column 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus.</p>
                    <button>Button 3</button>
                </div>
            </div>
        </div>
    )
}

export default Columns
