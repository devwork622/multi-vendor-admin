import React from 'react';
import DropdownAction from '~/components/elements/basic/DropdownAction';

const TableProjectItems = () => {
    const productItems = [
        {
            name: 'Herschel Leather Duffle Bag In Brown Color',
            sku: 'AB123456789-1',
            stock: 'true',
            price: '£125.30',
            date: '2019/11/06',
            categories: [
                {
                    name: 'Bags',
                },
                {
                    name: 'Clothing & Apparel',
                },
            ],
        },
        {
            name: 'Apple iPhone Retina 6s Plus 64GB',
            sku: 'CD987654316-1',
            stock: 'true',
            price: '£1,249.99',
            date: '2018/12/11',
            categories: [
                {
                    name: 'Computers & Technologies',
                },
                {
                    name: 'Technologies',
                },
            ],
        },
        {
            name: 'Marshall Kilburn Portable Wireless Speaker',
            sku: 'SF1133569600-1',
            stock: 'true',
            price: '£36.78',
            date: '2018/12/11',
            categories: [
                {
                    name: 'Babies & Moms',
                },
                {
                    name: 'Refrigerators',
                },
            ],
        },
        {
            name: 'Xbox One Wireless Controller Black Color',
            sku: 'AB123456788',
            stock: 'false',
            price: '£55.30',
            date: '2018/12/11',
            categories: [
                {
                    name: 'Accessories',
                },
                {
                    name: 'Air Conditioners',
                },
            ],
        },
        {
            name: 'Grand Slam Indoor Of Show Jumping Novel',
            sku: 'AB1234567899',
            stock: 'false',
            price: '£32.39',
            date: '2018/12/11',
            categories: [
                {
                    name: 'Books & Office',
                },
                {
                    name: 'Cars & Motocycles',
                },
            ],
        },
        {
            name: 'Rayban Rounded Sunglass Brown Color',
            sku: 'AB123456783',
            stock: 'true',
            price: '£321.39',
            date: '2018/12/11',
            categories: [
                {
                    name: 'Clothing & Apparel',
                },
                {
                    name: 'Cars & Motocycles',
                },
            ],
        },
    ];
    const tableItems = productItems.map((item, index) => {
        let badgeView;
        if (item.stock) {
            badgeView = <span className="ps-badge success">Stock</span>;
        } else {
            badgeView = <span className="ps-badge gray">Out of stock</span>;
        }
        return (
            <tr key={item.sku}>
                <td>{index + 1}</td>
                <td>
                    <a href="#">
                        <strong>{item.name}</strong>
                    </a>
                </td>
                <td>{item.sku}</td>
                <td>{badgeView}</td>
                <td>
                    <strong>{item.price}</strong>
                </td>
                <td>
                    <p className="ps-item-categories">
                        {item.categories.map((cat) => (
                            <a href="#" key={cat.name}>
                                {cat.name}
                            </a>
                        ))}
                    </p>
                </td>
                <td>{item.date}</td>
                <td>
                    <DropdownAction />
                </td>
            </tr>
        );
    });
    return (
        <div className="table-responsive">
            <table className="table ps-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>SKU</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Categories</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{tableItems}</tbody>
            </table>
        </div>
    );
};

export default TableProjectItems;
