import { Request, Response } from 'express';
import pool from '../db';

export const getTeachers = async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM teachers');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch teachers' });
    }
}
export const createTeacher = async (req: Request, res: Response
) => {
    const { name, subject_specialization, availability } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO teachers (name, subject_specialization, availability) VALUES ($1, $2, $3) RETURNING *', [name, subject_specialization, availability]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create teacher' })
    }
};
export const getTeacherById = () => {

}
export const updateTeacher = () => {

}
export const deleteTeacher = () => {

}