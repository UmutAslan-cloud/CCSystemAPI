import * as taskRepository from '../persistency/task-repository.js'
import config from '../environment-config.json';


export async function createTask(pLecture){
    return await taskRepository.create(pLecture);
}

export async function deleteTask(pId){
    return await taskRepository.remove(pId);
}

export async function getAllTasks(){
    return await taskRepository.getAll();
}

export async function getTaskById(pId){
    return await taskRepository.findById(pId);
}

export async function updateTask(pId, pUpdateEntity){
    return await taskRepository.update(pId, pUpdateEntity);
}