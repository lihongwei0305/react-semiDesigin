import NavBar from "@/component/NavBar/index";
import { Button } from "@douyinfe/semi-ui";
import s from './index.module.scss'
import {Route, Routes} from "react-router-dom";
import About from '@/view/About/index'
const Home = () => {
    return (
        <>
          <div className={s.home}>
              <NavBar></NavBar>
              <div>
                  <Button>about</Button>
                  <Routes>
                      <Route path="/about" element={<About />} />
                  </Routes>
              </div>
          </div>
        </>
    )
}

export default Home