import { RestApi } from "./restApi";


export class RestAuthApi extends RestApi {
  registerIndividual = (body: any) =>
    this.fireAndForget(
        'http://www.vh165.by1820.hb.by/api/account/register-user',
        body,
      {},
      'formData'
      );

  login = (body: any) => this.post('http://www.vh165.by1820.hb.by/api/account/token', body);
}
