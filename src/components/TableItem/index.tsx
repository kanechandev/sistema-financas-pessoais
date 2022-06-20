import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.data)}</C.TableColumn>
            <C.TableColumn>{item.categoria}</C.TableColumn>
            <C.TableColumn>{item.titulo}</C.TableColumn>
            <C.TableColumn>R$ {item.valor}</C.TableColumn>
        </C.TableLine>
    );
}