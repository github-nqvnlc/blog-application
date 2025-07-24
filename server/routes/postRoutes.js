import express from 'express';
const router = express.Router();
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from '../controllers/postControllers.js';
import { authGuard, adminGuard } from '../middleware/authMiddleware.js';

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Blog posts management
 */

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post (Admin only)
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - caption
 *               - body
 *             properties:
 *               title:
 *                 type: string
 *                 description: Post title
 *               caption:
 *                 type: string
 *                 description: Post caption/summary
 *               body:
 *                 type: string
 *                 description: Post content in JSON string format
 *               photo:
 *                 type: string
 *                 format: binary
 *                 description: Post featured image
 *               tags:
 *                 type: string
 *                 description: Comma-separated tags
 *               categories:
 *                 type: string
 *                 description: Comma-separated category IDs
 *     responses:
 *       201:
 *         description: Post created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Forbidden - Admin access required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *   get:
 *     summary: Get all posts with pagination and search
 *     tags: [Posts]
 *     security: []
 *     parameters:
 *       - in: query
 *         name: searchKeyword
 *         schema:
 *           type: string
 *         description: Search keyword for posts
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of posts per page
 *       - in: query
 *         name: categories
 *         schema:
 *           type: string
 *         description: Filter by category IDs (comma-separated)
 *     responses:
 *       200:
 *         description: Posts retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Post'
 *                 headers:
 *                   type: object
 *                   properties:
 *                     x-filter:
 *                       type: string
 *                     x-totalcount:
 *                       type: integer
 *                     x-currentpage:
 *                       type: integer
 *                     x-pagesize:
 *                       type: integer
 *                     x-totalpagecount:
 *                       type: integer
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /posts/{slug}:
 *   get:
 *     summary: Get a single post by slug
 *     tags: [Posts]
 *     security: []
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Post slug
 *     responses:
 *       200:
 *         description: Post retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: Post not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *   put:
 *     summary: Update a post (Admin only)
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Post slug
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Post title
 *               caption:
 *                 type: string
 *                 description: Post caption/summary
 *               body:
 *                 type: string
 *                 description: Post content in JSON string format
 *               photo:
 *                 type: string
 *                 format: binary
 *                 description: Post featured image
 *               tags:
 *                 type: string
 *                 description: Comma-separated tags
 *               categories:
 *                 type: string
 *                 description: Comma-separated category IDs
 *     responses:
 *       200:
 *         description: Post updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Forbidden - Admin access required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Post not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *   delete:
 *     summary: Delete a post (Admin only)
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Post slug
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Forbidden - Admin access required
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Post not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

router.route('/').post(authGuard, adminGuard, createPost).get(getAllPosts);
router
  .route('/:slug')
  .put(authGuard, adminGuard, updatePost)
  .delete(authGuard, adminGuard, deletePost)
  .get(getPost);

export default router;
