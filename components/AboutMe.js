import { useState } from 'react';
import styles from '../styles/Home.module.css'

const arrInfor = [
    {
        id: 0,
        img: '\huu.png',
        tt: 'Họ và tên',
        content: 'Văn Tố Hữu'
    },
    {
        id: 1,
        img: '\embe.png',
        tt: 'Năm sinh',
        content: '2002'
    },
    {
        id: 2,
        img: '\ptit.png',
        tt: 'Học viện BCVT',
        content: 'Sinh viên năm 2'
    },
    {
        id: 3,
        img: '\cathai.jpg',
        tt: 'Địa chỉ',
        content: 'Phù Cát - Bình Định'
    }
];
const TempCard = ({ it }) => {
    return (
        <div className={styles.card}>
            <img src={it.img} />
            <h3>
                {it.tt}
            </h3>
            <p>
                {it.content}
            </p>
        </div>
    );
}


const AboutMe = () => {
    const [clickProject, setclickProject] = useState(true);
    const handleclickProject = () => {
        setclickProject(!clickProject);
    }
    return (
        <div className={styles.aboutme}>
            <div className={styles.containerCard}>
                <TempCard it={arrInfor[0]} />
                <TempCard it={arrInfor[1]} />
                <TempCard it={arrInfor[2]} />
                <TempCard it={arrInfor[3]} />
            </div>
            <button onClick={handleclickProject}>
                Dự án
            </button>
            <div className={styles.containerProject} style={{display : clickProject ? 'none' : 'flex'}}>
                <div className={styles.project}>
                    <p>
                        App mô phỏng đặt món ăn.
                    </p>
                    <video width={100} controls autoPlay muted src='\video.mp4' />
                    <div>
                        <p>Mô tả: App mô phỏng đặt món ăn và nước uống.</p>
                        <p>Ngôn ngữ: Java.</p>
                        <p>Công cụ sử dụng: FireBase, RomData.</p>
                    </div>
                    <button onClick={handleclickProject}>
                        Thoát
                    </button>
                </div>
            </div>
        </div>
    );
}
export default AboutMe;