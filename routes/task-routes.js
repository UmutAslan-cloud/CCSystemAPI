import express from 'express';
const router = express.Router();
import * as taskService from '../service/task-service.js'

import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await taskService.getAllTasks())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await taskService.getTaskById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await taskService.createTask(req.body))));
router.delete('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await taskService.deleteTask(req.params.id))));

export default router;