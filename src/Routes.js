import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import BaseElement from './BaseElement';
import Calendario1 from './libraries/fullcalendar/ReservarCita';
import Calendario2 from './libraries/fullcalendar/CitaPopover';
import ConvertDate from './dates/ConvertDate';
import LifeCycle from './lifecycle-react/LifeCycle';
import PrintFile from './pdf/PrintFile';
import PaginacionC from './zpruebas/semana1_2/PaginacionC';
import Animate from './libraries/react-transition-group/Animate';
import MuiHome from './lab-ui-mui/MuiHome';
import ExcelExport2 from './zpruebas/work_files/ExcelExport2';
import ReactMemo from './hooks/ReactMemo';
import BaseHooks from './hooks/BaseHooks';
import HookUseCallback from './hooks/HookUseCallback';
import LearnHome from './proptypes/LearnHome';
import HookRef from './hooks/HookRef';
import ReactRouterLearn from './react_router/ReactRouterLearn';
import Navigate1 from './react_router/navigate/Navigate1';
import Navigate2 from './react_router/navigate/Navigate2';
import ErrorNotFound from './ErrorNotFound';
import RoutesElementError from './react_router/lab/RoutesElementError';
import { LinkAndNavLink, renderLinks } from './react_router/navlink_link/LinkAndNavLink';
import { arrayRutas, HookUseParams } from './react_router/params/HookUseParams';
import StoreCosmetic from './contexto/StoreCosmetic';
import PruebaReactMemo from './hooks/labs/PruebaReactMemo';
import PruebaUseCallbackReactMemo from './hooks/labs/PruebaUseCallbackReactMemo';
import HookUseReducer from './hooks/HookUseReducer';
import DataGrid from './lab-ui-mui/DataGrid';
import HookUseSearchParams from './react_router/params/HookUseSearchParams';
import RutaA1 from './zpruebas/rutaAnidada/RutaA1';
import GithubReactQueryIndex from './react-query/github';

export default function Routes() {
    return useRoutes([
        // A route object has the same properties as a <Route>
        // element. The `children` is just an array of child routes.
        {
            path: '/',
            element: <BaseElement />,
            children: [
                {
                    path: '/', element: <Navigate to="/hooks" />
                },
                {
                    path: '/hooks', element: <BaseHooks />,
                    children: [
                        { path: '', element: <Navigate to="use-memo" /> },
                        { path: 'use-memo', element: <ReactMemo /> },
                        { path: 'use-callback', element: <HookUseCallback /> },
                        { path: 'prueba-hook-callback', element: <PruebaUseCallbackReactMemo /> },
                        { path: 'use-ref', element: <HookRef /> },
                        { path: 'prueba-react-memo', element: <PruebaReactMemo /> },
                        { path: 'use-reducer', element: <HookUseReducer /> }
                    ]
                },
                {
                    path: 'react-query', element: <RutaA1 />,
                    children: [
                        { path: 'propt', element: <LearnHome /> },
                        { path: 'github', element: <GithubReactQueryIndex /> },
                    ]
                },
                {
                    path: 'react_router', element: <ReactRouterLearn />,
                    children: [
                        { path: '', element: <Navigate to="./navigate1" /> },
                        { path: 'navigate1', element: <Navigate1 /> },
                        { path: 'navigate2', element: <Navigate2 /> },
                        { path: 'routes-element-error', element: <RoutesElementError /> },
                        {
                            path: 'nav-link', element: <LinkAndNavLink />, children: [
                                ...renderLinks
                            ]
                        },
                        {
                            path: 'use-params', element: <HookUseParams />,
                            children: [
                                ...arrayRutas
                            ]
                        },
                        { path: 'use-search-params', element: <HookUseSearchParams /> },
                    ]
                },
                {
                    path: 'mui', element: <MuiHome />,
                    children: [
                        {
                            path: '', element: < Navigate to="data-grid" />
                        },
                        { path: 'data-grid', element: <DataGrid /> }
                    ]
                },
                {
                    path: 'lifecycle', element: <LifeCycle />
                },
                {
                    path: 'contexto', element: <StoreCosmetic />
                },
                {
                    path: '/paginacionC', element: <PaginacionC />,
                },
                {
                    path: '/animate', element: <Animate />,
                },

                {
                    path: '/calendar1', element: <Calendario1 />,
                },
                {
                    path: '/calendar2', element: <Calendario2 />,
                },
                {
                    path: '/date', element: <ConvertDate />,
                },
                {
                    path: '/files', element: <ExcelExport2 />
                },

                //  Ruta que pertenece a un "array de RouteObject" de react_router
                {
                    path: '/react_router/routes-element-error/ruta1', element: <PrintFile />,
                },

            ]
        },
        { path: '*', element: <Navigate to="/404" replace /> },
        {
            path: '/404', element: <ErrorNotFound />
        }
    ]);

}
