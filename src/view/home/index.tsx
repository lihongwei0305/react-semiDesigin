import SlideBar from "@/component/SlideBar/index";
import Header from "@/component/Header";
import {Button} from "@douyinfe/semi-ui";
import s from './index.module.scss'
import {Outlet, Route, Routes} from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className={s.home}>
                <SlideBar></SlideBar>
                <div className={s.content}>
                    <div className={s.content_header}>
                        <Header></Header>
                    </div>
                    <div className={s.content_wrapper}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home