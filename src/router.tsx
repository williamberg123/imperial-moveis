import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { Root } from "./pages/Root";
import { AdminRoot } from "./pages/AdminRoot";

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
		element: <AdminRoot />
	}
]);
