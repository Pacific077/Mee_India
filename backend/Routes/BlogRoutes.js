import express from "express"
import { AddblogToFeaturedBLog, CreatBlog, DelBlogById, GetAllFeaturedBlogs, GetBlogById, RemoveBlogFromFeaturedBlogs, getTop20blogs } from "../Controllers/BlogControllor.js"

const BlogRoutes = express.Router()

BlogRoutes.post('/create',CreatBlog)
BlogRoutes.get('/getblogs',getTop20blogs)
BlogRoutes.post('/featureBlog',AddblogToFeaturedBLog)
BlogRoutes.post('/removfeatureBlog',RemoveBlogFromFeaturedBlogs)
BlogRoutes.get('/getfeatureBlog',GetAllFeaturedBlogs)
BlogRoutes.delete('/deletebyid/:id',DelBlogById)
BlogRoutes.get('/getbyid/:id',GetBlogById)


export default BlogRoutes



