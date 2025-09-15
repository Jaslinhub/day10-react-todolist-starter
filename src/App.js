import {useReducer} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {initialState, todoReducer} from "./reducers/todoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {TodoGenerator} from "./components/TodoGenerator";
import {createBrowserRouter, NavLink, Outlet, RouterProvider, useParams} from "react-router";


function DefaultLayout() {
    return <>
    <header>
        <nav>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li ><NavLink to={'/todos'}> To do List </NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
            </ul>
        </nav>
    </header>
        <main>
            <h1>xxx</h1>
            <Outlet/>
        </main>
        </>;
}

function ErrorPage() {
    return <h1>Error Page</h1>;
}

function TodoDetail() {
    const {key}=useParams();
    return <h1>This is :{key} Detail </h1>;
}

const routes=[{
    path: '/',
    element: <DefaultLayout/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: '',
            element: <h1>Home page</h1>
        }, {
            path: 'todos',
            element:<TodoList/>

        },
        {
            path: 'todos/:key',
            element:<TodoDetail/>

        },{
            path: 'about',
            element: <h1>About page</h1>

        }]
}]



const router=createBrowserRouter(routes);
function App() {
  // the Hooks API manage component data state
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const value = {state, dispatch};

  return (
    <div className="App">
        <div>
            <TodoContext.Provider value={value}>
            <RouterProvider router={router}></RouterProvider>
                <TodoGenerator dispatch={dispatch} length={state.length}/>
            </TodoContext.Provider>
        </div>
     {/* <TodoContext.Provider value={value}>
        <TodoList/>
      </TodoContext.Provider>
        <TodoGenerator dispatch={dispatch} length={state.length}/>*/}
    </div>
  );
}

export default App;
