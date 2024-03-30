import express from "express"
import { AddblogToFeaturedBLog, CreatBlog, DelBlogById, GetAllFeaturedBlogs, getTop20blogs } from "../Controllers/BlogControllor.js"

const BlogRoutes = express.Router()

BlogRoutes.post('/create',CreatBlog)
BlogRoutes.get('/getblogs',getTop20blogs)
BlogRoutes.post('/featureBlog',AddblogToFeaturedBLog)
BlogRoutes.get('/getfeatureBlog',GetAllFeaturedBlogs)
BlogRoutes.delete('/deletebyid/:id',DelBlogById)


export default BlogRoutes



