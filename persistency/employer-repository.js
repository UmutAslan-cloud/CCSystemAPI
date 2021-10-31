import db from "../models/_sequelize_setup_.js"

export async function getAll(){
  return await db.employer.findAll(); 
}

export async function findById(pId){
  return await db.employer.findByPk(pId);
}

export async function create(pEntity){
  return await db.employer.create(pEntity);
}

export async function remove(pId){
  return await db.employer.destroy({
    where: { id: pId }
  })
}

export async function update(pId, pUpdatedEntity){
  return await db.employer.update(pUpdatedEntity, {
    where: { id: pId }
  });
}