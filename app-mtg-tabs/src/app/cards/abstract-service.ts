import { Observable } from "rxjs";

export abstract class AbstractService<T, N> {

    url: string = "https://api.magicthegathering.io/v1/cards";

    abstract listar(): Observable<T[]>;

    abstract buscar(id: N): Observable<T>;

    abstract criar(objeto: T): Observable<T>;

    abstract atualizar(objeto: T): Observable<T>;

    abstract deletar(id: N): void;

}
