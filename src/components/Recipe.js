import React from 'react'
import test from './images/test.jpg'
const Recipe = ({ item }) => {
    // console.log(item)
    const { image, label, url } = item.recipe;
    console.log(image, label, url)
    const dummyImgHolder = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtFd1ExC-w6ezJzwqVDfcCB_SYgdt_qcmRusWUb0bC10SL2mks-DZR975xKcIH5GgpDMA&usqp=CAU'
    return (
        <>
            <div className='col-md-4 mx-auto  my-3 d-flex justify-content-center'>
                <div class="card" style={{ width: '18rem' }}>
                    <img src={image ? image : dummyImgHolder} class="card-img-top" alt="..." />
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title text-center">{label}</h5>
                        <div className=' d-flex justify-content-center'>
                            <a href={url} target='_blank' class="btn btn-primary mx-auto">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Recipe
