import express from 'express';
import {
  createBlog,
  deleteBlog,
  disLikedBlog,
  getAllBlogs,
  getBlog,
  likeBlog,
  updateBlog,
} from '../controllers/blogCtrl.js';
import { authMiddleware, isAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, isAdmin, createBlog);
router.put('/likes', authMiddleware, likeBlog);
router.put('/dislikes', authMiddleware, disLikedBlog);
router.put('/:id', authMiddleware, isAdmin, updateBlog);
router.get('/:id', getBlog);
router.get('/', getAllBlogs);
router.delete('/:id', authMiddleware, isAdmin, deleteBlog);

export default router;
