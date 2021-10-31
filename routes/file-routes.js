import express from 'express';
var router = express.Router();
import * as FileService from '../service/file-service.js'

import asyncHandler from 'express-async-handler';

router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await FileService.getFileById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await FileService.createFile(req.body))));
router.delete('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await FileService.deleteFile(req.params.id))));

router.get('/', asyncHandler(async (req, res, next) => {
    let files = await FileService.getAllFiles();
    res.status(200).send(files);
}));

router.get('/employee/:employeId', asyncHandler(async (req, res, next) =>{
    let files = await FileService.getFilesByEmployeId(req.params.employeId);
    res.status(200).send(files);
}));

router.get('/teachers/:teacherId', asyncHandler(async (req, res, next) =>{
    let files = await FileService.getFilesByTeacherId(req.params.teacherId);
    res.status(200).send(files);
}));

router.get('/tasks/:taskId', asyncHandler(async (req, res, next) =>{
    let files = await FileService.getFilesByTaskId(req.params.taskId);
    res.status(200).send(files);
}));

/* router.get('/classes/:classId', asyncHandler(async (req, res, next) => {
    let files = await FileService.getEnrollmentsByInstructorId(req.params.classId);
    res.status(200).send(enrollments);
}));
 */
export default router;