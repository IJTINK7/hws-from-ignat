import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/hws-from-ignat/pre-junior',
    JUNIOR: '/hws-from-ignat/junior',
    JUNIOR_PLUS: '/hws-from-ignat/junior-plus',
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                <Route path={"/hws-from-ignat/"} element={<Navigate to={'/hws-from-ignat/pre-junior'}/>}/>

                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                <Route path={"/hws-from-ignat/pre-junior"} element={<PreJunior/>}/>
                <Route path={"/hws-from-ignat/junior"} element={<Junior/>}/>
                <Route path={"/hws-from-ignat/junior-plus"} element={<JuniorPlus/>}/>

                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                <Route path={"/hws-from-ignat/*"} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages
