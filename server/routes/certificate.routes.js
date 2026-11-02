import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import {
  getMyCertificates,
  claimCertificate,
  verifyCertificate
} from '../controllers/certificate.controller.js';

const router = Router();

// Public Certificate Verification
router.get('/verify/:certificateId', verifyCertificate);

// Protected Student Certificate Endpoints
router.get('/my-certificates', requireAuth, getMyCertificates);
router.post('/claim/:courseId', requireAuth, claimCertificate);

export default router;

