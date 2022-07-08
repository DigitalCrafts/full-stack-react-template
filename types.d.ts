// Note: You shouldn't need to adjust this file

import { SessionData } from 'express-session'
import { Model } from 'sequelize'
import { ModelStatic, SequelizeStaticAndInstance } from 'sequelize'
import { Sequelize } from 'sequelize/types'

declare module 'express-session' {
  class SessionData extends SessionData {
    [key: string]: any
  }
}

declare global {
  type ModelsExport = {
    sequelize: SequelizeStaticAndInstance,
    Sequelize: SequelizeStatic
  } & {
    [key: string]:  ModelStatic<GenericModel & Model<GenericModel, GenericModel>> & {
      associate?: (db: ModelsExport) => void
      [key: string]: any
    },
  }
}