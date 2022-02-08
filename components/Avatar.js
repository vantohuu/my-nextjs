import { useState } from 'react';
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
const Avatar = () =>
{
    const [clickForm, setclickForm] = useState(true);

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [face, setFace] = useState('');

    const handleclickForm = () =>
    {
        setclickForm(!clickForm);
    }


    const handleSubmit = async (e)=>
    {
        e.preventDefault();
        alert("Chọn OK để gửi liên hệ.");

        let contact = 
        {
            key :  Math.random() * 100000,
            email,
            phone,
            face,
        }
        
        let response = await fetch('/api/contact', 
        {
            method : 'POST',
            body : JSON.stringify(contact),
        });

        let data = await response.json();
        console.log(data);
    }

    return(
        <div className= {styles.avatarContainer}>
            <img src='/huu.png' className={styles.avatar}/>
            <p>
                Văn Tố Hữu
            </p>
            <button onClick={handleclickForm}>
                Liên hệ
            </button>

            <div className={styles.containerForm} style={{display : clickForm ? 'none' : 'flex'}}>
                <form className={styles.form} onSubmit={handleSubmit} method='post'>
                    <h1>
                        Liên hệ
                    </h1>
                    <div>
                        <p> Email:</p>
                        <input type={'text'} name='email' onChange={(e) => setEmail(e.target.value)} value = {email} required/>
                    </div>
                    <div>
                        <p> Số điện thoại:</p>
                        <input type={'number'} name='number' onChange={(e) => setPhone(e.target.value)} value = {phone} required/>
                    </div>
                    <div>
                        <p> Facebook:</p>
                        <input type={'text'} name='facebook' onChange={(e) => setFace(e.target.value)} value = {face} required/>
                    </div>
                    <input  type={'submit'} value={'Gửi'} required/>
                </form>
            </div>   
        </div>
    );
}
export default Avatar;