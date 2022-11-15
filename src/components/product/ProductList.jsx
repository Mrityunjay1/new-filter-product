import React, { useState, useEffect } from 'react'
import Categories from '../categories/Categories'
import Search from '../search/Search'
import Product from './Product'
import './ProductList.css'
import { products as ProductData } from '../../products-data'

const ProductList = () => {
    const [products, setProducts] = useState(ProductData);
    const [search,setSearch] = useState('')
    const [filtered,setFiltered] = useState([])

    const handleSearch = (e)=>{ 
        setSearch(e.target.value)
    }

    useEffect(()=>{
        setFiltered(
        products.filter((product)=> product.title.toLowerCase().includes(search.toLowerCase())))
    },[search,products])
    return (
        <>
            <div className="header">
                <header className='container'>
                    <h1 className='--color-white --text-center'><span className='--color-danger'>Poducts</span> Filter</h1>
                    <div className='--flex-between --flex-dir-column --py'>
                        <Search inputValue={search} onHandleChange={handleSearch} />
                        <Categories />
                    </div>
                </header>
            </div>
            <div className="product-container">
                <div className="products container --grid-25 py2">
                    {filtered.map((item) => {
                        const { id, title, img, price } = item;
                        return (
                            <div>
                                <Product  title={title} img={img} price={price} />
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default ProductList