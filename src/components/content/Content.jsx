import React from 'react'
import Sun from '../../assets/sun.jpg'
import './content.css'

function Content() {
    return (
        <div className='content__container'>
            <div className='flex__container'>
                <div>
                    <h3>Lorem ipsum</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ipsum dui. Nunc maximus est sit amet dui efficitur, id dapibus augue suscipit. Pellentesque volutpat arcu eu justo consectetur hendrerit. Fusce et ex sem. Sed nec ligula quis augue pellentesque vulputate. Duis ac nisi at sem aliquam bibendum eu non lacus. Ut eget consectetur nunc. Donec eu nulla vel mauris vestibulum bibendum. Nam sit amet leo non arcu facilisis malesuada non a quam. Duis id dapibus enim, a hendrerit ex. Sed ornare enim vel dolor iaculis, eu vestibulum est luctus. Curabitur eget tellus imperdiet, eleifend sapien eget, laoreet felis. Nam auctor nunc sit amet quam iaculis, ac mollis odio pulvinar. In hac habitasse platea dictumst.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ipsum dui. Nunc maximus est sit amet dui efficitur, id dapibus augue suscipit.
                    </p>
                </div>
                <div>
                    <img src={Sun} alt="sunset" />
                </div>
            </div>
        </div >
    )
}

export default Content