import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { Root } from "./pages/Root";
import { AdminRoot } from "./pages/AdminRoot";
import { AdminLogin } from "./pages/AdminRoot/Login";
import { AdminPage } from "./pages/AdminRoot/Admin";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/catalog",
				element: <Catalog />
			},
		],
	},
	{
		path: "/admin",
		element: <AdminRoot />,
		children: [
			{
				path: "/admin",
				element: <AdminPage />
			},
			{
				path: "/admin/login",
				element: <AdminLogin />
			}
		]
	}
]);
