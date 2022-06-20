import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categorias } from '../../data/categorias';

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.data)}</C.TableColumn>
            <C.TableColumn>{categorias[item.categoria].titulo}</C.TableColumn>
            <C.TableColumn>{item.titulo}</C.TableColumn>
            <C.TableColumn>R$ {item.valor}</C.TableColumn>
        </C.TableLine>
    );
}