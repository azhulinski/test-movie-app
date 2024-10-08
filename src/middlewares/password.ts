import {scrypt, randomBytes} from 'crypto';
import {promisify} from 'util';

const scryptAsync = promisify(scrypt);

export class Password {

    static async toHash(password: string): Promise<string> {
        const salt = randomBytes(16).toString('hex');
        const buffer = (await scryptAsync(password, salt, 64)) as Buffer;

        return  `${buffer.toString('hex')}.${salt}`;
    }

    static async comparePassword(storedPassword: string, suppliedPassword: string): Promise<boolean> {
        const [hashedPassword, salt] = storedPassword.split('.');
        const buffer = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;

        return buffer.toString('hex') === hashedPassword
    }
}