import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NameAndType from '../components/NameAndType';
import '../css/Csshome.css';



function Home() {

    const [render, setRender] = useState(false);
    const [render2, setRender2] = useState(false);
    const [products, setProducts] = useState();


    function getproduct() {


        var config = {
            method: 'get',
            url: 'http://localhost:8080/getproducts',
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data[0]));
                setProducts(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getproduct();
    }, [])  //[] defependcy list



    return (
        <div className='HomeContainer'>
            <div className='NavBar'>
                <div className='nav1'>
                    <div>
                        <h2>Smart_Shopper</h2>
                    </div>
                    <div className='searchBar'>
                        <NameAndType type={'search'} placeholder={'Search you items'} />
                    </div>
                </div>

                <div className='nav2'>
                    <div className='signUp'>
                        <a href='http://localhost:3000/register'>Sign up </a>
                        <a href='http://localhost:3000/login'> Login in</a>
                        <h2>cart</h2>
                    </div>


                </div>

                <div class="container">
                {
                       products?.length > 0 ? (
                          products.map( (product,i) =>  (
                            <div class="card">
                        <div class="face face1">


                            <div class="content">
                                <div class="icon">
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <h3>
                                    <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">{product.title}</a>
                                </h3>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>

                          ) )
                       ): (
                           <h3>No Products found</h3>
                       )
                       
                   }

                    
                    
                </div>

            </div>
        </div>
    )

}
export default Home;