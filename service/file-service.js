import * as fileRepository from '../persistency/file-repository.js'
import config from '../environment-config.json';


export async function createFile(penrollment){
    return await fileRepository.create(penrollment);
}

export async function deleteFile(pId){
    return await fileRepository.remove(pId);
}

export async function getFileById(pId){
    return await fileRepository.findById(pId);
}

export async function updatefile(pId, pUpdateEntity){
    return await fileRepository.update(pId, pUpdateEntity);
}


export async function getAllFiles(){
    return await fileRepository.getAll();
}

export async function getFilesByEmployeId(pStudentId){
    return await fileRepository.getAllByStundentId(pStudentId);
}

export async function getFilesByTeacherId(pTeacherId){
    return await fileRepository.getAllByTeacherId(pTeacherId);
}

