import {useReducer} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import {initialState, todoReducer} from "./reducers/todoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {createBrowserRouter, RouterProvider} from "react-router";
import {DefaultLayout} from "./layout/DefaultLayout";
import {TodoDetail} from "./components/TodoDetail";


function ErrorPage() {
    return <h1>Error Page</h1>;
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
            <RouterProvider router={router}>

            </RouterProvider>

            </TodoContext.Provider>
        </div>
    </div>
  );
}

export default App;
