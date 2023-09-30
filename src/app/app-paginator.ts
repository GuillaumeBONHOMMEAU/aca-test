import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from "@angular/material/paginator";

@Injectable({
    providedIn: 'root'
})
export class FrenchPaginator extends MatPaginatorIntl {
    override itemsPerPageLabel = "Élèves par page :";
    override nextPageLabel = "Page suivante";
    override previousPageLabel = "Page précédente";
    override getRangeLabel = (p: number, ps: number, l: number) => `${p + 1} / ${Math.ceil(l / ps)}`;
}