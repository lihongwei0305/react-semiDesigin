import SlideBar from "@/component/SlideBar/index";
import {Button} from "@douyinfe/semi-ui";
import s from './index.module.scss'
import {Outlet, Route, Routes} from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className={s.home}>
                <SlideBar></SlideBar>
                <div className={s.content}>
                    <div className={s.header}>
                        nav
                    </div>
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default Home