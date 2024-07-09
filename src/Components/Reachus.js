// ReachUs.js
import React from 'react';
import './Reachus.css';

const ReachUs = () => {
    return (
        <div className="center table-container">
            <table className="reach-table">
                {/* <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Link</th>
                    </tr>
                </thead> */}
                <tbody>
                    <tr>
                        <td><img src="./images/whatsapp.png" alt="Image 1" /></td>
                        <td>Whatsapp</td>
                        <td><a href="https://example.com/1">Click Here</a></td>
                    </tr>
                    <tr>
                        <td><img src="./images/maps.png" alt="Image 2" /></td>
                        <td>Map</td>
                        <td><a href="https://example.com/2">Click Here</a></td>
                    </tr>
                    <tr>
                        <td><img src="./images/call.png" alt="Image 3" /></td>
                        <td>Phone</td>
                        <td><a href="https://example.com/3">Click Here</a></td>
                    </tr>
                    <tr>
                        <td><img src="./images/site.png" alt="Image 4" /></td>
                        <td>Website</td>
                        <td><a href="https://example.com/4">Click Here</a></td>
                    </tr>
                    <tr>
                        <td><img src="./images/others.png" alt="Image 5" /></td>
                        <td>Others</td>
                        <td><a href="https://example.com/5">Click Here</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ReachUs;
