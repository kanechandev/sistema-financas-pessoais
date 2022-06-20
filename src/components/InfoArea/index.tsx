import * as C from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';

type Props = {
    currentMonth: string;
}

export const InfoArea = ({ currentMonth }: Props) => {
    return (
        <C.Container>
            <C.MesArea>
                <C.MesArrow>⬅️</C.MesArrow>
                <C.MesTitulo>{formatCurrentMonth(currentMonth)}</C.MesTitulo>
                <C.MesArrow>➡️</C.MesArrow>
            </C.MesArea>
            <C.ResumoArea>

            </C.ResumoArea>
        </C.Container>
    );
}