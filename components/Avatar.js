import { useState } from 'react';
import styles from '../styles/Home.module.css'

const Avatar = () =>
{
    const [clickForm, setclickForm] = useState(true);
    const handleclickForm = () =>
    {
        setclickForm(!clickForm);
    }
    const handleSubmit=()=>
    {
        alert("Bạn đã liên hệ");
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
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h1>
                        Liên hệ
                    </h1>
                    <div>
                        <p> Email:</p>
                        <input type={'email'} required/>
                    </div>
                    <div>
                        <p> Số điện thoại:</p>
                        <input type={'number'} required/>
                    </div>
                    <div>
                        <p> Facebook:</p>
                        <input type={'text'} required/>
                    </div>
                    <input   type={'submit'} value={'Gửi'} required/>
                </form>
            </div>   
        </div>
    );
}
export default Avatar;