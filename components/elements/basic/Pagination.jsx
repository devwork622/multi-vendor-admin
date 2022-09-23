import React from 'react';

const Pagination = () => {
    return (
        <ul className="pagination">
            <li>
                <a href="#">
                    <i className="icon icon-chevron-left"></i>
                </a>
            </li>
            <li className="active">
                <a href="#">1</a>
            </li>
            <li>
                <a href="#">2</a>
            </li>
            <li>
                <a href="#">3</a>
            </li>
            <li>
                <a href="#">
                    <i className="icon-chevron-right"></i>
                </a>
            </li>
        </ul>
    );
};

export default Pagination;
