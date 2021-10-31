import * as classRepository from '../persistency/class-repository.js'
import config from '../environment-config.json';


export async function createClass(pClass){
    return await classRepository.create(pClass);
}

export async function deleteClass(pId){
    return await classRepository.remove(pId);
}

export async function getAllClasses(){
    return await classRepository.getAll();
}

export async function getClassById(pId){
    return await classRepository.findById(pId);
}

export async function updateClass(pId, pUpdateEntity){
    return await classRepository.update(pId, pUpdateEntity);
}