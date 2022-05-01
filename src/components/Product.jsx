import React, {useState, useEffect}from 'react'
import axios from 'axios'



function Product() {
    //state product include all product item
    const [products, setProducts] = useState([
     

     

    ])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)

    const URL = `https://fakestoreapi.com/products?limit=${limit}&page=${page}`

    // handle get products calling axios 
    const getProducts = async () => {
        setLoading(true)
        try {
            const res = await axios.get(URL)
            setProducts(res.data.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }
    useEffect(() => {
        getProducts()
    }, [])

    // handle pagination
    const handlePagination = (page) => {
        setPage(page)
    }


  

  return (
    <div name ='product' className="w-full h-screen bg-[#0a192f]">
        {/* category section */}
       <div className="
         w-1/4 h-full items-center flex flex-col justify-center
       ">
            <h2 className='text-white text-xl'>
                    test
            </h2>             

       </div>
        {/* info product */}
        <div className="
            w-3/4 h-full items-center flex flex-col justify-center
        ">
            {/* show product from api */}
           

        </div>
            
         </div>
  )
}

export default Product