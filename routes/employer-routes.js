import express from 'express';
const router = express.Router();
import * as employerService from '../service/employer-service.js'
import asyncHandler from 'express-async-handler';

router.get('/', asyncHandler(async (req, res, next) => res.status(200).send(await employerService.getAllEmployers())));
router.get('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await employerService.getEmployerById(req.params.id))));
router.post('/', asyncHandler(async (req, res, next) => res.status(200).send(await employerService.createEmployer(req.body))));
router.delete('/:id', asyncHandler(async (req, res, next) => res.status(200).send(await employerService.deleteEmployer(req.params.id))));

export default router;