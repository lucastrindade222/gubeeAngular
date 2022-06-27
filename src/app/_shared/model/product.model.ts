
export class  Product {
    id?:number
    productName?:string;
    description?:string
    stack?:Stack[]
    targetMarket?:TargetMarket[]

}

export class Stack{
    stackId?:number
    name?:string
}

export class TargetMarket{
    targetId?:number
    name?:string
}

export class linkProduto{
    stack?:number[]
}