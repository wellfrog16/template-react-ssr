declare namespace Glob {
    interface IResponse<T = any> {
        code: number;
        errorStr: string;
        data: T;
    }
}
