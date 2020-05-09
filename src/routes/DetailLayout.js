import React from 'react';
import './Detail.css';

export default function DetailLayout({ title, summary, medium_cover_image }) {
    return (
        <div className="Detail">
            <div className="container">
                <h2 className="detail_title">{title}</h2>
                <div className="detail_data">
                    <img src={medium_cover_image} alt={title} />
                    <div className="detail_summary">
                        {summary}
                    </div>
                </div>
            </div>
        </div>
    )
}
