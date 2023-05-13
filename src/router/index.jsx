import { createBrowserRouter } from "react-router-dom";

    import Root from "../layout/Root";
    import Home from "../pages/home";
    import About from "../pages/about";
    import Contact from "../pages/contact";
    import Blog, { loaderBlogs } from "../pages/Blog";
    import Article, { loaderArticle } from "../pages/Article";
    import NotFound from "../pages/Not-found";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
            {
                path: 'blog',
                element: <Blog/>,
                loader: loaderBlogs,
            },
            {
                path: 'blog/:id',
                element: <Article/>,
                loader: loaderArticle
            },
        ]
    }
]);

export default router;