import db from "../models/_sequelize_setup_.js"

export async function getAll(){
  return await db.task.findAll(); 
}

export async function findById(pId){
  return await db.task.findByPk(pId);
}

export async function create(pEntity){
  return await db.task.create(pEntity);
}

export async function remove(pId){
  return await db.task.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedEntity){
  return await db.task.update(pUpdatedEntity, {
    where: { id: pId }
  });
}