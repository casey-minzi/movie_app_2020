import React from 'react'

export default function Movie({ id, title, summary, medium_cover_image, rating}) {
    return (
        <div className="Movie">
            {id}, {title}, {summary}, {rating}
        </div>
    )
}
