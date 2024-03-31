import { startSession } from "mongoose";
import Admin from "../Models/AdminModel.js";
import Blog from "../Models/BlogModel.js";

const CreatBlog = async (req, res) => {
  try {
    const { title, description, BlogImage } = req.body;
    const newBlog = await Blog.create({
      title: title,
      description: description,
      BlogImage: BlogImage,
    });
    const savedBlog = await newBlog.save();
    res.status(200).json({
      message: "Blog created",
      savedBlog,
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ message: error.message });
  }
};

const getTop20blogs = async (req, res) => {
  try {
    const top20Blogs = await Blog.find().sort({ createdAt: -1 }).limit(20);
    res.status(200).json({
      message: "fetched ",
      top20Blogs,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const AddblogToFeaturedBLog = async (req, res) => {
  try {
    const { blogId } = req.body;
    const existingBlog = await Blog.findById(blogId);
    if (!existingBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const admin = await Admin.findOne();
    if (admin.featuredBlogs.includes(blogId)) {
      return res.status(400).json({ message: "Blog already featured" });
    }
    if (admin.featuredBlogs.length >= 5) {
      return res
        .status(400)
        .json({ message: "Maximum limit reached for featured blogs" });
    }
    admin.featuredBlogs.push(blogId);
    await admin.save();
    res
      .status(200)
      .json({ message: "Blog added to featuredBlogs successfully" });
  } catch (error) {
    // console.error("Error adding blog to featuredBlogs:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const DelBlogById = async (req, res) => {
  const session = await startSession();
  session.startTransaction();
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id).session(session);
    if (!deletedBlog) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ message: "Blog not found" });
    }
    await Admin.updateOne({}, { $pull: { featuredBlogs: id } }).session(
      session
    );
    await session.commitTransaction();
    session.endSession();
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("Error deleting blog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const GetAllFeaturedBlogs = async (req, res) => {
  try {
    const admin = await Admin.findOne().populate("featuredBlogs");
    if (!admin) {
      return res.status(404).json({ message: "Admin data not found" });
    }
    const featuredBlogs = admin.featuredBlogs;
    res.status(200).json(featuredBlogs);
  } catch (error) {
    console.error("Error getting featured blogs:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const GetBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      res.status(400).json({
        message: "NO blog Found",
      });
    }
    res.status(200).json({
      message: "got blog",
      blog,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const RemoveBlogFromFeaturedBlogs = async (req, res) => {
  try {
    const { blogId } = req.body;

    const admin = await Admin.findOne();
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    
    // console.log("featuredid",admin.featuredBlogs)
    const updatedFeaturedBlogs = admin.featuredBlogs.filter(
      (id) => id.toString() !== blogId
    );
    if (updatedFeaturedBlogs.length === admin.featuredBlogs.length) {
      return res
        .status(404)
        .json({ message: "Blog not found in featured blogs" });
    }

    admin.featuredBlogs = updatedFeaturedBlogs;
    await admin.save();

    res
      .status(200)
      .json({ message: "Blog removed from featuredBlogs successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export {
  CreatBlog,
  getTop20blogs,
  AddblogToFeaturedBLog,
  DelBlogById,
  GetAllFeaturedBlogs,
  GetBlogById,
  RemoveBlogFromFeaturedBlogs
};
