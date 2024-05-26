import { Router } from 'express';
import { register, login, verify, requestResetPassword, resetUserPassword } from '../../controller/auth/authController';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/verify', verify);
router.post('/request-reset-password', requestResetPassword);
router.post('/reset-password', resetUserPassword);

export default router;
