import { Router } from 'express';
import {
  getConversations,
  getUnreadCount,
  getMessages,
  sendMessage,
  getMessagingContacts
} from '../controllers/messaging.controller.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.use(requireAuth);

router.get('/unread-count', getUnreadCount);
router.get('/conversations', getConversations);
router.get('/conversations/:conversationId', getMessages);
router.post('/send', sendMessage);
router.get('/contacts', getMessagingContacts);

export default router;
