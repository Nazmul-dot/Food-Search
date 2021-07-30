import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Recipe from './Recipe'
const initial = []
const Test = () => {
    const [data, setdata] = useState('')
    const [food, setfood] = useState('')
    const [nfood, setnfood] = useState(false)
    const cheak = async (e) => {
        e.preventDefault();
        const APP_ID = '15b2f974'
        const APP_KEY = 'd2b04a9014975e5dd5d71f3b223d7612'
        const result = await axios.get(`https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        console.log(result.data)
        if (result.data.hits.length != 0) {
            setdata(result.data.hits)
            setnfood(false)
        } else {
            setnfood(true)
        }

        setfood('')
    }
    return (
        <>
            <h1 className='text-center mt-5 text-capitalize text-shadow fw-bolder ms-3 h-100
            animate__animated animate__bounce' style={{ color: '#20c997' }}>search your favourit food 😋</h1>
            <div className='container mt-5'>
                <div className='row' >
                    <div className='col-md-6  mx-auto'>
                        <form className='row g-3'>
                            <div className='col-8  mx-auto form-floating'>
                                <input type="text" class="form-control" id="floatingInput"
                                    placeholder="food" onChange={(e) => setfood(e.target.value)}
                                    value={food}
                                />
                                <label for="floatingInput" className='ms-3'>Food Name</label>
                            </div>
                            <div className='col-5  mx-auto'>
                                <input type="submit" value='Search' class="form-control btn btn-info" aria-label="First name"
                                    onClick={cheak}
                                />
                            </div>
                        </form>
                    </div>
                    <div className='w-100'></div>
                    <div className='col-md-10  mx-auto my-5'>
                        <div className='row'>
                            {
                                nfood && (
                                    <h1 className='d-inline py-3 my-3 text-center shadow-lg rounded-3 ' >Your Searching Food not here</h1>
                                )
                            }
                            {
                                data ? (
                                    data.map((item, id) => {
                                        return (<Recipe
                                            item={item}
                                            key={id}
                                        />)
                                    })
                                ) : (
                                    <>
                                        {
                                            !nfood && (
                                                <h1 className='d-inline py-3 text-center shadow-lg rounded-3' >Search Your Favourit Food</h1>
                                            )
                                        }

                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Test
