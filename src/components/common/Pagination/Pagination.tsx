import 'Pagination.css'
import { useState } from 'react'

export default function Pagination() {

    let [pages, setPages] = useState(1)

    return (
        <div className='select-pages'>
            <button className='previous-p page-button' onClick={() => setPages(pages === 1 ? pages : pages -= 1)} disabled={pages === 1}>Previous Page</button>
            <button className='next-p page-button' onClick={() => setPages(pages === 500 ? pages : pages += 1)} disabled={pages === 500}>Next Page</button>
        </div>
    )
}