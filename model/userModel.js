const BaseModel = require('./baseModel');

/**
 * By using the power of OOP, we can make a class that inhert its
 * properties and methods to the class who extends it, this concept
 * is called "OOP Inheritance".
 *
 * By making a base model, we can create a model with basic
 * methods and functions that can inhert to the class who extends it
 * 
 * As we can see, the UserModel is extends the BaseModel, means the
 * BaseModel is inherting it's parameter and methods to UserModel
 */

class UserModel extends BaseModel {
  constructor() {
    const baseValidatorObj = {
      type: 'object',
      additionalProperties: false
    }

    /**
     * By using OOP, because class are designed to be strict about
     * how it should be used, we will get a benefit like human error prone
     * so developer will make less mistake, but with a cons like longer 
     * implementation, because to make a class "strict", means we need
     * to code a lot, which also means longer implementation.
     */

    super('users', {
      // 👇 insert the schemas needed for the extended class
      addSchema: {
        ...baseValidatorObj,
        properties: {
          username: { type: 'string', minLength: 1, maxLength: 32 },
          password: { type: 'string', minLength: 1 }
        },
        required: ['username', 'password']
      },
      querySchema: {
        ...baseValidatorObj,
        properties: {
          username: { type: 'string', minLength: 1, maxLength: 32 },
        },
        required: ['username'],
      },
      editSchema: {
        ...baseValidatorObj,
        properties: {
          password: { type: 'string', minLength: 1 },
        },
        required: ['password'],
      }
    })

const dbConnection = require("../connections/dbConnection");
const { nanoid } = require("nanoid");
const Ajv = require('ajv')

const ajv = new Ajv()
const tableName = 'users'

const baseValidatorObj = {
  type: 'object',
  additionalProperties: false
}


  // 👇 below are the same functions as previous userModel.js, but now they're class methods
  async isExists(query) {
    this.querySchema.validate(query)

    const countResult = await this.db(this.tableName)
      .count({ count: "*" })
      .where(query)
    return countResult[0].count
  }
}

  getOne(query) {
    this.querySchema.validate(query)

// 👇 create a schema for validating data updates
const editSchema = {
  // in this schema, we should fill any property that can be changed by client to database
  compiledSchema: ajv.compile({
    ...baseValidatorObj,
    properties: {
      password: { type: 'string', minLength: 1 },
    },
    required: ['password'],
  }),
  validate(data) {
    const isValid = this.compiledSchema(data)
    if (!isValid) throw this.compiledSchema.errors
  }
}

/**
 * To fulfill the first resposibility, we will create functions that act as
 * bridges to make controller fetch data to database
 *
 * There will be a situation when model queries are unique from others, it's better to
 * create a new function rather than modify existing function to handle many situation,
 * it will be harder and also longer to made
 */

async function isExists(query) {
  querySchema.validate(query)
  const countResult = await dbConnection(tableName)
    .count({ count: "*" })
    .where(query)
  return countResult[0].count
}

async function get(query) {
  querySchema.validate(query)

  return dbConnection(tableName).where(query)
}

async function getOne(query) {
  querySchema.validate(query)

  return dbConnection(tableName)
    .select()
    .where(query)
    .first()
}

async function add(data) {
  addSchema.validate(data)

  data.id = nanoid()
  await dbConnection(tableName).insert(data)

  return dbConnection(tableName).where({ id: data.id }).first()
}

/**
 * As for now, we will not see any use of those 👇 functions, and that't ok
 * By typing those functions, we will get some benefits such as:
 * 1. We can easily copy and paste this file if we want to create another model
 * that maybe requires those function
 * 2. Future support, maybe sometime we will implement a delete / edit user feature
 */

async function edit(query, data) {
  querySchema.validate(query)
  editSchema.validate(data)

  await dbConnection(tableName)
    .update(data)
    .where(query)

  return dbConnection(tableName).where(query)
}

async function remove(query) {
  querySchema.validate(query)

  const result = await dbConnection(tableName)
    .delete()
    .where(query)

  return { result }
}

module.exports = {
  isExists,
  get,
  getOne,
  add,
  edit,
  remove
}