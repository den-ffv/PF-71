import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export class PrismaService {
  /**
   * Get all records from any table.
   * @param tableName - Table title (Prismaclient key)
   */
  public static async getList<T extends keyof PrismaClient>(tableName: T): Promise<any[]>{
    const model = prisma[tableName] as { findMany: () => Promise<any[]> }; 

    if(!model || typeof model.findMany !== 'function'){
      throw new Error(`Model ${String(tableName)} does not exist or does not support findMany.`);
    }

    return model.findMany();
  }


  /**
   * Get an ID entry.
   * @param tableName - Table Name (PrismaClient key)
   * @param id - Entry ID
 */
  public static async getById<T extends keyof PrismaClient>(tableName: T, id: string): Promise<any | null>{
    const model = prisma[tableName] as { findUnique: (args: any) => Promise<any> };

    if(!model || typeof model.findUnique !== 'function'){
      throw new Error(`Model ${String(tableName)} does not exist or does not support findUnique.`);
    }

    return model.findUnique({ where: { id } });
  }

  /**
   * Create a new entry.
   * @param tableName - Table Name (PrismaClient key)
   * @param data - Entry data
   */
  public static async create<T extends keyof PrismaClient>(tableName: T, data: any): Promise<any>{
    const model = prisma[tableName] as { create: (args: any) => Promise<any>};

    if(!model || typeof model.create !== 'function'){
      throw new Error(`Model ${String(tableName)} does not exist or does not support create.`);
    }

    return model.create({ data });
  }

  /**
   * Update an entry.
   * @param tableName - Table Name (PrismaClient key)
   * @param id - Entry ID
   * @param data - Entry data
   */
  public static async update<T extends keyof PrismaClient>(tableName: T, id: string, data: any): Promise<any>{
    const model = prisma[tableName] as { update: (args: any) => Promise<any>};

    if(!model || typeof model.update !== 'function'){
      throw new Error(`Model ${String(tableName)} does not exist or does not support update.`);
    }

    return model.update({ where: { id }, data });
  }

  /**
   * Delete an entry.
   * @param tableName - Table Name (PrismaClient key)
   * @param id - Entry ID
   */
  public static async delete<T extends keyof PrismaClient>(tableName: T, id: string): Promise<any>{
    const model = prisma[tableName] as { delete: (args: any) => Promise<any>};

    if(!model || typeof model.delete !== 'function'){
      throw new Error(`Model ${String(tableName)} does not exist or does not support delete.`);
    }
    
    return model.delete({ where: { id } });
  }
}

// export default {prisma, PrismaService};