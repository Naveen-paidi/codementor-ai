import { Router } from 'express';
import { getAllLanguages, getCourseByLanguage, getTopicDetails } from '../controllers/course.controller.js';

const router = Router();

// GET /api/languages
router.get('/', getAllLanguages);

export default router;
