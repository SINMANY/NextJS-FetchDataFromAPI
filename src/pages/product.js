import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

export default function products({ products }) {

    const data = products || []

    const [search, setSearch] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const columns = [
        {
            name: "Product Name",
            selector: (row) => row.title,
            sortable: true,
        },
        {
            name: "Price",
            selector: (row) => row.price,
        },
        {
            name: "Category",
            selector: (row) => row.category.name,
        },
        {
            name: "Category",
            selector: (row) => <img width={50} height={50} src={row.category.image} />
        },
        {
            name: "Action",
            cell: (row) => (
                <div>
                    <button type="button" class="btn btn-outline-primary btn-sm" >Edit</button>
                    <butto  type="button" class="btn btn-outline-danger btn-sm ms-2">Danger</butto>
                </div>
            )
        },
    ]

    useEffect(() => {
        const result = products.filter(product =>{
            return product.title.toLocaleLowerCase().match(search.toLocaleLowerCase());
        })
        setFilteredProducts(result);
    }, [search])

    return (
        <>
            <div className='container'>
                <DataTable style={{backgroundColor: "#eeee"}}
                    title="Product List"
                    columns={columns}
                    data={filteredProducts}
                    pagination
                    highlightOnHover
                    selectableRows
                    selectableRowsHighlight
                    subHeader
                    subHeaderComponent={
                        <input 
                        type='text' 
                        placeholder='Search here' 
                        className='w-25 form-control'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        />
                    }
                />
            </div>
        </>
    )
}

// use getServerSideProps to fetch data from api
export async function getServerSideProps() {
    const url = `https://api.escuelajs.co/api/v1/products`;
    const res = await fetch(url);
    if (!res) {
        console.log("Error fetching data")
    }
    const products = await res.json()
    if (!products) {
        console.log("Error");
        return {
            props: {
                products: [],
            }
        }
    }
    return {
        props: {
            products,
        }
    }
}
