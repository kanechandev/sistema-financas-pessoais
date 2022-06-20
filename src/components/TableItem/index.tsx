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
            <C.TableColumn>
                <C.Categoria color={categorias[item.categoria].cor}>
                    {categorias[item.categoria].titulo}
                </C.Categoria>
            </C.TableColumn>
            <C.TableColumn>{item.titulo}</C.TableColumn>
            <C.TableColumn>
                <C.Valor color={categorias[item.categoria].despesa ? 'red' : 'green'}>
                    R$ {item.valor}
                </C.Valor>
            </C.TableColumn>
        </C.TableLine>
    );
}