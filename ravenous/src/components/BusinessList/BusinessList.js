import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        const { businesses } = this.props; // Destructure businesses from props

        return (
            <div className="BusinessList">
                {businesses && businesses.map((business, index) => (
                    <Business key={index} business={business} />
                ))}
            </div>
        );
    }
}

export default BusinessList;
