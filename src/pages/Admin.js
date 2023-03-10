import React, { useState } from 'react'
import NameAndType from '../components/NameAndType';
import '../css/Admin.css';
import Loading from './Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactFileReader from 'react-file-reader';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setLoading, unsetLoading } from '../redux/action';

function Admin() {

    const loader = useSelector((state) => state.loader)
    const dispatch = useDispatch();

    const [image, setImage] = useState();
    const [imageName, setImageName] = useState();

    const [productDetail, setproductDetail] = useState({
        title: '',
        description: '',
        cost: '',
        dateOfManf: '',
        dateofExp: '',
    })

    const onChangeHandler = (e) => {
        if (e.target.id === 'productname') {
            setproductDetail({
                ...productDetail,
                title: e.target.value,
            })

        } else if (e.target.id === 'description') {
            setproductDetail({
                ...productDetail,
                description: e.target.value,
            })
        } else if (e.target.id === 'cost') {
            setproductDetail({
                ...productDetail,
                cost: e.target.value,
            })
        } else if (e.target.id === 'dateofManf') {
            setproductDetail({
                ...productDetail,
                dateOfManf: e.target.value,
            })
        } else if (e.target.id === 'dateofExp') {
            setproductDetail({
                ...productDetail,
                dateofExp: e.target.value,
            })

        }else if (e.target.id === 'image') {
            console.log(e.target.files[0]);
        setImage(e.target.files[0]);
        setImageName(e.target.files[0].name)

        }
    }
    const showToastSuccessMessage = ( isSuccsed ) => {
        if(isSuccsed){
            toast.success('Product added !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }else{
            toast.error('Something went wrong !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
       
    };

    function addProduct() {
        //upload product
        console.log(productDetail);
        console.log(image);
        dispatch(setLoading())

        var data = new FormData();
        data.append('image', image);
        data.append('title', JSON.stringify(productDetail));

        var config = {
            method: 'post',
            url: 'http://localhost:8080/uploadproduct',

            data: data
        };

        axios(config)
            .finally(() => {
                dispatch(unsetLoading());

            })
            .then(function (response) {
                if(response.status === 200 ){
                    showToastSuccessMessage(true)
                }else{
                    showToastSuccessMessage(false)
                }
                
            })
            .catch(function (error) {
                showToastSuccessMessage(false)
                
            });

    }


    return (
        <div className='Register-Container'>

            {
                loader ? <Loading /> : null
            }

            <div className='Form-Container'>
                <div>
                    <h1>Upload data</h1>
                </div>
                <NameAndType label={'productName'} id={'productname'} type={'text'} placeholder={'Enter Product_name'} value={productDetail.title} onChange={onChangeHandler} />
                <NameAndType label={'description'} id={'description'} type={'text'} placeholder={'Enter description'} value={productDetail.description} onChange={onChangeHandler} />
                <NameAndType label={'cost'} id={'cost'} type={'number'} placeholder={'Enter cost'} value={productDetail.cost} onChange={onChangeHandler} />
                <NameAndType label={'dateofManf'} id={'dateofManf'} type={'date'} placeholder={'Enter dateofManf'} value={productDetail.dateOfManf} onChange={onChangeHandler} />
                <NameAndType label={'dateofExp'} id={'dateofExp'} type={'date'} placeholder={'Enter dateofExp'} value={productDetail.dateofExp} onChange={onChangeHandler} />
                <NameAndType label={'Upload Product Image'} id={'image'} type={'file'} placeholder={'Select file'}  onChange={onChangeHandler} />
                <div style={{ margin: '2em' }}>
                    <button onClick={() => { addProduct() }}>Add Product</button>


                </div>



            </div>

            <ToastContainer />

        </div>

    )
}


export default Admin;