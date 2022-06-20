import { Item } from './../types/Item';

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for(let i in list){
        if(
            list[i].data.getFullYear() === parseInt(year) &&
            (list[i].data.getMonth()+1) === parseInt(month)
        ){
            newList.push(list[i]);
        }
    }

    return newList;
}

export const formatDate = (data: Date): string => {
    let ano = data.getFullYear();
    let mes = data.getMonth() + 1;
    let dia = data.getDay();

    return `${adicionarZeroData(dia)}/${adicionarZeroData(mes)}/${ano}`;
}

const adicionarZeroData = (n: number): string => n < 10 ? `0${n}` : `${n}`;