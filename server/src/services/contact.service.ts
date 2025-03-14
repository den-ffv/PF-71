import { PrismaClient } from '@prisma/client'; 
import { PrismaService } from '../utils/prisma';

class ContactService {
  private static tableName: keyof PrismaClient = 'contactData';

  public static async getList() {
    return PrismaService.getList(this.tableName);
  }

  public static async getById(id: string) {
    return PrismaService.getById(this.tableName, id);
  }

  public static async create(data: any) {
    return PrismaService.create(this.tableName, data);
  }

  public static async update(id: string, data: any) {
    return PrismaService.update(this.tableName, id, data);
  }

  public static async delete(id: string) {
    return PrismaService.delete(this.tableName, id);
  }
}

export default ContactService;