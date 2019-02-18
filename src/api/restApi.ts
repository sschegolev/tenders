import wretch from 'wretch';
import {ResponseChain, WretcherError} from 'wretch/dist/resolver';
import RootStore from '../stores/rootStore';

const GATEWAY_TIMEOUT = 504;

export class RestApi {
  constructor(protected rootStore?: RootStore | any) {}

  protected readonly wretcher = () => {
    return wretch();
  };

  protected readonly publicWretcher = () =>
    wretch(process.env.REACT_APP_PUBLIC_API_URL);

  protected get = (url: string, headers: any = {}) =>
    this.extendByErrorHandlers(
      this.wretcher()
        .headers(headers)
        .url(url)
        .get()
        .unauthorized((error: WretcherError) => this.catchUnauthorized(error))
    ).json();

  protected getWithQuery = <T = any>(
    url: string,
    query: {[key: string]: any}
  ) =>
    this.extendByErrorHandlers(
      this.wretcher()
        .url(url)
        .query(query)
        .get()
    )
      .unauthorized((error: WretcherError) => this.catchUnauthorized(error))
      .json<T>();

  protected getPublic = (url: string) =>
    this.extendByErrorHandlers(
      this.publicWretcher()
        .url(url)
        .get()
    ).json();

  protected post = (url: string, body: any) => this._post(url, body).json();

  protected fireAndForget = (url: string, body: any, headers: any = {}, modifyDataMethod?: string) =>
    this._post(url, body, headers, modifyDataMethod).res();

  protected patch = (url: string, body: any) =>
    this.extendByErrorHandlers(
      this.wretcher()
        .url(url)
        .json(body)
        .patch()
        .unauthorized((error: WretcherError) => this.catchUnauthorized(error))
    ).res();

  protected put = (url: string, body: any) =>
    this.extendByErrorHandlers(
      this.wretcher()
        .url(url)
        .json(body)
        .put()
        .unauthorized((error: WretcherError) => this.catchUnauthorized(error))
    ).json();

  protected delete = (url: string) =>
    this.extendByErrorHandlers(
      this.wretcher()
        .url(url)
        .delete()
        .unauthorized((error: WretcherError) => this.catchUnauthorized(error))
    ).res();

  protected deleteWithParams = (url: string, body: any) =>
    this.extendByErrorHandlers(
      this.wretcher()
        .url(url)
        .json(body)
        .delete()
        .unauthorized((error: WretcherError) => this.catchUnauthorized(error))
    ).res();

  private readonly catchUnauthorized = (error: WretcherError) => {
    this.rootStore!.authStore.catchUnauthorized();
    throw error;
  };

  private readonly catchError = (error: WretcherError) => {
    throw error;
  };

  // tslint:disable-next-line:variable-name
  private readonly _post = (url: string, body: any, headers: any = {}, modifyDataMethod: string = 'json') =>
    this.extendByErrorHandlers(
      this.wretcher()
        .url(url)
        .headers(headers)
        [modifyDataMethod](body)
        .post()
        .unauthorized((error: WretcherError) => {
          return this.catchUnauthorized(error)
        })
    );

  private extendByErrorHandlers = (chain: ResponseChain) => {
    return chain
      .badRequest(this.catchError)
      .timeout(this.catchError)
      .internalError(this.catchError)
      .error(GATEWAY_TIMEOUT, this.catchError);
  };
}
