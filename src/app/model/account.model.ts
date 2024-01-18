export interface AccountDetail{
    accountId: string,
    balance: number,
    accountType?:string,
    currentPage:number,
    pageSize: number,
    totalPages: number,
    accountOperationDtos:AccountOperationDtos[]

}

export interface AccountOperationDtos{
    id: number;
    dateOperation: Date;
    amountOperation: number;
    description: string;
    operationType: string;

}