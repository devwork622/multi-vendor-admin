import React from 'react';
import DropdownAction from '~/components/elements/basic/DropdownAction';

const TableCustomerItems = () => {
    const customers = [
        {
            name: 'Jenny Simmonds',
            phone: '(+921) 211-32-1145',
            balance: '$211.00',
            orders: '10',
            status: 'true',
        },
        {
            name: 'Ammara Molloy',
            phone: '(+921) 916-971-217',
            balance: '$211.00',
            orders: '10',
            status: 'true',
        },
        {
            name: 'Anisa Forster',
            phone: '(+921) 319-176-113',
            balance: '$211.00',
            orders: '10',
            status: 'true',
        },
        {
            name: 'Hashir Wilson',
            phone: '(+921) 393-112-298',
            balance: '$211.00',
            orders: '10',
            status: 'false',
        },
        {
            name: 'Grover Sampson',
            phone: '(+921) 393-872-137',
            balance: '$211.00',
            orders: '10',
            status: 'true',
        },
        {
            name: 'Nelson Mckeown',
            phone: '(+921) 393-872-998',
            balance: '$211.00',
            orders: '10',
            status: 'false',
        },
        {
            name: 'Zunaira Akhtar',
            phone: '(+921) 393-872-145',
            balance: '$211.00',
            orders: '10',
            status: 'true',
        },
        {
            name: 'Natan Kramer',
            phone: '(+921) 293-872-145',
            balance: '$211.00',
            orders: '10',
            status: 'false',
        },
        {
            name: 'Jesse Pollard',
            phone: '(+921) 291-32-145',
            balance: '$211.00',
            orders: '10',
            status: 'true',
        },
    ];
    const tableItemsView = customers.map((item, index) => {
        let badgeView;

        if (item.status) {
            badgeView = <span className="ps-badge success">active</span>;
        } else {
            badgeView = <span className="ps-badge gray">deactive</span>;
        }

        return (
            <tr key={index}>
                <td>{index}</td>
                <td>
                    <strong>{item.name}</strong>
                </td>
                <td>{item.phone}</td>
                <td>{item.balance}</td>
                <td>{item.orders}</td>
                <td>{badgeView}</td>
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
                        <th>Phone Number</th>
                        <th>Balances</th>
                        <th>Total orders</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{tableItemsView}</tbody>
            </table>
        </div>
    );
};

export default TableCustomerItems;
