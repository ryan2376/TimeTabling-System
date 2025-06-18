import { Router } from "express";
import { getTeachers, createTeacher, getTeacherById, updateTeacher, deleteTeacher } from '../controllers/teachersController';

const router = Router();

router.get('/', getTeachers);
router.post('/', createTeacher);
router.get('/', getTeacherById);
router.put('/', updateTeacher);
router.delete('/', deleteTeacher);

export default router;