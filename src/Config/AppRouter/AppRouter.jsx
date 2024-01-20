import { BrowserRouter as Router , Routes , Route , } from "react-router-dom";
import Todo from '../../Screens/TodoData/Todo.jsx';
import Login from '../../Screens/Login/Login.jsx';
import SignUp from '../../Screens/SingUp/SingUp.jsx';
import ProtectedRoute from '../../Routes/ProtectedRoute/index.jsx';
import AuthRoute from '../../Routes/AuthRoute/index.jsx';
import ErrorPage from "../../Screens/ErrorPage/ErrorPage.jsx";
const AppRouter = () => {
  return (

<Router>
<Routes>

<Route path="*" element={<ErrorPage />} />
  

<Route element={<AuthRoute />}>
  <Route path="/" element={<Login />} />
  <Route path="/signup" element={<SignUp />} />
</Route>

<Route element={<ProtectedRoute />}>
  <Route path="/dashboard" element={<Todo />} />
</Route>

</Routes>
</Router>
  )
}
export default AppRouter;