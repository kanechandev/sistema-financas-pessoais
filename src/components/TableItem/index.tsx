import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
    item: Item
}

export const TableItem = ({ item}: Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>...</C.TableColumn>
            <C.TableColumn>{item.categoria}</C.TableColumn>
            <C.TableColumn>{item.titulo}</C.TableColumn>
            <C.TableColumn>R$ {item.valor}</C.TableColumn>
        </C.TableLine>
    );
}