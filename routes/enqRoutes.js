import express from 'express';
import {
  createEnq,
  deledEnq,
  getallEnq,
  updatedEnq,
} from '../controllers/enqCtrl.js';
import { authMiddleware, isAdmin } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post('/', authMiddleware, isAdmin, createEnq);
router.put('/:id', authMiddleware, isAdmin, updatedEnq);
router.delete('/:id', authMiddleware, isAdmin, deledEnq);
router.get('/:id', deledEnq);
router.get('/', getallEnq);

export default router;
