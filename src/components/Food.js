import React, { useState } from 'react'
import axios from 'axios'
import Recipe from './Recipe'
const Food = () => {
    const [data, setdata] = useState('')
    const [input, setinput] = useState('')
    const [food, setfood] = useState('')
    console.log(input)
    const foodSearch = async (e) => {
        e.preventDefault()
        const APP_ID = '15b2f974'
        const APP_KEY = 'd2b04a9014975e5dd5d71f3b223d7612'
        const result = await axios.get(`https://api.edamam.com/search?q=${food}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        // alert(data)
        console.log(result.data.hits)
        setdata(result.data.hits)
        setdata('')
        setinput('data')
    }
    const handlechange = (e) => {
        setfood(e.target.value)
        setinput(e.target.value)
    }
    return (
        <>
            <div className='container border' style={{ marginTop: '130px' }}>
                <div className='row' >
                    <div className='col-md-6 border mx-auto'>
                        <form className='row g-3'>
                            <div className='col-8 border mx-auto form-floating'>
                                <input type="text" class="form-control" id="floatingInput"
                                    onChange={handlechange}
                                    value={food}
                                />
                                <label for="floatingInput" style={{ marginLeft: 20 }}>Food Name</label>
                            </div>
                            <div className='col-5 border mx-auto'>
                                <input type="submit" value='Search' class="form-control btn btn-info" aria-label="First name"
                                    onClick={foodSearch}
                                />
                            </div>
                        </form>
                    </div>
                    <div className='w-100'></div>
                    <div className='col-md-10 border mx-auto my-5'>
                        <div className='row'>
                            <div className='col-md-4 mx-auto border d-flex justify-content-center'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Food
