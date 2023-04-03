import * as bcrypt from 'bcryptjs';
import { ModelStatic } from 'sequelize';
import createToken from '../auth/token';
import UsersModel from '../database/models/users.model';
import { ILogin } from '../interfaces/ILogin';
import statusCodes from '../statusCode';

class UserService {
  private _usersModel: ModelStatic<UsersModel> = UsersModel;

  /* constructor(usersModel: UsersModel) {
    this._usersModel = usersModel;
  } */

  /* public async findUser(email:string): Promise<UsersModel | null> {
    const user = await this._usersModel.findOne({ where: { email } });

    return user;
  } */

  public async login(userLogin: ILogin): Promise<
  { status?: number, message?: string, token?: string }
  > {
    const { email, password } = userLogin;

    if (!email || !password) {
      return { status: statusCodes.badRequest, message: 'All fields must be filled' };
    }

    const user = await this._usersModel.findOne({ where: { email } });

    if (!user) {
      return { status: statusCodes.unauthorized, message: 'Invalid email or password' };
    }

    const isEqual = bcrypt.compareSync(password, user.password);

    if (!isEqual) {
      return { status: statusCodes.unauthorized, message: 'Invalid email or password' };
    }

    const { password: passwordUser, ...rest } = user.dataValues;

    const token = createToken(rest);

    return { token };
  }
}

export default UserService;